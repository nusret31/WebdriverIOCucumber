Feature: Vertical slider

Scenario Outline: Checking the horizontal slider functionality
Given the user is on <page> page
Then the user slides the item via keyboard <presskeytimes> times
Examples:
    | page             | presskeytimes|
    | horizontal_slider| 4  |