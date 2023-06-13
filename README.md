# carwashMobileApp


Pasos para compilar la aplicacion de Android y subirla a Google Play Console:



1. Antes que nada, nos basaremos en la documentacion de React Native para llevar a cabo la compilacion, aquí esta el anexo del enlace:  https://reactnative.dev/docs/signed-apk-android.




2. Clonar el repositorio y correr en la ruta del repositorio local, ejecutar el comando: npm install.




3. Después abrimos el proyecto con un editor de codigo de nuestra eleccion, y vamos a verificar que dentro de la siguiente ruta de carpetas: android/app, que se encuentre el archivo, que en nuestro caaso es: casamaestri.keystore.




4. Tambien nos vamos asegurar de que este la configuracion basandonos en la documentacion de React Native, primero verificaremos el archivo en la ruta: android/gradle.properties,
tambien verificamos el archivo en la ruta: android/app/build.gradle, la configuracion basica ya esta acorde a nuestras necesidades, por eso solo se debe de verificar que la configuracion valla acorde a la documentacion de React Native.




5. Iremos al archivo build.gradle que se encuentra en la ruta: android/app/build.gradle, despues iremos a la seccion: defaultConfig, cuenta con varios parametros, pero solo dos son los que tenemos que modificar,
el primero es: versionCode, es sirve para tener un control sobre las compilaciones, cada que se realice una nueva compilacion, este numero se debera de incrementar de uno en uno, y el otro parametros es: versionName,
este sirve para llevar un control visible de las versiones de la aplicacion, a diferencia del parametro anterior, este si se puede modificar a placer del encargado de la compilacion, despues de modificar esto, ya podriamos empezar a compilar.




5. Ahora si empezaremos a compilar la aplicacion, el primer paso es abrir una consola en la raíz del proyecto, ejecutaremos los comandos: cd android y gradlew bundleRelease, con esto bastaria para que empiece la generacion de la aplicacion.
Al terminar la compilacion, deberia de darnos un mensaje de Build Sucessfull, y esto nos da aviso a que la compilacion de la aplicacion se llevo de manera correcta.




6. El siguiente paso es ir a la ruta: android/app/build/outputs/bundle/release/app.aab, y deberiamos de encontrar como resultado un archivo llamado}. 'app.aab' con la extencion 'aab', esto noa indica que es la que Google Play Console necesita para
realizar las pruebas Alpha, Beta o el despliegue en produccion.




7. Abriremos de nuevo la consola para probar la aplicacion que acabamos de compilar, con el siguiente comando: npx react-native run-android --variant=release, esto deberia de instalar la aplicacion en nuestro dispositivo movil,
si la instalacion de la aplicacion se lleva de manera correcta, esto nos indicara que ya esta lista para ser subida a Google Play Console.




8. Vamos al navegado a la siguiente pagina https://play.google.com/console/about/ , suponiendo que ya tienen acceso al proyecto, despues escogemos la aplicacion Maestri, nos vamos al menú lateral izquierdo
y vamos a la opcion pruebas cerradas, veremos en una lista titulada: Segmentos activos, el titulo de Alpha y datos como el numero de version y fechas del despliegue, vamos a seleccionar la opcion que esta en la derecha titulada:
Administrar segmento, despues en un boton de color azul se encuentra la opcion de editar versión, y nos mostrara una ventana con la opcion: Crea una versión de prueba cerrada, y es aqui donde vamos a arrastrar y soltar la aplicacion que
generamos con el compilador, tarda unos minutos en validar, y si toda la configuracion esta correcta, solo seria cuestion  de dar click en el boton en la parte  inferior derecha titulado: Revisar la versión,
y con esto se manda a revision la aplicacion, ya solo vastaria que el equipo de Google Play Console acepte la aplicacion y listo.



PD: No olvidar incrementar el numero de version de la aplicacion.



pasos para correr la app

npx react-native run-android    