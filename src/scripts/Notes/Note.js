import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";
import { NoteEditForm } from "./NoteEdit.js";

export const Note = (note) => {
    
return `<div id="noteCard"click event>${note.date}<br>
        ${note.notes}</div><br>
        <button class="del" id="deleteNote--${note.id}">Delete Note</button>
        <button class="edit" id="edit--${note.id}">Edit Note</button>
        `
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteNote")) {
    const idToDelete = eventObject.target.id.split("--")[1]

        // console.log(idToDelete)

    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
        deleteNote(idToDelete)
        .then(NoteList)
}
});



// const eventHubTwo = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("edit--")) {
    const noteId = +eventObject.target.id.split("--")[1]
    NoteEditForm(noteId);
    }
})
