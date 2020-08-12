import React from 'react'
import './App.scss'
import validator from 'validator'
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

  isValidFormData = () => {
    const {
      firstName,
      lastName,
      phoneNumber,
    } = this.state.selectedSlot.data.userInfo

    const formErrors = {
      firstNameErr: '',
      lastNameErr: '',
      phoneNumberErr: '',
    }

    let isValid = true

    if (!firstName.length || !validator.isAlpha(firstName)) {
      isValid = false
      if (!firstName.length) {
        formErrors.firstNameErr = 'First name is required...'
      } else {
        formErrors.firstNameErr = 'First name should only contain letters...'
      }
    }

    if (!lastName.length || !validator.isAlpha(lastName)) {
      isValid = false
      if (!lastName.length) {
        formErrors.lastNameErr = 'Last name is required...'
      } else {
        formErrors.lastNameErr = 'Last name should only contain letters...'
      }
    }

    if (!phoneNumber.length || !validator.isNumeric(phoneNumber)) {
      isValid = false
      if (!phoneNumber.length) {
        formErrors.phoneNumberErr = 'Phone number name is required...'
      } else {
        formErrors.phoneNumberErr =
          'Phone number name should only contain numbers...'
      }
    }

    this.setState({
      formErrors,
    })

    return isValid
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

    if (this.isValidFormData()) {
      const updatedSlots = JSON.parse(JSON.stringify(slots))
      selectedSlot.data.booked = true
      updatedSlots[selectedSlot.idx] = selectedSlot.data
      this.setState({
        slots: updatedSlots,
        selectedSlot: false,
        formErrors: {
          firstNameErr: '',
          lastNameErr: '',
          phoneNumberErr: '',
        },
      })
    }
  }

  onFormCancel = () => {
    this.setState({
      selectedSlot: false,
      formErrors: {
        firstNameErr: '',
        lastNameErr: '',
        phoneNumberErr: '',
      },
    })
  }

  componentDidMount() {
    if (localStorage.getItem('slots')) {
      this.setState({
        slots: JSON.parse(localStorage.getItem('slots')),
      })
    } else {
      this.setState({
        slots: JSON.parse(JSON.stringify(data.slots)),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { slots } = this.state
    if (JSON.stringify(prevState.slots) !== JSON.stringify(slots)) {
      localStorage.setItem('slots', JSON.stringify(slots))
    }
  }

  render() {
    const { slots, selectedSlot, formErrors } = this.state

    if (!slots) {
      return null
    }

    return (
      <div className="app">
        <nav>
          <div className="container">
            <h1 className="brand-name">TIMEBOOK</h1>
          </div>
        </nav>
        <div className="container">
          <Slots onSlotSelect={this.onSlotSelect} slots={slots} />
          {selectedSlot ? (
            <FormPopup
              selectedSlot={selectedSlot}
              formErrors={formErrors}
              onFormInput={this.onFormInput}
              onFormSave={this.onFormSave}
              onFormCancel={this.onFormCancel}
            />
          ) : null}
        </div>
        <footer>
          <div className="container">
            <h4 className="text">
              Developed by <span>Ram Maheshwari</span>
            </h4>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
