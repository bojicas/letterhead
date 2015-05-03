@server1
Feature: Main Page

  As a new user
  I want to access Letterhead
  So that I can start working with it

  Scenario: New user visits main page
    Given I am a new user
    When I navigate to "/"
    Then I should see the title "Letterhead"
