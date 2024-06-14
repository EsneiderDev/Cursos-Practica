package main

import "fmt"

func main() {
	nums := []int{1, 4, 70, 5, 67, 90, 2}

	result := filter(nums, func(num int) bool {
		// return num >= 0 // forma corta
		if num >= 10 {
			return true
		}
		return false
	})

	fmt.Println(result) // [70 67 90]

	// echa por mi
	fruits := map[string]string{
		"apple":   "manzana",
		"bananna": "platano",
	}

	names := filter_name(fruits, func(n string) bool {
		return n == "platano"
	})
	fmt.Println(names) // platano

	x := hello("Esneider")
	fmt.Println(x("Como estas")) // Hello Esneider Como estas
	// Nota: a x trae la firma de la funcion.

	fmt.Println(x(", este es un texto")) // Hello Esneider , este es un texto
}

// "nums []int": va a recibir un slice de enteros
// "callback func(int) bool": funcion callback va hacer una funcion que recibira un entero y va a devolver un boolean y va a retornar un
// "[]int": retorna un slice de enteros
func filter(nums []int, callback func(int) bool) []int {
	result := []int{}
	for _, v := range nums {
		if callback(v) {
			result = append(result, v)
		}
	}
	return result
}

// hecha por mi
func filter_name(fruts map[string]string, callback func(string) bool) string {
	var name string
	for _, value := range fruts {
		if callback(value) {
			name = value
		}
	}
	return name
}

// === Una funcion que retorne otra función ==
func hello(name string) func(string) string {
	return func(text string) string {
		return "Hello " + name + " " + text
	}
}
