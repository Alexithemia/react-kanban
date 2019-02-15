import React from 'react';
import Card from '../../containers/Card';

const CardList = (props) => {
  const cardList = props.cards.map((card) => {
    return (
      <Card key={card.id}
        id={card.id}
        title={card.title}
        body={card.body}
        priority_id={card.priority_id}
        status_id={card.status_id}
        created_by={card.created_by}
        created_by_user={card.created_by_user}
        assigned_to={card.assigned_to}
        assigned_to_user={card.assigned_to_user}
        showCard={props.showCard}
      />
    );
  });

  return (
    <>
      {cardList}
    </>
  )
}

export default CardList;