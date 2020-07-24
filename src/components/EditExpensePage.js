import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import RemoveModal from '../components/RemoveModal'

export class EditExpensePage extends React.Component {
    state = {
        modalOpen: false
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/dashboard')
    }

    handleModal = () => {
        this.setState(() => ({
            modalOpen: true
        }))
    }

    handleCloseModal = () => {
        this.setState(() => ({
            modalOpen: false
        }))
        this.props.history.push('/dashboard')
    }
   
    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id })
        this.handleCloseModal()
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                    buttonLabel='Save'
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    />
                    <button className="button button--remove"  onClick={this.handleModal}>Remove</button>
                </div>
                <RemoveModal
                    modalOpen={this.state.modalOpen}
                    handleCloseModal={this.handleCloseModal}
                    onRemove={this.onRemove}
                />
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)