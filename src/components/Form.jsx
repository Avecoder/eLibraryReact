import { useState } from 'react'

const Form = ({firstInput, secondInput, submitForm, title, buttonText}) => {

  const keyDownForm = e => {
    if(event.key === 'Enter') firstInput()
  }

  const enterForm = () => {
    if(firstInput.value.trim().length === 0) {
      alert(`Поле ${firstInput.title} пустое`)
      return false
    }
    if(secondInput.value.trim().length === 0) {
      alert(`Поле ${secondInput.title} пустое`)
      return false
    }
    submitForm()
  }


  return (
    <div className="form">
        <span className="form-logo">{title}</span>
        <div className="form-menu">
          <div className="form-inner">

            <input
              type={firstInput.type}
              value={firstInput.value}
              onChange={e => firstInput.setValue(e.target.value)}
              placeholder={firstInput.placeholder}
            />

            <input
              type={secondInput.type}
              value={secondInput.value}
              onChange={e => secondInput.setValue(e.target.value)}
              placeholder={secondInput.placeholder}
            />

          <button onClick={() => enterForm()}>{buttonText}</button>
          </div>
        </div>
    </div>
  )
}

export default Form
