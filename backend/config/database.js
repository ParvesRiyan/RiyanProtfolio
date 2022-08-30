import mongoose from "mongoose";

export const connectDatabase = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then((connect) => {
        console.log(`mongose connect to " ${connect.connection.host}`);
    })
    .catch((error) => {
        console.log(error);
    })
}