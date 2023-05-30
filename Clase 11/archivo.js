var topping = "KitKat";
var precio;
var precioFinal;
var helado = 50;

if (topping === "Oreo") {
  precio = 10;
} else if (topping === "KitKat") {
  precio = 15;
} else if (topping === "Kinder") {
  precio = 25;
} else {
  console.log("No tenemos este topping");
}

if (precio) {
  precioFinal = helado + precio;
  console.log("El helado cuesta $" + precioFinal);
}
