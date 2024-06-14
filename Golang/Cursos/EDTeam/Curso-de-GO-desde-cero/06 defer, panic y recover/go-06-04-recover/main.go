package main

import "fmt"

func main() {
	// A pesar de que entre en panico quiero seguir la ejecucion, para eso la cuncion recover
	// nos recuperamos despues de entrar en panico.
	division(10, 2)
	division(10, 3)
	division(10, 5)
	division(10, 0)
	division(10, 1)
}

func division(dividendo, divisor int) {
	defer func() {
		if r := recover(); r != nil { // Este valor es el contenido de la funcion panico("🤦‍♀️")
			fmt.Println("Recuperandome de un panico", r)
		}
	}()
	validar_divisor(divisor)
	fmt.Println(dividendo / divisor)
}
func validar_divisor(divisor int) {
	if divisor == 0 {
		panic("🤦‍♀️")
	}
}
