import React, { useState, useEffect } from 'react';
import Notification from './Notification';

function NotificationWindow() {
  const [notifications, setNotifications] = useState([]);

  // Load notifications from localStorage on component mount
  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(storedNotifications);
  }, []);

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const addNotification = (type = 'info', message = 'Nueva notificación de la universidad.') => {
    const now = new Date();
    const dateString = now.toLocaleDateString('es-ES');
    const timeString = now.toLocaleTimeString('es-ES');

    const newNotification = {
      type,
      message,
      date: `${dateString} ${timeString}`,
    };

    setNotifications([...notifications, newNotification]);
  };

  return (
    <div className="notification-window">
      <h1>UNIVERSITY NOTIFICATIONS</h1>
      <div id="notifications">
        {notifications.map((notification, index) => (
          <Notification key={index} type={notification.type} date={notification.date} message={notification.message} />
        ))}
      </div>
      <button onClick={() => addNotification()}>ADD NOTIFICATIONS</button>
      <button onClick={() => addNotification('info', 'Este es un mensaje informativo.')}>Agregar Notificación Informativa</button>
      <button onClick={() => addNotification('warning', 'Este es un mensaje de advertencia.')}>Agregar Notificación de Advertencia</button>
      <button onClick={() => addNotification('error', 'Este es un mensaje de error.')}>Agregar Notificación de Error</button>
    </div>
  );
}

export default NotificationWindow;
