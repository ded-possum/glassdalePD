import { getOfficers, officerData } from "./officerDataProvider.js"
import { criminalList } from "../Criminals/criminalList.js"
import { getConvictions, useConvictions } from "../Convictions/ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector("#arrestFilter")
const eventHub = document.querySelector("body")

export const OfficerSelect = () => {
    // Get arresting officers from application state
    getConvictions()
        .then(() => {
            const arresting = useConvictions()
            render(arresting)
        })
}

eventHub.addEventListener("change", (eventObj) => {
    if (eventObj.target.id === "arrestSelect") {
        const filterObj = { 
            type: "Arresting", 
            filterValue: eventObj.target.value 
        }
        criminalList(filterObj)
    }
})

const render = arrestingCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="arrestSelect">
            <option value="0">Select an officer:</option>
            ${arrestingCollection.map((arrestingObj) => {
        const arresting = arrestingObj.arrestingOfficer
        return `<option>${arresting}</option>`
    })
        }</select>`
}