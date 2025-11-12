const input=require("readline-sync");
//create a empty map()


const student=new Map();
console.log("this is a empty file.."); ///empty file is created...

//now adding a values inside the empty file


student.set('name','mani');
student.set('rollno',138);
student.set('course','mern stack');
//now print the output

console.log(student); //output will give you name,roll and course..
//if we want a  one key or values
console.log(student.get('name'));//it wiill print name of the values not key because key is name..
console.log(student.delete('course'));
console.log(student);

//now use loop

for(let [name,rollno] of student ){
    console.log(name,rollno);
}
