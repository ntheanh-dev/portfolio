import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

import fence from "../../assets/images/fence.png"
import style from "./Contact.module.scss"
import Button from "../../components/button";
const cx = classNames.bind(style)
function Contact() {
    return (
        <Container className="Contact">
            <Row className="justify-content-center">
                <Col md={6} className={cx('wapper')}>
                    <Fade>
                        <Button outline>CONTACT</Button>
                    </Fade>
                    <p className={cx('text')}>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
                    <img className={cx('fence')} src={fence} alt="alt" />
                    <form>
                        <input type={'text'} placeholder={'ENTER YOUR NAME'} />
                        <input type={'text'} placeholder={'ENTER YOUR EMAIL'} />
                        <input type={'text'} placeholder={'PHONE NUMBER'} />
                        <textarea placeholder={'YOUR MESSAGE'} rows={'5'}></textarea>
                        <Button moreBlack>SUBMIT</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

