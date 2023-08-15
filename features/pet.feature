Feature: Pet store
    
  Scenario Outline: Should be able to search for pet by status
    When I search for pets by status "<status>"
    Then all pets should have "<status>" status
    Examples:
      | status      |
      | available   |
      | pending     |
      | sold        |