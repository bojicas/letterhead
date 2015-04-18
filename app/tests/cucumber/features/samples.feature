Feature: One-liner description of this features

  As a [role]
  I want [feature]
  So that [benefit]

  The story above is to set context for the reader. It doesn't actually have any impact on the test
  itself. The phrases inside the scenarios are ties to test code using regex, which you can see in
  /tests/features/step_definitions/steps.js

  Scenario: for parallelism
    Given I am on the home page
    When I navigate to "/"
    Then I should see the title of "Letterhead"
