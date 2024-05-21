import Container from 'react-bootstrap/Container';
import { Badge, Col, ProgressBar, Row } from 'react-bootstrap';

function Skills() {
    return (
        <section id="skills" className="d-flex align-items-center min-vh-100 bg-secondary text-white p-3">
            <Container className="text-center">
                <h1>Skills Section</h1>
                <p>Here&apos;s some of my greatest strengths.</p>

                <Row className="mt-5">
                    <Col md={6}>
                        <h3>Skills</h3>
                        <h5 className="d-flex justify-content-between">JavaScript <Badge bg="success">Expert</Badge>
                        </h5>
                        <ProgressBar now={90} label={`${90}%`}/>
                        <h5 className="d-flex justify-content-between mt-4">React <Badge bg="success">Advanced</Badge>
                        </h5>
                        <ProgressBar now={70} label={`${70}%`}/>
                        <h5 className="d-flex justify-content-between mt-4">Express.js <Badge
                            bg="success">Intermediate</Badge></h5>
                        <ProgressBar now={80} label={`${80}%`}/>
                        <h5 className="d-flex justify-content-between mt-4">Kotlin <Badge
                            bg="success">Expert</Badge></h5>
                        <ProgressBar now={90} label={`${90}%`}/>
                        <h5 className="d-flex justify-content-between mt-4">Android <Badge
                            bg="success">Expert</Badge></h5>
                        <ProgressBar now={95} label={`${95}%`}/>
                        <h5 className="d-flex justify-content-between mt-4">Flutter <Badge
                            bg="success">Expert</Badge></h5>
                        <ProgressBar now={95} label={`${95}%`}/>
                    </Col>
                    <Col md={6}>
                        <h3>More Skills</h3>
                        <h5 className="d-flex justify-content-between">Python <Badge bg="success">Advanced</Badge></h5>
                        <ProgressBar now={80} label={`${80}%`} />
                        <h5 className="d-flex justify-content-between mt-4">Mongo <Badge bg="success">Intermediate</Badge></h5>
                        <ProgressBar now={70} label={`${70}%`} />
                        <h5 className="d-flex justify-content-between mt-4">MySQL <Badge bg="success">Intermediate</Badge></h5>
                        <ProgressBar now={85} label={`${85}%`} />
                    </Col>
                </Row>
            </Container>        </section>
    )
}

export default Skills;