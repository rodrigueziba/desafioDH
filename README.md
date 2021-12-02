# desafioDH
Desafio Digital House - Ezequiel Ibarra

Script de importación se encuentra en el material dentro de /database


_Esta base de datos está compuesta por las siguientes tablas_
- Artistas
- Canciones
- Albumes
- Generos

_Las relaciones están definidas de la siguiente forma_
- Una canción tiene un album
- Un album tiene muchas canciones

- Una canción tiene un genero
- Un genero tiene muchas canciones

- Una canción tiene un artista
- Un artista tiene muchas canciones

API REST de la base de datos "Musicando" 

/canciones (GET) que muestre un listado de las canciones con sus propiedades // ok
/canciones (POST) para crear un nuevo registro de una canción // ok
/canciones/:id (GET) que muestre una canción // ok
/canciones/:id (PUT) para editar una canción // 
/canciones/:id (DELETE) para eliminar una canción 
/generos (GET) listado de todos los géneros con sus canciones 
