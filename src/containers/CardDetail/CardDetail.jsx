import React, { Component } from 'react';
import './CardDetail.scss';
import { connect } from 'react-redux';
import { deleteCard, updateStatus } from '../../actions';

class CardDetail extends Component {
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    };
    this.props.closeCard();
  };

  deleteClick = () => {
    const { id } = this.props.card;

    this.props.onDelete({
      id
    });
    this.props.closeCard();
  }

  statusClick = () => {
    const { id, status_id } = this.props.card;
    switch (status_id) {
      case 1:
        this.props.onUpdateStatus({
          id,
          status_id: 2
        });
        this.props.closeCard();
        break;
      case 2:
        this.props.onUpdateStatus({
          id,
          status_id: 3
        });
        this.props.closeCard();
        break;
      default:
        break;
    }
  };


  render() {
    const { title, body, priority_id, status_id, createdByUser, assignedUser } = this.props.card;
    const classDetail = `cardDetail priority${priority_id}`
    const statusDetail = `status status${status_id}`
    return (
      <div className={classDetail} ref={node => this.node = node}>
        <div className={statusDetail} onClick={this.statusClick}></div>
        <div className="title">{title}</div>
        <div className="body">{body}</div>
        <div className="assigned">Assigned to: {assignedUser}</div>
        <div className="created">Created By: {createdByUser}</div>
        <div className="optionBox">
          <div className="option" onClick={this.deleteClick}>Delete</div>
          <div className="option" onClick={this.props.showEdit}>Edit</div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (cardId) => {
      dispatch(deleteCard(cardId));
    },
    onUpdateStatus: (status) => {
      dispatch(updateStatus(status));
    }
  };
};

CardDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);

export default CardDetail;