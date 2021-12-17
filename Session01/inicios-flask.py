from flask import Flask

# en python tenemos varias variables que son de uso propio de python no podemos modificar ni alterar
# esta variable sirve para indicar si estamos en el archivo principal del proyecto

app = Flask(__name__)

# el decorador sirve para usar el metodo de una clase pero implementandolo en una funcion
@app.route('/')
def inicio():
    return 'Bienvenido a mi API'

@app.route('/bienvenido')
def bienvenido():
    return 'Te doy la bienvenida a mi API'

@app.route('/bienvenido/home')
def bienvenido_home():
    # solamente podemos retornar los siguientes tipos de datos: Strings, tupla y diccionarios
    return 'Te doy la bienvenida a mi API HOME'

if __name__ == '__main__':
    # debug > para que cada vez que nosotros hagamos algun cambio en cualquier archivo del proyecto y se reinicie automaticamente entonces debermos indicar el parametro debug con el valor de true (cuyo valor por defecto es False)
    # port > cambiara el puerto donde escuchara nuestro backend
    #port=3000
    app.run(debug=True)