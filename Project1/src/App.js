import React from 'react';
import Person from "./Person";

const App = () => {
    return (
        <>
            <div>
                <h1>People Data</h1>
                <Person name="Akash Singh" age={20} />
                <Person name="Shubham Singh" age={30} />
            </div>
        </>
    )
}

export default App;