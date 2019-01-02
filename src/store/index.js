import {observable, action, computed} from 'mobx';

class Store{
  @observable count = 0
  @observable storeList = []
  @observable couresCount = 0
  @observable couresList = []

  @action set_count = num => {
    this.count = num
  }
  @action set_store_list = () => {
    this.storeList.push({
      name: 'Tom',
      age: parseInt(Math.random() * 100)
    })
  }
  @action set_coures_count = count => {
    this.couresCount = count
  }
  @action set_course_list = list => {
    this.couresList = list
  }
  @computed get personTotal() {
    return this.storeList.length
  }
}

export default new Store()