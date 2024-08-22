
export class DataBaseConnectionError extends Error {
    reason = 'Error Connecting to Data Base'
    constructor() {
        super();
        Object.setPrototypeOf(this, DataBaseConnectionError.prototype)
    }

}