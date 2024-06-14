package main

import "fmt"

func main() {
	// hello("Esneider", "Buelvas")
	emoji := "🐕"
	// change(&emoji) // NO modificara emoji, entonces:
	change(&emoji) // le pasamos la referencia donde esta apuntando la variable
	fmt.Println(emoji)
}

/* func hello(firstName string, lastName string) {
	fmt.Printf("Hello %s %s", firstName, lastName) // Hello Esneider Buelvas
}
*/

func change(value *string) { // Este value es una copia
	*value = "😄"
}
