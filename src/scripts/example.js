const fullNames = people.map(
    personObject => {
        const valueToBeInNewArray = personObject.name
        return valueToBeInNewArray
    }
)

console.log(fullNames)
// ['Caitlin Stein', 'Ryan Tanay', 'Leah Hoefling']


const contentTarget = document.querySelector(".names")

contentTarget.innerHTML = `
    <select>
        ${
            people.map((personObject) => {
                const fullName = personObject.name
                return `<option>${fullName}</option>`
            })
        }
    </select>
`
//filter example code
const hopefulPatrons = [
    { name: "Sally Fisher", age: 30 },
    { name: "Dylan Thomas", age: 19 },
    { name: "Callan Morrison", age: 26 },
    { name: "Juan Rodriguez", age: 20 }
]

const legalPatrons = hopefulPatrons.filter(currentPatron => {
    const canEnterBar = false

    if (currentPatron.age >= 21) {
        canEnterBar = true
    }

    return canEnterBar
})