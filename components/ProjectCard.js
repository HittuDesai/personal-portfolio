import { MdExpandMore } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'
import { FaExternalLinkAlt } from 'react-icons/fa'


function ProjectPage ({ project }) {
    const handleMouseOver = (e) => {
        var currTarget = e.currentTarget;
        var absParent = currTarget.parentElement.parentElement;

        var textContainer = absParent.childNodes.item(1)
        var textDiv = textContainer.childNodes.item(1);

        var titleRowContainer = absParent.childNodes.item(0);
        var icon = titleRowContainer.childNodes.item(1);
        textDiv.classList.add("animateText");
        icon.classList.add("rotateExpandArrowIcon");

    }

    const handleMouseOut = (e) => {
        var currTarget = e.currentTarget;
        var absParent = currTarget.parentElement.parentElement;

        var textContainer = absParent.childNodes.item(1)
        var textDiv = textContainer.childNodes.item(1);

        var titleRowContainer = absParent.childNodes.item(0);
        var icon = titleRowContainer.childNodes.item(1);
        textDiv.classList.remove("animateText");
        icon.classList.remove("rotateExpandArrowIcon");

    }

    return (
        <section id={project["name"]} className="card">
            <div className="titleRow">
                <div className="projectName">{project["name"]}</div>
                <div className="expandArrow" onMouseOver={e => handleMouseOver(e)} onMouseOut={e => handleMouseOut(e)}><MdExpandMore className='expandArrowIcon' /></div>
            </div>
            <div className="projectImageOrText">
                <div className="projectImage"></div>
                <div className="projectText">{project["description"]}</div>
            </div>
            <div className="techStack">{
                project["techstack"].map((Tech, id) => {
                    return (
                        <Tech key={id}/>
                    )
                })
            }</div>
            <div className="projectLinks">
                <div className="introLine">LEARN MORE: </div>
                <div className="linksToProject">
                    <div className="githubLink"><a><SiGithub /></a></div>
                    <div className="websiteLink"><a><FaExternalLinkAlt /></a></div>
                </div>
            </div>
        </section>
    );
}

export default ProjectPage;