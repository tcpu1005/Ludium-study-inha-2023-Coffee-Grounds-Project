import React from 'react';

function RequestListComponent(props) {
    return (
        <div>
            {props.requests.map(request => (
                <div key={request.id}>
                    {request.name} | {request.weight}kg 
                    <button onClick={() => props.collectRequest(request.id)}>수거</button>
                </div>
            ))}
        </div>
    );
}

export default RequestListComponent;
