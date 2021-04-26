import random
from tkinter import *
root = Tk()
e = Entry(root)
e.pack()
e.focus_set()
Num1 = 10
Num2 = 10
Entero = int(Num1)
Suma = Entero+Num2
print(Suma)
Multiplicacion= Suma*random.randint(1,2)
var = IntVar()
e.config(textvariable=var)
var.set(Multiplicacion)
mainloop()
