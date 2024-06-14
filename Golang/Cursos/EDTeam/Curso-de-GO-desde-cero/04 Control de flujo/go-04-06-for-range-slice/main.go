package main

import "fmt"

func main() {
	nums := []uint8{2, 4, 6, 8}
	// for i, v := range hello { // Notas: la i no se esta utilizando y se coloca el signo blanc
	for i, v := range nums {
		v *= 2       // El arreglo sera el mismo porque "v" es una copia
		nums[i] *= 2 // de este modo conseguimos modificar el arreglo
	}
	fmt.Printf("%+v", nums) // [4 8 12 16]
}
