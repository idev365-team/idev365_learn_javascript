var Helpers = {
	maxVisibleWorkDescriptionLength: 20,
	minWorkDescriptionLength: 5,
	maxWorkTime: 600,

	validateWorkEntry(description,minutes) {
		if (description.length < this.minWorkDescriptionLength) return false;
		if (
			/^\s*$/.test(minutes) ||
			Number.isNaN(Number(minutes)) ||
			minutes < 0 ||
			minutes > this.maxWorkTime
		) {
			return false;
		}

		return true;
	},
	formatWorkDescription(description) {
		if (description.length > this.maxVisibleWorkDescriptionLength) {
			description = `${description.substr(0,this.maxVisibleWorkDescriptionLength)}...`;
		}
		return description;
	},
	formatTime(time) {
		var hours = Math.floor(time / 60);
		var minutes = time % 60;
		if (hours == 0 && minutes == 0) return "";
		if (minutes < 10) minutes = `0${minutes}`;
		return `${hours}:${minutes}`;
	}
};


// ****************************************************************
// ****************************************************************


var UI = Object.assign(Object.create(Helpers),{
	projectTemplate: "<div class='project-entry'><h3 class='project-description' rel='js-project-description'></h3><ul class='work-entries' rel='js-work-entries'></ul><span class='work-time' rel='js-work-time'></span></div>",
	workEntryTemplate: "<li class='work-entry'><span class='work-time' rel='js-work-time'></span><span class='work-description' rel='js-work-description'></span></li>",

	init() {
		this.projectElements = {};
		this.workElements = {};

		this.$workEntryForm = $("[rel*=js-work-entry-form");
		this.$workEntrySelectProject = this.$workEntryForm.find("[rel*=js-select-project]");
		this.$workEntryDescription = this.$workEntryForm.find("[rel*=js-work-description]");
		this.$workEntryTime = this.$workEntryForm.find("[rel*=js-work-time]");
		this.$workEntrySubmit = this.$workEntryForm.find("[rel*=js-submit-work-entry]");
		this.$totalTime = $("[rel*=js-total-work-time]");
		this.$projectList = $("[rel*=js-project-list]");

		this.$workEntrySubmit.on("click",this.submitNewWorkEntry.bind(this));
	},

	submitNewWorkEntry() {
		var projectId = this.$workEntrySelectProject.val();
		var description = this.$workEntryDescription.val();
		var minutes = this.$workEntryTime.val();

		if (!this.validateWorkEntry(description,minutes)) {
			alert("Oops, bad entry. Try again.");
			this.$workEntryDescription[0].focus();
			return;
		}

		this.$workEntryDescription.val("");
		this.$workEntryTime.val("");
		this.addWorkToProject(Number(projectId),description,Number(minutes));
		this.$workEntryDescription[0].focus();
	},

	addProjectToList(project) {
		var projectId = project.getId();
		var projectDescription = project.getDescription();

		var $project = $(this.projectTemplate);
		$project.attr("data-project-id",projectId);
		$project.find("[rel*=js-project-description]").text(projectDescription);
		this.$projectList.append($project);
		this.projectElements[projectId] = $project;
	},

	addProjectSelection(project) {
		var projectId = project.getId();
		var projectDescription = project.getDescription();

		var $option = $("<option></option>");
		$option.attr("value",projectId);
		$option.text(projectDescription);
		this.$workEntrySelectProject.append($option);
	},

	addWorkEntryToList(project,workEntryData) {
		var projectId = project.getId();

		var $projectEntry = this.projectElements[projectId];
		var $projectWorkEntries = $projectEntry.find("[rel*=js-work-entries]");

		// create a new DOM element for the work entry
		var $workEntry = $(this.workEntryTemplate);
		$workEntry.attr("data-work-entry-id",workEntryData.id);
		$workEntry.find("[rel*=js-work-time]").text(this.formatTime(workEntryData.time));
		this.setupWorkDescription(workEntryData,$workEntry.find("[rel*=js-work-description]"));

		this.workElements[workEntryData.id] = $workEntry;

		// multiple work entries now?
		if (project.getWorkEntryCount() > 1) {
			{ let adjacentWorkEntryId, insertBefore;
				[ adjacentWorkEntryId, insertBefore ] = project.getWorkEntryLocation(workEntryData.id);

				if (insertBefore) {
					this.workElements[adjacentWorkEntryId].before($workEntry);
				}
				else {
					this.workElements[adjacentWorkEntryId].after($workEntry);
				}
			}
		}
		// otherwise, just the first entry
		else {
			$projectEntry.addClass("visible");
			$projectWorkEntries.append($workEntry);
		}
	},

	setupWorkDescription(workEntryData,$workDescription) {
		$workDescription.text(this.formatWorkDescription(workEntryData.description));

		if (workEntryData.description.length > this.maxVisibleWorkDescriptionLength) {
			$workDescription
				.addClass("shortened")
				.on("click",function onClick(){
					$workDescription
						.removeClass("shortened")
						.off("click",onClick)
						.text(workEntryData.description);
				});
		}
	},

	updateProjectTotalTime(project) {
		var projectId = project.getId();
		var projectTime = project.getTime();

		var $projectEntry = this.projectElements[projectId];
		$projectEntry.find("> [rel*=js-work-time]").text(this.formatTime(projectTime)).show();
	},

	updateWorkLogTotalTime(time) {
		if (time > 0) {
			this.$totalTime.text(this.formatTime(time)).show();
		}
		else {
			this.$totalTime.text("").hide();
		}
	}
});


