from rest_framework import serializers
from .models import PersonaModel

class PersonasSerializer(serializers.ModelSerializer):
    # si el serializador es correspomdiente a un modelo entonces tendremos que pasar informacion a su metada, indicando a que modelo corresponde.
    class Meta:
        # model => indica en que modelo se tiene que basar para traer tooda su configuracion (que serian las columnas y sus tipos de datos para que al momento de serializar (formatear) lo convierta al tpo de dato correcto
        model=PersonaModel
        # fields > indica que columnas (atirbutos) va utilizar de ese modelo este serializador, si queremos que use todos entonces pondremos valor '__all_', sin embargo si queremos que solamente use determinadas columnas seria asi: ['personaNombre','personaCorreo']
        fields= '__all__'