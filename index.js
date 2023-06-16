//Requirements amd classes
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const fs = require('fs');
const util = require('util');
const {Circle, Square, Triangle} = require('./lib/shape');
const { error } = require('console');
const { ifError } = require('assert');

//Input questions for shape, three letters and fill.
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (up to 3 characters):',
      validate: text => {
        if (text.length > 3) {
          return 'Text must be up to 3 characters only';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color or hexadecimal:',
  
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['Circle', 'Square', 'Triangle']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color or hexadecimal:',
   
    }
  ];
  
// svgString += `${anwserShape}`
//Generate logo
function generateLogo(text, textColor, shape, shapeColor) {
    let shapeSvg;
    switch (shape) {
      case 'Circle':
        shapeSvg = new Circle();
        break;
      case 'Square':
        shapeSvg = new Square();
        break;
      case 'Triangle':
        shapeSvg = new Triangle();
        break;
    }
    shapeSvg.colorChoice(shapeColor)
    return `<svg width="325" height="310" xmlns="http://www.w3.org/2000/svg">
      ${shapeSvg.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>
    </svg>`;
  }

  inquirer.prompt(questions).then((answers)=>{
    console.log(answers)
    var template = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor)
    console.log(template)
    fs.writeFile('./dis/logo.svg',template,(error)=>{
      if (error) throw error;
      console.log('successful')
    })
  })