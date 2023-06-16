# Logo-Manifesting
Logo manifesting with a command-line application for generating custom SVG logos. Create logos with different shapes and text with adjustable colors.

Table of Content
* Installation
* Usage
* Run Testing

Installation 
Clone this repository:

git clone https://github.com/yourusername/svg-logo-maker.git
cd Logo-Manifesting
npm install

Usage
To run the SVG Logo-Manifesting application, execute the following command:

npm init -y
npm i
node index.js

You will be prompted for the following information:

Text (up to 10 characters)
Text color (keyword or hexadecimal)
Shape (circle, triangle, or square)
Shape color (keyword or hexadecimal)
Upon entering the required information, the application will generate an logo.svg file in the project directory. Open the file in a web browser to view your custom logo.

Testing
This application uses Jest for testing. To run the tests, execute the following command:

npm run test

The tests cover the generateLogo function, shape creation, and user input handling in the colorChoice function.

Node.js and SVG (Scalable Vector Graphics) defines vector-based graphics in XML format. program that generates logo using circle, square, or triangle user choices. I also used jest for testing and inquirer. User choices for text and shape color. Save files as logo.svg file. Fixed triangle parameters to fit initials inside. Uses both common color names and hexadecimal. Thank you and hope you enjoy!