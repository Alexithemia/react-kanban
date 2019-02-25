import React, { Component } from 'react';
import './KanbanBoard.scss';
import StatusSection from '../../components/StatusSection';
import { connect } from 'react-redux';
import AddCard from '../AddCard';
import Header from '../../components/Header';
import CardDetail from '../CardDetail';
import EditCard from '../EditCard';
import Login from '../Login';
import Register from '../Register';

class KanbanBoard extends Component {
  state = {
    addFormOpen: false,
    detailOpen: false,
    editFormOpen: false,
    loginOpen: false,
    registerOpen: false
  };

  shouldBlur = () => {
    const { addFormOpen, detailOpen, editFormOpen, loginOpen, registerOpen } = this.state;
    return (addFormOpen || detailOpen || editFormOpen || loginOpen || registerOpen);
  }

  toggleForm = () => {
    this.setState(prevState => {
      return { addFormOpen: !prevState.addFormOpen };
    });
  };

  closeForm = () => {
    this.setState({ addFormOpen: false });
  };

  toggleEdit = () => {
    this.setState(prevState => {
      return { editFormOpen: !prevState.editFormOpen };
    });
  };

  closeEdit = () => {
    this.setState({ editFormOpen: false });
  };

  toggleDetail = () => {
    this.setState(prevState => {
      return { detailOpen: !prevState.detailOpen };
    });
  };

  closeDetail = () => {
    this.setState({ detailOpen: false });
  };

  showLogin = () => {
    this.setState(prevState => {
      return { loginOpen: !prevState.loginOpen };
    });
  };

  closeLogin = () => {
    this.setState({ loginOpen: false });
  };

  showRegister = () => {
    this.setState(prevState => {
      return { registerOpen: !prevState.registerOpen };
    });
  };

  closeRegister = () => {
    this.setState({ registerOpen: false });
  };

  render() {
    let queue = [];
    let inProgress = [];
    let completed = [];
    this.props.cards.map((card) => {
      switch (card.status_id) {
        case 1:
          queue.push(card)
          break;
        case 2:
          inProgress.push(card)
          break;
        case 3:
          completed.push(card)
          break;
        default:
          break;
      };
      return {};
    });

    return (
      <>
        <Header title='Kanban' show={this.toggleForm} login={this.showLogin} />

        <div className="kanbanContainer">
          <div className={`columnContainer ${this.shouldBlur() ? 'blur' : ''}`}>
            <StatusSection title='Queue' cards={queue} showCard={this.toggleDetail} />

            <StatusSection title='In_Progress' cards={inProgress} showCard={this.toggleDetail} />

            <StatusSection title='Completed' cards={completed} showCard={this.toggleDetail} />
          </div>

          {this.state.addFormOpen ? <AddCard users={this.props.users} close={this.closeForm} showCard={this.toggleDetail} /> : null}

          {this.state.detailOpen ? <CardDetail card={this.props.selectedCard} closeCard={this.closeDetail} showEdit={this.toggleEdit} /> : null}

          {this.state.editFormOpen ? <EditCard users={this.props.users} card={this.props.selectedCard} closeEdit={this.closeEdit} /> : null}

          {this.state.loginOpen ? <Login closeLogin={this.closeLogin} registerUser={this.showRegister} /> : null}

          {this.state.registerOpen ? <Register closeRegister={this.closeRegister} /> : null}

        </div>
      </>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    selectedCard: state.selectedCard,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

KanbanBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);

export default KanbanBoard;