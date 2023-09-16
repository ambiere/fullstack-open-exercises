import { RequestError } from '../../App'

type ErrorPropsType = { error: RequestError | null }

function Error({ error }: ErrorPropsType) {
  if (error && error.msg !== '')
    return (
      <div>
        <h2>{error.msg} :(</h2>
        <h2>Make sure you're connected and try again</h2>
      </div>
    )
}

export default Error
