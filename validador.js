// Sistema de Soporte Web - Validador de Credenciales
// Desarrollado por Marvin Ayala - Demuestra: Manipulación de Strings, Funciones y Lógica Web.

function validarRegistroUsuario(email, password) {
    console.log("=== INICIANDO VERIFICACIÓN DE SOPORTE TI ===");
    
    // 1. Validar que el correo tenga una estructura básica de internet
    if (!email.includes("@") || !email.includes(".")) {
        return "❌ ERROR L1: El formato del correo electrónico institucional no es válido.";
    }
    
    // 2. Validar seguridad básica de contraseña requerida por la empresa
    if (password.length < 8) {
        return "❌ ERROR L2: La contraseña no cumple con los estándares de seguridad (mínimo 8 caracteres).";
    }
    
    return "✅ VERIFICACIÓN EXITOSA: Los datos del usuario son correctos para el alta en el sistema.";
}

// --- Simulación de Casos de Soporte Técnico ---
// Caso 1: Usuario ingresa un correo dañado
console.log(validarRegistroUsuario("marvin-usuario.com", "Password123"));

// Caso 2: Usuario ingresa todo de forma correcta
console.log(validarRegistroUsuario("marvin@empresa.com", "Seguridad2026!"));