// ****************************************************************
// ****************************************************************


function setupApp() {
	var app = Object.create(Application);
	app.projects = [];
	app.totalTime = 0;

	return app;
}

var Application = Object.assign(Object.create(UI),{
	addProject(description) {
		var project = setupProject(description);
		this.projects.push(project);

		this.addProjectToList(project);
		this.addProjectSelection(project);
	},

	findProjectEntry(projectId) {
		for (let i = 0; i < this.projects.length; i++) {
			if (this.projects[i].getId() === projectId) {
				return this.projects[i];
			}
		}
	},

	addWorkToProject(projectId,description,minutes) {
		this.totalTime = (this.totalTime || 0) + minutes;

		var project = this.findProjectEntry(projectId);

		// create a new work entry for the list
		var workEntryData = { description: description, time: minutes };

		project.addWork(workEntryData);

		this.addWorkEntryToList(project,workEntryData);
		this.updateProjectTotalTime(project);
		this.updateWorkLogTotalTime(this.totalTime);
	}
});


// ****************************************************************
// ****************************************************************


function setupProject(description) {
	var project = Object.create(Project);
	project.projectId = Math.round(Math.random()*1E4);
	project.description = description;
	project.work = [];
	project.time = 0;
	return project;
}

var Project = {
	getId() {
		return this.projectId;
	},

	getDescription() {
		return this.description;
	},

	getTime() {
		return this.time;
	},

	addWork(workEntryData) {
		workEntryData.id = this.work.length + 1;
		this.work.push(workEntryData);

		this.time = (this.time || 0) + workEntryData.time;

		// multiple work entries now?
		if (this.work.length > 1) {
			// sort work entries in descending order of time spent
			this.work.sort(function sortTimeDescending(a,b){
				return b.time - a.time;
			});
		}
	},

	getWorkEntryCount() {
		return this.work.length;
	},

	getWorkEntryLocation(workEntryId) {
		// find where the entry sits in the new sorted list
		var entryIdx;
		for (let i = 0; i < this.work.length; i++) {
			if (this.work[i].id == workEntryId) {
				entryIdx = i;
				break;
			}
		}

		// insert the entry into the correct location in DOM
		if (entryIdx < (this.work.length - 1)) {
			return [ this.work[entryIdx + 1].id, /*insertBefore=*/true ];
		}
		else {
			return [ this.work[entryIdx - 1].id, /*insertBefore=*/false ];
		}
	}
};


// ****************************************************************
// ****************************************************************


var App = setupApp(UI);
App.init();


// hard coding some initial data
App.addProject("client features");
App.addProject("overhead");
App.addProject("backlog");
