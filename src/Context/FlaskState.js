import { useState } from "react"
import flaskContext from "./FlaskContext"

const FlaskState = (props) => {

    const [InitImg , SetinitImg]=useState("init-1")

    const ShowImage=()=>{

        return InitImg

    }

    const CallAPI = async (selectedFile) => {

        console.log("CallAPI has been called")
        const formData = new FormData();
        formData.append('image', selectedFile);

        const response = await fetch('http://localhost:5000/classify', {
            method: 'POST',
            body: formData,
        })

        // const json = await response.json();
        const blob = await response.blob();
        // const json = await response;
        console.log(blob);
        console.log(typeof blob);
        SetinitImg("init-2")
        return blob
    }
    return (
        <flaskContext.Provider value={{ CallAPI,ShowImage }}>
            {props.children}
        </flaskContext.Provider>
    )

}

export default FlaskState;
