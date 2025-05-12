import {Outlet, Link} from "react-router-dom"
import './App.css'

function Nav() {
    return(
        <>
       <div className="container">
       {/* <div className="logo">
        <img src="./logo.png" alt="" />
        <hr color="black"/>
       </div> */}
        <nav className="container">
            <div className="container">
                <ul className="flex">
                    <li>
                    <Link className="li" to="/">Home</Link>            
                    </li>


                    <li>
                     <Link className="li" to="/about">About</Link>
                    </li>
                    <li>
                     <Link className="li" to="/adventages">Advantages</Link>
                    </li>
                    <li>
                     <Link className="li" to="/freeclub">freeclub</Link>
                    </li>
                     <li>
                    <Link className="li" to="/contact">Contact</Link>            
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        <hr />
        <Outlet/>
        
        </>
    )
}

export default Nav;