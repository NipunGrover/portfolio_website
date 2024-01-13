import {ArrowRightCircle} from 'react-bootstrap-icons';
import {Container, Row, Col} from 'react-bootstrap';


export const Banner = () => {
    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span classname="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi, I'm Nipun"}<span className="wrap">Software Developer</span></h1>
                        <p>Lorem Ipsum its lorem ipsum a fox just what ever klasdjdlskafjs</p>
                        <button onClick= {() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={""} alt="Header Img"/>

                    </Col>
                </Row>
            
            
            </Container>

        </section>



    );


}