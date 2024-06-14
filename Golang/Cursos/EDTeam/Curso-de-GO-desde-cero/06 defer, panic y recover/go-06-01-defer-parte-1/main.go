package main

import "fmt"

func main() {
	// difer aplaza la ejecucion de una funcion
	//defer fmt.Println(3)
	//defer fmt.Println(2)
	//defer fmt.Println(1)
	// 1
	// 2
	// 3

	a := 5
	defer fmt.Println("Defer", a)
	a = 10
	fmt.Println(a)
	//10
	//Defer 5
}
