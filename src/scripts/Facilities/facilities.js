export const Facility = (facilityObject) => {
    return `
    <section id="facCard">
    ${facilityObject.facilityName}<br>
    Security Level ${facilityObject.securityLevel}<br>
    Maximum Capacity: ${facilityObject.capacity}
    </section>
    `
}