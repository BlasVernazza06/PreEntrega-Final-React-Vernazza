import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="ErrorSec">
          <img className='ErrorImage' src="/public/vite.svg" alt="" />
          <Link className='ButtonHome' to='/'>Volver a Home</Link>
    </div>
  )
}

export default Error