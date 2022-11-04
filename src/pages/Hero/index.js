import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

import style from "./Hero.module.scss"

const cx = classNames.bind(style)
function Hero() {
    return (
        <Container fluid className={cx('background')}>
            <Container className={cx('wrapper')}>
                <div className={cx('left')}>
                    <div className={cx('name')}>
                        <p>Hi, I am</p>
                        <p className={cx('my-name')}>Nguyen The Anh</p>
                        <p className={cx('occupation')}>Front-end Developer / UI Designer</p>
                    </div>
                </div>
                <div className={cx('social')}>
                    <Link className={cx('box')} target={"_blank"} to="https://www.linkedin.com/in/the-anh-nguyen-9aa669246/">
                        <BsLinkedin />
                    </Link>
                    <Link className={cx('box')} target={"_blank"} to="https://github.com/Theanhmgt">
                        <BsGithub />
                    </Link>
                    <Link className={cx('box')} target={"_blank"} to="https://www.facebook.com/theanhnguyenmgt/">
                        <BsFacebook />
                    </Link>
                </div>
            </Container>
        </Container>
    );
}

export default Hero;

