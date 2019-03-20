import { mixins } from 'common/mixins'
const Foo = {
  foo() {
    alert(1)
  }
}
const Foo1 = {
  foo1() {
    alert(2)
  }
}
class father{
  constructor(props) {
    this.state = {
      fatherName: 'father'
    }
  }
  fatherName = 'father'
  fatherTest() {
    alert('father')
  }
}

@mixins(Foo, Foo1)
class test extends father{
  constructor(props) {
    super(props)
    this.state = {
      testName: 'test'
    }
  }
  testHandler() {
    console.log(this.state.fatherName)
    alert(this.state.testName, this.state)
  }
}
/**
 * @Moudle
 * Proxy
 */
let object = {
  name: 'test',
  age: 10
}
let proxy = new Proxy(object, {
  get(target, key, receiver) {
    console.log(`get ${key}`)
    return 20
  },
  set(target, key, value, receiver) {
    console.log(`set ${key}`)
  }
})
console.log(proxy.name)
export  default test