import { Facility } from "./facilities.js"
import { getFacilities, facilityData } from "./facilityDataProvider.js"

const facilityTarget = document.querySelector("#contentcontainer")

export const facilitiesList = () => {
    getFacilities().then(() => {

        let facilitiesArray = facilityData()

        let facilitiesHTML = ""

        facilitiesArray.forEach((singleFacilityObj) => {

                facilitiesHTML += Facility(singleFacilityObj)
        })
        facilityTarget.innerHTML = facilitiesHTML
    })
}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    facilitiesList()
})