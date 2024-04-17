import {Link, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import {Navigate} from "react-router-dom";

export default function DefaultLayout(){
  //Use the State Context
  const {user, token} = useStateContext()

  if (!token){
    return <Navigate to="/login" />
  }
  const onLogout = (ev) =>{
    ev.preventDefault()
  }

 return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashobard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div >
            {user.name}
            <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>

    </div>
 )
}
