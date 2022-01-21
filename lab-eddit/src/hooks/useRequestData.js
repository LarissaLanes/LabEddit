import axios from "axios"
import {useState} from "react"
import { useEffect } from "react"

const useRequestData = ( initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect (() => {
        axios.get(url, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message)
            alert(err.data)
        })
    }, [url])

    return (data)
}
export default useRequestData;