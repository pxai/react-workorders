import React from 'react';
import Form from './Form';
import Footer from './Footer';

var WorkorderTable = React.createClass({
    getInitialState: function() {
        return {
            situation: 'Data ok'
        };
    },
    updateSituation: function (situation) {
        console.log('Updated situation');
       // this.setState({ situation: situation });
    },

  render: function () {
      var style= { fontFamily: 'Verdana' };
          return(<div style={style}>{/* We need always a root element */}
              <h1>{this.props.title}</h1>
              <em>{this.state.situation}</em>
              <button onClick={this.updateSituation('updated')}>Update</button>
              <Form />
              <table className="table">
                  {this.props.children}
              </table>
              <Footer author={this.props.author} />
          </div>);
      }
});

export default WorkorderTable;
