import React, { useEffect } from 'react';
import Code from './Test_rafce'

const MultiProps = ({name, abe, hobby, userName: message, userAge: request, id}) => {
    useEffect(() => {
        console.log("hello");
    }, []);

    const cardClass = id ? "testMulti yellow" : "testMulti";

    return (
        <div className={cardClass}>
            <h2>Multi Compo Test By {name}</h2>
            <p>Test Passed with {abe} {hobby}</p>
            <Code message={message + ",i am " + name} />
            <p id={id}>Requests: {request}</p>
        </div>
    );
}

export default MultiProps