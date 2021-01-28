import React from 'react';
import './card.css'

export default function CharacterCard({name, image,species,gender, status, origin, location}) {
    return (
       <article className="card card--character">
           <div className="card__head">
                <img className="card__image" src={image} alt={name}/>
                <div className="card__info">
                    <h3 className="card__title">{name}</h3>
                    <span className="card__tag">{species}</span> 
                </div>
           </div>
          <div className="card__body">
            <p className="card__text"><span>Name:</span> {name}</p>
            <p className="card__text"><span>Gender:</span> {gender}</p>
            <p className="card__text"><span>Location:</span> {location.name}</p>
            <p className="card__text"><span>Origin:</span> {origin.name}</p>
          </div> 
          <div className="card__footer">
            <p className="card__status">
                <span className="status__title">Status</span>
                <span className={`status__text status status--${status.toLowerCase()}`}>{status}</span>
            </p>
          </div>
       </article>
    )
}