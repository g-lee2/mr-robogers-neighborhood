Describe: returnNumber()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: returnNumber(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's inputted number and replace any 1s with "Beep!" (starting with just single digits)"
Code: returnNumber(5);
Expected Output: [0, "Beep!", 2, 3, 4, 5]

Test: "It should now return an array of numbers from 0 to the user's inputted number and replace any 2s with "Boop!"
Code: returnNumber(5);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]

Test: "It should now return an array of numbers from 0 to the user's inputted number and replace any 3s with "Won't you be my neighbor?"
Code: returnNumber(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]
