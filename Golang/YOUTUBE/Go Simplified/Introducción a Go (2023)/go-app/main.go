package main

import (
	"fmt"
	users "go-app/Users"
)

// type Location struct {
//		Country string
//		State   string
//		City    string
// }
//
// type Person struct {
// 		Name string
// 		Age  int8
// 		Loc  Location
// }

func main() {
	// var message int8 = 1 // entre 128 a 127
	// var message2 uint8 = 1;// <- entero con signos, desde el 0 a 255
	// var message3 int32 = 1 // <<-
	// print("Hello There ", message)

	// var message string
	// message = "My friend"
	// var message2 string = "Hello, " + message
	// print("Hello There ", message2)

	// Esto funciona. GO infiere el tipo de dato
	// var msg = "Hello world"
	// print(msg)

	// los dos puntos omiten la palabra reservada "var"
	// msg := "Hello world"
	// print(msg)

	// msg := 934

	//names := []string{
	//	"Esneider",
	//	"Manuel",
	//	"Andres",
	//	"Vanessa",
	//}
	//tambien ser asi []string{"Esneider" "Manuel" "Andres" "Vanessa"}
	// [] esta vacio dice que va a crecer de manera dinamica, este tipo de arreglo se le llama slices y esto seria un tipo de dato extra, encima de lo que se contruyo sobre los arreglos.

	//print(names) // <<-- [0/0]0xc000066770%, si no queremos esto importamos
	// fmt.Print(names) // <<-- [Esneider Manuel Andres Vanessa]%
	// fmt.Printf("Los nombre son: %v", names) // [Esneider Manuel Andres Vanessa]%
	// fmt.Printf("Los nombre son: %q", names) // <<- Los nombre son:[Esneider Manuel Andres Vanessa]% // <<-- Los nombre son: ["Esneider" "Manuel" "Andres" "Vanessa"]%

	// fmt.Printf("Los nombre son: %d	", names) // esta es para enteros: "Los nombre son: [%!d(string=Esneider) %!d(string=Manuel) %!d(string=Andres) %!d(string=Vanessa)]"
	// Notas: d: tipo entero, s: variable string, v: No sabemos que es

	//names = append(names, "Diego")
	//fmt.Printf("Los nombres %s", names)
	//fmt.Printf("Los nombres %s", names[2])
	//fmt.Printf("Los nombres %s", names[0:2])
	// Nota: La ultima posicion es inclusiva, osea no se va a mostrar porque es inclusivo

	// fmt.Printf("largo %v", names[0:len(names)])

	//names = names[1:len(names)] // Elimina la primera posicion, a Esneider
	//names = names[:len(names)-1] // Elimino el ultimo
	// Nota: Puedo omitir si es la primera posicion
	//fmt.Printf("largo %v", names)

	//print("\nBoleanos y condiconales \n")

	//shouldCountinue := false
	//if !shouldCountinue {
	//	shouldCountinue = true
	//} //else if {

	// }
	// fmt.Print(shouldCountinue)

	// print("\nCiclos o mas bien ciclo 'for' \n")

	/* == Ciclo "while" tradicional: ==
	int i = 0;
	while (i < 10) {
	    printf("%d\n", i);
	    i++;				*/

	// LOOP "while" en Goolang
	// # While en Go
	// i := 0
	// for i < 10 {
	// 	fmt.Println(i)
	// 	i++
	// }

	/* == Ciclo "Do While" tradicional: ==
	int i = 0;
	do {
		printf("%d\n", i);
		i++;
	} while (i < 10);   		 */

	// LOOP "Do while" en Goolang
	// j := 0
	// for {
	// 	fmt.Println(j)
	// 	j++
	// 	if j >= 10 {
	// 		break
	// 	}
	// }

	/* Ciclo "for" tradicional en Golang y otros lenguajes */
	// for i := 0; i < len(names); i++ {
	// fmt.Println(names[i])
	// }

	/* Otra forma ciclo "for range" para iterar los Slices */
	// for _, value := range names {
	// 	fmt.Println(value)
	// }

	//p := Person{}

	//p.Name = "Esneider"
	//p.Age = 20
	//fmt.Printf("%+v", p)
	//p.Loc = Location{
	//	Country: "Colombia",
	//	State:   "Atlantico",
	//	City:    "Soledad",
	//}
	//fmt.Printf("%+v", p) // {Name:Esneider Age:20 Loc:{Country: State: City:}}{Name:Esneider Age:20 Loc:{Country:Colombia State:Atlantico City:Soledad}}

	p := users.New("Esneider", 27)
	fmt.Print("%+v", p) // <-- %+v{Esneider 27 {Colombia Atlancito Soledad}}
}
