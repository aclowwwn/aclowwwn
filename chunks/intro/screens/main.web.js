import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import {Icon} from 'antd'


export default class MainScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, tweets: null }
  }

  renderSocial() {
    const socialNetworks = [
      'twitter',
      'youtube',
      'github',
      'medium',
      'linkedin',
      'instagram'
    ]

    const margin = this.isSmallScreen ? '0 30px 5px 0' : '0 95px 35px 0'
    const align = this.isSmallScreen ? 'center' : 'flex-end'
    const overflow = this.isSmallScreen ? 'auto' : 'unset'

    return <Icon type="down" />

    return <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'flex-end', alignSelf: align, margin, overflow }}>
      {socialNetworks.map(key => {
        return <Icon key={key} type={key} xonClick={() => this.setState({ [key]: this.state[key] === undefined ? '' : undefined })} style={{
          cursor: 'pointer',
          fontSize: 36,
          padding: '10px',
          color: 'red'
        }} />
      })}
    </div>
  }

  components() {
    return super.components().concat([this.renderSocial()])
  }
}
