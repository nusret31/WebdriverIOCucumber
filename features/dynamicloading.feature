Feature: Verifying dynamic loading functionality

Scenario Outline: Testing 1st dynamic loading page
Given the user is on <page> page
Then the user clicks on dynamic loading page number <option>
And the user does actions for the first dynamic page
Examples:
| page            | option |
| dynamic_loading | 1      |


Scenario Outline: Testing 2nd dynamic loading page
Given the user is on <page> page
Then the user clicks on dynamic loading page number <option>
And the user does actions for the second dynamic page
Examples:
| page            | option |
| dynamic_loading | 2      |