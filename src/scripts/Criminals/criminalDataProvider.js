let criminals = []

export const criminalData = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
    .then (criminalResponse => criminalResponse.json())
    .then (criminalReceipt => {

        criminals = criminalReceipt
    })
}