// Shape class with fill choices.
class Shape {
    constructor() {
      this.color = "";
    }
    colorChoice(color) {
        this.color=color
    }
    }
// Circle parameters.  
class Circle extends Shape {
    render() {
        return `<circle cx="200" cy="190" r="160" fill="${this.color}" />;`
        }
 
    }
// Square parameters.   
class Square extends Shape {
        render() {
            return`<rect width="100%" height="100%" fill="${this.color}"/>`
        }
    }
// Triangle parameters.
    class Triangle extends Shape {
        render() {
            return`<polygon points="200,10 300,210 100,210" fill="${this.color}"/>;`
        }
    }
  
  module.exports = {Circle, Square, Triangle};