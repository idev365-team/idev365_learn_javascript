# Exercise 7

1. This exercise is a work-log (aka timesheet) application. Run the fixed version of the exercise ("ex7-fixed.html") in your browser and play around to see the expected behavior.

2. For this exercise, you should only need to make changes to "ex7.js", not the HTML or CSS. The changes are only a few spot changes to code, nothing major.

3. Change `Project(..)` from being a module factory function to being a `prototype`-style constructor function. All project data should be stored on the `this` instances and all methods should "inherited" from the `Project.prototype`.

4. **BONUS:** How might you move `sortTimeDescending(..)` to `Helpers`, and then have `Project` inherit from `Helpers`? Would there be any benefits to restructuring `App` or `UI` to be `prototype`-oriented as well?
