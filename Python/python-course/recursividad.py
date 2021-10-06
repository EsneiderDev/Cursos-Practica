""" factorial: 9=362880 """
def factorial(n):
     if n == 0 or n == 1:
          resultado = 1
     elif n > 1:
          resultado = n * factorial(n-1)
     return resultado

numero = int(input("Numero: "))

print("Factorial",factorial(numero))

""" Fibonacci: 1,1,2,3,5,8,13,21,34,55,89,144 """
def fibonacci(n):
     if n == 1 or n == 2:
          return 1
     elif n > 2:
          return (fibonacci(n -1) + fibonacci(n - 2))

numero = int(input("Numero:"))  

print("Fibonacci: ",fibonacci(numero))

""" Torres de Hanoi """

""" def hanoi(n,pivote_inicial,pivote_final,pivote_auxiliar)
     if n == 1:
          print(pivote_inicial+"->"+pivote_inicial)
     else
          hanio(n-a, pivote_inicial, pivote_auxiliar, pivote_final)
          print(pivote_inicial+"->"+pivote_final)
          hanoi(n-1, pivote_auxiliar, pivote_final, pivote_inicial) """