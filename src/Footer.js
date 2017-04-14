import React from 'react';

var Footer = React.createClass({
  render: function () {
          return(<footer>
              &copy; {this.props.author} - 2017
                </footer>);
      }
});

export default Footer;
