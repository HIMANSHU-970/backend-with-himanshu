class Api_error extends Error {
    constructor(
        message = "Something went wrong",
        statuscode = 500,
        success = false,
        error = null,
        stack=""
    ) {
        super(message);
        this.statuscode = statuscode;
        this.success = false;
        this.data = null;
        this.errors = errors;
        this.message = message;
        //this.stack = (new Error()).stack;

        if(stack){
          this.stack = stack;
        }
        else{
          Error.captureStackTrace(this, this.constructor);
        }

    }
}
export { Api_error }; // isme hm is class ko named export kr rhe h, iska matlab h ki jab bhi hm is file ko import krenge to hm is class ko curly braces ke sath import krna hoga. Jaise ki: import { Api_error } from './utils/API_error.js';

// or

// export default Api_error; // isme hm is class ko default export kr rhe h, iska matlab h ki jab bhi hm is file ko import krenge to hm is class ko directly import kr skte h, bina curly braces ke. Jaise ki: import Api_error from './utils/API_error.js';

//export { Api_error }; vs / export default Api_error;
// ye dono alag hote h kyoki export { Api_error } me hm is class ko named export kr rhe h, iska matlab h ki jab bhi hm is file ko import krenge to hm is class ko curly braces ke sath import krna hoga. Jaise ki: import { Api_error } from './utils/API_error.js';

// jabki export default Api_error me hm is class ko default export kr rhe h, iska matlab h ki jab bhi hm is file ko import krenge to hm is class ko directly import kr skte h, bina curly braces ke. Jaise ki: import Api_error from './utils/API_error.js';


