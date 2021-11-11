import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"

const contentTarget = document.querySelector("#noteFormContainer")

// Handle browser-generated click event in component

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // clickEvent.preventDefault()
        // Make a new object representation of a note
        const dateTarget = (document.querySelector("#date").value)
        const noteTarget = (document.querySelector("#note-text").value)

        // console.log(dateTarget)
        const newNote = {
            // Key/value pairs here
            date: dateTarget,
            notes: noteTarget
        }

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) 
        // Refresh your list of notes once you've saved your new one
    }
})

export const NoteForm = () => {
    contentTarget.innerHTML = `
    <section id=Notepad>
    <div id=NotesDate>
        <label for="date">Date:</label>
        <input type="date" id="date"><br><br>
    </div>
    <div id=Notes>
        <label for="note-text">Note:</label>
        <textarea id="note-text" placeholder="Note"></textarea>

        <button id="saveNote">Save Note</button>
        </div>
        </section>
        `
    }
