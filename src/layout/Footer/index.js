import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { MdDoubleArrow } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";


import style from "./Footer.module.scss"
import { Link } from "react-scroll";
const cx = classNames.bind(style)
function Footer() {

    const socials = [
        {
            id: 1,
            Comp: AiOutlineFacebook,
            href: 'https://www.facebook.com/theanhnguyenmgt'
        },
        {
            id: 2,
            Comp: AiOutlineLinkedin,
            href: 'https://www.linkedin.com/in/the-anh-nguyen-9aa669246/'
        },
        {
            id: 3,
            Comp: FaGithubSquare,
            href: 'https://github.com/Theanhmgt'
        }
    ]

    const handleLink = (href) => {
        window.open(href, "target")
    }

    return (
        <Container fluid className={cx('wapper')}>
            <div className={cx('backtotop')}>
                <Link to="/" spy={true} smooth={true} offset={50} duration={1000}>
                    <MdDoubleArrow />
                    <p>BACK TO TOP</p>
                </Link>
            </div>
            <div className={cx('socials')}>
                {socials.map((social) => {
                    const Link = social.Comp
                    return (
                        <div
                            key={social.id}
                            className={cx('box')}
                            onClick={() => handleLink(social.href)}
                        >
                            <Link />
                        </div>
                    )
                })}
            </div>
            <p className={cx('copyright')}>Copyright © 2022 NguyenTheAnh</p>
        </Container>
    );
}

export default Footer;

