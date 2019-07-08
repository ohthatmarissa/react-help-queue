import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){

  return (
    <div>
      <style jsx global>{`
            div.ticketonly {
                background-color: pink;
            }
        `}</style>
      <div className="ticketonly">
        <h3>{props.location}-{props.names}</h3>
        <h4>{props.formattedWaitTime} ago</h4>
        <p><em>{props.issue}</em></p>
        <br></br>
        <hr/>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;