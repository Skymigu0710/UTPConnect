import React from 'react';

function Notification({ type, date, message }) {
  return (
    <div className={`notification ${type}`}>
      <strong>[{date}]</strong><br />
      {message}
    </div>
  );
}

export default Notification;
