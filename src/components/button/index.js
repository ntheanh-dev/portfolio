import classNames from "classnames/bind";
import style from './Button.module.scss'
import { Link } from "react-router-dom";
import { Link as LinkScrool } from "react-scroll";
const cx = classNames.bind(style)

function Button({
    to,
    href,

    primary = false,
    more = false,
    moreBlack = false,
    outline = false,
    text = false,
    disable = false,

    small = false,
    large = false,

    scroll = false,

    className,

    lefticon,
    righticon,

    onClick,

    children,
    ...passProps
}) {

    let Comp = 'button'

    const _props = {
        onClick,
        // target = _blak
        ...passProps
    }

    //Remove even listener when disable
    if (disable) {
        Object.keys(_props).forEach(key => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        })
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        more,
        moreBlack,
        outline,
        scroll,
        text,
        disable,
        small,
        large
    })

    if (to) {
        _props.to = to
        Comp = Link
    } else if (href) {
        _props.href = href
        Comp = 'a'
    }

    return (
        <Comp className={classes} {..._props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            {scroll ? (
                <LinkScrool to={scroll} spy={true} smooth={true} offset={50} duration={500} >
                    {children}
                </LinkScrool>
            ) : (
                <span className={cx('title')}>
                    {children}
                </span>
            )}
            {righticon && <span className={cx('icon')}>{lefticon}</span>}
        </Comp>
    );
}



export default Button;