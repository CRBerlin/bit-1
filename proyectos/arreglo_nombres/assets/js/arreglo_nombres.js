//Esperar que el documento de HTML se cargue.
document.addEventListener('DOMContentLoaded', () => {
    const nombres_clase = ["Lester", "Adiel", "Mario", "Natalia", "Carlos", "Hector", "Johan", "Armando", "Daniel", "Camilo"];
    const section_names = document.getElementById("section_names");
    const section_names_filtrados = document.getElementById("section_names_filtrados");
    const inputNames = document.getElementById("inputNames");
    const btnSearch = document.getElementById("btnSearch");
    // Recorrer el arreglo de nombres para ponerlo en el DOM.
    nombres_clase.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        section_names.appendChild(li);
    });
    // Escuchar si presionan Enter en el teclado.
    inputNames.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            startSearch();
        }
    });
    // Esccuhar el evento de click en el botón de buscar.
    btnSearch.addEventListener('click', startSearch);
    // Realizar la busqueda, primero pasando el texto y el arreglo a minúsculas.
    function startSearch() {
        section_names_filtrados.textContent = ''; //Limpiar resultados anteriores.
        const text = inputNames.value.toLowerCase().trim();
        if (text === '') {
            alert('Por favor ingrese un texto para buscar');
            return;
        };
        nombres_clase.forEach(nombre => {
            if (nombre.toLowerCase().startsWith(text)) {
                const li_filter = document.createElement("li");
                li_filter.textContent = nombre;
                section_names_filtrados.appendChild(li_filter);
            }
        });
    };
});


