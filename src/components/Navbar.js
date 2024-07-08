import React from 'react';
import PropTypes from 'prop-types';

export function Navbar(props) {
    const headerStyle = {
        textAlign: 'center',
        height : "40px",
        padding: '0.5rem', // Equivalent to p-5
        backgroundColor: '#ffbf69',
        color: 'white',
    };

    const paragraphStyle = {
        fontSize: '1rem', // Equivalent to text-[1.5rem]
        fontWeight: '500', // Equivalent to font-medium
    };

    return (
        <div>
            <header>
                <div style={headerStyle}>
                    <p style={paragraphStyle}>{props.title}</p>
                </div>
            </header>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: 'set title here',
};

export default Navbar;
