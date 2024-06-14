package main

import "fmt"

// import "fmt"

func main() {
	hello := "hello"

	// for i, v := range hello { // Notas: la i no se esta utilizando y se coloca el signo blanc
	for _, v := range hello {
		fmt.Println(v) // 104,101,108,108,111 <-- los bit de cada letra
		//fmt.Println(string(v))
	}
	/* output:  h
				e
	 			l
				l
	 			o
	*/
}
