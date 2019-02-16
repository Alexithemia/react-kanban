import React, { Component } from 'react';
import './AddCard.scss';
import { connect } from 'react-redux';
import { addCard, loadUsers } from '../../actions';
import UserList from '../../components/UserList'

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority_id: 4,
      status_id: 1,
      created_by: 0,
      assigned_to: 0
    };

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
    this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
    this.handleAssignedOnChange = this.handleAssignedOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    return this.props.loadUsers();
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  };

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({ title: value });
  };

  handleBodyOnChange(e) {
    const value = e.target.value;
    this.setState({ body: value });
  };

  handlePriorityOnChange(e) {
    const value = e.target.value;
    this.setState({ priority_id: value });
  };

  handleAssignedOnChange(e) {
    const value = e.target.value;
    this.setState({ assigned_to: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { title, body, priority_id, status_id, created_by, assigned_to } = this.state;

    this.props.onAdd({
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to
    });

    this.setState({
      title: '',
      body: '',
      priority_id: 4,
      status_id: 1,
      created_by: 0,
      assigned_to: 0
    });
    this.props.showCard();
    this.props.close();
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    };
    this.props.close();
  };

  render() {
    return (
      <div className='addCard' ref={node => this.node = node}>
        <h3>Add Card</h3>
        <form className='addForm'>
          Title:
          <input type="text" data-type="title" onChange={this.handleTitleOnChange} value={this.state.title} />
          Body:
          <textarea data-type="body" onChange={this.handleBodyOnChange} value={this.state.body}></textarea>
          Priority:
          <select data-type="priority_id" onChange={this.handlePriorityOnChange}>
            <option value={4}>Low</option>
            <option value={3}>Medium</option>
            <option value={2}>High</option>
            <option value={1}>Blocker</option>
          </select>
          Assign to:
          <select data-type="assigned_to" onChange={this.handleAssignedOnChange} defaultValue={this.state.assigned_to}>
            <UserList users={this.props.users} />
          </select>
          <button onClick={this.handleSubmit}>
            Save Card
          </button>
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (card) => {
      dispatch(addCard(card));
    },
    loadUsers: () => {
      return dispatch(loadUsers())
    }
  };
};

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCard;