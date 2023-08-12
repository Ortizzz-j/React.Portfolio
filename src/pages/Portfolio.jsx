import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Homez from '../components/assets/Homez.png'
import ShSh from '../components/assets/ShapeShift.png'
import Rhythmix from '../components/assets/Rhythmix.png'
import './portfolio.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Portfolio = () => {
    const live = ['https://homez-a7bb0a2adb47.herokuapp.com/', 'https://shape-shift.herokuapp.com/', 'https://joepinoch.github.io/project-1/']
    return (
        <>
            <h1 className='d-flex justify-content-center port'>Portfolio</h1>
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Homez</h2>
                        <p>
                            Homez is a responsible ride share app that allows you to set up rides for your safe return home and a chauffer for your car's safe return home as well.
                        </p>
                        <p>
                            Repo Link: <a className="repos" href="https://github.com/dustinii/HOMEZ#installation">Homez</a>
                        </p>
                        <h4>Technologies</h4>
                        <ul>
                            <li>MongoDb</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                    </Col>
                    <Col>
                        <a href={live[0]} target="_blank">
                            <img className="projs" src={Homez}/>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href={live[1]} target="_blank">
                            <img className="projs" src={ShSh} />
                        </a>
                    </Col>
                    <Col>
                        <h2>ShapeShift</h2>
                        <p>
                            ShapeShift is a fitness app that allows you to track your workouts and your progress.
                        </p>
                        <p>
                            Repo Link: <a className="repos" href="https://github.com/Vlad1slav86/Workout-Tracker">ShapeShift</a>
                        </p>
                        <h4>Technologies</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>Handlebars</li>
                            <li>Node</li>
                            <li>Express</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Rhythmix</h2>
                        <p>
                            Rhythmix is a music app that allows you to find concerts and music events in your area based on genre.
                        </p>
                        <p>
                            Repo Link: <a className="repos" href="https://github.com/joepinoch/project-1">Rhythmix</a>
                        </p>
                        <h4>Technologies</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bulma</li>
                        </ul>
                    </Col>
                    <Col>
                        <a href={live[2]} target="_blank">
                            <img className="projs" src={Rhythmix} />
                        </a>

                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Portfolio;