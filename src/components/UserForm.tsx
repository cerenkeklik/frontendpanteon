import '../assets/css/Register.css'
import '../assets/css/General.css'
import { useNavigate } from 'react-router-dom'

const UserForm = ({ isLogin }: { isLogin: boolean }) => {

   let nav = useNavigate()

  return (
    <form className="d-flex flex-column gap-3">
      <input type="text" className="form-control" placeholder="username" />
      {!isLogin && (
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
        />
      )}
      <input
        type="password"
        className="form-control"
        placeholder="password"
        aria-describedby="passwordHelpBlock"
      />
      <button type="submit" 
      className="btn bg-B9561F color-white submit-btn"
      onClick={() => nav(isLogin ? "/configuration": "/login")}>
        {isLogin ? 'GO!' : 'JOIN US!'}
      </button>
    </form>
  )
}
export default UserForm
