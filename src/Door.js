import React, { Component } from 'react'
import './Door.css'

class Door extends Component {
  render() {
    const { text, number, total, isOpen, onClick } = this.props // Destructuring: Daten rausholen, die man braucht. Wenn man zwei Keys nicht braucht, kann man diese auch in einem neuen selbstbenannten Object lassen: {text, number, total, ...rest}
    const today = new Date().getDate()

    return (
      <section
        className={isOpen ? 'open' : 'closed'}
        onClick={today >= number ? onClick : undefined}
      >
        {isOpen ? text : `${number}/${total}`}
      </section>
    )
  }
}

export default Door
