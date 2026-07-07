import {  Link } from "react-router-dom";




function Header(){

    return(

        <header>
            
            <h1> Care Connect</h1>
            
          <nav>
             <Link to="/"> Home </Link> 
              <br />
             <Link to="/about"> About </Link>
          </nav>
           
        </header>

    );
}

export default Header;