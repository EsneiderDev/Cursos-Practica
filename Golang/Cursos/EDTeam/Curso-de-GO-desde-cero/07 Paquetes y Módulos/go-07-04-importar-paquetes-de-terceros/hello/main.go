package main

import (
	"fmt"
)

/* No podemos referenciar como el paquete "fmt" los paquetes que uno desarrolla o de terceros porque go no sabria esta almacenado el codigo fuente
para importar el paquete, para esto utilizariamos los modulos de Go, estos nos permiten administrar las dependencias de nuestros paquetes y administrar
las versiones de los mismos. Los modulos podemos tener varios en nuestro repositorio pero se recomienda que sea uno en la raiz de nuestro proyecto. */

func main() {
	fmt.Println("Hello")
}
