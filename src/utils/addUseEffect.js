import axios from "axios"
import { useEffect } from "react"

const addUserEffect = () => {
    useEffect(() => {
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users')
    }, [])
}

export default addUserEffect