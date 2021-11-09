import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";

export const Note = (note) => {
    
return `<div id="noteCard"click event>${note.date}<br>
        ${note.notes}</div><br>
        <button class="del" id="deleteNote--${note.id}">Delete Note</button><br>`
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteNote")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    // ---------- Write your code here -------------//
        // console.log(idToDelete)

    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
        deleteNote(idToDelete)
        .then(NoteList)
}
});

