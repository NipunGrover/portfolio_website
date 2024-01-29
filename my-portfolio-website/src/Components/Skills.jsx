import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import jsLogo from "../assets/images/js-logo.svg";
import cssLogo from "../assets/images/css-logo.svg";
import xamlLogo from "../assets/images/xaml.svg";
import cshLogo from "../assets/images/csh-logo.svg";
import reactLogo from "../assets/images/react-logo.svg";
import cppLogo from "../assets/images/cpp-logo.svg";
import cLogo from "../assets/images/c-logo.svg";
import bootstrapLogo from "../assets/images/bootstrap-logo.svg";
import aspLogo from "../assets/images/asp-net-logo.svg";
import sqlLogo from "../assets/images/database-logo.svg";

import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container> 
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                        
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                
                                <div className="item">
                                    <img src={jsLogo} alt="Image"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={cssLogo} alt="Image"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={cshLogo} alt="Image"/>
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={sqlLogo} alt="Image" className="white-logo" style={{ marginTop: '10px' }}/>
                                    <h5 style={{ marginTop: '12px' }}>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={aspLogo} alt="Image" className="white-logo" style={{ marginTop: '50px' }}/>
                                    <h5 style={{ marginTop: '20px' }}>.Net Framework and Core</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrapLogo} alt="Image" style={{ marginTop: '20px' }}/>
                                    <h5 style={{ marginTop: '24px' }}>Bootstrap CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={cppLogo} alt="Image"/>
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={cLogo} alt="Image"/>
                                    <h5>C Development</h5>
                                </div>
                                <div className="item">
                                    <img src={xamlLogo} alt="Image" className="white-logo"/>
                                    <h5>XAML (WPF)</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>

            <img className="background-image-left" src={colorSharp} />
        </section>


    )


}