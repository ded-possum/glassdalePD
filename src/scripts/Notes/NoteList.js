import { NoteForm } from "./NoteForm.js"
import { getNotes, noteData } from "./NoteDataProvider.js"
import { Note } from "./Note.js"


const noteTarget = document.querySelector("#contentcontainer")

export const NoteList = () => {
    getNotes().then(() => {

        let notesArray = noteData()

        let noteHTML = ""

        notesArray.forEach((singleNoteObj) => {

                noteHTML += Note(singleNoteObj)
        })
        noteTarget.innerHTML = noteHTML
    })
}
document.querySelector("#notes-nav-link").addEventListener("click", () => {
    NoteList()

})