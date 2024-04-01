Feature:  Second window/tab functionality

Scenario Outline: Checking 2nd tab/window component
Given the user is on <page> page
Then the user clicks on click here link
Then the user is redirected to a different page
Examples:
    | page   | 
    | windows|