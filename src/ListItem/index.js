import './index.css'

const ListItem = props => {
  const {historyData, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyData

  const onDeleteBtn = () => {
    deleteItem(id)
  }

  return (
    <li className="listItemContainer">
      <div className="list-container">
        <p className="time-accessed">{timeAccessed}</p>

        <div className="logo-card-container">
          <img src={logoUrl} alt="domain logo" className="icon" />
          <p className="title">{title}</p>
          <p href={domainUrl} className="url">
            {domainUrl}
          </p>
        </div>
        <button
          data-testid="delete"
          type="button"
          onClick={onDeleteBtn}
          className="button"
          alt="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
