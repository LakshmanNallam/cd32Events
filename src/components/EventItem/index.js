const EventItem = props => {
  const {eachItem, TransportIdFun} = props
  const {id, registrationStatus} = eachItem
  const TransportIdFunCall = () => {
    TransportIdFun(registrationStatus)
  }

  return (
    <div className="CardCon">
      <li>
        <button className="imgHoler" type="button" onClick={TransportIdFunCall}>
          <img src={`${eachItem.imageUrl}`} className="Img" alt="event" />
        </button>
      </li>
      <p>{eachItem.name}</p>
      <p>{eachItem.location}</p>
    </div>
  )
}

export default EventItem
