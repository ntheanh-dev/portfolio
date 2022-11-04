import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import style from "./Protofolio.module.scss"

const cx = classNames.bind(style)
function Protofolio() {
    return (
        <Container fluid className={cx('background')}>

        </Container>
    );
}

export default Protofolio;

