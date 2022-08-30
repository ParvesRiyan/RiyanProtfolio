import { Contact } from "./contact.js";

export const contact = async (req, res) => {
    try {
        
        const {name, email, number, description} = req.body;

        if(!name || !email || !number || !description){
            return res.status(400).json({
                success:false,
                message: "fill the filed first"
            })
        }
        let contact = await Contact.create({
            name,
            email,
            number,
            description
        })

        res.status(201).json({
            success:true,
            contact
            // message: "Message Sent Successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}