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
                    <p className={cx('text')}>
                        Address: Ap 4, Đong Thanh, Hoc Mon, Ho Chi Minh.
                        <br /><a href="tel:+84 373506362">Phone: +84 373506362</a><br />
                        <a href="mailto:theanhmgt66@mail.com">Enail: theanhmgt66mail@mail.com</a>
                    </p>
                    <img className={cx('fence')} src={fence} alt="alt" />
                    <form>
                        <input type={'text'} placeholder={'ENTER YOUR NAME'} />
                        <input type={'text'} placeholder={'ENTER YOUR EMAIL'} />
                        <input type={'text'} placeholder={'PHONE NUMBER'} />
                        <textarea placeholder={'YOUR MESSAGE'} rows={'5'}></textarea>
                        <Button moreBlack>SUBMIT</Button>
                    </form>
                    <img className={cx('fence')} src={fence} alt="alt" />
                    <a download='THEANHNGUYEN_FRONEND_CV.pdf' href="ANHTHENGUYEN CD pdf" >
                        <Button primary>MY RESUME</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

