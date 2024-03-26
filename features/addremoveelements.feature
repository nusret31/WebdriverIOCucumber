Feature: Test Add/Remove Element Functionality

Scenario Outline: User clicks on add and delete buttons
Given user is on add or remove elements page
Then user clicks on add button <count> times
And user clicks on delete button <count> times
Examples:
|count|
|5|