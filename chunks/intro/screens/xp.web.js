import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Card, List, Avatar } from 'antd'
import Companies from '../data/companies'
import TimelineComponent from '../components/Timeline'

const tasks = [
  {
    title: 'Junior -> Mid Front-end developer @Zippy Tech',
    description: 'Here is where I learnt, hands on, the basics of JS, React and lots of other things.',
    icon: 'robot'
  },
  {
    title: 'Customer Care @Zippy Tech && @Fluid Trends',
    description: 'Some of them were pretty demanding (aka annoying), but I love talking to people (and alone, tbh) and I enjoyed it.',
    icon: 'phone'
  },
  {
    title: 'Open source contributor @Zippy Tech && @Fluid Trends',
    description: 'Check out the React Web Components toolkit made by Zippy, and the amazing framework/platform Chunky, made by FT.',
    icon: 'robot'
  },
  {
    title: 'Back-end developer @Fluid Trends',
    description: 'Node JS is great. Java and C# suck. Firebase is amazing!',
    icon: 'robot'
  },
  {
    title: 'Desktop application developer @Fluid Trends',
    description: 'Windows sucks. I rest my case.',
    icon: 'ugly'
  },
  {
    title: 'Cleaning lady @Fluid Trends',
    description: 'When "Cleaning your own mess" is litteral.',
    icon: 'sweat'
  },
  {
    title: 'DB Master @Fluid Trends',
    description: 'Because I love adrenaline. Juggling with 50k accounts and protecting the db from hackers...better than bungee jumping.',
    icon: 'surprised'
  },
  {
    title: 'Push-ups counter @Fluid Trends',
    description: `You gotta stay in shape. Who's in for 200 push-ups?`,
    icon: 'thinking'
  },
  {
    title: 'Blockchain...something @Fluid Trends',
    description: `What color do you want your blockchain?`,
    icon: 'cool'
  },
  {
    title: 'Community Manager @Fluid Trends',
    description: 'I love talking. Also, managing a 5k people community is always a pleasure.',
    icon: 'selfie'
  },
  {
    title: 'Stand-up Comediant @Fluid Trends',
    description: `My mom told me I'm funny.`,
    icon: 'cool'
  },
  {
    title: 'Teacher/Mentor @Fluid Trends',
    description: 'My favorite part. My dream.',
    icon: 'graduated'
  },
  {
    title: 'Learner/Mentee @Zippy Tech && @Fluid Trends',
    description: 'When you are the stupidest person in the room, you need to learn. Fast.',
    icon: 'graduated'
  },
  {
    title: 'Designer and UX @Fluid Trends',
    description: `I love to see a professional design/ux. Not the case with mine, but...gettin' there.`,
    icon: 'robot'
  },
  {
    title: 'Coffee boy @Fluid Trends',
    description: `My mom won't let me drink coffee. That never stopped her, or everybody else to send me get coffee. Lucky for them, I'm a good guy, and never spat in the coffee.`,
    icon: 'sick'
  }
]

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

  renderTasks() {
    const width = this.isSmallScreen? '90vw': 'initial'

    return <div style={{textAlign: 'center', marginBottom: 50}}>
      <img src="https://media.giphy.com/media/8N5UycsCWDlcs/giphy.gif" style={{cursor: 'pointer', marginBottom: 50, width}}/>
      <div style={{border: '1px solid #E8E8E8', padding: 40}}>
        <List
          itemLayout="horizontal"
          dataSource={tasks}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`assets/${item.icon}.svg`} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  }

  components() {
    const components = super.components()

    return [
      components[0], 
      this.renderHistory, 
      components[1],
      this.renderStack(),
      components[2],
      this.renderTasks()
    ]
  }
}
