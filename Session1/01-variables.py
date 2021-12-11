# variavle numerica
numero = 10
numero2 = 10.5

numero=50


# variables de texto o string
nombre = "Oscar"
apellido = "Ramiro"

html="""<html>
<p>
</p>"""

print("holaaaa :)")
print(type(nombre))

#str = string
#int = integer
#float = float
print(type(numero))
print(type(numero2))
#bool = boolean
soltero = True
calor = False

print(type(soltero))

# VARIABLES que tienen varios VALORES
# ARREGLOS > LISTAS LIST

edades = [10,12 ,40, 60, 'Eduardo', 14.5, False, [1,2]]
# para ingresar a los valores de una lista debemos indicar la posicion que siempre empiza en 0, ademas si queremos usar valores negativos entinces ka kusta enoezara por la ultima posicion(-1: la ultima posicion)
# si nosotros en la posicion colocamos el siguiente formato: [n:m] entonces estaremos indicando que queremos ir desde la posicion 'n' hasta <'m' NOTA: Siempre el recorrido sera de izq a der aun asi usemos posiciones negativas
print(edades[0])

print(type(edades))

# JSON (JavaScript Objet Notation) | Diccionario
#Nota: si una llave se repite suu valor sera modificado y se perdera el anterior valor
curso = {
    'nombre': 'Backend',
    'dificultad': 'Dificil',
    'skills': [
        {
            'nombre':'Base de Datos',
            'nivel':'Intermedio'
        },
        {
            'nombre':'ORM',
            'nivel':'Avanzado'
        }
    ]
}



# quiero el nivel del skill ORM
print(curso['skills'][1]['nivel'])


personas = [
    {
    'nombre': 'Eduardo',
    'nacionalidad': 'peruano',
    'hobbies':[
        {
            'nombre': 'Volar drones',
            'experiencia': '2 años'
        },{
            'nombre':'Programar',
            'experiencia': '1 mes'
        }
    ]
},{
    'nombre': 'Juliana',
    'nacionalidad': 'colombiana',
    'hobbies':[
        {
            'nombre': 'Montar bici',
            'experiencia': '4 años'
        },{
            'nombre':'Bases de datos',
            'experiencia': '8 mes'
        }
    ]
}]

print(personas[0] ['nacionalidad'])

print(personas[1] ['hobbies'])

print(personas[0] ['hobbies'][1]['experiencia'])

