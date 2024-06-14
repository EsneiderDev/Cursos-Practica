package main

import "fmt"

func main() {
	fmt.Println(sum(10, 5))                     // 15
	fmt.Println(suma_indefinida(10, 20, 30, 9)) // 69
}

func sum(num1, num2 int) int {
	return num1 + num2
}

func suma_indefinida(nums ...int) int {
	total := 0
	//fmt.Println(nums) //[10 20 30 9]]
	//fmt.Printf("%+v", nums) //[10 20 30 9]
	for _, v := range nums {
		total += v
	}
	return total
}
