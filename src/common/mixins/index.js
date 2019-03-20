export function mixins() {
  console.log()
  let pramas = arguments
  return function (traget) {
    pramas.length <= 1 ?
      Object.assign(traget.prototype, pramas[0])
     : Object.assign(traget.prototype, ...pramas)
  }
}