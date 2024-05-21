import Container from "react-bootstrap/Container";
import {Col, Image} from "react-bootstrap";
import Type from "./Type.jsx";
import pfp from "../../assets/profile-photo1.jpg"
function Home() {
return (
    <section id="home" className="d-flex align-items-center min-vh-100 min-vw-100  bg-light">
        <Container fluid className="text-center">
            <div className="d-flex flex-row align-items-center justify-content-around min-vh-100">
                <Col md={7}>
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                    </h1>

                    <h1 className="heading-name">
                        I&apos;M
                        <strong className="main-name"> YAHYA BIN NAVEED</strong>
                    </h1>

                    <div className="text-start d-flex justify-content-center">
                        <Type />
                    </div>
                </Col>
                <div className="d-flex mx-5">
                    <Image src={pfp} fluid roundedCircle />
                </div>
            </div>
        </Container>
    </section>
)
}

export default Home;