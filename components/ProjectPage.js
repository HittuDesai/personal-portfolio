import ProjectCard from './ProjectCard'
import projects from '../data/projects';

function ProjectPage () {
    return (
        <section id="project">
            <div id="carousel">
                {
                    projects.map(project => {
                        return (
                            <ProjectCard key={project["name"]} project={project}/>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default ProjectPage;