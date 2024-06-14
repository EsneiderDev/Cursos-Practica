package main

import "fmt"

func main() {
	sports := map[string]string{"basketball": "🏀", "soccer": "⚽"}

	// for i, v := range hello { // Notas: la i no se esta utilizando y se coloca el signo blanc
	for key, value := range sports {
		fmt.Println("Key:", key, "valor:", value)
		/* Key: basketball valor: 🏀
		   Key: soccer valor: ⚽
		*/
	}

}
