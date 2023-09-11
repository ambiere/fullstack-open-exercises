import { NotificationType } from '../../App'
import style from './notification.module.css'

type NotificationPropsType = {
  notification: NotificationType
}

function Notification({ notification }: NotificationPropsType) {
  const active = notification.message != '' ? style.active : ''
  const styleObject: { [index: string]: string } = {
    warn: style.warn,
    success: style.success,
  }

  return (
    <span className={`${style.notification} ${active} ${styleObject[notification.type]}`}>
      {notification && notification.message}
    </span>
  )
}

export default Notification
