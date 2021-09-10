import './toast.scss'

const Toast = ({ message }) => {
  return (
    <div className="text-center toast">
      {message}
    </div>
  )
}

export default Toast
