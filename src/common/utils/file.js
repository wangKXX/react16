class FileUtils{
  constructor(options) {
    this.options = options
    this.fileName = null
    this.fileReader = new FileReader()
    this.fileReader.onabort = (err) => {
      console.log(`read err ${err}`)
    }
    this.fileReader.onloadstart = () => {
      console.log('read start')
    }
    this.fileReader.onloadend = (event) => {
      console.log(`read end ${event}`)
    }
    this.fileReader.onprogress = (e) => {
      let scale = e.loaded / e.total
      if (this.options.progressCb) {
        let cb = this.options.progressCb
        cb(this.fileName, scale)
      }
    }
  }
  readStart() {
    const file = this.options.file
    this.fileName = file.name
    this.fileReader.readAsDataURL(file, 'base64')
  }
}

export default FileUtils