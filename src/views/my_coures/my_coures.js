import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Report from '../conpoments/report'
import Calender from '../conpoments/calender'
import CardList from './conpoments/card_list'
import './index.scss'
import { getCoures } from '../../api'

@inject('store')
@observer
class MyCoures extends Component{
  constructor(props) {
    super(props)
    this.state = {
      reportConfig: {
        name: '最新公告',
        url: 'www.baidu.com'
      },
      selectedDate: new Date()
    }
  }
  render() {
    return (
      <div className="my-coures">
        <Report reportConfig={this.state.reportConfig}></Report>
        <div className="my-coures-content">
        <Calender cb={this.cb}></Calender>
        <div className="content-right">
          <div className="count-show">
            <span>{`${this.state.selectedDate.getMonth() + 1}月${this.state.selectedDate.getDate()}日`}</span>
            <span>{`共${this.props.store.couresCount}节课`}</span>
          </div>
          <div className="content-inner">
            <CardList></CardList>
          </div>
        </div>
        </div>
      </div>
    )
  }

  cb = (item) => {
    this.setState({
      selectedDate: new Date(item)
    })
    getCoures().then((response) => {
      const { data } = response
      if (response.status === 200) {
        this.props.store.set_course_list(data.data) 
      }
    }).catch((error) => {
      alert(error)
    })
    this.props.store.set_coures_count(5)
  }
}

export default MyCoures