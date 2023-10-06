
import React from "react";
import Restlogo from "../images/Restlogo.png"

const Footer=() =>{
return(
    <footer>
        <section>
            <div className="restLogo-img">
                <img src={Restlogo} alt=""></img>
            </div>
            <div>
                <h3>Navigation Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order online</a></li>
                    <li><a href="/">Login</a></li>
                    
                </ul>
            </div>
            <div>
                <h3>Contact us</h3>
                <ul>
                    <li>Phone: <br/> +1 843 876 8888</li>
                    <li>Email: <br/>littleRestaurant.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
            </ul>
            </div>
            
        </section>
</footer>
)
}
export default Footer;