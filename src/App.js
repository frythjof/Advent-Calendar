import React, { Component } from 'react'
// Hier wird der Component auch einzeln geholt. Ansonsten muss man unten ... extends React.Component schreiben.
// import logo from './logo.svg' // Von Weppack wird der Pfad zum Bild importiert
import './App.css' // Von Weppack wird die CSS-Datei importiert.
import Counter from './Counter'
import Door from './Door'

class App extends Component {
  state = {
    doors: this.getRandomDoors()
  }

  getRandomDoors() {
    return [
      { text: 'We' },
      { text: 'wish' },
      { text: 'you' },
      { text: 'a' },
      { text: 'Merry' },
      { text: 'X-Mas,' },
      { text: 'we' },
      { text: 'wish' },
      { text: 'you' },
      { text: 'a' },
      { text: 'Merry' },
      { text: 'X-Mas,' },
      { text: 'we' },
      { text: 'wish' },
      { text: 'you' },
      { text: 'a' },
      { text: 'Merry' },
      { text: 'X-Mas' },
      { text: 'and' },
      { text: 'a' },
      { text: 'happy' },
      { text: 'New' },
      { text: 'Year!' },
      { text: '***BOOM***' }
    ]
      .map((item, index, arr) => ({
        ...item,
        number: index + 1,
        isOpen: false,
        total: arr.length,
        rand: Math.random()
      }))
      .sort((a, b) => a.rand - b.rand)
      .map(item => {
        delete item.rand
        return item
      })
  }

  renderDoors() {
    return this.state.doors.map(door => (
      <Door
        key={door.number}
        {...door}
        onClick={() => this.openDoor(door.number)}
      />
      //Hier werden die Props an class Door übergeben. Die Textinhalte gebündelt über data
    ))
  }

  openDoor = number => {
    const { doors } = this.state
    const index = doors.findIndex(d => d.number === number)
    const newDoors = [
      ...doors.slice(0, index),
      { ...doors[index], isOpen: true },
      ...doors.slice(index + 1)
    ]

    this.setState({
      doors: newDoors
    })
  }

  render() {
    const openDoorsNum = this.state.doors.filter(door => door.isOpen).length
    console.log(openDoorsNum)
    return (
      <section className="Container">
        <Counter num={openDoorsNum} />
        {this.renderDoors()}
      </section>
    )
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}
*/

export default App
