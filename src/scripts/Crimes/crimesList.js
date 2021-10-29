import { Crime } from "./crimes.js";
import { getCrimes, crimeData } from "./crimeDataProvider.js";

const crimesTarget = document.querySelector("#crimescontainer")

export const crimesList = () => {
    getCrimes().then(() => {

        let crimesArray = crimeData()

        let crimesHTML = ""

        crimesArray.forEach((singleCrimeObj) => {

                crimesHTML += Crime(singleCrimeObj)
        })
        crimesTarget.innerHTML = crimesHTML
    })
}