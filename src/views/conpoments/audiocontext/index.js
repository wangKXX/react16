import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import './index.scss'

@inject('store')
@observer
class AudioObject extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isPlay: false,
      width: 0,
      currentTime: '',
      audio: null
    }
  }
  render() {
    return (
      <div className="audio-wrap">
        <div className={['audio-btn', this.state.isPlay ? 'playing' : 'pause'].join(" ")} onClick={() => this.handlerClick()}></div>
        <div className="audio-progress">
          <div className="auido-inner" style={{width: this.state.width + '%'}}></div><div className="drop-bar"></div>
        </div>
        <div className="video-time">
          {this.state.currentTime}
        </div>
      </div>
    )
  }
  componentWillMount() {
    this.setState({
      audio: new AudioContext()
    })
    this.requestAudio()
  }
  requestAudio() {
    let url = this.props.url
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'
    const _this = this
    request.onload = () => {
      _this.state.audio.decodeAudioData(request.response, buffer => {
        _this.playSound(buffer)
      })
    }
    request.send()
  }
  playSound(buffer) {
    let audioSource = this.state.audio.createBufferSource()
    audioSource.buffer = buffer
    this.setState({
      audioSource
    })
  }
  handlerClick() {
    if (this.state.isPlay) {
      this.state.audioSource.stop()
    } else {
      let index = this.state.currentData || 0
      this.state.audioSource.start(0)
    }
    this.setState({
      isPlay: !this.state.isPlay
    })
  }
  componentWillUnmount() {
    this.state.audio.close()
  }
}

export default AudioObject