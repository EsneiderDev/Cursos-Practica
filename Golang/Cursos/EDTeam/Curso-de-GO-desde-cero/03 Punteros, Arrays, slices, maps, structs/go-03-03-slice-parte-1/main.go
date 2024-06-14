package main

import "fmt"

func main() {
	// Slice no poseen datos,
	set := [7]string{"🦁", "🎠", "🐄", "🦋", "🐦", "🛩️", "🚁"}
	animal := set[0:5]
	fly := set[3:7]
	fly[0] = "🦅"
	fmt.Printf("%+v", set)    // [🦁 🎠 🐄 🦋 🐦 🛩️ 🚁]
	fmt.Printf("%+v", animal) // [🦁 🎠 🐄 🦋 🐦]
	fmt.Printf("%+v", fly)    // [🦅 🐦 🛩️ 🚁]

	fmt.Println("All:", set[:]) // All:  [🦁 🎠 🐄 🦅 🐦 🛩️ 🚁]
}
