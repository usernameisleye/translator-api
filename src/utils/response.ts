export default
{
    error: (msg: string) => {
        return {
            msg,
            success: false
        }
    },

    sucess: (msg: string, json: JSON) => {
        return {
            msg,
            success: true,
            json
        }
    },

    validations: (errors: any) => {
        return {
            errors,
            success: false
        }
    },
}