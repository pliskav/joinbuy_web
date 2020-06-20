import React from 'react'

class Form extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      forminputs: [
        {
          "id": "name",
          "lable": "Name",
          "input": {
                "required": false,
                "type": "text",
                "disabled": false,
                "name": "name",
                "value": "",
                "placeholder": "write your name",
                "pattern": "[A-Za-z]{3}"
              }
        }
      ]
    }
  }

  onChangeHandler = (e) => {
    console.log(e.target.value)
  }

  addFormChild = () => {
    const prevState = this.state.forminputs
    const newTextFiled = {
      "id": "phone",
      "lable": "Phone",
      "input": {
            "required": true,
            "type": "text",
            "disabled": false,
            "name": "phone",
            "value": "",
            "placeholder": "write your phone",
            "pattern": "[A-Za-z]{3}"
          }
    }
    this.setState({
      forminputs: [...prevState, newTextFiled]
    })

  }

  render(){
    const {forminputs} = this.state
    return(
      <>
      <h1>Form component</h1>
      <div className="formcomposer" onClick={this.addFormChild}>
        <button>Add textfield</button>
      </div>
      <form id='newform'>
      {forminputs.map((it, key) => {
        return (
          <div className="input-builder-row" key={key} >
            <input 
        type={it.input.type} 
        required={it.input.required}
        disabled={it.input.disabled}
        value={it.input.value}
        placeholder={it.input.placeholder}
        lable={it.lable}
        onChange={this.onChangeHandler}
        />
          </div>
        )
      })}
      </form>
      </>
    )
  }
}

export default Form