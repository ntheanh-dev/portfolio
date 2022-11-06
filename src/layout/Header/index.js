import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

import style from "./header.module.scss"
import Button from "../../components/button";
const cx = classNames.bind(style)
function Header() {
    let isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const [showBar, setShowBar] = useState(false);
    const [showHeader, setShowHeader] = useState(true)
    const lastScroll = useRef(0)

    useEffect(() => {
        const handleShowHeader = (e) => {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
            if (currentScroll >= 0 && lastScroll.current >= currentScroll) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
                setShowBar(false);
            }
            lastScroll.current = currentScroll;
        };
        window.addEventListener('scroll', handleShowHeader);

        return () => {
            window.removeEventListener('scroll', handleShowHeader);
        }
    });

    const links = [
        {
            id: 1,
            title: 'AboutMe',
            path: '/about',
        },
        {
            id: 2,
            title: 'Skills',
            path: '/skill'
        },
        {
            id: 3,
            title: 'Portfolio',
            path: '/Portfolio'
        },
        isTabletOrMobile && {
            id: 4,
            title: 'Contact',
            path: '/Contact'
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (!isTabletOrMobile) {
                if (document.body.scrollTop > 72 || document.documentElement.scrollTop > 72) {
                    navRef.current.classList.add('shrink');
                    navRef.current.classList.remove('container');
                } else {
                    navRef.current.classList.remove('shrink');
                    navRef.current.classList.add('container');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleToggle = () => {
        setShowBar(!showBar);
    }
    const navRef = useRef()
    return (
        <>
            {isTabletOrMobile ? (
                <>
                    {showHeader && (
                        <>
                            <Container fluid className={cx('navbaronTab')}>
                                <Container>
                                    {showBar ? <MdClose onClick={handleToggle} /> : <FaBars onClick={handleToggle} />}
                                </Container>
                            </Container>
                            <Container fluid className={cx('linksontab', showBar && 'active')}>
                                <ul>
                                    {links.map(link => (
                                        <li
                                            key={link.id}
                                        >
                                            <Link
                                                to={link.title} spy={true} smooth={true} offset={50} duration={500}
                                                key={link.id}
                                                className={cx('link')}
                                                onClick={handleToggle}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Container>
                        </>
                    )}
                </>
            ) : (
                <Container fluid>
                    <Container className={cx('navbar')} ref={navRef}>
                        {links.map(link => (
                            <Link
                                to={link.title} spy={true} smooth={true} offset={50} duration={500}
                                key={link.id}
                                className={cx('link')}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <Button primary scroll='Contact'>CONTACME</Button>
                    </Container>
                </Container>
            )}
        </>
    );
}

export default Header;