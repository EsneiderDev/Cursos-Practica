package main

import (
	"fmt"
	"strings"
)

func main() {
	name := "Esneider"
	min, may := convert(name)
	fmt.Println("Minuscula:", min, "Mayuscula:", may)
}

func convert(value string) (string, string) {
	min := strings.ToLower(value)
	may := strings.ToUpper(value)
	return min, may
}
