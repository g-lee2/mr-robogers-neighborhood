Describe: returnNumber()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: returnNumber(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's inputted number and replace any 1s with "Beep!" (starting with just single digits)"
Code: returnNumber(5);
Expected Output: [0, "Beep!", 2, 3, 4, 5]

Test: "It should now return an array of numbers from 0 to the user's inputted number and replace any 2s with "Boop!" (starting with just single digits)"
Code: returnNumber(5);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]

Test: "It should now return an array of numbers from 0 to the user's inputted number and replace any 3s with "Won't you be my neighbor?" (starting with just single digits)"
Code: returnNumber(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "It should now replace double digits with 1 included with "Beep!"
Code: returnNumber(11);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]











# _mr-robogers-neighborhood_

#### By _**Grace Lee**_

#### _A simple website that showcases a message by Mr. Roboger based on inputted numbers_

#### [Click here]() to check out my GitHub pages. 

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_

## Description

_It is a website where a user inputs numbers to recieve a message from Mr. Roboger. Depending on the inputted number, if it includes the number 1, it would be replaced with a "Beep!". If it includes the number 2, it would be replaced with a "Boop". And if it includes the number 3, it would be replaced with a "Won't you be my neighbor?". These messages appear regardless of if the number is double digits. As long as it contains 1, 2, or 3, those messages will appear. However, if two or more of the numbers 1, 2, 3 appear, the number that is the largest's message will appear. For example, if the inputted number is 23, the message "Won't you be my neighbor?" will appear, as 3 is the larger number of the two. 

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Go into this project's directory on your desktop._
* _Find and open the index.html in your browser._
* _Or simply click on the GitHub pages link to view in browser._

## Known Bugs

* _No known bugs as of now_

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _2022_ _Grace Lee_