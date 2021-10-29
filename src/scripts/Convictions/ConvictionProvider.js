let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/criminals")
    .then (convictionResponse => convictionResponse.json())
    .then (convictionReceipt => {

        convictions = convictionReceipt
    })
}