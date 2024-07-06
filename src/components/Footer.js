import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
    const footerStyle = {
        // width: '100%',
        textAlign: 'center',
        padding: '1.25rem', // Equivalent to p-5
        backgroundColor: '#ffbf69',
        color: 'white',
    };

    const paragraphStyle = {
        fontSize: '1.5rem', // Equivalent to text-[1.5rem]
        fontWeight: '500', // Equivalent to font-medium
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
