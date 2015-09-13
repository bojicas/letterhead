@server2
Feature: Login Page

  As a new user
  I want to login in Letterhead
  So that I can start working with it

  @dev
  Scenario: New user logs in with default credentials
    Given I am a new user
    When I navigate to "/"
    And I click on login dropdown list
    And I fill in "login username or email" with "admin"
    And I fill in "login password" with "admin"
    And I click on sign in button
    Then I should see "Admin" within "admin menu"
