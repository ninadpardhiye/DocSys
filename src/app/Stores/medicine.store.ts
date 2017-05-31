// # Redux store for `Medicines`

export interface Medicine {
    _id: number,
    name : string,
    companyName : string,
    sideEffects : string,
    medicineContents : string,
    recDosage : string,
    contraIndications : string,
    pregnancyAdvisable : boolean
};