//Convert JSON object into string
// var obj={
//     name:'Govind'
// };
// var StringObj=JSON.stringify(obj);
// console.log(typeof StringObj);
// console.log(StringObj);


//Convert String into Json object
// var personString ='{"name":"Govind","age":25}';
// var person=JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs=require('fs');

var originalNote={
    title:'Some Title',
    body: 'Some Body'
};

var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var NoteString=fs.readFileSync('notes.json');
var note=JSON.parse(NoteString);
console.log(typeof note);
console.log(note.title);
console.log(note.body);