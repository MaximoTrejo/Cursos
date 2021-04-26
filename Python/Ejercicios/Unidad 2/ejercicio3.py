import random
from tkinter import *
root = Tk()
e = Entry(root)
e.pack()
e.focus_set() 
diccionario= {'identificador': 'valor1', 'nombre':'valor2', 'apellido':'valor3' ,'telefono':'valor4'}




a= "El número de elementos del diccionario es"
b="Las claves del diccionario son"

mostrartodo = a +  str(len(diccionario)) + b + str(diccionario['identificador'])+str(diccionario['nombre'])+str(diccionario['apellido'])+str(diccionario['telefono'])

var = IntVar()
e.config(textvariable=var)
var.set(mostrartodo) 
mainloop() 