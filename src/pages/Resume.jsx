import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import resume from '../components/assets/Mauricio_webDevRes.pdf'


const Resume = () => {
    const rdmp = ['AWS', 'Java', 'C#', 'Python', 'Javascript']
    const tech = ['Javascript', 'React', 'Node', 'Express', 'MySQL', 'MongoDB', 'HTML', 'CSS', 'Bootstrap', 'Git', 'Github', 'Heroku', 'Vite']
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="d-flex justify-content-center">Resume</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Technologies</h2>
                        <ul>{tech.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}</ul>
                    </Col>
                    <Col>
                        <h2>Road Map post Bootcamp</h2>
                        <ul>
                            {rdmp.map((rdmp, index) => (
                                <li key={index}>{rdmp}</li>
                            ))}
                        </ul>
                        <a href={resume} download="MauriciosResume" className="btn btn-success">
                            Download Resume!
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Resume;