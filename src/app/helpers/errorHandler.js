const {ZodError} = require("zod")

export default function ErrorHandler(error) {
    if(error instanceof ZodError) {
        const errFormat = error.issues[0].path[0].toString() + " " +
                          error.issues[0].message.toLowerCase();
        return { error: errFormat, status: 400};
    } else if(error instanceof Error) {
            return { error: error.message, status: 400};
    } else {
        return { error: "Internal Server Error", status: 500};
    }
}

class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}