package main

import (
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"os"
)

func main() {
	// Declare and initialize the variables content and err
	content, err := ioutil.ReadFile("./things.txt")
	if err != nil {
		fmt.Printf("Ocurrio un error: %v", err)
		return // Exit the function if there's an error
	} else {
		fmt.Println(string(content)) // hola, estas leyendo el parrafo del archivo
	}

	// io/ioutil esta en deshuso u obsoleto (DEPRECATED)

	// Readlink returns the relative path as passed to os.Symlink.
	data, err := os.ReadFile("./things.txt")
	if err != nil {
		log.Fatal(err)
	}
	os.Stdout.Write(data) // hola, estas leyendo el parrafo del archivo%

	result, err := divicion(10, 2)
	if err != nil {
		log.Fatal(err) // 024/06/13 13:42:52 No se puede dividir por cero exit status 1
	}
	fmt.Println("\n", result) // 5

}

func divicion(dividendo, divisor int) (int, error) {
	if divisor == 0 {
		return 0, errors.New("No se puede dividir por cero")
		// otra forma de retornar pero es menos utilizada y en la version de 1.20 no fuinciono
		//err = errors.New("No se puede dividir por cero")
		//return
	}

	return dividendo / divisor, nil
	// otra forma de retornar pero es menos utilizada y en la version de 1.20 no fuinciono
	// result = dividendo / divisor, nil
	//return result
}
