Feature: Iframe containing a WYSIWYG Editor

Scenario Outline: Testing the tiny mce editor iframe
Given the user is on <page> page
Then the user validates the existence of the iframe
And User clicks on the <actionButton> button
And User clicks on new document button
Then User enters text in mce editor
Examples:
    | page  | actionButton |
    | iframe| file         |