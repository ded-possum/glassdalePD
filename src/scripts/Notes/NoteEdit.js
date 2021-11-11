import { noteData, updateNote } from "./NoteDataProvider.js"
import { Note } from "./Note.js";
import { NoteList } from "./NoteList.js";
// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector("#contentcontainer")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = noteData();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="note-date-edit" value="${noteWeWantToEdit.date}" />
        <input type="text" value="${noteWeWantToEdit.notes}" id="note-text-edit" />
        <button id="saveNoteChanges--${noteId}">Save Changes</button>
    `
}
contentTarget.addEventListener("click", (event) => {
    if (event.target.id.startsWith("saveNote")){
        const editedNote = {
            id: +event.target.id.split("--")[1],
            date: document.querySelector("#note-date-edit").value,
            notes: document.querySelector("#note-text-edit").value
        }
        updateNote(editedNote)
        .then(NoteList)

    }
})
