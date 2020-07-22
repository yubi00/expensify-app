import React from 'react'
import { connect } from 'react-redux'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            className="text-input" 
                            type="text" 
                            placeholder="Search expenses"
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}
                         />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                        startDate={this.props.filters.startDate}
                        startDateId={'startDate'}
                        endDate={this.props.filters.endDate}
                        endDateId={'endDate'}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                         />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () =>  dispatch(sortByAmount()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)