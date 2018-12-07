import {observable, action, computed} from 'mobx';

class Store{
  @observable count = 0
  @observable storeList = []
  @action set_count = num => {
    this.count = num
  }
  @action set_store_list = () => {
    this.storeList.push({
      name: 'Tom',
      age: parseInt(Math.random() * 100)
    })
  }
  @computed get personTotal() {
    return this.storeList.length
  }
}

export default new Store()