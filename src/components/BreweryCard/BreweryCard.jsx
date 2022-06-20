import React from 'react';

const BreweryCard = ({ brewery: 
    {
        id, 
        name, 
        brewery_type, 
        street, 
        city, 
        state, 
        postal_code, 
        country, 
        phone, 
        website_url
    } }) => {
        const handleClick = () => {
            window.open({website_url});
        }
        return (
            <div className='brewery' key={id} onClick={handleClick}>
                <div>
                    <p>{brewery_type}</p>
                </div>
                <div>
                    <img src='https://thumbs.dreamstime.com/z/beer-logo-cap-vector-illustration-emblem-brewery-design-dark-background-95602710.jpg' alt='stockimage' />
                </div>
                <div>
                    <span>{city}, {state}</span>
                    <h3>{name}</h3>
                </div>
            </div>
        )
}

export default BreweryCard;