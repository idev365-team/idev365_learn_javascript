# Exercise 8

1. This exercise is a work-log (aka timesheet) application. Run the fixed version of the exercise ("ex8-fixed.html") in your browser and play around to see the expected behavior.

2. For this exercise, you should only need to make changes to "ex8.js", not the HTML or CSS. The changes are only a few spot changes to code, nothing major.

3. Using the OLOO pattern, wire `App`, `UI`, and `Helpers` objects together into a single virtually-composed object delegation context.

	- remove the `setupUI(..)` function; instead, using `Object.create(..)`, define a `UI` object that prototype-delegates to `Helpers`
	- using `Object.create(..)`, define an `Application` object (which prototype-delegates to `UI`) to hold the `App` oriented methods
	- change `setupApp()` (no argument needed now) to create (via `Object.create(..)`) and return an object instance that prototype-delegates to `Application`; this object will be assigned to `App`, and hold all the data
	- instead of `UI.init()`, call `App.init()` so the `this` context (where all data is stored) for all subsequent method calls will be `App`
	- hints:
		- all variable and function accesses that relied on lexical scope before now rely on `this` context
		- `submitNewWorkEntry(..)` needs to be hard-bound to maintain proper `this` across event calls
		- the previous circular method call references between `App` and `UI` are replaced with delegated method calls via `this` context

4. **BONUS:**
	- define and use a helper (e.g. `makeDelegate(..)`) that creates an object instance that's prototype-delegated to another object, and which copies properties/methods onto the new instance
	- write a set of tests that independently mocks each of `App`, `Application`, `UI`, and `Helpers` objects in the prototype-delegation chain to test all logic
	- write out a detailed analysis, in your own words, of the pros/cons of this OLOO-style approach compared to the module/object/prototype approaches used in the previous exercises (5, 6, and 7).
