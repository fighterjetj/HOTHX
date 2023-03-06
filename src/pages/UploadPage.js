import SparseButton from '../components/SparseButton'
import '../components/general.css'
import './uploadpage.css'
import React, { useState } from 'react';
import { storage } from "../backend/firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function UploadPage() {
    let [uploadedImgs, setUploadedImgs] = useState([]);
    let [which, setWhich] = useState("");

    function onFileUpload(e) {
        setUploadedImgs( (last) =>
            {return [...last, [e.target.files[0], ""]]}
        );
        const storageRef = ref(storage, '/files/' + e.target.files[0].name);
        uploadBytesResumable(storageRef, e.target.files[0]);   
    }

    function handleChange(event, idx) {
        console.log(idx)
        console.log(event.key)
        setUploadedImgs((last)=> {
            let newlast = last;
            newlast[idx][1] = event.target.value;
            console.log(uploadedImgs); 
            return newlast;
        })
    }

    let previews = uploadedImgs.map((uploadImg, idx) => {
        return(
            <div>
                <div style={{padding: "20px 0px 0px 10px"}}>
                    {uploadImg[0].name}
                </div>
                <input                        
                    className='input'
                    type="text"
                    placeholder="image description (optional)"
                    name="description"
                    onChange={(e) => handleChange(e, idx, )}
                />
            </div>
        )
    })

    function updateWhich(e) {
        setWhich(e.target.value);
    }

    return (
    <div>
            <h1 className='homepageTitle'>Upload Images</h1>
            {previews}
            <div className="uploadHolder">
                <input 
                    type="file" name="file" onChange={onFileUpload}
                />
            </div>
            <div>
                <br/>
                <div>
                    what you're comparing by: ex: which is better, cooler,
                    shorter
                </div>
                <input type="text" 
                placeholder="better/cooler/shorter"
                onChange={updateWhich}
                ></input>
            </div>
        </div>
    )
}

export default UploadPage;