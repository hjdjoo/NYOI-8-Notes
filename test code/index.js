import React, { useState, useEffect } from 'react';  // you're gonna have import react each time.
import ReactDom from 'react-dom/client' // append elements to the DOM
import '.styles.css'

const App = () => {
    //useState
    const [cohorts, setCohorts] = useState([6, 7, 8]) 
    // cohorts - state value
    // setCohorts - a function to change state value.
    // We will use setCohorts function and pass through the new array in order to change the values.
    // this is called the "setter" function which change the "cohort" values.
    const boxes = [];
    for (let i = 0; i<cohorts.length; i++) {
        boxes.push(
            <Box number = cohorts[i]/>
        )
    }
    return (
        <section>
         {boxes}
        </section>
    )
}

const Box = (prop) => {
    return (
        <div>
            <p>Cohort {prop.number} is awesome!</p>
            <button>Click Me!</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)