import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
    const footerStyle = {
        height : "40px",
        textAlign: 'center',
        padding: '0.5rem',
        backgroundColor: '#ffbf69',
        color: 'white',
    };

    const paragraphStyle = {
        fontSize: '1rem', 
        fontWeight: '400', 
    };

    return (
        <div>
            <footer style={footerStyle}>
                <p style={paragraphStyle}>&copy; 2024 {props.title}</p>
            </footer>
        </div>
    );
}

Footer.propTypes = {
    title: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    title: 'set title here',
};

export default Footer;
