# Skrypt testowy w stylu Gherkin, który opisuje proces wyszukiwania i zakupu produktu w sklepie internetowym Allegro.pl oraz waliduje zakup:

Feature: Wyszukiwanie i zakup produktu w sklepie Allegro.pl

  As a user of Allegro.pl
  I want to search for and purchase a product
  So that I can validate the successful purchase

 1) Scenario: Wyszukiwanie i zakup produktu na Allegro.pl

    Given that I am on the Allegro.pl homepage
    When I enter "smartphone" in the search bar
    And I click on the search button
    Then I should see a list of search results for "smartphone"
    
    When I filter the results to show only "new" products
    And I sort the results by "price:lowest first"
    And I select the first product in the list
    Then I should see the product details page
    
    When I click on the "Buy Now" button
    And I log in with valid credentials
    And I confirm my delivery address and payment method
    And I finalize the purchase
    Then I should see a confirmation page with the order number
    And I should receive a confirmation email with the order details
    
2)  Scenario: Wyszukiwanie produktu, który nie istnieje

    Given that I am on the Allegro.pl homepage
    When I enter "notExistingProduct123" in the search bar
    And I click on the search button
    Then I should see a message indicating that no results were found

3)  Scenario: Przerwanie procesu zakupu

    Given that I have selected a product and am on the product details page
    When I click on the "Buy Now" button
    And I log in with valid credentials
    And I choose to cancel the purchase process before finalizing
    Then I should be redirected back to the product details page
    And the product should not be added to my purchase history
