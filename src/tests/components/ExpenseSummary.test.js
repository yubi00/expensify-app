import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('should render ExpenseSummary page correctly for single expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={250}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly for multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={5} expensesTotal={1050}/>)
    expect(wrapper).toMatchSnapshot()
})