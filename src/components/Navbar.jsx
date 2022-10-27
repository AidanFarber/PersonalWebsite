import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            <nav id="nav-container">
                <ul id="primary-navigation" className="primary-navigation flex">
                    <li className="active">
                        <a href="/"><img src="my-website/public/AF_Logo_icon.png" alt="AF" className="" id="main-logo"/></a>
                    </li>
                    <li className="center-vertical">
                        <a className="uppercase" href="#About">About</a>
                    </li>
                    <li className="center-vertical">
                        <a className="uppercase" href="#Projects">Projects</a>
                    </li>
                    <li className="center-vertical">
                        <a className="uppercase" href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }  
}

export default Navbar;
