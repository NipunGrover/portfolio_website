import Nav from 'react-bootstrap/Nav';
import {Col, Container, Row, Tab} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import ColorSharp2 from '../assets/images/Color-sharp2.png';
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";

export const Projects = () => {

    const  projects = [
        [
            {
                title: "Business Startup",
                description: "This is a business startup website",
                imgUrl: projImg1,
                
            },
            {
                title: "Business Startup",
                description: "This is a business startup website",
                imgUrl: projImg2,
                link: "https://www.google.com",
            },
            {
                title: "Business Startup",
                description: "This is a business startup website",
                imgUrl: projImg3,
            },
        ],
        [
                {
                title: "Project 4",
                description: "This is project 4",
                imgUrl: projImg1,
                },
        ],
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    {/* <img classname="background-image-right" src={ColorSharp2}></img> */}
                        <Tab.Container defaultActiveKey="first">
                            <Nav variant="pills">
                                <Nav.Item id="projects-tabs-tab-first">
                                <Nav.Link eventKey="first" >Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item id="projects-tabs-tab-second">
                                <Nav.Link eventKey="second" >Tab 2</Nav.Link>
                                </Nav.Item>
              
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                    {

                                        projects[0].map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    onClick={() => console.log('Project clicked!')}
                                                    />
                                            )
                                            )
                                    
                                    } 
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects[1].map((project, index) => (
                                            <ProjectCard key={index} {...project} 
                                            onClick={() => console.log('Project clicked!')}
                                            />
                                        ))}
                                    </Row>

                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        
                    </Col>
                    
                </Row>
           
            </Container>
          
        </section>
      );


}

