# Exercise 5

1. This exercise is a work-log (aka timesheet) application. Run the fixed version of the exercise ("ex5-fixed.html") in your browser and play around to see the expected behavior.

2. For this exercise, you should only need to make changes to "ex5.js", not the HTML or CSS. The changes here will involve a fair bit of reorganization and restructuring of code, but you don't need to significantly new logic (or features).

	**Note:** This exercise is broken into 3 parts, and the solution files that correspond are "ex5-fixed.js", "ex5-fixed-b.js", and "ex5-fixed-c.js", respectively. Make sure you allow yourself enough time to get through all 3 parts. If you find yourself stuck too long on one part, grab the solution code from the appropriate file and use it as the starting point to move onto the next part of the exercise.

	Also, you'll most likely want to track these changes in separate files ("ex5-1.js", "ex5-2.js", etc), so that you'll be able to independently compare each of your solutions to the provided solution files.

3. **PART 1:** (~5 minutes)

	The code for our application so far is all hanging out in the global namespace as a bunch of variables and functions. This is messy. We should use what we learned about the module pattern to clean this up!

	- create a singleton module instance for your application, named `App`, wrapped around the all the variables and functions in "ex5.js", with a public API including the following methods:
		- `init()` (reference to `initUI()`)
		- `addProject(..)`
		- `addWorkToProject(..)` (only exposed for now so it's easier to test our code)
	- hints:
		- the call to `App.init()` and the hard-coded data (calls to `App.addProject(..)`) should remain external to the module definition

4. **PART 2:** (~15 minutes)

	The `App` module from Part 1 is a decent start to organizing our application. But all the data operations and the UI (DOM, etc) operations are all mixed together. Also, there are a few helpers which are stateless and could pulled out into a separate object/namespace. We should clean this up some more!

	- create a simple namespace object called `Helpers`, and move the following to it:
		- `validateWorkEntry(..)`
		- `formatWorkDescription(..)`
		- `formatTime(..)`
		- the 3 related "constants" (as properties)
	- create another module instance to move the UI/DOM related code to, named `UI`, by calling a module factory function (e.g. `setupUI()`), with (only) the following API methods:
		- `init()` (reference to `initUI()`)
		- `addProjectToList(..)`
		- `addProjectSelection(..)`
		- `addWorkEntryToList(..)`
		- `updateProjectTotalTime(..)`
		- `updateWorkLogTotalTime(..)`
	- `App` should now have (only) the following public API methods:
		- `addProject(..)`
		- `addWorkToProject(..)`
		- any methods (e.g. `getWorkEntryCount(..)` and `getWorkEntryLocation(..)`) necessary to expose minimal information about the data model to `UI` so insertion of DOM elements in the proper location is possible
	- change `App` to be created NOT as a singleton as before, but with a module factory function (e.g. `setupApp(..)`), which takes the `UI` instance as an argument; we still only have one instance of this module, but we could in theory (e.g. for testing purposes) want multiple instances at some point
	- separate any logic that deals with UI/DOM elements into `UI` methods, but leave all data model related logic in `App`'s methods
	- hints:
		- `UI` should track all DOM elements it creates for projects and work entries, stored by their respective Ids, instead of storing those element references in the data model
		- only pass the minimal data necessary (i.e. an entity Id) between `UI` and `App` methods; maintain the abstracted separation as much as possible
		- method(s) in `App` will need to call method(s) in `UI`, and vice versa; this circular relationship is intentional in our architecture
		- think carefully about the right place to store each piece of state information (i.e. total time for a project, total overall time, etc)

5. **PART 3:** (~10 minutes)

	By now, you should be feeling more confident about using the module pattern to organize your code cleanly. But there's one more level of abstraction we can create that will help even more: we can create a module instance (with a simple API!) for each project entry in the data model. That way, the details of how a project tracks its data do not pollute the rest of the application logic.

	- create a module factory function for projects, named `Project(..)`, which takes a single argument `description`
	- each project instance should now include (only) the following public API methods:
		- `getId()`
		- `getDescription()`
		- `getTime()`
		- `addWork(..)`
		- `getWorkEntryCount()`
		- `getWorkEntryLocation(..)`
	- move logic from `App` into `Project` that relates to managing the internal state of each project; `App` should now only store and use module instances of `Project(..)`
	- similarly, `UI`'s methods should now only be passed `Project(..)` instances
	- hints:
		- think about the simplest way to store and manage project state information
		- think about the parts of `App.addWorkToProject(..)` that should now be moved to `addWork(..)` on the project instance, and how to keep these two pieces separate

6. **BONUS:** Consider how the code in `UI` is hard-coded to very specific DOM elements and structure; this creates some brittleness to future HTML/CSS changes. How can you refactor the `setupUI` function / `UI` instance to be more configurable and less brittle?
