import { criminalList } from "../Criminals/criminalList.js";
import { Officer } from "./officer.js";
import { getOfficers, officerData } from "./officerDataProvider.js";
import { OfficerSelect } from "./OfficerSelect.js";
import { Criminal } from "../Criminals/criminal.js";

const ofcTarget = document.querySelector("#contentcontainer")

export const officerList = (arrestingFilter) => {
    
    ofcTarget.innerHTML = ""
        
    getOfficers().then(() => {

        let arrestArray = officerData()

        if (arrestingFilter) {
            arrestArray = arrestArray.filter((singleArrestObj) => {
                return singleArrestObj ? singleArrestlObj.arrestingOfficer === arrestingFilter : false
            })
        }

        arrestArray.forEach((singleArrestObj) => {

                // ofcTarget.innerHTML += Criminal(singleArrestObj)
        })
    })
}

// ofcTarget.addEventListener("click", function () {
//     document.querySelector("#arrestFilter").innerHTML = ""
//     OfficerSelect()
//     officerList()
//     criminalList()
// })