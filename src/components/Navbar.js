import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ title }) {
    const styles = {
        header: {
            textAlign: 'center',
            height: "40px",
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
        <header style={styles.header}>
            <p style={styles.paragraph}>{title}</p>
        </header>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: 'set title here',
};

export default Navbar;
