import React, { Component } from 'react'

class Slots extends Component {
  state = {}
  render() {
    const { slots, onSlotSelect } = this.props
    return (
      <div className="slots">
        {slots.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSlotSelect(idx)}
            className={`slot  ${item.booked ? ' booked' : ''}`}
          >
            <span className="wrap">
              {item.time}:00 {item.period}
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default Slots
