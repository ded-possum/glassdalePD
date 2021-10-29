import { getConvictions, useConvictions } from "./ConvictionProvider.js"
import { criminalList } from "../Criminals/criminalList.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector("#crimeFilter")
const eventHub = document.querySelector("body")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
    .then(() => {
    const convictions = useConvictions()
    render(convictions)
    })
}

eventHub.addEventListener("change", (eventObj) => {
    if(eventObj.target.id === "crimeSelect"){
        const filterObj = {
            type: "Conviction",
            filterValue: eventObj.target.value
        }
        criminalList(filterObj)
    }
})

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Select a crime:</option>
            ${convictionsCollection.map((convictionsObj) => {
                    const conviction = convictionsObj.conviction
                    return `<option>${conviction}</option>`
                })
            }</select>`
}