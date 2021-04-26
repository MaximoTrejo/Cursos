from tkinter import *
import random

root = Tk()

Label(root, text="Ingrese sus datos", width=60, bg="green").grid(
    row=0, column=0, columnspan=30
)


def printenconsola():
    print(
        "Titulo="
        + Titulo.get()
        + ", Ruta="
        + Ruta.get()
        + ", Descripción="
        + Descripcion.get()
    )
    Titulo.set("")
    Ruta.set("")
    Descripcion.set("")
    print("\033[4;33m" + "Sus datos han sido ingresados")


def cambiacolor():
    Lista = ("yellow", "green", "black", "blue")
    root.configure(bg=random.choice(Lista))


Titulo, Ruta, Descripcion = StringVar(), StringVar(), StringVar()

root.geometry("400x300")

Label(root, text="Titulo").grid(row=1, column=0, sticky=W)
Label(root, text="Ruta").grid(row=2, column=0, sticky=W)
Label(root, text="Descripción").grid(row=3, column=0, sticky=W)
BoxTitulo = Entry(root, textvariable=Titulo).grid(row=1, column=3, sticky=W)
BoxRuta = Entry(root, textvariable=Ruta).grid(row=2, column=3, sticky=W)
BoxDescripcion = Entry(root, textvariable=Descripcion).grid(row=3, column=3, sticky=W)
Alta = Button(root, text="Alta", command=printenconsola).grid(row=5, column=2)
Sorpresa = Button(root, text="Sorpresa", command=cambiacolor).grid(row=5, column=5)
mainloop()