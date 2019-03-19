import React, { Component } from 'react'
import HegherConpoment from 'common/higher-conpoment-factory'
import './index.scss'
const data =  {
  name: 'xxx',
  age: 18,
  sex: 1
}
class Man extends Component{
  constructor(props) {
    super(props)
    this.element = null
    this.state = {
      data
    }
  }
  render() {
    let man = this.state.data
    return (
      <div className="man-wrap">
        <div className="man-item">{man.name}</div>
        <div className="man-item">{man.age}</div>
        <div className="man-item">{man.sex}</div>
        <div className="man-item">
          <button onClick={() => this.showNameHandler(man)} ref={() => this.setRef()}>查看</button>
        </div>
      </div>
    )
  }
  showNameHandler(man) {
    alert(man.name)
  }
  setRef(element) {
    this.element = element
  }
}

export default HegherConpoment(Man, data)