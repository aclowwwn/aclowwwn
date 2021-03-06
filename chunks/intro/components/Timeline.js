import React, { PureComponent } from 'react'
import { Timeline, Icon, Button } from 'antd'
import { Typography } from '@rmwc/typography'

export default class TimelineComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  renderMilestone(item) {
    const {
      doneColor,
      progressColor,
      todoColor,
      doneIcon,
      progressIcon,
      todoIcon
    } = this.props
    let iconColor, iconType

    switch (item.status) {
      case 'done':
        iconColor = doneColor
        iconType = doneIcon
        break
      case 'progress':
        iconColor = progressColor
        iconType = progressIcon
        break
      case 'todo':
        iconColor = todoColor
        iconType = todoIcon
        break
      default:
        break
    }

    const strikeStyle = item.status === 'done' ? 'line-through' : '',
      opacity = item.status === 'todo' ? 0.5 : 1,
      backgroundColor = item.status === 'progress' ? '#7e57c2' : '',
      color = item.status === 'progress' ? '#fff' : '#424242'

    return (
      <Timeline.Item
        dot={
          <Icon
            type={iconType}
            style={{ fontSize: '20px', color: iconColor }}
          />
        }
      >
        <div
          style={{
            boxShadow: 'rgba(224,224,224,1) 0px 5px 20px 0px',
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            opacity,
            backgroundColor
          }}
        >
          <Typography
            use="headline5"
            style={{
              paddingRight: '5px',
              paddingLeft: '5px',
              textDecoration: strikeStyle,
              color
            }}
          >
            {item.title}
          </Typography>
        </div>
        
        {this.renderXP(item)}

      </Timeline.Item>
    )
  }

redirect(url) {
  window.open(url, '_blank')
}

  renderXP (item) {
    if (item.id === 2) {
      return <div style={{padding: '30px 0 10px 20px', textAlign: 'center'}}>
        <div style={{background: '#425166', marginRight: 20, padding: 20, maxWidth: 300, textAlign: 'center', display: 'inline', cursor: 'pointer'}} onClick={this.redirect.bind(this, 'https://www.zippytech.io/')} >
          <img src="assets/zippy.svg"/>
        </div>
        <img style={{maxWidth: 250, cursor: 'pointer'}} src="assets/plotto.png" onClick={this.redirect.bind(this, 'http://plotto.com')}/>
      </div>
    }

    if (item.id === 3) {
      return <div style={{padding: '30px 0 10px 20px', textAlign: 'center'}}>
        <img style={{cursor: 'pointer', maxWidth: 200, paddingRight: 20}} src="assets/carmel.png" onClick={this.redirect.bind(this, 'http://carmel.io')}/>
        <img style={{cursor: 'pointer', maxWidth: 200, paddingRight: 20}} src="assets/chunky.gif" onClick={this.redirect.bind(this, 'http://chunky.io')}/>
        <div style={{cursor: 'pointer', background: '#425166', padding: 20, textAlign: 'center', display: 'inline'}} onClick={this.redirect.bind(this, 'http://eosnation.io')}>
          <img style={{width: 100}} src="assets/eosnation.png"/>
        </div>
      </div>
    }

    return <div />

  }

  renderTimeline() {
    if (!this.props.milestones) {
      return
    }

    return (
      <Timeline mode="alternate">
        {this.props.milestones.map(milestone =>
          this.renderMilestone(milestone)
        )}
      </Timeline>
    )
  }

  render() {
    return (
      <div
        style={{
          color: this.props.textColor,
          backgroundColor: this.props.backgroundColor
        }}
      >
        {this.renderTimeline()}
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <Button
            style={{
              backgroundColor: '#7e57c2',
              borderColor: '#7e57c2',
              width: '40%',
              marginBottom: this.props.isSmallScreen ? '30px' : ''
            }}
            type="primary"
            onClick={this.props.goToLink}
            onMouseEnter={() => {
              this.setState({ hovered: true })
            }}
            onMouseLeave={() => {
              this.setState({ hovered: false })
            }}
          >
            About me
            <Icon
              type="smile"
              spin={true}
              style={{ marginLeft: this.state.hovered ? '30px' : '5px' }}
            />
          </Button>
        </div>
      </div>
    )
  }
}
