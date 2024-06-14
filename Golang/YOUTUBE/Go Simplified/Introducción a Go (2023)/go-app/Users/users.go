package users

type Location struct {
	Country string
	State   string
	City    string
}

type Person struct {
	Name string
	Age  int
	Cell int
	Loc  Location
}

func New(name string, age int) Person {
	p := Person{
		Name: name,
		Age:  age,
		Cell: 312651841,
		Loc: Location{
			Country: "Colombia",
			State:   "Atlancito",
			City:    "Soledad",
		},
	}
	return p
}

// Notas: Si vamos a usar funciones publicas o protegidas la primera letra del metodo debe ir en minuscula

// func myFunc() {}
// Nota: Como es en minuscula esta funcion solo va a ser utilizada dentro de mi packe users
