import {observer, action} from 'mobx';

class Store{
  @observer count = 0;
  @action set_count = (num) => {
    this.count = num
  }
}

export default Store