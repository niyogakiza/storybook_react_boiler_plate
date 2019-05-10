import React from 'react'
import PropTypes from 'prop-types'

const Buttons = ({ children, className, disabled, onClick, style, variant }) => (
    <button className={`btn btn-${variant} ${className}`.trim()} disabled={disabled} onClick={onClick} style={style}>
        {children}
    </button>
)

Button.DEFAULT = 'default'
Button.PRIMARY = 'primary'
Button.STATIC = 'static'
Button.LINK = 'link'
Button.DANGER = 'danger'
Button.SUCCESS = 'success'

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    variant: PropTypes.oneOf([Button.DEFAULT, Button.PRIMARY, Button.STATIC, Button.LINK, Button.DANGER, Button.SUCCESS]),
}

Button.defaultProps = {
    className: '',
    disabled: false,
    variant: Button.DEFAULT,
}

export default Buttons
