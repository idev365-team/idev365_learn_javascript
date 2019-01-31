# Exercise 4

1. This exercise is a work-log (aka timesheet) application. Run the fixed version of the exercise ("ex4-fixed.html") in your browser and play around to see the expected behavior.

2. For this exercise, you should only need to make changes to "ex4.js", not the HTML or CSS. You should only need to add a few lines of code.

3. A feature has been been partially added to this application, but you need to complete it:

	- To keep the UI clean, work descriptions are already visually shortened if the exceed a certain length. However, a shortened description should be able to expand to its full length if desired. The cursor should provide a visible hint that a shortened description can be clicked to expand it.
	- There are of course multiple ways you could implement such a feature. The intent here is specifically for your solution to **demonstrate a usage of closure**.

4. A new function `setupWorkDescription(..)` has been added, with a `// TODO` comment marking where your code should go. Using the same click handler pattern found in `initUI()`, add a click handler that:

	- removes the visual hint of click-to-expand (hint: `removeClass(..)`)
	- removes the click handler (hint: `off(..)`)
	- expands the description (hint: `text(..)`)

5. **BONUS:** There are at least two other ways to implement this feature without closure. Experiment with alternate implementations. What are the pros/cons of these other approaches?
