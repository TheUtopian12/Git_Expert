import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/getGIfs";
export const useFetchGifs = (categoria) => {


    const [state, setState] = useState({
        data:[],
        loading:true
    });
    
        useEffect(() => {
            setTimeout(()=>{
            getGifs(categoria)
                .then(imgs => setState({
                    data:imgs,
                    loading:false
                }))
            },3000)
            }, [categoria]);



  
    



return state


}
