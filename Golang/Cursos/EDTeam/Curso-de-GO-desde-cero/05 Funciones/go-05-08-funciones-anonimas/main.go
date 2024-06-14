package main

import "fmt"

func main() {
	// funcion anonima
	// fn := func() {
	// 	fmt.Println("Hello")
	// }
	// fn() // Hello

	// No es necesario pasarle la el contexto de la funcion sino invocarla a ella misma
	func(name string) {
		fmt.Println("Hello", name) // Hello Esneider
	}("Esneider")
}
