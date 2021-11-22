import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import './userLogin.css'

function UserLogin() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <h2> Seja bem-vindo, {user.name}</h2>
          <button type="button" onClick={signOut}>Sair</button>
        </div>
      </div>
    </div>
  )
}

export default UserLogin;