import './SparseButton.css'

function SparseButton(props) {
  let {width, height, type} = props

  let inner = type == "add" ? (<div className='plusHolder'> + </div>)
  :  
  (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
  )
  
  return (
    <div>
      <div className="projectBox" style={{width: width, height: height}}>
        <div className="addProject">
          {inner}
        </div>
      </div>     
    </div>
  );
}

export default SparseButton;