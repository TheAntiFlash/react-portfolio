import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className="d-flex align-items-center min-vh-100 bg-info text-white">
            <Container className="d-flex flex-column align-items-center text-center">
                <h1>Contact Section</h1>
                <p>Get in touch with me!</p>

                <Form className="w-75 min-width" >
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <div className="mt-3 d-flex gap-3">
                    <a href="https://www.instagram.com/yahya_bin_naveed" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
                    <a href="https://www.linkedin.com/in/yahya-bin-naveed" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
                </div>
            </Container>
        </section>
    )
}

export default Contact;