import { useEffect, useState } from "react"
import axios from "axios"
import makeRequest from "../makeRequest"
const useFetch =  (url)=>{
    const [data,setdata] = useState([])
    const [loading,setLoading] = useState(false)
    const [erro,setErro] = useState(false)
    useEffect(()=>{
        const fetchData = async ()=>{
         try{
            setLoading(true)
            const res = await makeRequest.get(url)
            setdata(res.data.data)
         }catch(err) {
            
            setErro(true)
         }   
         setLoading(false)
        }
        fetchData()
    },[url])

    return {data,loading,erro}
}
export default useFetch