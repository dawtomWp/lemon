import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../templates/PageTemplate';
import {PageBanner} from '../components/molecules/PageBanner';
import { useProjectsQuery } from '../hooks/useProjectsQuery';
import { ProjectCard } from '../components/molecules/ProjectCard';

const Page = () => {
   
    const data = useProjectsQuery();
    console.log(data.allWpProject.edges)

    const projectsList = data.allWpProject.edges.map((project) => 
     <ProjectCard 
       name={project.node.acfProjects.projectName}
       shortDesc={project.node.acfProjects.projectDesc}
       stack={project.node.acfProjects.projectStack}
       img={project.node.acfProjects.projectImage.sourceUrl}
       uri={project.node.acfProjects.projectLink}
     />
    )
    console.log(projectsList)

    return ( 
            <PageTemplate>

                <PageBanner title="Projekty" desc="Zobacz zrealizowane przez nas zlecenia"/>
               
                <Wrapper>           
                    <InnerWrapper>
                    {projectsList}
                       
                   
                    </InnerWrapper>   
                </Wrapper>
         
            </PageTemplate>
         
     );
}
 
export default Page;


const Wrapper = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 20px;
`
const InnerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    & > a {
        margin:15px;
    }
`