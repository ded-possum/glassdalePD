import { Criminal } from "./criminal.js";
import { getCriminals, criminalData } from "./criminalDataProvider.js";
import { clearPage } from "../Helpers.js";
import { ConvictionSelect } from "../Convictions/ConvictionSelect.js";

const criminalTarget = document.querySelector("#contentcontainer")

export const criminalList = (filterObject) => {

    criminalTarget.innerHTML = ""
        
    getCriminals().then(() => {

        let criminalsArray = criminalData()

        if (filterObject?.type === "Conviction") {
            criminalsArray = criminalsArray.filter((singleCriminalObj) => {
                return singleCriminalObj ? singleCriminalObj.conviction === filterObject.filterValue : false
            })
        }

        if (filterObject?.type === "Arresting") {
            criminalsArray = criminalsArray.filter((singleCriminalObj) => {
                return singleCriminalObj ?
                 singleCriminalObj.arrestingOfficer === filterObject.filterValue : false
            })
        }

        criminalsArray.forEach((singleCriminalObj) => {

                criminalTarget.innerHTML += Criminal(singleCriminalObj)
        })
    })
}

// criminalTarget.addEventListener("click", function () {
//     document.querySelector("#crimeFilter").innerHTML = ""
//     ConvictionSelect()
//     criminalList()
// })