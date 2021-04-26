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
var = IntVar()
e.config(textvariable=var)
var.set(Suma)
mainloop()
