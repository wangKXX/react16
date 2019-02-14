import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import Audio from '../conpoments/audiocontext'

@inject('store')
@observer
class CourwarePublic extends Component{
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://m10.music.126.net/20190226182844/8ee529a9a269c7d8f7db62e75a050cc4/ymusic/8d9e/75eb/2d6f/76af90b7ba141b65b180d07447144757.mp3'
    }
  }
  render() {
    return (
      <div>
        {/* <Audio url={this.state.url}></Audio> */}
        <video src="https://m10.music.126.net/20190226182844/8ee529a9a269c7d8f7db62e75a050cc4/ymusic/8d9e/75eb/2d6f/76af90b7ba141b65b180d07447144757.mp3" controls></video>
      </div>
    )
  }
}

export default CourwarePublic