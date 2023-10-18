import React from 'react';

function BackButtonComponent() {
    return (
        <button onClick={() => window.history.back()}>&larr;</button>
    );
}

export default BackButtonComponent;
