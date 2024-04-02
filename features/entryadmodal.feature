Feature: Testing modal

Scenario Outline: Verifying entry ad modal functionality
Given the user is on <page> page
Then the modal is displayed
Examples:
    | page    |
    | entry_ad|