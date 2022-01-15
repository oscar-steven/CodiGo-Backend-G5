from django.db import models
from django.db.models.base import Model

# Create your models here.

class PersonaModel(models.Model):
    personaId = models.AutoField(
        primary_key=True, # indica que esta columna sera la primery kkey de la tabla
        unique=True, # indica que no puede tener valores repetidos
        null=False, # indica que no puede tener valor alguno
        db_column='id') # indica el nombre que llevara en la tabla en la bd

    personaNombre = models.CharField(
        max_length=50, # que almacenara como maximo 50 caracteres
        unique=False, 
        null=False, 
        db_column='nombre' #si no lo indicamos entonces su nombre sera el mismo que el atributo
        )

    personaApellido = models.CharField(
        max_length=50, # que almacenara como maximo 50 caracteres
        unique=False, 
        null=False, 
        db_column='apellido' #si no lo indicamos entonces su nombre sera el mismo que el atributo
        )

    personaEmail = models.EmailField(
        max_length=50, # que almacenara como maximo 50 caracteres
        unique=True, 
        null=False, 
        db_column='Email' #si no lo indicamos entonces su nombre sera el mismo que el atributo
        )

    personaFechaNacimiento = models.DateField(
        db_column='fec_nac'
    )

    opcionesEstadoCivil = [('SOLTERO','SOLTERO'),('CASADO','CASADO'),('DIVORCIADO','DIVORCIADO'),('VIUDO','VIUDO'),('COMPLICADO','COMPLICADO'),('NO_ESPECIFICA','NO_ESPECIFICA')]

    personaEstadoCivil = models.CharField(
        choices=opcionesEstadoCivil,
        db_column='estado_civil',
        default='NO_ESPECIFICA' # SI NO SE PROPORCIONA UN VALOR INICIAL ESTE SER EL VALOR POR DEFECTO
    )

    personaFoto = models.ImageField(
        db_column='foto',
        upload_to='personas/', # es la carpeta donde se almacenara estos archiuvos dentro del proyecto
        null=True,
    )