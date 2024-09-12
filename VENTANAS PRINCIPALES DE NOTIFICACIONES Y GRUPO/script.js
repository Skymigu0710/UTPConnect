function addNotification(type = 'info', message = 'Nueva notificación de la universidad.') {
    const notificationsContainer = document.getElementById('notifications');

    // Crear un nuevo elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // Obtener la fecha y hora actuales
    const now = new Date();
    const dateString = now.toLocaleDateString('es-ES');
    const timeString = now.toLocaleTimeString('es-ES');

    // Agregar el contenido a la notificación
    notification.innerHTML = `
        <strong>[${dateString} ${timeString}]</strong><br>
        ${message}
    `;

    // Agregar la notificación al contenedor
    notificationsContainer.appendChild(notification);
}

// Cargar notificaciones desde el almacenamiento local
function loadNotifications() {
    const notificationsContainer = document.getElementById('notifications');
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];

    storedNotifications.forEach(notification => {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = `notification ${notification.type}`;
        notificationDiv.innerHTML = `
            <strong>[${notification.date}]</strong><br>
            ${notification.message}
        `;
        notificationsContainer.appendChild(notificationDiv);
    });
}

// Guardar notificaciones en el almacenamiento local
function saveNotification(type, message) {
    const now = new Date();
    const dateString = now.toLocaleDateString('es-ES') + ' ' + now.toLocaleTimeString('es-ES');
    
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    notifications.push({ type, message, date: dateString });
    localStorage.setItem('notifications', JSON.stringify(notifications));
}

// Agregar una nueva notificación
function addNotification(type = 'info', message = 'New notification from the university.') {
    const notificationsContainer = document.getElementById('notifications');

    // Crear un nuevo elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // Obtener la fecha y hora actuales
    const now = new Date();
    const dateString = now.toLocaleDateString('es-ES');
    const timeString = now.toLocaleTimeString('es-ES');

    // Agregar el contenido a la notificación
    notification.innerHTML = `
        <strong>[${dateString} ${timeString}]</strong><br>
        ${message}
    `;

    // Agregar la notificación al contenedor
    notificationsContainer.appendChild(notification);

    // Guardar la notificación en el almacenamiento local
    saveNotification(type, message);
}

// Cargar notificaciones al cargar la página
window.onload = loadNotifications;
