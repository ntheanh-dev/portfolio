import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

import { defaultProjects } from "./getProjects";
import Button from "../../components/button";
import style from "./Portofolio.module.scss"
import { useState } from "react";

const cx = classNames.bind(style)
function Portofolio() {
    // define section on screen 1: link, 2: sorcecode, 3: link figma
    const [section, setSection] = useState(1)

    const handleOpenProject = (project) => {
        switch (section) {
            case 1:
                window.open(project.link, 'target')
                break;
            case 2:
                window.open(project.source, 'target')
                break;
            case 3:
                project.figma && window.open(project.figma, 'target')
                break;
            default:
                break;
        }
    }

    return (
        <Container fluid className="Portfolio">
            <div className={cx('background')}>
                <Fade direction="up">
                    <Button outline>PORTOFOLIO</Button>
                </Fade>
            </div>
            <div className={cx('projects', 'active')}>
                <header>
                    <div className={cx(section === 1 && 'active')} onClick={() => setSection(1)} ><span>ALL</span></div>
                    <div className={cx(section === 2 && 'active')} onClick={() => setSection(2)} ><span>CODE</span></div>
                    <div className={cx(section === 3 && 'active')} onClick={() => setSection(3)} ><span>FIGMA</span></div>
                </header>
                <Row className={cx('body')}>
                    {defaultProjects.map(project => (
                        <Col
                            md={4}
                            key={project.id}
                        >
                            <Fade duration={1000 + project.id * 300} direction='up'>
                                <div
                                    className={cx('project')}
                                    style={{
                                        backgroundImage: `url("${section === 1 ? project.img : section === 2 ? project.imgSource : project.imgFigma}")`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    <div className={cx('detail')}>
                                        <h1>{project.name}</h1>
                                        <h2>{project.detail}</h2>
                                        <Button onClick={() => handleOpenProject(project)} more>MORE</Button>
                                    </div>
                                    <span className={cx('overlay')}></span>
                                </div>
                            </Fade>
                        </Col>
                    ))}
                </Row>
                <span className={cx('footer')}>And many more to come!</span>
            </div>
        </Container>
    );
}

export default Portofolio;

