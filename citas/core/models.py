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

    opcionesEstadoCivil = [
        ('SOLTERO','SOLTERO'),
        ('CASADO','CASADO'),
        ('DIVORCIADO','DIVORCIADO'),
        ('VIUDO','VIUDO'),
        ('COMPLICADO','COMPLICADO'),
        ('NO_ESPECIFICA','NO_ESPECIFICA')
        ]

    personaEstadoCivil = models.CharField(
        choices=opcionesEstadoCivil,
        db_column='estado_civil',
        default='NO_ESPECIFICA', # SI NO SE PROPORCIONA UN VALOR INICIAL ESTE SER EL VALOR POR DEFECTO
        max_length=50
    )

    personaFoto = models.ImageField(
        db_column='foto',
        upload_to='personas/', # es la carpeta donde se almacenara estos archiuvos dentro del proyecto
        null=True,
    )


    class Meta:
        # sirve para pasar metadata al padre, a la cofiguracion del modelo (Model)
        db_table='personas' # modificaremos el nombre con el que se guardara en la bd
        ordering=['-personaEmail','personaApellido'] # asc SELECT * .............. ORDER BY email DESC, apellido ASC
        # para crear una clausula unica e irrepetible entre dos o mas columnas
        # unique_together=[['nombre','email'],['nombre','apellido','estado_civil']]

class CitasModel(models.Model):

    opcionesEstado = [
        ('ACTIVA','ACTIVA'),
        ('CANCELADA','CANCELADA'),
        ('POSPUESTA','POSPUESTA'),
        ]


    citaid = models.AutoField(
        primary_key=True,
        unique=True,
        db_column='id'
    )

    citaDescripcion=models.TextField(
        db_column='descripcion',
        null=False,
    )

    citaFecha=models.DateTimeField(
        db_column='fecha',
        null=False
    )

    citaLatitud=models.FloatField(
        db_column='latitud',
        null=False
    )

    citaEstado = models.CharField(
        choices=opcionesEstado,
        db_column='estado',
        null=False,
        max_length=50
    )

    # CAMPOS QUE REGISTRAN LA FECHA DE MANERA AUTOMATICA CUANDO SE CREA UN NUEVO REGISTRO Y CUANDO SE ACTUALIZA UN REGISTRO > CAMPOS DE AUDITORIA O AUDIT FIELDS

    createdAt = models.DateTimeField(
        auto_now_add=True,   # agarrara la hora y fecha actual de la bd y pondra ese valor en este campo de manera automatica cuando se cree un nuevo registro
        db_column='created_at'
    )

    updatedAt = models.DateTimeField(
        auto_now=True,  # modificara el valor cada vez que se haga una modificacion en alguna columna del registro, la que sea y la modificara con su valor actual de la hora y fecha de la bd
        db_column='updated_at'
    )


    # ahora creamos las relaciones
    # https://docs.djangoproject.com/en/4.0/topics/db/examples/many_to_one/
    # que va a suceder cuando se elimine el padre (el citador):
    # CASCADE > es que primero se elimina el citador y luego se eliminan sus citas
    # PROTECT > protegera la eliminacion e indicara que no se puede po lo que manualmente tendremos que eliminar las citas para luego eliminar al citador
    # SET_NULL > eliminar a la persona y en su citas pondra el valor de null
    # DO_NOTHING > permite la eliminacion pero no hace nada en la columna FK, esto generara una mala integridad de los datos ya que tendremos informacion apuntando a personas que no existe
    # RESTRICT > no permite la eliminacion como el PROTECT pero lanzara un error de tipo RestrictedError
    # https://docs.djangoproject.com/en/4.0/ref/models/fields/#arguments
    citador = models.ForeignKey(
        to=PersonaModel, 
        db_column='citador_id',
        on_delete=models.PROTECT,
        related_name='personaCitas' # servira para ingresar desde la persona a las citas, se usa para las relaciones inversas (inverse relations), si no se delcara Django pondra un valor diferente.
    )

    citado = models.ForeignKey(
        to=PersonaModel, 
        db_column='citado_id',
        on_delete=models.PROTECT,
        related_name='personaCitadas' 
    )

    class Meta:
        # la tabla se llame citas
        # la fecha debe ser unica con el citador
        # la fecha debe de ser unica con el citado
        # no se indica el nombre de la columna de la base de datos, si no que se indica el nombre del atributo de la clase
        # ordenamiento sea por la fecha mas proxima (desc)
        db_table='citas'
        unique_together=[['citaFecha','citador'],['citaFecha','citado']]
        ordering=['-citaFecha']
