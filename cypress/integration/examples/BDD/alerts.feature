Feature: Handling Alerts

  Scenario: Handle JavaScript Alerts
    Given I visit the "Automation Practice" page
    When I click the "Alert" button
    Then I should see an alert message "Hello , share this practice page and share your knowledge"
    
  Scenario: Handle JavaScript Confirm Alerts
    Given I visit the "Automation Practice" page
    When I click the "Confirm" button
    Then I should see a confirm message
    And I click on Cancel button
