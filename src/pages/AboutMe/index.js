import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { TiSpannerOutline } from "react-icons/ti";

import fence from "../../assets/images/fence.png"
import style from "./AboutMe.module.scss"
import Button from "../../components/button";
const cx = classNames.bind(style)
function About() {
    return (
        <>
            <Container fluid className={cx('background')}>
                <Container className={cx('wrapper')}>
                    <h1>Objectives</h1>
                    <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
                    <Button more>READ MORE</Button>
                </Container>
            </Container>
            <Container className={cx('body')}>
                <Row className="justify-content-center">
                    <Col md={6} className={cx('about')}>
                        <Button outline>ABOUT ME</Button>
                        <p className={cx('content')}>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>

                        <Button moreBlack>EXPLORE</Button>

                        <img src={fence} alt="alt" />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={3} className={cx('skill')}>
                        <TiSpannerOutline className={cx('icon')} />
                        <div className={cx('name-skill')}>DEVELOPER</div>
                        <div className={cx('des-skill')}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</div>
                    </Col>
                    <Col md={3} className={cx('skill')}>
                        <TiSpannerOutline className={cx('icon')} />
                        <div className={cx('name-skill')}>DEVELOPER</div>
                        <div className={cx('des-skill')}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} className={cx('skill')}>
                        <TiSpannerOutline className={cx('icon')} />
                        <div className={cx('name-skill')}>DEVELOPER</div>
                        <div className={cx('des-skill')}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;

