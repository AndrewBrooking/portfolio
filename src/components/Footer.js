import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Andrew Brooking 2019 Creative Commons</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
