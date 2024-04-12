const Notification = props => {
  const {icon, notificationText, className} = props

  return (
    <button className={`button ${className}`}>
      <img className='icon-symbol' src={icon} /> <p>{notificationText}</p>
    </button>
  )
}

const image = {
  primary: 'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png',
  success: 'https://assets.ccbp.in/frontend/react-js/success-icon-img.png',
  warning: 'https://assets.ccbp.in/frontend/react-js/warning-icon-img.png',
  danger: 'https://assets.ccbp.in/frontend/react-js/danger-icon-img.png',
}

const element = (
  <div className='notification-bg-container'>
    <div className='content-container'>
      <h1 className='heading'>Notifications</h1>
      <div className='notification-container'>
        <Notification
          icon={image.primary}
          notificationText='Information Message'
          className='info-notification'
        />
        <Notification
          icon={image.success}
          notificationText='Success Message'
          className='success-notification'
        />
        <Notification
          icon={image.warning}
          notificationText='Warning Message'
          className='warning-notification'
        />
        <Notification
          icon={image.danger}
          notificationText='Error Message'
          className='error-notification'
        />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
