import React from 'react'

function Button2({dispatch, type, payload,children}) {
  return (
    <button className="custom-button"
    onClick={()=>dispatch({type: type, payload: payload})}>
        {children}

    </button>
  )
}

export default Button2