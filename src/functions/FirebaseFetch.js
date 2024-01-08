import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

async function fetchWebsiteName() {
    const websiteNameRef = ref(db, "websiteName/");
    try {
        const snapshot = await get(websiteNameRef);
        return snapshot.val();
    } catch (error) {
        console.error("Error fetching website name:", error.message);
        throw error;
    }
}



export { fetchWebsiteName };