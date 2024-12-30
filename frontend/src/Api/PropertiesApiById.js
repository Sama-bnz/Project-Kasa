import { useEffect, useState } from "react"
export const PropertiesApiById= (id)=>{
    const [data, setData] = useState(null)
    console.log("bonjour")
    useEffect(() => {
        async function getData () {   
            const response = await fetch('http://localhost:8080/api/properties/'+id)
            const data = await response.json()
            console.log(data);
            setData(data)
        }
        getData()
    },[id])
    return data
}