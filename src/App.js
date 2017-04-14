import React from 'react';
import Headings from './Headings';
import Rows from './Rows';

var App = React.createClass({
    render: function(){
        var style= { fontFamily: 'Verdana' };
        return(
            <div style={style}>{/* We need always a root element */}
                <h1>{this.props.title}</h1>
                <table>
                    <Headings headings={this.props.headings} />
                    <Rows data={this.props.data ? this.props.data : ''} />
                </table>
            </div>
        );
    }
});

export default App;
