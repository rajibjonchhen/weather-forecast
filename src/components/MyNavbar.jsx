import { Navbar } from "react-bootstrap";
import {TiWeatherSunny} from 'react-icons/ti'

function MyNavbar() {
    return ( 
    <Navbar bg="dark" variant="dark" style={{position:'sticky', top:'0px',zIndex:1}}>
        <Navbar.Brand href="#home">
            <TiWeatherSunny/>
            Weather Forecast
        </Navbar.Brand>
    </Navbar>
    
     );
}

export default MyNavbar;