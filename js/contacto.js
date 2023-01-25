const values = {
    nombre: "",
    asunto: "",
    email: "",
    telefono: "",
};

const formulario = document.querySelector(".formulario");
const inputNombre = document.querySelector("#nombre");
const inputAsunto = document.querySelector("#asunto");
const inputEmail = document.querySelector("#email");
const inputTelefono = document.querySelector("#telefono");

const resetInputs = () => {
    inputNombre.value = "";
    inputAsunto.value = "";
    inputEmail.value = "";
    inputTelefono.value = "";
};

const mostrarMensaje = (msg, className) => {
    //Crear un elemento html
    const divError = document.createElement("div");
    divError.className = `alert ${className}`;
    const pError = document.createElement("p");
    pError.textContent = msg;
    divError.appendChild(pError);
    //Mostrar el mensaje de error
    formulario.appendChild(divError);
    //Quitar el error despues de 3 segundos
    setTimeout(() => {
        divError.style.transform = "scale(0)";
        setTimeout(() => {
            divError.remove()
        }, 300);
    }, 2000);
};

const handleInputChange = (e) => {
    values[e.target.name] = e.target.value;
};

const handleSubmit = (e) => {
    e.preventDefault();

    //Validando campos
    const { nombre, asunto, email, telefono } = values;
    if (
        nombre.trim().length == 0 ||
        asunto.trim().length == 0 ||
        email.trim().length == 0 ||
        telefono.trim().length == 0
    ) {
        mostrarMensaje("Todos los campos son obligatorios", "alert-danger");
        return;
    }

    //Envando datos
    mostrarMensaje("enviando datos...", "alert-success");
    console.log(values);

    //Limpiando campos
    resetInputs();
};

inputNombre.addEventListener("input", handleInputChange);
inputAsunto.addEventListener("input", handleInputChange);
inputEmail.addEventListener("input", handleInputChange);
inputTelefono.addEventListener("input", handleInputChange);
formulario.addEventListener("submit", handleSubmit);
