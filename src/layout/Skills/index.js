import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

import fence from "../../assets/images/fence.png"
import style from "./Skills.module.scss"
import Button from "../../components/button";
import { mySkills, learning } from "./getlogo";
const cx = classNames.bind(style)
function Skills() {

    let isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    if (isTabletOrMobile) {
        mySkills.length = 3
    }

    return (
        <Container className={cx('wapper', 'Skills')}>
            <Row className="justify-content-center">
                <div className={cx('head')}>
                    <img className={cx('fence')} src={fence} alt="alt" />
                    <Fade direction="up">
                        <Button outline>SKILLS</Button>
                    </Fade>
                </div>
                <Col md={6}>
                    <Fade>
                        <h1 className={cx('using-now')}>USING NOW:</h1>
                        <Container>
                            <Row className="d-flex flex-wrap">
                                {mySkills.map((skill, index) => (
                                    <Col key={index} md={isTabletOrMobile ? 6 : 3} className={cx('skill')}>
                                        <div><img src={skill.img} alt="alt" /></div>
                                        <span>
                                            {skill.name}
                                        </span>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Fade>
                    <Fade>
                        <h1 className={cx('using-now')}>LEARNING:</h1>
                        <Container>
                            <Row className="d-flex flex-wrap">
                                {learning.map((skill, index) => (
                                    <Col key={index} md={isTabletOrMobile ? 6 : 3} className={cx('skill')}>
                                        <div><img src={skill.img} alt="alt" /></div>
                                        <span>
                                            {skill.name}
                                        </span>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;

