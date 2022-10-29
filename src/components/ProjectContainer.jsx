import React from "react"
import PropTypes from "prop-types"

const ProjectCard = (props) => {
    let link;
    if (this.props.projectLink !== "") {
        link = <a className="project-link" href={this.props.projectLink}>Link to the project on GitHub!</a>
    } else {
        link = <></>;
    }

    return (
        <div className="card">
            <h3 className="project-title">{this.props.projectTitle}</h3>
            <p className="description">
                {this.props.projectDescription}
            </p>
            {link}
        </div>
    )
}

class ProjectContainer extends React.Component {
    render() {
        return (
            <section>
                <div className="splash-content">
                    <ProjectCard 
                        projectTitle="Personal Website" 
                        projectDescription="The site you're currently on! The original version of this
                        was written mainly in Python using Flask, but is currently utilizing ReactJS instead!
                        The HTML is written to be screen-reader friendly and all the CSS stylings were done by me!
                        This site is meant to be a collection of my professional work, and is designed to be modular
                        so I can always add new projects without needing to write a ton of code."
                        projectLink=""
                    />
                    <ProjectCard 
                        projectTitle="" 
                        projectDescription=""
                        projectLink=""
                    />
                    <ProjectCard 
                        projectTitle="" 
                        projectDescription=""
                        projectLink=""
                    />
                </div>
            </section>
        );
    }
}

ProjectCard.propTypes = {
    projectTitle: PropTypes.string,
    projectDescription: PropTypes.string,
    projectLink: PropTypes.string
}

export default ProjectContainer;