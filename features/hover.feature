Feature: Hover functionality

Scenario Outline: Checking the heroku hover functionality
Given the user is on <page> page
Then the user validates header and paragraph
Then user hovers over the images

Examples:
    | page   |
    | hovers |