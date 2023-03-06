import SparseButton from '../components/SparseButton'
import '../components/general.css'
import './uploadpage.css'
import React, { useState } from 'react';

function UploadPage() {
    let [uploadedImgs, setUploadedImgs] = useState([]);

    function onFileUpload(e) {
        setUploadedImgs( (last) =>
            {return [...last, e.target.files[0]]}
        );
        console.log(uploadedImgs)
        
    }

    let previews = uploadedImgs.map((uploadImg) => {
        return(
            <div>
                {uploadImg.name}
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
                {/* <button style={{backgroundColor: "white", borderWidth: "0px"}}> */}
            </div>
        </div>
    )
}

export default UploadPage;