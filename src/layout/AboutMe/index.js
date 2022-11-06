import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

import fence from "../../assets/images/fence.png"
import style from "./AboutMe.module.scss"
import Button from "../../components/button";
const cx = classNames.bind(style)
function About() {
    return (
        <>
            <Container fluid className={cx('background')}>
                <Container className={cx('wrapper')}>
                    <Fade duration={'1500'} direction={'left'}><h1>Objectives</h1></Fade>
                    <Fade duration={'1500'} direction={'right'}><p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p></Fade>
                    <Fade duration={'1500'} direction={'left'}><Button more>READ MORE</Button></Fade>
                </Container>
            </Container>
            <Container className={cx('body', 'AboutMe')}>
                <Row className="justify-content-center">
                    <Col md={6} className={cx('about')}>
                        <Fade duration={'1500'} direction={'up'}><Button outline>ABOUT ME</Button></Fade>

                        <p className={cx('content')}>Currently, I'm a sophomore at the Open University. Although I'm not a Fullstack Developer, I will get it in the future. I have been gathering my mind to become a good FrontEnd developer. Then I will be walking into Backend which I always wanted to learn after I have some experiences with FE. It sounds simple and crazy? That's right and I'll purpose it.</p>

                        <Button moreBlack>EXPLORE</Button>

                        <img src={fence} alt="alt" />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={3} className={cx('skill')}>
                        <MdOutlineCreateNewFolder className={cx('icon')} />
                        <div className={cx('name-skill')}>DEVELOPER</div>
                        <Fade duration={'1500'} direction={'up'}>
                            <div className={cx('des-skill')}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</div>
                        </Fade>
                    </Col>
                    <Col md={3} className={cx('skill')}>
                        <AiOutlineVideoCamera className={cx('icon')} />
                        <div className={cx('name-skill')}>EDITOR</div>
                        <Fade duration={'1500'} direction={'up'}>
                            <div className={cx('des-skill')}>I can edit a short video that conformity mullite foundations like TikTok, and Instagram and have basic knowledge of how to use the Adobe tools</div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;

