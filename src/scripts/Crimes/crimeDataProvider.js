let crimes = []

export const crimeData = () => {
    return crimes.slice()
}

export const getCrimes = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then (crimesResponse => crimesResponse.json())
    .then (crimesReceipt => {
        console.table(crimesReceipt)
        crimes = crimesReceipt
    })
}