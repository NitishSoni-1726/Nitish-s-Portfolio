import md5 from "md5";
import { AdminDetails } from "../data/Data";

function handleSubmit(email, password) {
    const hashedEmail = md5(email)
    const hashedPassword = md5(password)

    if (AdminDetails.email === hashedEmail && AdminDetails.password === hashedPassword) {
        return "Success"
    } else {
        return "Invalid Credentials"
    }
}

export { handleSubmit }