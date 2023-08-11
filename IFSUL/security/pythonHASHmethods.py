import hashlib #binascii

#HASH
'''
DEFINICIÓN:
La función Hash es un algorítmo matemático para criptografía en la cual ocurre una transformación del ...dato(Como un archivo, contraseña o informaciones) en un conjunto alfanuméricos con un largo ...fijo de caracteres.
La criptografía hash es utilizada para resumir datos, verificar la integridad de archivos, y ...garantizar la seguridad de contraseñas dentro de un servidor.
'''

#MD5
'''
DEFINICIÓN:
En criptografía MD5 (Message-Digest Algorithm 5) es un algortimo de reducción criptográfica de 128 ...bits el cual fué ampliamente utilizado. Hoy en día este protocolo criptográfico solo se ...utiliza para autenticar mensajes y verificar el contenido y las formas digitales debido a su ...facilidad de hackeo, ...la cual dejó completamente vulnerable e inutilizada para medios de ...seguridad.

FUNCIONAMIENTO:
el MD5 ejecuta archivos enteros a través de un algoritmo de hashing matemático para generar una firma ...que pueda compararse con un archivo original. Así se puede verificar que un archivo recibido ...coincida con el archivo original que se envió, lo que garantiza que los archivos correctos ...lleguen a su destino. El algoritmo de hashing MD5 convierte los datos en una cadena de 32 ...caracteres. Del mismo modo un archivo de 1,2 GB también genera un hash con el mismo número de ...caracteres.

UTILIZACIÓN:
El MD5 se usa principalmente para verificar archivos. Es mucho más sencillo usar el hash MD5 para ...comparar una copia de un archivo con su original que comparar bit por biy si ambas copias ...coinciden. Puesto que el MD5 ya no se usa con fines de cifrado, debido a que sus ...vulnerabilidades han sido totalmente exploradas, por ello, este método sólo se utiliza con ...fines de verificación.
'''

print("MD5")
password = input("Informe su contraseña: ")

hash_obj = hashlib.md5(password.encode())
hashMD5 = hash_obj.hexdigest()

print(f"La contraseña con el hash MD5 aplicado es: [{hashMD5}]")

#SHA-1
'''
DEFINICIÓN: 
En criptografía, SHA-1(Secure Hash Almorithm 1) fué un algortimo proyectado por la Agencia Nacional ...de Seguridad de los Estados Unidos en 1995, esta en la sucesora de el método SHA-0, que se ...publicó en 1993, siendo esta la versión original.

FUNCIONAMIENTO:
O SHA1 implementa un algoritmo de hash sin llave, que toma un mensaje de hasta 264-bits y produce un ...resúmen del mensaje de 160-bits, este es utilizado para la verificación e integridade del ...mensaje.

UTILIZACIÓN:
SHA-1 hace parte de varias aplicaciones y protocolos ampliamente utilizados, incluido TLS y SSL, PG, ...S/MIME y IPsec. SHA-1 también es utilizado en sistemas de control de revisión distribuídos ...como Git, Mercurial y Monotone para identificar revisiones, así como detectar corrupción o ...modificación de datos. Aunque SHA-1 es la función de dispersión SHA más utilizada actualmente, ...ya no es segura. En 2005 criptoanalistas descubrieron ataques sobre SHA-1, sufiriendo que el ...algoritmo podría no ser seguro para uso continuo. Luego de la llegada de SHA-2 y SHA-3, en ...2017 Google y Mozilla paró de aceptar certificaciones SHA-1 basados en SSL.
'''

print("SHA1")
password = input("Informe su contraseña: ")

hash_obj = hashlib.sha1(password.encode())
hashSHA1 = hash_obj.hexdigest()

print(f"La contraseña con el hash SHA-1 aplicado es: [{hashSHA1}]")

#SHA224
'''
DEFINICIÓN: SHA-2 es un conjunto de funciones críptpgráficas proyectadas por la NSA (National Security Agency of EUA) SHA-2 significa Secure Hash Algorithm 2, y es la sucesora de SHA-1 la cual ya no era segura para su uso.

FUNCIONAMIENTO: 
El funcionamiento del SHA-2 produce un hash de 224-bits. Este tiene un bloque de tamaño de 512-bits, ...y el input inicial es dividido en palabras de 32-bits de procesamiento. La inicialización de ...la variable es también de 32-bits de largo, así como las constantes, K. Cada bloque de datos ...pasa por 64 rondas de operaciones antes del hash final (O el hash inmediato, en casos en donde ...múltiples bloques de datos son procesados) es procesado.

UTILIZACIÓN:
La función hash SHA-2 es implementada en algunas aplicaciones de seguridad de protocolos ampliamente ...usados, incluyendo TLS y SSL, PGP, SSH, S/MIME, y IPsec. Apesar de su mayor seguridad, las ...funciones SHA-2 no son tan ampliamente utilizadas como SHA-1. Razones pueden incluir la falta ...de soporte para SHA-2 en sistemas que utilicen windows XP SP2 o versiones posteriores, o la ...falta de urgencia percibida desde que colisiones en SHA-1 aún no son encontradas.
'''

print("SHA224")
password = input("Informe su contraseña: ")

hash_obj = hashlib.sha224(password.encode())
hashSHA224 = hash_obj.hexdigest()

print(f"La contraseña con el hash SHA224 aplicado es: [{hashSHA224}]")

#source: https://docs.python.org/pt-br/3.5/library/hashlib.html