# Condicional IF ELSE
edad = 30
edad_minima = 18

if edad >=edad_minima:
    # TODO: aca implementare el accion cuando sea mayor de edad
   print('Eres mayor de edad, puedes ingresar')
elif edad>15:
    print('Puedes ingresar solko a los quinceañeros')
elif edad>10:
    print('Puedes ingresar al zoo')
else:
    print('Eres menor de edad, no puedes ingresar')

print('Yo siempre ejecuto')


#operador ternario
#es para devolver un valor y almacenarlo en una variable y en una sola linea de codigo
resultado='Eres mayor de edad' if edad>=edad_minima else 'Eres menor de edad'
print(resultado)


numero=10

if numero % 2 == 0:
    print('PAR')
else:
    print('IMPAR')

resultado1='PAR' if numero % 2 == 0 else 'IMPAR'
print(resultado1)

persona = {
    'nombre':'Raul',
    'nacionalidad':'Boliviana',
    'sexo':'M'
}

if persona['nombre']  == 'Raul' and persona['nacionalidad'] == 'Peruana':
    print('SI la persona es ',persona['nombre'],' y su nacionalidad es ',persona['nacionalidad'])
else:
    print('La persona es ',persona['nombre'],' y su nacionalidad es ',persona['nacionalidad'])


for numero in range(5,10,2):
    print(numero)

#len()=>saca la longitud de la variable
print(int(10.6))

