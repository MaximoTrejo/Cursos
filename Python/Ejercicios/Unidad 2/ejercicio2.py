import random
from tkinter import *
root = Tk()
e = Entry(root)
e.pack()
e.focus_set() 
frutas= ["Banana","Manzana"]
a= "quiero una" 
b= "y una" 
fruta1=frutas[0]
fruta2=frutas[1]
mostrar= a + fruta1 + b +fruta2
var = IntVar()
e.config(textvariable=var)
var.set(mostrar) 
mainloop() 