import React from "react"

class AboutMe extends React.Component {
    render() {
        return (
            <section id="about-me">
                <div id="about-content" className="splash-content">
                    <h2>About Me</h2>
                    <p id="about-desc">
                        My name is Aidan Farber, and I am a Computer Science student looking to explore a career as a software engineer.
                        I'm a naturally curious individual with many different interests ranging from photography,
                        to music, to exploring different aspects of computer science (for example, 
                        I've been learning about embedded systems recently).
                    </p>
                </div>
            </section>
        );
    }
}

export default AboutMe;
