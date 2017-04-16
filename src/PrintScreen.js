import React from 'react';


var PrintScreen = React.createClass({
    handlePrintStart(event) {
        event.preventDefault();
        console.log('Field was updated');
    },
  render: function () {
      return(
                  <div >{/* We need always a root element */}
                      <button className="btn btn-success" onClick={this.props.stepForward}>Print Screen</button>
                  </div>);
      }
});

export default PrintScreen;
