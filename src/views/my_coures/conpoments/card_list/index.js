import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Card from '../card'

@inject('store')
@observer
class CardList extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="coures_list">
      {
        this.props.store.couresList.map((item, index) => <Card coures={item} key={index}></Card>)
      }
      </div>
    )
  }
}
export default CardList