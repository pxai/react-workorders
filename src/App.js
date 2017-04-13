import React from 'react';



var App = React.createClass({
  render: function () {

      var rows = this.props.data.map(function(row){
          return <tr>
              <td>{row.id}</td>
              <td>{row.who}</td>
              <td>{row.when}</td>
              <td>{row.description}</td>
          </tr>;
      });


      var headers = this.props.headers.map(function(header) {
          return <th>{header}</th>;
      });

    return (
      <div>
          <h1>{this.props.title}</h1>
          <table>
              <thead>{headers}</thead>
              {rows}
          </table>
      </div>
    );
  }

});

export default App;
