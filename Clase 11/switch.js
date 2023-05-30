var pedido = "pescado";
var bebida;

switch (pedido) {
  case "carne":
    bebida = "vino tinto";
    break;
  case "pescado":
    bebida = "vino blanco";
    break;
  case "verdura":
    bebida = "agua";
    break;
  default:
    console.log("Elija carne, pescado o verdura.");
}

if (bebida) {
  console.log(
    "El cliente pidió " + pedido + ". Se le ofrece " + bebida + " como bebida."
  );
}

var datos = ["dato1", "dato2", "dato3"];

for (var i = 0; i < datos.length; i++) {
  console.log(datos[i]);
}

var numero = 0;

while (numero < 20) {
  console.log(numero + " es más chico que 20");
  numero++;
}
