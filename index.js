document
.getElementById('registroForm')
.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Tomar datos del formulario
    const dataForm = {
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("lastname").value,
        fecha: document.getElementById("birthdate").value,
    };

    // Envia una solicitud POST al servidor
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataForm) // Convierte los datos en formato JSON
    })
    .then(response => response.json()) // Parsea la respuesta del servidor a JSON
    .then(data => {
        console.log("Respuesta del servidor:", data); // Maneja la respuesta del servidor aquí
    })
    .catch(error => {
        console.error("Error al mandar los datos", error); // Maneja errores en caso de problemas en la solicitud
    });

});
