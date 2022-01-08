from faker import Faker;
from faker.providers import person, internet

objFaker = Faker()
objFaker.add_provider(person)
objFaker.add_provider(internet)

# print(objFaker.first_name_nonbinary())
# print(objFaker.free_email())
# print(objFaker.name())

cursos = ['COMUNICACION', 'CTA', 'INGLES', 'FRENCH']

# Para no repetir en una lista.
data = [[1,3],[10,2],[32,1],[55,4],[86,3],[10,1]]
x = 0
while x < 200:
    curso = objFaker.random_int(min=1, max=4)
    alumno = objFaker.random_int(min=1, max=100)
    if [alumno, curso] not in data:
        x+=1
        print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES({alumno}, {curso});')
        data.append([alumno, curso])



for namecursos in cursos:
    print(f"INSERT INTO CURSOS (NOMBRE) VALUES ('{namecursos}');")
    # print("INSERT INTO CURSOS (NOMBRE) VALUES ('{}');".format(namecursos))

# num = range(100)
# for x in num:
#     print("INSERT INTO ALUMNOS (NOMBRE,APELLIDO,CORREO) VALUES ('{}','{}','{}');".format(objFaker.first_name_nonbinary(),objFaker.name(),objFaker.free_email()))

for x in range(100):
    variable_nombre=objFaker.first_name().upper()
    variable_apellidos=objFaker.last_name().upper()
    variable_correo=objFaker.free_email()
    print("INSERT INTO ALUMNOS (NOMBRE,APELLIDO,CORREO) VALUES ('{}','{}','{}');".format(variable_nombre,variable_apellidos,variable_correo))


print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(1,3);')
print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(10,1);')
print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(10,2);')
print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(32,1);')
print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(55,4);')
print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(86,3);')