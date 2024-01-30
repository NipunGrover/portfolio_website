import Nav from 'react-bootstrap/Nav';
import {Col, Container, Row, Tab} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import ColorSharp2 from '../assets/images/Color-sharp2.png';
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import notepadOnlineSS from "../assets/images/notepadOnlineSS.jpg";
import stringGameSS from "../assets/images/string-game-ss.jpg";
import shelterManagementSS from "../assets/images/shelter-management-app-ss.jpg";

export const Projects = () => {

    const  projects = [
        [
            {
                title: "Notepad Online",
                description: "Simple web based notepad using JS and .NET. Stores files on cloud. Click to see more details!",
                imgUrl: notepadOnlineSS,
                
            },
            {
                title: "Word Search Game",
                description: "WPF based word search game with C# backend and TCP connection. Supports multiple clients. Click to check out more details!",
                imgUrl: stringGameSS,
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
                title: "Shelter Management App",
                description: "Coming soon! Click to view more details",
                imgUrl: shelterManagementSS,
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

