import SparseButton from '../components/SparseButton'
import '../components/general.css'
import './uploadpage.css'
import React, { useState } from 'react';

function UploadPage() {
    let [uploadedImgs, setUploadedImgs] = useState([]);

    function onFileUpload(e) {
        setUploadedImgs( (last) =>
            {return [...last, [e.target.files[0], ""]]}
            // {return [...last, e.target.files[0]]}
        );
        console.log(uploadedImgs)
        
    }

    function handleChange(event, idx) {
        console.log(idx)
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
                    onChange={(e) => handleChange(e, idx)}
                />
            </div>
        )
    })

    return (
    <div>
            <h1 className='homepageTitle'>Upload Images</h1>
            {previews}
            <div className="uploadHolder">
                <input 
                    type="file" name="file" onChange={onFileUpload}
                />
            </div>
        </div>
    )
}

export default UploadPage;