const initialState = {
  slots: null,
  selectedSlot: false,
  formErrors: {
    firstNameErr: '',
    lastNameErr: '',
    phoneNumberErr: '',
  },
}

const slots = [
  {
    time: 9,
    period: 'am',
    booked: false,
    userInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
  {
    time: 10,
    period: 'am',
    booked: false,
    userInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
  {
    time: 11,
    period: 'am',
    booked: false,
    userInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
  {
    time: 12,
    period: 'am',
    booked: false,
    userInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
  {
    time: 1,
    period: 'pm',
    booked: false,
    userInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
  {
    time: 2,
    period: 'pm',
    booked: false,
    userInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
  {
    time: 3,
    period: 'pm',
    booked: false,
    userInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
  {
    time: 4,
    period: 'pm',
    booked: false,
    userInfo: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
]

export default { initialState, slots }
