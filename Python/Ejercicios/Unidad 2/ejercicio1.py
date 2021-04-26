import random
from tkinter import *
root = Tk()
e = Entry(root)
e.pack()
e.focus_set() 
frutas= ["fruta1","fruta2","fruta3","fruta4","fruta5","fruta6","fruta7"]
mostrar=(frutas[2])
var = IntVar()
e.config(textvariable=var)
var.set(mostrar) 
mainloop() 
