import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var appTitle ='Workorder App';

var data = [{
    "id" : "1",
    "who": "2",
    "when": "2017-04-10",
    "description": "Installed React"
},
    {
        "id" : "2",
        "who": "2",
        "when": "2017-04-11",
        "description": "Installed Everything required."
    },
    {
        "id" : "3",
        "who": "2",
        "when": "2017-04-12",
        "description": "Trying all elements"
    }];

var headings = ['Id','Who','When','Description'];

ReactDOM.render(
    <App title={appTitle} headings={headings} data={data} />,
    document.getElementById('root')
);
