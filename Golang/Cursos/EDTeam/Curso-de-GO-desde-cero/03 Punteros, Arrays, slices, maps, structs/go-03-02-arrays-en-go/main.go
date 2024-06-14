package main

import "fmt"

func main() {
	var food [3]string
	food[0] = "🍔"
	food[0] = "🍕"
	food[0] = "🌭"
	fmt.Println(food)
	println("Arrays Literles")
	food2 := [3]string{"🍔", "🍕", "🌭"}
	fmt.Println(food2)
}
