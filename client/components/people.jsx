import React from 'react'

const PeopleList = ({peopleList}) => (
  <div className="row">
    <div className="col-sm-12">
      <div className="ui items">
      {peopleList.map(({_id, card, avatar}) => (
        <div className="item">
          <div className="image" style={{width: 'auto'}}>
            <img className="media-object" data-src="..." alt={card.name} src={avatar} style={{width: '4rem'}} />
          </div>
          <div className="content">
            <a className="header">{card.name}</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p>at {card.company.name} - {card.company.catchPhrase},  {card.company.bs}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  </div>)

export default PeopleList
