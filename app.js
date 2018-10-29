//console.log("app starting");
const fs=require("fs");
const notes =require("./notes.js");
const _ = require('lodash');
const yargs=require('yargs');
const argv=yargs.argv;


var command = argv._[0];
// console.log('Command:',command);
// console.log('Process',process.argv);
//console.log('Yargs',argv)

if(command=='add'){
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        notes.logNote(note);
    }
    else{
        console.log("Note title taken");
    }
}
else if(command=='read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
       
    }else{
        console.log('Note not found');
    }
}
else if(command=='list'){
    notes.getAll(argv.title);
}
else if(command=='remove'){
   var noteRemoved= notes.removeNote(argv.title);
   var message =noteRemoved ? "Note was removed" : "Note not found";
   console.log(message);
}
else
console.log('Command not found');   
