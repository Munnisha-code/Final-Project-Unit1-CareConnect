
import Navbar from "./Navbar";



function Header(){

 const navLinks=[
                  {name: "Home", path: "/"},
                  {name: "About", path: "/about"},
                  {name: "Login", path: "/login"}
                ];

    return(

        <header>
             
            
            <h1> Care Connect</h1>
            
            <Navbar links={navLinks}/>
           
        </header>

    );
}

export default Header;