package main

import "fmt"

func main() {
	fmt.Println("======= MAPAS =======")
	// Los mapas son estructuras de clave valot
	// animals := make(map[string]string) //Nota: make(map[tipo_dato_llave]tipo_dato_valor)
	// animals["cat"] = "🐈"
	// animals["dogs"] = "🐕"
	// fmt.Printf("%+v", animals) // map[cat:🐈 dogs:🐕]

	// Otra forma de construirlos un mapa, es de su forma literal, así:
	// map[tipo_dato_llave]tipo_dato_valor
	fruits := map[string]string{
		"apple":   "🍎",
		"bananna": "🍌",
	}
	fmt.Printf("%+v \n", fruits) // map[apple:🍎 bananna:🍌]
	//delete(fruits, "bananna") // <<-- eliminar un elemento del map
	//fmt.Printf("%+v", fruits) // map[apple:🍎]

	fmt.Println(fruits["pineapple"] == "") // Esta vacio y como es tipo string lo tienes que comparar por comillas dobles
	// fruits["pineapple"] cuando queramos consultas un valor de esta manera, siempre nos va a retornar dos valores, el contenido y el si esa llave esiste o no
	emoji, ok := fruits["pineapple"]
	fmt.Println("emoji:", emoji) // "" aunque uno no lo vea es vacio
	fmt.Println("ok", ok)        // false <<- el ok da como resultado un boleano porque no existe la llave

	// Se agrega una llave yb un valor si no exite en el mapa
	//if emoji, ok := fruits["pineapple"]; !ok { // <<- emoji se remplaza por un _(identificador blank) para no generar error porque no se esta utilizando.
	if _, ok := fruits["pineapple"]; !ok {
		fruits["pineapple"] = "🍐"
	}
	fmt.Printf("%+v", fruits) // map[apple:🍎 bananna:🍌 pineapple:🍐]

}
