import React from "react"

// TODO: Add a slideshow effect for main splash art
class HomePage extends React.Component {
    render() {
        return (
            <div className="splash-content">
                <div className="image-container"><img src="" alt=""/></div>
                <h1 className="center-vertical" id="title">Aidan Farber</h1>
                <h2 id="title-desc">Aspiring Software Developer</h2>
            </div>
        );
    }
}

export default HomePage;