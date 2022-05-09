import ProjectCard from './ProjectCard'
import projects from '../data/projects';
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr'
import { useState } from 'react';

function ProjectPage () {
    var [index, setIndex] = useState(0);

    const prevProj = () => {
        if(index == 0) {
            setIndex(projects.length-1);
            return;
        }
        setIndex(--index);
    }

    const nextProj = () => {
        if(index == projects.length-1) {
            setIndex(0);
            return;
        }
        setIndex(++index);
    }

    return (
        <section id="project">
            <div id="carousel">
                <div className='projectCardArea'>
                    <ProjectCard project={projects[index]}/>
                    <div className='carouselNavBtn'>
                        <div onClick={prevProj} className='navbtn prev'><GrFormPreviousLink /></div>
                        <div onClick={nextProj} className='navbtn next'><GrFormNextLink /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectPage;