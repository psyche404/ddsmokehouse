import React from 'react';

const Events = ({ events }) => (
  <div className="events">
    {events.map((event) => (
      <div key={event.id} className="event">
        <h2>{event.title}</h2>
        <img src={event.image.url} alt={event.title} />
        <p>{event.description}</p>
        <p className="date">{new Date(event.date).toLocaleDateString()}</p>
      </div>
    ))}
  </div>
);

export default Events;
