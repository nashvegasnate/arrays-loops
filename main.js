
const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join();
const string1ToArray = string1.split(',');
//console.log(string1);
//console.log(string1ToArray);

// .push() & .pop()
/*array11.pop();
console.log(array1);
array1.push('cat');
console.log(array1);
*/

//console.log("CONNECTED")

const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
//console.log(students.length);

//console.log(students[students.length - 1]);
students[0] = 'Matthew';
//console.log(students);
//replaced Katy with Matthew

const valuePrinter = (array, index) => {
  return array[index];
}
//console.log(valuePrinter(students, 2));
//returns Sean

// console.log([1,2,3,4,5,6], 4);
// returns (6) [1,2,3,4,5,6] 4

// const classmates = ['Greg', 'Jim', 'Mandy'];
  // console.log(classmates.includes('Greg'));
// output: true

//ARRAYS WITH LOOPS
//const ec14Instructors = ['Aja', 'Trinity', 'Dr.T', 'Discussion Tickets'];
//for (let i = 0; i < ec14Instructors.length; i++) {
//}  
//console.log(ec14Instructors[i])
  //output: Aja Trinity Dr. T Discussion TIckets

  // ARRAYS, LOOPS, FUNCTIONS

  const colors = ['red', 'orange', 'yellow', 'green', 'green', 'blue', 'purple'];

  const colorLoop = () => {
     let domString = "";

     for (let i =0; i < colors.length; i++) {
       domString += `<h1>${colors[i]}</h1>`
     }

     console.log(domString);

  }

  // colorLoop();

  const instructors = [
    { first: 'Trinity', last: 'Christiana' },
    { first: 'Aja', last: 'Washington' },
    { first: 'Teresa', last: 'Vasquez' }
  ];

  const nameLoop = () => {
    let domString = '';

    for (let i = 0; i < instructors.length; i++) {
      domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
    }

  console.log(domString);
    
  }
  nameLoop();

