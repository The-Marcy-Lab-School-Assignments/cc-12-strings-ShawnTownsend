//Algorithm
//Step 1: Declare a function named reverseString that takes a parameter.
//Step 2: Declare a variable for the new string.
//Step 3: Create condition (for loop) for string argument that reverses string
//Step 4: Return string

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
