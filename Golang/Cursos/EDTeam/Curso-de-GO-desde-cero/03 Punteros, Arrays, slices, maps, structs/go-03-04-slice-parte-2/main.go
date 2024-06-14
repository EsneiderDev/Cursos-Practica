package main

import "fmt"

func main() {
	println("mod 2 - 04 slice parte 2")
	// food := [5]string{"🌭", "🍓", "🥭", "🍔", "🍕"}

	// fruits := food[1:3]
	// fruits = append(fruits, "🍍", "🍊", "🍐")
	// fmt.Println("food", food)
	// fmt.Println("fruits", fruits)
	// fmt.Println("Capacidad:", cap(fruits)) // Capacidad: 4

	// fruits := []string{"🍍", "🍊", "🍐"}
	// fmt.Println("fruits", fruits)
	// fmt.Println("tamaño", len(fruits))     // tamaño 2
	// fmt.Println("capacidad:", cap(fruits)) // capacidad 2

	// fruits := make([]string, 0, 3)
	// fruits = append(fruits, "🍍", "🍊", "🍐", "🍎")
	// fmt.Println("fruits", fruits)
	// fmt.Println("tamaño", len(fruits))     // tamaño 4
	// fmt.Println("capacidad:", cap(fruits)) // capacidad 6
	// Nota: el kduplica la capacidad y la coloca de 6 porque la esta

	var fruits []string
	fmt.Println("fruits", fruits)          // []
	fmt.Println("tamaño", len(fruits))     // tamaño 0
	fmt.Println("capacidad:", cap(fruits)) // capacidad 0
	fmt.Println(fruits == nil)             // true
	// Notas: "nil" es el valor vacio de los array o nulo en otros lenguajes

}
