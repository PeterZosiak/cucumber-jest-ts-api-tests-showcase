Feature: Pet store
  As a pet store owner
  I want to be able to manage my pets in the store https://petstore.swagger.io

  Background: Fust for fun
    
  Scenario Outline: Should be able to search for pet by status
    When I search for pets by status "<status>"
    Then all pets should have "<status>" status
    Examples:
      | status      |
      | available   |
      | pending     |
      | sold        |


  Scenario: Should not be able to search for pet by invalid status
    When I search for pets by status "invalid-status"
    Then all pets should be empty


  Scenario: Should be able to search for pet by Id
    When I search for pet by Id 10
    Then the expected pet with Id 10 should be returned
    And the pet should have name "doggie" and status "available" and category "sample string" and id 10


  Scenario: Should not be able to search for pet by invalid Id
    When I search for pet by invalid Id -1
    Then I should get an error with message "Pet not found"


  Scenario: Should be able create new pet
    When I create a new pet with name "pz-test" and status "available" and category "showcase"
    Then the pet should have name "pz-test" and status "available" and category "showcase"

  
  # # ====================================================
  # #         Next steps are not implemented
  # #  I will just write a tests to cover the scenarios
  # # You can comment out the tests to have green resuls
  # # ====================================================
  
  
  Scenario: Should be able to see Validation error message when creating pet with invalid data
    When I create a new pet with name "pz-test" and status "invalid" and category "showcase"
    Then I should get an error with message "Invalid input"

  
  Scenario: Should be able to update existing pet
    When I create a new pet with name "pz-test" and status "available" and category "showcase"
    And I update the pet with name "pz-test" and status "pending" and category "showcase"
    Then the pet should have name "pz-test" and status "pending" and category "showcase"


  Scenario: Should be able to see Pet not found error message when updating non existing pet
    When I update the pet with id -1 with name "pz-test" and status "pending" and category "showcase"
    Then I should get an error with message "Pet not found"


  Scenario: Should be able to see Validation error message when updating existing pet with invalid data
    When I create a new pet with name "pz-test" and status "available" and category "showcase"
    And I update the pet with name "pz-test" and status "invalid" and category "showcase"
    Then I should get an error with message "Invalid input"


  Scenario Outline: Should be able to upload image for pet
    When I create a new pet with name "pz-test" and status "available" and category "showcase"
    And I upload image "<image>" for pet with name "pz-test"
    Then the pet should have name "pz-test" and status "available" and category "showcase" and image "<image>"
    Examples:
      | image      |
      | dog.jpg    |
      | cat.jpg    |
      | bird.jpg   |


  Scenario: Should be able to delete existing pet
    When I create a new pet with name "pz-test" and status "available" and category "showcase"
    And I delete the pet with name "pz-test"
    Then I should get an error with message "Pet not found"
    