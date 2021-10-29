let officers = []

export const officerData = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
    .then (ofcresponse => ofcresponse.json())
    .then (ofcreceipt => {

        officers = ofcreceipt
    })
}
