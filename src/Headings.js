import React from 'react';
import Heading from './Heading';

var Headings = React.createClass({
    render: function() {
        var headings=this.props.headings.map(function(name, index) {
                return <Heading key={index} heading={name} />;
        });
        return (<thead><tr>{headings}</tr></thead>);
    }
});

export default Headings;