import React from 'react';
import './Card.css';

const Card = ({name, originalFees, discountedFees, feesCycle, ranking, tags, amenties, rating, ratingRemarks, famousNearestPlaces, nearestPlace, offerText}) => {
        return(
        	<div className="card">
              <div className="card-image">
                <div className='left-image'>
                  <div className='btn-like-div'><p className='btn-like-text'>{tags[0]}</p></div>
                  <div className='btn-like-div'><p className='btn-like-text'>{tags[1]}</p></div> 
                </div>
                <div className='right-image'>
                  <div className='sqr-like-div'>
                      <span className='sqr-like-text-big'>{rating}</span><span className='sqr-like-text-small'>/5</span> 
                      <p className='sqr-like-text-small'>{ratingRemarks}</p>
                  </div>
                  <span className="white-text">{ranking}</span>
                </div>
              </div>
              <div className="card-text">
                <div className='left'>
                  <p className='same-line landmark-dark margin-one' id='name'>{name}</p>
                  <div className='one-line margin-one'>
                    <p className='same-line landmark-dark'>{nearestPlace[0]} &nbsp;</p> 
                    <p className='same-line landmark-light'> | {nearestPlace[1]}</p>
                  </div>
                  <div className='one-line margin-one'>
                    <p className='same-line green-text'>93% Match :</p> 
                    <p className='same-line landmark-dark'>2.5kms</p> 
                    <p className='same-line landmark-light'>from GTB Nagar</p> 
                    <p className='same-line landmark-dark'>, 7 Kms</p> 
                    <p className='same-line landmark-light'>from Rajiv Chowk</p>
                  </div>
                    
                  <div id='green-bar' className='one-line'>
                    <p className='same-line landmark-light'>Flat&nbsp;</p>
                    <p className='same-line landmark-dark'>Rs&nbsp;</p> 
                    <p className='same-line green-text'>{offerText}&nbsp;</p>
                    <p className='same-line landmark-dar'>off + upto Rs&nbsp;</p>
                    <p className='same-line green-text'>500&nbsp;</p>
                    <p className='same-line landmark-dark'>wallet! to avail...&nbsp;</p>
                    <p className='same-line blue-text'>LOGIN</p>
                  </div>
                </div>

                <div className='right'>
                <p id='original-cost'>{`₹ ${originalFees}`}</p>
                <p id='final-cost'>{`₹ ${discountedFees}`}</p>
                <p id="duration">{feesCycle}</p>
                <p className='amenties'>{`${amenties[0]} . ${amenties[1]}`}</p>
                </div>
              </div>
          </div>
        )
}

export default Card;