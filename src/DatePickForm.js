import React from 'react';


var DatePickForm = React.createClass({
    getInitialState() {
        return ({ dateFrom: 'yea', dateTo: 'bua'  });
    },
    handleNextClick(event) {
        event.preventDefault();
        var formData = {dateFrom: this.state.dateFrom, dateTo: this.state.dateTo};
        this.props.stepForward(formData);
        console.log('Field was updated');
    },
    render() {
        return(<form>
            <div className="form-group">{/* We need always a root element */}
                <label for="from">From</label>
                <input type="date" className="form-control"/>
            </div>
            <div className="form-group">{/* We need always a root element */}
                <label for="to">To</label>
                <input type="date" className="form-control"/>
            </div>
            <button className="btn btn-success" onClick={this.handleNextClick}>Print Screen</button>
        </form>);
    }
});

export default DatePickForm;
