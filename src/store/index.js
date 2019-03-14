import {observable, action, computed} from 'mobx';

class Store{
  @observable count = 0
  @observable storeList = []
  @observable couresCount = 0
  @observable couresList = []
  @observable isShowUpload = false
  @observable isLogin = false
  @observable isShowDialog = false

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
  @action set_is_login = val => {
    this.isLogin = val
  }
  @action set_is_showdialog = val => {
    this.isShowDialog = val
  }

  @computed get personTotal() {
    return this.storeList.length
  }
  @computed get computedIsLogin() {
    return this.isLogin
  }
  @computed get computedIsShowDialog() {
    return this.isShowDialog
  }
}

export default new Store()