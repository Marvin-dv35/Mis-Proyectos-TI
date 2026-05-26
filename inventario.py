# Sistema de Gestión de Inventario TI - Por [Marvin Ayala]
# Demuestra: Programación Orientada a Objetos, Diccionarios y Control de Flujo.

class Producto:
    def __init__(self, id_prod, nombre, cantidad, precio):
        self.id = id_prod
        self.nombre = nombre
        self.cantidad = cantidad
        self.precio = precio

class Inventario:
    def __init__(self):
        self.productos = {}

    def ingresar_mercaderia(self, producto):
        if producto.id in self.productos:
            self.productos[producto.id].cantidad += producto.cantidad
            print(f"--> Stock actualizado para: {producto.nombre}")
        else:
            self.productos[producto.id] = producto
            print(f"--> Nuevo producto registrado: {producto.nombre}")

    def mostrar_inventario(self):
        print("\n=== INVENTARIO ACTUAL DE LA TIENDA ===")
        for p in self.productos.values():
            print(f"ID: {p.id} | Componente: {p.nombre} | Stock: {p.cantidad} unidades | Precio: ${p.precio}")

# --- Prueba del Sistema ---
mi_tienda = Inventario()

# Simulando ingreso de mercadería (unidades de red y computación)
prod1 = Producto("NET-01", "Router Cisco ISR 4331", 5, 1200.00)
prod2 = Producto("HW-02", "Memoria RAM DDR4 16GB", 50, 45.00)

mi_tienda.ingresar_mercaderia(prod1)
mi_tienda.ingresar_mercaderia(prod2)

# Mostrando el reporte
mi_tienda.mostrar_inventario()
