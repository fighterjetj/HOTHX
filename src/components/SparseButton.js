import './SparseButton.css'

function SparseButton(props) {
  let {width, height, type, heavy, input} = props

  let boxCss = heavy ? "projectBox solid" : "projectBox dashed";

  
  
  let inner = type == "add" ? (<div className='plusHolder'> + </div>)
  :  ( <div>default</div> );

  inner = input ? ( <div className='input'>{input}</div> ) : inner

  
  return (
    <div>
      <div className={boxCss} style={{width: width, height: height}}>
        <div className="addProject">
          {inner}
        </div>
      </div>     
    </div>
  );
}

export default SparseButton;