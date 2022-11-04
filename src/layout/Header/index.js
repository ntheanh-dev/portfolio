import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import style from "./header.module.scss"

import Button from "../../components/button";
const cx = classNames.bind(style)
function Header() {
    const links = [
        {
            id: 1,
            title: 'AbouteMe',
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
        }
    ]
    return (
        <Container fluid>
            <Container className={cx('navbar')}>
                {links.map(link => (
                    <p
                        key={link.id}
                        className={cx('link')}
                    >
                        {link.title}
                    </p>
                ))}
                <Button primary>CONTACME</Button>
            </Container>
        </Container>
    );
}

export default Header;