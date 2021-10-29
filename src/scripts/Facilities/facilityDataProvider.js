let facilities = []

export const facilityData = () => {
    return facilities.slice()
}

export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
    .then (facilitiesResponse => facilitiesResponse.json())
    .then (facilitiesReceipt => {
        console.table(facilitiesReceipt)
        facilities = facilitiesReceipt
    })
}