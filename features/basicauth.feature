Feature: Testing basic auth functionality

Scenario Outline: Verifying basic auth functionality for heroku website
Given the user bypasses the basic auth
Then the user waits for a bit
#Then this <message> is displayed
Example:
| message |
|Congratulations! You must have the proper credentials.|