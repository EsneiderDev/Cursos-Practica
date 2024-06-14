package main

import "fmt"

func main() {
	// finalizar la ejecucion del programa cuando la funcion panic es llamada.
	division(10, 2)
	division(10, 3)
	division(10, 5)
	division(10, 0)
	division(10, 1)
}

func division(dividendo, divisor int) {
	validar_divisor(divisor)
	fmt.Println(dividendo / divisor)
}
func validar_divisor(divisor int) {
	if divisor == 0 {
		panic("🤦‍♀️")
	}
}
