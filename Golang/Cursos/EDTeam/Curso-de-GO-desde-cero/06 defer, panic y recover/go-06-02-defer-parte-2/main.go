package main

import (
	"fmt"
	"os"
)

func main() {
	file, err := os.Create("./hello.txt")
	if err != nil {
		fmt.Printf("Ocurrio un error al crear el archivo: %v", err)
		return
	}
	defer file.Close() // con el defer podamos especificar el cierre
	_, err = file.Write([]byte("Hello soy GOKU"))
	if err != nil {
		// file.close()
		fmt.Printf("Ocurrió un error al crear el archivo: %+v", err)
		return
	}
	// file.Close()
}
