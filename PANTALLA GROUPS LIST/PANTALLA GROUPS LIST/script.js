document.addEventListener("DOMContentLoaded", function() {
    const carreras = [
        {
            grupo: "ENGINEERING",
            cursos: ["Systems Engineering", "Software Development", "Networks and Telecommunications"]
        },
        {
            grupo: "HEALTH",
            cursos: ["Medicine", "Nursing", "Physiotherapy"]
        },
        {
            grupo: "BUSINESS",
            cursos: ["Business Administration", "Accounting", "Marketing"]
        }
    ];

    const container = document.getElementById('carrera-container');

    carreras.forEach(grupo => {
        // Crear el contenedor del grupo
        const groupDiv = document.createElement('div');
        groupDiv.className = 'carrera-group';

        // Crear el título del grupo
        const groupTitle = document.createElement('h2');
        groupTitle.textContent = grupo.grupo;
        groupDiv.appendChild(groupTitle);

        // Crear la lista de cursos
        const courseList = document.createElement('ul');
        courseList.className = 'carrera-list';

        grupo.cursos.forEach(curso => {
            const listItem = document.createElement('li');
            listItem.textContent = curso;
            courseList.appendChild(listItem);
        });

        groupDiv.appendChild(courseList);
        container.appendChild(groupDiv);
    });
});
