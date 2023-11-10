import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/firebase";

export const getAbsolutePhotoURL = async (url: string): Promise<string> => {
    const storageRef = ref(storage, url);
    try {
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Błąd podczas pobierania URL z Firebase Storage:", error);
      throw error;
    }
  };