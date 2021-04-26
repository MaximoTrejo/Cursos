from tkinter import *
root = Tk()
e = Entry(root)
e.pack()
e.focus_set()
x = "hola "
a = "mundo"
Mostrar = x + a
print(Mostrar)
var = IntVar()
e.config(textvariable=var)
var.set(Mostrar)
mainloop()