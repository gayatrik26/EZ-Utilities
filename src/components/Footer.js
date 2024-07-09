import React from 'react';
import PropTypes from 'prop-types';

function Footer({ title }) {
    const styles = {
        footer: {
            height: "40px",
            textAlign: 'center',
            padding: '0.5rem',
            backgroundColor: '#ffbf69',
            color: 'white',
        },
        paragraph: {
            fontSize: '1rem',
            fontWeight: '500',
        },
    };

    return (
        <footer style={styles.footer}>
            <p style={styles.paragraph}>&copy; 2024 {title}</p>
        </footer>
    );
}

Footer.propTypes = {
    title: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    title: 'set title here',
};

export default Footer;
