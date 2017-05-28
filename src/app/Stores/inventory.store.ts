// # Redux store for `Inventories`

export interface Inventory {
    _id: string,
    medicineId : string
    purchaseDate : Date,
    mfgDate : Date,
    expiryDate : Date,
    quantity : string
};