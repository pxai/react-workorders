import React from 'react';

var Row = React.createClass({
  render: function () {
          return(<tr>
              <td>{this.props.cell.id}</td>
              <td>{this.props.cell.who}</td>
              <td>{this.props.cell.when}</td>
              <td>{this.props.cell.description}</td>
                </tr>);
      }
});

export default Row;
