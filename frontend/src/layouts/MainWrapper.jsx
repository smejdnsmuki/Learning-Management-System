import { useEffect, useState } from "react";
import { setUser } from "../utils/auth";

const MainWrapper = ({children}) => {
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        const handler = async() => {
            setLoading(true)
            console.log("Setting user...");
            await setUser()
            setLoading(false)
            console.log("User set, loading:", loading);
        }
        handler()
    }, [])

    return <>{ loading ? null : children }</>
}

export default MainWrapper;
