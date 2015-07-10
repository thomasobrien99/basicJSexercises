# JavaScript Functions - part 1

1. Create a blank, valid HTML5 document.
1. Create a JavaScript file
1. Solve each of the given problems, creating a function that returns the value. Then output the result of the function to the JavaScript console.

### Example

```javascript
function test(str) {
  return "test" + str
}

console.log(test("ing"))
```

## Problems

1. Write a function called `discountPercentage` that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
1. Write a function called `stringCapitalize` that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual work is separated by only one space.
1. Write a function called `evenNumbers` that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.

1. **Bonus**: Write a function called `oddNumbers` that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
