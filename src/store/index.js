import {observable, action, computed} from 'mobx';

class Store{
  @observable count = 0
  @observable storeList = []
  @observable couresCount = 0
  @observable couresList = []
  @observable isShowUpload = false

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
  @action set_upload_is_show = isShow => {
    this.isShowUpload = isShow
  }
  @computed get personTotal() {
    return this.storeList.length
  }
}

export default new Store()