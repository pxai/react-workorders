import React from 'react';


var DatePickForm = React.createClass({
    handlePrintStart(event) {
        event.preventDefault();
        console.log('Field was updated');
    },
  render: function () {
      return(
                  <div >{/* We need always a root element */}
                      <button className="btn btn-success" onClick={this.props.stepForward}>Pick a date</button>
                  </div>);
      }
});

export default DatePickForm;
