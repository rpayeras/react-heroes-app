import {useState} from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState)
    }

    return [values, ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }, reset]
}