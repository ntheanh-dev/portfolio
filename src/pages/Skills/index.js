import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

import fence from "../../assets/images/fence.png"
import style from "./Skills.module.scss"
import Button from "../../components/button";
import { mySkills } from "./getlogo";
const cx = classNames.bind(style)
function Skills() {
    return (
        <>
            <Container className={cx('wapper')}>
                <Row className="justify-content-center">
                    <div className={cx('head')}>
                        <img className={cx('fence')} src={fence} alt="alt" />
                        <Button outline>SKILLS</Button>
                    </div>
                    <Col md={6}>
                        <h1 className={cx('using-now')}>USING NOW:</h1>
                        <Row className="d-flex flex-wrap">
                            {mySkills.map((skill, index) => (
                                <Col key={index} md={3} className={cx('skill')}>
                                    <div><img src={skill.img} alt="alt" /></div>
                                    <span>
                                        {skill.name}
                                    </span>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Skills;

