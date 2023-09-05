document.getElementById("FormRegistro").addEventListener("submit", function (f) {
    f.preventDefault();

    const dataForm = {
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("lastname").value,
        fecha: document.getElementById("birthdate").value,
    };

    fetch("https://jsonplaceholder.typicode.com/users.", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataForm)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.error("Error al mandar los datos", error);
    });

});