import { officerList } from "./Officers/officerList.js";
import { criminalList } from "./Criminals/criminalList.js";
import { facilitiesList } from "./Facilities/facilitiesList.js";
import { NoteForm } from "./Notes/NoteForm.js";
import { NoteList } from "./Notes/NoteList.js";
import { ConvictionSelect } from "./Convictions/ConvictionSelect.js";
import { OfficerSelect } from "./Officers/OfficerSelect.js";


const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function() {
    const bodyElement = document.querySelector("body")
    bodyElement.classList.toggle("dark-background")
})
ConvictionSelect()
OfficerSelect()
NoteForm()