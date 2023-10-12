import React from 'react'
import './button.css'
function Button(props ) {
  return (
    <button {...props} className='btns'>
        {props.text}
    </button>
  )
}

export default Button