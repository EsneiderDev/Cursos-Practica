package main

import "fmt"

func main() {
	fmt.Println("=== estructuras de datos ==")
	// Nota: Un struct (abreviatura de estructura) se utiliza para crear una colección de miembros de diferentes tipos de datos, en una sola variable.
	// Mientras que las matrices se utilizan para almacenar múltiples valores del mismo tipo de datos en una sola variable, las estructuras se usan para almacenar múltiples valores de diferentes tipos de datos en una sola variable.
	// Una estructura puede resultar útil para agrupar datos para crear registros.

	type course struct {
		Name      string
		Professor string
		Country   string
	}

	db := course{
		Name:      "Bases de datos",
		Professor: "Alexis",
		Country:   "Colombia",
	}

	fmt.Printf("%+v\n", db) // {Name:Bases de datos Professor:Alexis Country:Colombia}

	// Se pueden crear instancias a travez de una estructura literal, no necesitamos en este caso las llaves, solo el valor de los campos
	git := course{"Git", "Esneider", "Colombia"}
	css := course{Professor: "Manuel"}

	fmt.Printf("%+v\n", git) // {Name:Git Professor:Esneider Country:Colombia}
	fmt.Printf("%+v\n", css) // {Name: Professor:Manuel Country:}

	fmt.Printf("%+v\n", db.Name)       // Bases de datos
	fmt.Printf("%+v\n", git.Country)   // Colombia
	fmt.Printf("%+v\n", css.Professor) // Manuel

	// p := *&db.Country // puntero: Colombia
	p := &db.Country // puntero: 0xc000108f30
	fmt.Printf("puntero: %+v\n ", p)

	p2 := &db
	fmt.Printf("Puntero #2: %+v\n", p2) // Puntero #2: &{Name:Bases de datos Professor:Alexis Country:Colombia}

	(*p2).Professor = "Beto"
	fmt.Printf("db: %+v\n", db)         // {Name:Bases de datos Professor:Beto Country:Colombia}
	fmt.Printf("Puntero #2: %+v\n", p2) // {Name:Bases de datos Professor:Beto Country:Colombia}

	// ya no es necesario referenciar el puntero, GO ya lo hace automaticamente
	p2.Professor = "Juan"
	fmt.Printf("db 1: %+v\n", db)         // db 1: {Name:Bases de datos Professor:Juan Country:Colombia}
	fmt.Printf("Puntero #2.1: %+v\n", p2) // Puntero #2.1: &{Name:Bases de datos Professor:Juan Country:Colombia}

}
