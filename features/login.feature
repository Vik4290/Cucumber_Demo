Feature: Login
    In order to perform successful Login
    As a user
    I have to enter valid username and Password

    Background:
        Given User navigate to Amazon.com
        When User validate Homepage Title
    
    @dev
    Scenario Outline: Scenario Outline name: In order to verify login to Amazon    
        Then User enter "<Username>" Username
        Then User enter "<Password>" Password
        Then User loggin should "<Logintype>" successfully login

    Examples:
    | Username | Password | Logintype |
    | valid    | valid    | be        |
    | Invalid  | Invalid  | not       |    