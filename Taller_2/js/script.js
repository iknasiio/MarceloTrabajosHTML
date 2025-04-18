// Variables globales
const formulario = document.getElementById('formulario');

// Función para validar el formulario
function validarFormulario(e) {
    e.preventDefault();
    
    // Obtener valor del email
    const email = document.getElementById('Email').value.trim();
    
    // Validar email
    if (!email.includes('@')) {
        document.getElementById('errorEmail').textContent = 'El correo debe contener @';
        return;
    }
    
    // Si todo está correcto
    document.getElementById('mensajeexito').textContent = 'Mensaje enviado correctamente';
    formulario.reset();
    
    // Limpiar mensaje después de 3 segundos
    setTimeout(() => {
        document.getElementById('mensajeexito').textContent = '';
    }, 3000);
}

// Event Listener
formulario.addEventListener('submit', validarFormulario);
