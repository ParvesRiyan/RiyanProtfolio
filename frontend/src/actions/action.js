import axios from "axios";

export const contact = (name, email, number, description) => async (dispatch) => {
    try {
        
        dispatch({
            type: "ADD_CONTACT_REQUEST"
        })

        const {data} = await axios.post(
            "/api/v1/contact",
            {name,email,number,description},
            {headers:{"Content-Type": "application/json"}}
        )

        dispatch({
            type: "ADD_CONTACT_SUCCESS",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "ADD_CONTACT_FAILURE",
            payload: error.response.data.message
        })
    }
}