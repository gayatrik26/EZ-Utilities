import React from 'react';
import PropTypes from 'prop-types';

export function Navbar(props) {
    const headerStyle = {
        textAlign: 'center',
        // width: '100%',
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
