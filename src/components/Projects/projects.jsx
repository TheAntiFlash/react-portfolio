import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import airtime from "../../assets/airtime.png";
import kitchenkrust from "../../assets/kitchenkrust.png";
import univents from "../../assets/univents.png";

const projects_list = [
    {
        name: 'AirTime',
        description: 'A blogging website made with Dot Net Core and Blazor',
        image: airtime,
    },
    {
        name: 'Kitchen Krust',
        description: 'A restaurant delivery app made with Firebase, React, Express & Node (FERN)',
        image: kitchenkrust,
    },
    {
        name: 'Univents',
        description: 'A university event management app made with Flutter & Firebase',
        image: univents,
    },
];


function Projects() {
    return (
        <section id="projects" className="d-flex flex-column align-items-center min-vh-100 bg-dark text-white">
            <h1 className="my-5">Projects</h1>
            <Container>
                <Row>
                    {projects_list.map((project, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Projects
