Feature: End to End E-commerce Validation
@Regression
Scenario: E-commerce products delivery
Given I m on E-commerce page
When I login to the application
And I add items to the cart and checkout
Then Validate the total price limit
And Select the country submit and verify Success Message

@Smoke
Scenario Outline: E-commerce products delivery
Given I m on E-commerce page
When I login to the application portal
|username           |password|
|rahulshettyacademy |learning|
And I add items to the cart and checkout
Then Validate the total price limit
And Select the country submit and verify Success Message

@Sanity
Scenario Outline: E-commerce products deliveries    
Given I m on Home page
When I login to the application portal
|username           |password|
|rahulshettyacademy |learning|
And I add items to the cart and checkout
Then Validate the total price limit
And Select the country submit and verify Success Message