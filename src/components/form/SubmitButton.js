import '../form/SubmitButton.css'

function SubmitButton ({text}) {
    return(
       <div>
          <button type='submit' className='btn' >{text}</button>
       </div>
    )
}

export default SubmitButton