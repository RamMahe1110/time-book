import React, { Component } from 'react'

class FormPopup extends Component {
  state = {}
  render() {
    const {
      selectedSlot,
      formErrors,
      onFormInput,
      onFormSave,
      onFormCancel,
    } = this.props
    const { firstName, lastName, phoneNumber } = selectedSlot.data.userInfo
    const { firstNameErr, lastNameErr, phoneNumberErr } = formErrors
    return (
      <div className="form-main">
        <div className="content">
          <h2>
            Book Slot For {selectedSlot.data.time}:00 {selectedSlot.data.period}
          </h2>
          <form onSubmit={onFormSave} className="main-form">
            <div className="field">
              <label>First Name</label>
              <input
                name="firstName"
                value={firstName}
                onChange={onFormInput}
                type="text"
              />
              <span className="err">{firstNameErr}</span>
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                name="lastName"
                value={lastName}
                onChange={onFormInput}
                type="text"
              />
              <span className="err">{lastNameErr}</span>
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input
                name="phoneNumber"
                value={phoneNumber}
                onChange={onFormInput}
                type="text"
              />
              <span className="err">{phoneNumberErr}</span>
            </div>
            <div className="decision-makers">
              <button type="submit" className="success">
                Save
              </button>
              <button type="button" className="fail" onClick={onFormCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FormPopup
