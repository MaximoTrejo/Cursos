from tkinter import *
import tkinter.messagebox

# COMPEMENTOS TREEVIEW
from tkinter.ttk import *
from tkinter import ttk

import mysql.connector
import re

root = Tk()
root.title("Proyecto Python")
titulo = Label(
    root,
    text="                                              Ingrese sus datos                          |                                Borre sus datos", background="DarkOrchid3",width=90
)
titulo.grid(row=0, column=0, columnspan=4, padx=1, pady=1, sticky=W)

Label(root, text="Nombre").grid(row=1, column=0, sticky=W)
Label(root, text="Telefono").grid(row=2, column=0, sticky=W)
Label(root, text="Correo Electronico").grid(row=3, column=0, sticky=W)
Label(root, text="Id").grid(row=1, column=2)


# TREEVIEW
tree = ttk.Treeview(root, columns=("#1", "#2", "#3"))
tree.grid(row=8, column=0, columnspan=4, sticky=W + E, pady=10)
tree.heading("#0", text="ID")
tree.heading("#1", text="nombre")
tree.heading("#2", text="telefono")
tree.heading("#3", text="correo electronico")
tree.column("#0", width=50)
tree.column("#1", width=60)
tree.column("#2", width=70)
tree.column("#3", width=130)





# ###########################################

def crearbd():
    try:
        mibase = mysql.connector.connect(host="localhost", user="root", passwd="")
        micursor = mibase.cursor()
        micursor.execute("CREATE DATABASE proyecto_py")
        mibase = mysql.connector.connect(
            host="localhost", user="root", passwd="", database="proyecto_py"
        )
        micursor = mibase.cursor()
        micursor.execute(
            "CREATE TABLE formulario( id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(128) COLLATE utf8_spanish2_ci NOT NULL, telefono varchar(128) COLLATE utf8_spanish2_ci NOT NULL, correo  text COLLATE utf8_spanish2_ci NOT NULL )"
        )
        print("Base de datos con tabla creada")
        tkinter.messagebox.showinfo("informacion", "La base de datos fue creada exitosamente")

    except:
        print("Ya existe la base de datos")
        tkinter.messagebox.showinfo("informacion", "La base de datos que desea crear ya es existente")


# ###########################################
def miconexion():

    mibase = mysql.connector.connect(
        host="localhost", user="root", passwd="", database="proyecto_py"
    )
    return mibase


# NO FUNCIONA MOSTRAR LOS DATOS DE LA BASE DE DATOS EN LA TABLA

def mostrar():
    # limpieza de tabla 
    records = tree.get_children()
    for element in records:
        tree.delete(element)
    # Consiguiendo datos
    sql = 'SELECT * FROM formulario ORDER BY id ASC'

    mibase = mysql.connector.miconexion()
    micursor = mibase.cursor()
        
    micursor.execute(sql)
    resultado = micursor.fetchall()

    for fila in resultado:
        print(fila)
        tree.insert('', 0, text = fila[0], values = (fila[1],fila[2],fila[3]))

        

# ###########################################
def alta():
    print("Nueva alta de datos")

    cadena = a_val.get()
    patron = "^[A-Za-z]+(?i:[ _-][A-Za-z]+)*$"
    if re.match(patron, cadena):
        tkinter.messagebox.showinfo("informacion", "Los datos fueron correctos")
        print("validado")
        mibase = miconexion()
        print(mibase)
        micursor = mibase.cursor()
        sql = "INSERT INTO  formulario(nombre, telefono, correo ) VALUES (%s, %s, %s)"
        datos = (a_val.get(), b_val.get(), c_val.get())
        micursor.execute(sql, datos)
        mibase.commit()



        print(
            "nombre="
            + a_val.get()
            + ", telefono="
            + b_val.get()
            + ", corre electronico="
            + c_val.get()
        )
        a_val.set("")
        b_val.set("")
        c_val.set("")
    else:
        tkinter.messagebox.showinfo("informacion", "Los datos no fueron correctos")
        print("NO validado")


# ###########################################
def baja():

    regex = "^[0-9]+$"
    d = d_val.get()

    if re.match(regex, d):
        
        print("borrado")

        mibase = miconexion()

        print(mibase)

        micursor = mibase.cursor()

        sql = "DELETE FROM  formulario  WHERE id = %s "

        datos = (d_val.get(),)

        micursor.execute(sql, datos)

        mibase.commit()
        
        tkinter.messagebox.showinfo("informacion", "Dato borrado exitosamente")
        d_val.set("")
    else:
        tkinter.messagebox.showinfo("informacion","ingrese el id que desea borrar , en caso de error el dato es inexistente",)
        print("NO borrado")




a_val, b_val, c_val, d_val = StringVar(), StringVar(), StringVar(), StringVar()
w_ancho = 23


def entradas(txt_var, width_e, row, col):
    entrada = Entry(root, textvariable=txt_var, width=width_e)
    entrada.grid(row=row, column=col, sticky=W)
    return entrada


entradas(a_val, w_ancho, 1, 1)
entradas(b_val, w_ancho, 2, 1)
entradas(c_val, w_ancho, 3, 1)
entradas(d_val, w_ancho, 1, 3)


# ###########################################

boton1 = Button(root, text="Crear Base de Datos", command=lambda: crearbd())
boton1.grid(row=7, column=0, sticky=W)

boton3 = Button(root, text="Baja", command=lambda: baja(), width=10)
boton3.grid(row=3, column=3)


boton2 = Button(root, text="Alta", command=lambda: alta(), width=10)
boton2.grid(row=6, column=1)



root.mainloop()