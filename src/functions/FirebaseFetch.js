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

async function fetchAboutPageDetails() {
    const aboutDetailsRef = ref(db, "about/");
    try {
        const snapshot = await get(aboutDetailsRef);
        return snapshot.val();
    } catch (error) {
        console.error("Error fetching website name:", error.message);
        throw error;
    }
}

async function fetchFooterDetails() {
    const footerDetailsRef = ref(db, "footer/");
    try {
        const snapshot = await get(footerDetailsRef);
        return snapshot.val();
    } catch (error) {
        console.error("Error fetching website name:", error.message);
        throw error;
    }
}

async function fetchAdminDetails() {
    const adminRef = ref(db, "admin/");
    try {
        const snapshot = await get(adminRef);
        return snapshot.val();
    } catch (error) {
        console.error("Error fetching website name:", error.message);
        throw error;
    }
}

export { fetchWebsiteName, fetchAboutPageDetails, fetchFooterDetails, fetchAdminDetails };