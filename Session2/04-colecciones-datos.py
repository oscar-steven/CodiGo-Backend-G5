# Listas
dias = ['Lunes','Martes','Miercoles']

# metodo para agregar un nuevo valor a la lista
dias.append('Jueves')
print(dias)

# metodo para eliminar un valor de la lista
dias.remove('Martes')
print(dias)
# dias.clear()
print(dias)

otros_dias = ['Sabado','Domingo']

#para combinar dos o mas listas
dias_semana = [dias,otros_dias]
dias_semana = dias + otros_dias
print(dias_semana)

# VARIABLES MUTABLES / INMUTABLES
lista1=[1,2,3,4,5]
lista2=lista1
lista3=lista1[:]
lista1[0]=50

print(id(lista1))
print(id(lista2))
print(id(lista3))
print('La lista 1 es:',lista1)
print('La lista 2 es:',lista2)
print('La lista 3 es:',lista3)

# Tuplas
# coleccion igual que la lista pero la tupla no se puede modificar sus alores una vez creada
alumnos=('Eduardo','Pedro','Ana','Roberta')
# se usa para almacenar algunos valores que nunca va a cambiar su contenido
CONFIGURACION = (
    {
    'Nombre':'API_KEY',
    'Valor':'xxxxxxxxxxxxxxxxxx'
    },
    {
        'Nombre':'Sendgrid',
        'Valor':'asdsadasdasdasdasdasd'
    })

# Si una tupla internamente tiene otra coleccion de datos que si se puede modificar entonces normal se podra cmabiar su valor, sin embargo si tiene algun tipo de dato primitivo (STR,INT,FLOAT) ahi si entrara a tallar las propiedades de la tupla que no se pueden modificar sus valores
# alumnos[0]='Juan'
# CONFIGURACION[0]['Nombre']='XD'
print(CONFIGURACION[0])
print(CONFIGURACION)

#CONJUNTOS
#Es la unica coleccion de datos DESORDENADA
colores = {'rojo','verde','amarillo','azul'}

colores.remove('rojo')
colores.add('mostaza')
print(colores)

#DICCIONARIOS
#colecion de elementos que estan indexados cuentan con una llave (o clave) y su valor o contenido, se puede modificar el contenido y ademas se puede crear nuevas llaves

persona={
    'nombre':'Eduardo',
    'correo':'ederiveroman@gmail.com',
    'direcciones':[
        {
            'calle':'xxxx 123',
            'dpto':'arequipa'
        },
        {
            'calle':'yyyyyyy 4567',
            'dpto':'lima'
        }
    ],
    'est_civil':'soltero'
}

persona['estatura']='1,95'
print('Para saber las llaves del diccionario: ',persona.keys())
print('Para saber el contenido de todo el diccionario: ',persona.values())