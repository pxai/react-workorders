import React from 'react';
import WorkorderTable from './WorkorderTable';
import Headings from './Headings';
import Rows from './Rows';
import jQuery from '../public/js/jquery.min';


var App = React.createClass({
    // Set defaults properties
    getDefaultProps: function() {
        return {
            title: 'Workorders App v3.0',
            headings: ['Id','Who','When','Description']
        };
    },
    getInitialState: function() {
        return {
            data: ''
        };
    },
    // Property validation. When errors, just warns on console
    propTypes: {
        title: React.PropTypes.string.isRequired,
        headings: React.PropTypes.array,
        data: React.PropTypes.array,
        author: function(props, propName, componentName) {
            if(propName === 'author' && props.author.length < 3)
                return Error('Failed Validation, must be longer thant 2');
        }
    },
    componentDidMount: function (){
        jQuery.ajax({
            url: '/api/data.json',
            context: this,
            dataType: 'json',
            type: 'GET'
        }).done(function (data) {
            return this.setState({data: data});
        });
    },
    render: function(){

        return(
            <WorkorderTable title={this.props.title ? this.props.title : 'Super Orders App'} author={this.props.author} >
                    <Headings headings={this.props.headings} />
                    <Rows data={this.state.data ? this.state.data : this.props.data} />
            </WorkorderTable>
        );
    }
});

export default App;
