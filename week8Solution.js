console.log('GOOD LUCK 👩‍💻 👨‍💻')
// Please focus

/* Q1:
Convert ES5 to ES6:
1) 
function sum(x,y){
  return x+y
}

2) 
function consoleReturn(x,y){
  console.log(x)
  return y
}

3) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age

4)
var food="Fried Chicken"
var color="Blue"
var object={
  food:food,
  color:color
}

5)
var object2={
  multi:function(a,b){
    return a * b
  }
}
*/

//1) WRITE YOUR CODE UNDER THIS LINE         
let sum = (x, y) => x + y

//2) WRITE YOUR CODE UNDER THIS LINE         
let consoleReturn = (x, y) => {
  console.log(x)
  return y
}

//3) WRITE YOUR CODE UNDER THIS LINE         
let name = "Alex"
let age = 25
let result = `My name is: ${name} and my age is: ${age}`

//4) WRITE YOUR CODE UNDER THIS LINE         
let food = "Fried Chicken"
let color = "Blue"
let object = {
  food,
  color
}

//5) WRITE YOUR CODE UNDER THIS LINE         
var object2 = {
  multi(a, b) {
    return a * b
  }
}

/* Criteria Q1
Out of 5:
1: For each correct answer (can give 0.25 0.5 0.75 also)
*/




/* Q2:
Using OOP
Create a class called Computer
that takes three parameter (OS,RAM,CPU)
and a method called doubleRAM the ram to double and return the new ram
and make three instantiations from it
computer1 => Windows,16,I7
computer2 => Linux,8,I5
computer3 => Mac,4,I3

Example: 
computer1
Output =>
{
  OS:'Windows',
  RAM:16,
  CPU:'I7',
  doubleRAM:f(){}
}
*/
// WRITE YOUR CODE UNDER THIS LINE         
class Computer {
  constructor(OS, RAM, CPU) {
    this.OS = OS;
    this.RAM = RAM;
    this.CPU = CPU;
  }
  doubleRAM() {
    this.RAM = this.RAM * 2;
    return this.RAM
  }
}
let computer1 = new Computer('Windows', 16, 'I7')
let computer2 = new Computer('Linux', 8, 'I5')
let computer3 = new Computer('Mac', 4, 'I3')

/* Criteria Q2
Out of 5:
1: Use class keyword (prefer to have the first character Upper Case "Computer")
1: Use a constructor and pass three parameter (OS, RAM, CPU this time).
1: Inside the constructor make three property with this key word (in this case OS, RAM, CPU).
1: Outside the constructor make a method doubleRAM and inside the method doublethe ram and return it.
1: make 3 instantiations from it (in this case computer1,computer2,computer3).
*/




/* Q3:
You have this two react components
please fix the errors inside them
*/

// App Component
import React, { Component } from 'react';
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eact again']
  };
  changeTitle = () => {
    this.setState({ title: 'AGGREGOR ZOLDYCK' });
  }
  render() {
    return (
      <div>
        <h1>App Component => {this.state.title}</h1>
        <button onClick={this.changeTitle}>Change Title</button>
        <Tasks tasks={this.todos} changeTitleFromChild={this.changeTitle} />
      </div>

    );
  }
}

// Tasks Component
import React, { Component } from 'react';

export default class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay = () => {
    this.setState({ day: 'Sun' })
  }

  render() {
    return (
      <div>
        <h1>Tasks Component => {this.state.day}</h1>
        <button onClick={this.changeDay}>Change Tasks State</button>
        <button onClick={this.props.changeTitleFromChild}>Change App State</button>
      </div>
    );
  }
}


/* Criteria Q3
Out of 10:
In the App Componenet (5 points):
1: Should have import React, { Component } from 'react';.
1: ChangeTitlte => should be an arrow function.
1: ChangeTitlte => this.setState({ title:'AGGREGOR ZOLDYCK' });.
1: Should have all the tags inside a <div> tag or <> tag in the return that inside render.
1: Should write {this.state.title}.

In the Tasks Componenet (5 points):
1: Should export default before the class.
1: ChangeTitlte => should be an arrow function.
1: ChangeTitlte => this.setState({ day:'Sun' });.
1: Should write {this.state.day}.
1: Should write {this.props.changeTitleFromChild} in the second button onClick event handler.
*/
