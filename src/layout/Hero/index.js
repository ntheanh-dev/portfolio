import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

import hero from '../../assets/images/avata.png'
import fence from '../../assets/images/fence2.png'
import style from "./Hero.module.scss"

const cx = classNames.bind(style)
function Hero() {

    let isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const socials = [
        {
            id: 1,
            Comp: BsFacebook,
            href: 'https://www.facebook.com/theanhnguyenmgt'
        },
        {
            id: 2,
            Comp: BsLinkedin,
            href: 'https://www.linkedin.com/in/the-anh-nguyen-9aa669246/'
        },
        {
            id: 3,
            Comp: BsGithub,
            href: 'https://github.com/Theanhmgt'
        }
    ]

    const handleLink = (href) => {
        window.open(href, "target")
    }

    return (
        <>
            {isTabletOrMobile ? (
                <Container fluid className={cx('bgrTabletorMobile')} id="/" >
                    <div className={cx('wrapper-tablet')}>
                        <div className={cx('top')}>
                            <Fade duration={'1500'} direction={'up'}>
                                <p>my name is The Anh</p>
                                <p>I'M A DEVELOPER</p>
                            </Fade>
                        </div>
                        <Fade duration={'2000'} >
                            <img src={fence} alt="alt" />
                            <div className={cx('socials-tab')}>
                                {socials.map(link => {
                                    const Comp = link.Comp
                                    return (
                                        <Comp
                                            key={link.id}
                                            onClick={() => handleLink(link.href)}
                                            className={cx('icon-tab')}
                                        />
                                    )
                                })}
                            </div>
                        </Fade>
                    </div>
                </Container>
            ) : (
                <Container fluid className={cx('background')} id="/" >
                    <Container className={cx('wrapper')}>
                        <Fade duration={'1500'} direction={'up'}>
                            <div className={cx('left')}>
                                <div className={cx('name')}>
                                    <p>Hi, I am</p>
                                    <p className={cx('my-name')}>Nguyen The Anh</p>
                                    <p className={cx('occupation')}>Front-end Developer / Editor</p>
                                </div>
                            </div>
                        </Fade>
                        <div className={cx('social')}>
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
                        <div className={cx('hero')}>
                            <Fade duration={'1500'} direction={'right'}>
                                <img src={hero} alt="alt" />
                            </Fade>
                        </div>
                    </Container>
                </Container>
            )}
        </>
    );
}

export default Hero;

