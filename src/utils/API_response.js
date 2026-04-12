class API_response {
    constructor(
        message = "Request successful",
        statuscode = statuscode ,
        success = statuscode < 400, // status code 400 se kam hone par success true hoga, warna false
        data = null,
        errors = null 
    ) {
        this.statuscode = statuscode;
        this.success = success;
        this.data = data;
        this.errors = errors;
        this.message = message;
    }