
import Navbar from "./Navbar";



function Header(){

 const navLinks=[
                  {name: "Home", path: "/"},
                  {name: "About", path: "/about"},
                  {name: "Login", path: "/login"},
                  {name: "Live Location", path:"/live-location"}
                ];

    return(

        <header>
             
            
            <h1> Care Connect</h1>
            
            <Navbar links={navLinks}/>
           
        </header>

    );
}

export default Header;