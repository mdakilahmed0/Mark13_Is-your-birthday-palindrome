# Mark 13: Is you birthday a palindrome?

    a.  It's an simple app created to check the birthday of a user is palidrome or not.
    b.  It takes the user date of the birthday and conver into string and checked for 6 types date formats.
    c.  Six types of date format of the user date of is converted into: mmddyyyy, ddmmyyyy, yyyymmdd, mmddyy, ddmmyy, and yyddmm.
    d.  And check for whether, it's a palindrome or not.
    e.  If it's palindrome, it's congratulate the user.
    f.  Otherwise it'll show the user which is the nearest upcoming palindrome birthdate and missed it by how many days.

## Tech Stack Used:

    HTML, CSS, VanillaJs

## Lesson Outcome and how it's implemented

    Outcome:

        *   Writing of modular functional codes
        *   In-build split(), reverse(), join() methods
        *   convert number to string (typeCasting)

    Implementation:
        *   Selection of elemetns using querySelector
        *   Reverse the string function using split().reverse().join() methods
        *   Palindrome check functions, taking the 6 different variation of the date formats and check for palindrome using the helper functions
        *   Wrote the function to find the next palindrome date which nearest in the future date
        *   Link the clickHandler function to the palindrome check button