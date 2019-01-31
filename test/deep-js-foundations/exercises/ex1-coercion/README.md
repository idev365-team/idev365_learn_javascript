# Exercise 1

1. This exercise is a work-log (aka timesheet) application. Run the fixed version of the exercise ("ex1-fixed.html") in your browser and play around to see the expected behavior.

2. Now, run "ex1.html" in your browser, and observe how it's broken (make sure to have your console open!). Familiarize yourself with the code in "ex1.js". Notice that some fake data (list of projects) is being pre-populated.

	For this exercise, you should only need to make changes to "ex1.js", not the HTML or CSS. You should not need to create new functions or reorganize significant chunks of code for this exercise; only a few spot changes and a few lines of code are necessary.

3. There are several things broken in "ex1.js", relating to value types and coercions between them. Some things to look out for:

	- are there strings that need to become numbers, or vice versa?
	- are there places where numeric addition is happening with `null` / `undefined` values?
	- are there places (hint: formatting) where the order of operations is incorrect based on value type changes?

4. The validation logic in `validateWorkEntry(..)` should be filled in (look for the `// TODO` comment). The validation rules should be as follows:

	- "description" must be at least 5 characters long
	- "minutes" must be a non-empty value (ignoring leading/trailing whitespace), a number from `0` to `600` (inclusive); in other words, `0` is a valid input for "minutes", but leaving "minutes" blank or typing "one" is invalid

5. **BONUS:** How would you write simple tests for the behavior of this application?
