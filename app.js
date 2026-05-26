// Lógica de diagnóstico interactivo usando JavaScript Essentials 1
document.getElementById('btnVerificar').addEventListener('click', function() {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "⏳ Conectando con el servidor Cisco...";
    resultadoDiv.style.color = "#555";

    // Simulación de retraso de red (2 segundos) para que se vea real
    setTimeout(function() {
        let estados = [
            "✅ Sistema Operativo Estable. Ping: 12ms.",
            "✅ Base de datos de Inventario sincronizada correctamente.",
            "❌ ALERTA L3: Pérdida de paquetes detectada en el Switch principal."
        ];
        
        // Selecciona un estado de forma aleatoria para la simulación
        let respuestaAleatoria = estados[Math.floor(Math.random() * estados.length)];
        
        resultadoDiv.innerHTML = respuestaAleatoria;
        
        // Cambiar color del texto según el resultado
        if(respuestaAleatoria.includes("✅")) {
            resultadoDiv.style.color = "green";
        } else {
            resultadoDiv.style.color = "red";
        }
    }, 2000);
});
