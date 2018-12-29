import React, { Component } from 'react'
import './index.scss'

class Calender extends Component{
  dealYear = 0
  dealMonth = 0
  constructor(props) {
    super(props)
    const weekEnd = this.props.weekEnd || ['一', '二', '三', '四', '五', '六', '日']
    this.getMonthFirstDayWeek = this.getMonthFirstDayWeek.bind(this)
    this.state = {
      currentYear: (new Date()).getFullYear(),
      currentMonth: (new Date()).getMonth() + 1,
      currentDay: (new Date()).getDate(),
      weekEnd,
      currentAllDay: this.getMonthAllDay(),
      firstDayWeek: 0,
      allDays: [],
      selectedDate: (new Date()).getDate()
    }
  }

  render() {
    return (
      <div className="calender">
        <div className="calender-header">
          <div className="header-left">
            <span className="header-icon"></span>{`${this.state.currentYear}年${this.state.currentMonth}月`}
            <span className="header-back">今天</span>
          </div>
          <div className="header-btn">
            <span className="btn prev-btn" onClick={() => this.prevHandler()}></span>
            <span className="btn next-btn" onClick={() => this.nextHandler()}></span>
          </div>
        </div>
        <ul className="week-wrap-header">
        {
          this.state.weekEnd.map((item, index) => <li className="week-item" key={index}>{item}</li>)
        }
        </ul>
        <ul className="week-wrap">
        {
          this.state.allDays.map((item, index) => <li className={["week-item", item === 0 ? '' : 'hover-item', this.state.selectedDate === item ? 'isSelected' : '' ].join(" ")} key={index} onClick={() => this.setSelectItem(item)}>{item === 0 ? '' : item}</li>)
        }
        </ul>
      </div>
    )
  }

  componentDidMount() {
    const firstDayWeek = this.getMonthFirstDayWeek()
    this.setState({
      firstDayWeek
    }, () => {
      this.delAllDays()
    })
  }

  getMonthAllDay() {
    const date = new Date()
    this.dealYear = date.getFullYear()
    const Month = date.getMonth()
    date.setMonth(Month + 1)
    this.dealMonth = Month + 1
    date.setDate(0)
    return date.getDate()
  }

  getMonthFirstDayWeek() {
    let date = new Date()
    date.setFullYear(date.getFullYear())
    date.setMonth(date.getMonth())
    date.setDate(1)
    return date.getDay() === 0 ? 6 : date.getDay() - 1
  }

  delAllDays() {
    const allDays = []
    for (let i = 0; i < this.state.firstDayWeek; i++) {
      allDays.push(0)
    }
    for (let i = 0; i < this.state.currentAllDay; i++) {
      allDays.push(i + 1)
    }
    this.setState({
      allDays
    })
  }

  prevHandler() {
    const Year = this.dealYear
    const Month = this.dealMonth
    const date = new Date()
    date.setFullYear(Year)
    date.setMonth(Month - 1)
    date.setDate(0)
    this.setState({
      currentAllDay: date.getDate()
    })
    this.dealYear = date.getFullYear()
    this.dealMonth = date.getMonth() + 1
    this.setState({
      currentMonth: date.getMonth() + 1,
      currentYear: this.dealYear
    })
    date.setDate(1)
    this.setState({
      firstDayWeek: date.getDay() === 0 ? 6 : date.getDay() - 1
    },() => {
      this.delAllDays()
    })
  }

  nextHandler() {
    const Year = this.dealYear
    const Month = this.dealMonth
    const date = new Date()
    date.setFullYear(Year)
    date.setMonth(Month + 1)
    this.dealYear = date.getFullYear()
    this.dealMonth = Month + 1
    this.setState({
      currentYear: date.getFullYear(),
      currentMonth: date.getMonth()
    })
    date.setDate(0)
    this.setState({
      currentAllDay: date.getDate()
    })
    if (Year !== this.dealYear) {
      this.dealYear = Year
      date.setFullYear(Year)
    }
    date.setMonth(Month, 1)
    this.setState({
      firstDayWeek: date.getDay() === 0 ? 6 : date.getDay() - 1
    },() => {
      this.delAllDays()
    })
  }

  setSelectItem(item) {
    if (item === 0) {
      return
    }
    this.setState({
      selectedDate: item
    })
    const Year = this.state.currentYear
    const Month = this.state.currentMonth
    const date = new Date()
    date.setFullYear = Year
    date.setMonth = Month
    date.setDate(item)
    const time = date.getTime()
    const cb = this.props.cb
    if (cb) {
      cb(time)
    }
  }
}

export default Calender