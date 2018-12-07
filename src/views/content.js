import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import {ThemContext} from '../context'

@inject('store')
@observer
class Content extends Component{
  render() {
    return (
      <div>
      <ThemContext.Consumer>
        {context => (
          <div>{context.confige.count}</div>
        )}
      </ThemContext.Consumer>
      <div className='common_content'>
        添加数据：<button onClick={() => this.props.store.set_store_list()}>添加</button>{this.props.store.personTotal}
        <div className='common_content_inner'>
          { 
            this.props.store.storeList.map((item, index) => <li key={index}>{`${item.name}:${item.age}`}</li>)
          }
        </div>
      </div>
      </div>
    )
  }
}
export default Content