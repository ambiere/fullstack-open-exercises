import { NotificationType } from '../../App'
import style from './notification.module.css'

type NotificationPropsType = {
  notification: NotificationType
}

function Notification({ notification }: NotificationPropsType) {
  const active = notification.message != '' ? style.active : ''
  const modify = notification.type === 'success' ? style.success : notification.type === 'warn' ? style.warn : ''
  return <span className={`${style.notification} ${active} ${modify}`}>{notification && notification.message}</span>
}

export default Notification
