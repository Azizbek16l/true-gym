import {Outlet, Link} from "react-router-dom"
const Layout=()=>{
    return(
        <>
       
        <nav>
            <ul>
               <li>
               <Link to="/">Home</Link>            
               </li>
               <li>
               <Link to="/contact">Contact</Link>            
               </li>

               <li>
                <Link to="/about">About</Link>
               </li>
            </ul>
        </nav>
        <hr />
        <Outlet/>
        
        </>
    )
}

export default Layout