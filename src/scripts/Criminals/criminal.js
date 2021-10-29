export const Criminal = (criminalObject) => {
    return `
    
    <section id="CriminalCard"> 
    ${criminalObject.id} ${criminalObject.name}<br><br>
    Age: ${criminalObject.age}<br>
    Convicted of: ${criminalObject.conviction}<br>
    Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}<br>
    Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}<br>
    Arresting Officer: ${criminalObject.arrestingOfficer}<br>
    </section>
    `
}