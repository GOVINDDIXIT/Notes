//console.log("starting notes.js");

const fs=require('fs');

var fetchNotes=()=>{
    try{
        var noteString=fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
        
      } catch(e) {
          return [];
      }
  };

  var saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  };

  var addNote=(title, body)=>{
    var notes=fetchNotes();
    var note= {
        title,
        body
    };

    var duplicateNotes = notes.filter((note)=>note.title==title);

    if(duplicateNotes.length==0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var removeNote=(title)=>{
    var notes=fetchNotes();
    //filter notes, removing the one with  title of argument
    var filterNotes=notes.filter((note)=>note.title!=title);
    //save new notes array
    saveNotes(filterNotes);

    return notes.length!=filterNotes.length;
}

var getAll=()=>{
    return fetchNotes();
};

var getNote=(title)=>{
    var notes=fetchNotes();
    var filterNotes=notes.filter((note)=>note.title==title);
    return filterNotes[0];
};
// var removeNote=(title)=>{
//     console.log('Removing note',title);
// };

var logNote=(note)=>{
    debugger;
    console.log("------*------*------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}


module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

// module.exports.age=21;

// module.exports.add=(a,b)=>{
//     return a+b;
// }

// module.exports.multiply=(a,b)=>{
//     return a*b;
// }

// module.exports.add=()=>{
//     console.log()
// }

