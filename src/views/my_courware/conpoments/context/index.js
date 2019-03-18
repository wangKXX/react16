import React, { Component } from 'react'
import { SettingContext } from './context_button'
/**
 * @moudle
 * react context
 */
class buttonContext extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <SettingContext.Consumer>
        {
          theme => (
            <button style={{color: theme.color, backgroundColor: theme.backgroud}} onClick={() => this.settingHandler()}>context</button>
          )
        }
      </SettingContext.Consumer>
    )
  }
  settingHandler() {
    this.props.changeHandler()
  }
}
export default buttonContext