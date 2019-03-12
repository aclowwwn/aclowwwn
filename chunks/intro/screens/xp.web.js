import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Card } from 'antd'
import Companies from '../data/companies'
import TimelineComponent from '../components/Timeline'

export default class HistoryScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  goTo(link) {
    this.props.history.push(link)
  }

  renderTimeline() {
    return (
      <TimelineComponent
        goToLink={() => this.goTo('/contact')}
        isSmallScreen={this.isSmallScreen}
        milestones={Companies.milestones}
        doneColor={Companies.doneColor}
        progressColor={Companies.progressColor}
        todoColor={Companies.todoColor}
        doneIcon={Companies.doneIcon}
        progressIcon={Companies.progressIcon}
        todoIcon={Companies.todoIcon}
      />
    )
  }

  get renderHistory() {
    const width = this.isSmallScreen ? '95vw' : '800px'
    const padding = this.isSmallScreen ? '2px' : '30px'
    return (
      <div style={{ display: 'flex', marginBottom: '30px' }}>
        <Card
          title={`The long journey home...`}
          style={{ width, margin: '10px', padding }}
        >
          {this.renderTimeline()}
        </Card>
      </div>
    )
  }


  gotoLink(url) {
    window.open(url, '_blank')
  }

  renderStack() {
    return <div style={{textAlign: 'center', marginBottom: 50}}>
      <img src="assets/react.png" style={{cursor: 'pointer', marginRight: 40, maxWidth: 250}} onClick={this.gotoLink.bind(this, 'https://reactjs.org/')}/>
      <img src="assets/stack.png" style={{cursor: 'pointer', maxWidth: 250}} onClick={this.gotoLink.bind(this, 'https://www.w3.org/')}/>
      <img src="assets/node.png" style={{cursor: 'pointer', maxWidth: 250}} onClick={this.gotoLink.bind(this, 'https://nodejs.org/en/')}/>
      <img src="assets/redux.png" style={{cursor: 'pointer', maxWidth: 250}} onClick={this.gotoLink.bind(this, 'https://redux.js.org/')}/>
      <img src="assets/electron.png" style={{cursor: 'pointer', maxWidth: 250}} onClick={this.gotoLink.bind(this, 'https://electronjs.org/')}/>
      <img src="assets/native.svg" style={{cursor: 'pointer', maxWidth: 150}} onClick={this.gotoLink.bind(this, 'http://www.reactnative.com/')}/>
    
    </div>
  }

  components() {
    const components = super.components()

    return [
      components[0], 
      this.renderHistory, 
      components[1],
      this.renderStack()
    ]
  }
}
