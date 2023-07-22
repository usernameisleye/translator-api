export default
{
    error: (msg: string) => {
        return {
            msg,
            success: false
        }
    },

    success: (msg: string, data: any) => {
        return {
            msg,
            success: true,
            data
        }
    },

    validations: (errors: any) => {
        return {
            errors,
            success: false
        }
    },
}