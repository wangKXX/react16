import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './slider_list.scss'
import { withRouter } from 'react-router-dom'

const listConfig = [
  {
    name: '我的课程',
    linkUrl: '/my_coures',
    class: 'icon-teacher'
  },
  {
    name: '我的课件',
    linkUrl: '/my_courware',
    class: 'icon-folder'
  },
  {
    name: '课件商城',
    linkUrl: '/courware_public',
    class: 'icon-store'
  }
]

@inject('store')
@observer
class SliderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderList: listConfig,
      currentIndex: 0
    }
  }
  render() {
    return (
      <div className="slider-list">
        {
          this.state.sliderList.map((item, index) => 
              <div className={`list-item ${ this.props.location.pathname === item.linkUrl ? 'is-select' : ''}`} onClick={() => this.handlerClick(item, index)} key={index}>
                <span className={['icon', item.class].join(' ')}></span>
                {item.name}
              </div>
          )
        }
      </div>
    )
  }
  handlerClick(item, index) {
    const linkUrl = item.linkUrl
    this.props.history.push(linkUrl)
    this.setState({
      currentIndex: index
    })
  }
}
export default withRouter(SliderList)