import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios';


const Context = createContext({
    imgSrc: '',
    setImgSrc: () => false,
    unsplashData: {},
    setUnsplashData: () => false,
    loading: false,
    setLoading: () => false,
    fetchData: () => false
})

export default function ContextProvider(props) {
    const [imgSrc, setImgSrc] = useState('')
    const [unsplashData, setUnsplashData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (unsplashData) {
            setImgSrc(unsplashData.urls)
            setLoading(false)
        } else {
            setImgSrc()
        }
    }, [unsplashData]);

    /* topic: wallpaper, orientation: landscape or portrait, w & h: depending on what aspect ratio the client submits. */
    function fetchData() {
        setLoading(true)
        //potentiell bugg
        setUnsplashData({});

        axios('https://api.unsplash.com/photos/random/?client_id=c1g058wnx31kOmxah92bXbf735Twx3SGG9oJz7yEolc')
            .then(res => setUnsplashData(res.data))
            //set loading to false
            .catch(err => console.error(err));
    }

    return (
        <Context.Provider
            value={{
                imgSrc,
                unsplashData,
                loading,
                fetchData
            }} {...props}
        />
    )
}

export const useThisAppContext = () => useContext(Context)