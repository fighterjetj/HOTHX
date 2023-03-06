import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "./firebase"
async function getImageBoobaly(imageName){
    const imageRef = ref(storage, "files/" + imageName);
    const url =  await getDownloadURL(imageRef);
    return url;
}
export default getImageBoobaly;