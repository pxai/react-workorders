import React from 'react';

var data = [{
    "id" : "1",
    "when": "2017-04-10",
    "who": "2",
    "description": "Installed React"
    },
    {
        "id" : "2",
        "when": "2017-04-11",
        "who": "2",
        "description": "Installed Everything required."
    },
    {
        "id" : "2",
        "when": "2017-04-12",
        "who": "2",
        "description": "Trying all elements"
    }];

var App = React.createClass({
  render: function () {
    return (
      <div>
        Hello Workorders  React!
      </div>
    );
  }

});

export default App;
