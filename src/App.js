import React from 'react'
import './App.scss'
import data from './data'
import Slots from './Components/Slots'
import FormPopup from './Components/FormPopup'

class App extends React.Component {
  state = JSON.parse(JSON.stringify(data.initialState))

  onSlotSelect = (idx) => {
    const { slots } = this.state
    let slot = slots.find((item, i) => i === idx)
    this.setState({
      selectedSlot: {
        idx,
        data: slot,
      },
    })
  }

  onFormInput = (e) => {
    const { selectedSlot } = this.state
    const updatedSelectedSlot = JSON.parse(JSON.stringify(selectedSlot))
    updatedSelectedSlot.data.userInfo[e.target.name] = e.target.value
    this.setState({
      selectedSlot: updatedSelectedSlot,
    })
  }

  onFormSave = (e) => {
    const { slots, selectedSlot } = this.state
    e.preventDefault()
    const updatedSlots = JSON.parse(JSON.stringify(slots))
    selectedSlot.data.booked = true
    updatedSlots[selectedSlot.idx] = selectedSlot.data
    this.setState({
      slots: updatedSlots,
      selectedSlot: null,
    })
  }

  onFormCancel = () => {
    this.setState({
      selectedSlot: null,
    })
  }

  render() {
    const { slots, selectedSlot } = this.state
    return (
      <div className="app">
        <div className="container">
          <Slots onSlotSelect={this.onSlotSelect} slots={slots} />
          {selectedSlot ? (
            <FormPopup
              selectedSlot={selectedSlot}
              onFormInput={this.onFormInput}
              onFormSave={this.onFormSave}
              onFormCancel={this.onFormCancel}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default App
