import md5 from "md5";
import { fetchAdminDetails } from "./FirebaseFetch";

async function handleSubmit(email, password) {
    const hashedEmail = md5(email)
    const hashedPassword = md5(password)
    try {
        const adminDetails = await fetchAdminDetails();
        if (adminDetails.email === hashedEmail && adminDetails.password === hashedPassword) {
            return "Success"
        } else {
            return "Invalid Credentials"
        }

    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

export { handleSubmit }