const ActiveEvent = props => {
  const {status} = props
  const OBJ = {
    closed: 'REGISTRATIONS_CLOSED',
    open: 'YET_TO_REGISTER',
    registerd: 'REGISTERED',
    initial: 'INITIAL',
  }

  switch (status) {
    case OBJ.initial:
      return <p>Click on an event, to view its registration details</p>
    case OBJ.open:
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="Img"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button">Register Here</button>
        </>
      )
    case OBJ.registerd:
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
          />
          <h1>You have already registered for the event</h1>
        </>
      )
    case OBJ.closed:
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen</p>
        </>
      )
    default:
      return null
  }
}

export default ActiveEvent
