import SparseButton from '../components/SparseButton'
import '../components/general.css'
import './uploadpage.css'

function UploadPage() {
    return (
        <div>
            <h1 className='homepageTitle'>Upload Images</h1>
            <div className="uploadHolder">
                <SparseButton width="200px" height="50px" type="upload"/>
            </div>
        </div>
    )
}

export default UploadPage;