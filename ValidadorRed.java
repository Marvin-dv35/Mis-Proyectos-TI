// Validador de Direcciones IP - Por [Tu Nombre]
// Demuestra: Estructuras condicionales, manejo de Strings y lógica de redes.

import java.util.Scanner;

public class ValidadorRed {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("=== SISTEMA DE SOPORTE TI - VERIFICADOR DE IP ===");
        System.out.print("Ingrese una direccion IP para validar formato basico: ");
        String ip = scanner.nextLine();

        // Validación simple de segmentos (Ejemplo: comprueba que no esté vacía y tenga puntos)
        if (ip.contains(".") && ip.split("\\.").length == 4) {
            System.out.println("✅ El formato de la IP [" + ip + "] es valido para la red corporativa.");
        } else {
            System.out.println("❌ ERROR: La direccion IP no cuenta con los 4 octetos requeridos.");
        }
        scanner.close();
    }
}
