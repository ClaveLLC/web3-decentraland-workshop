# **Intro**

El código que aloja este respositorio fue utilizado por el equipo web3 de Clave para presentar conceptos prácticos de desarrollo  de una escena utilizando el SDK de Decentraland en el evento Minting Summit 2022 en el marco del workshop “**How to create Experiences in the Decentraland Metaverse”**.

Las iteraciones sobre el código fuente no buscan completar una funcionalidad sino que servir de apoyo a la dinámica del workshop.  

# **Objetivo**

El workshop buscó cubrir los siguientes puntos:
-   Desarrollo partiendo de proyecto creado por herramienta builder.
-   Ordenamiento básico de código, sugerencias y casos de uso a contemplar.
-   Experiencia multijugador y uso de librerías peer to peer para sincronización.
-   Interacción con contrato inteligente.
-   Despliegue de escena en tres ambientes distintos y sus beneficios.

# **Requisitos**
-   Versión de node 14 o posterior.
-   Metamask como extensión de browser.
-   Entorno de desarrollo. (Se utilizó Visual Studio Code)

# **Instalación y Dependencias**

Para utilizar el SDK de Decentraland se debe instalar Decentraland CLI ejecutando el siguiente comando:

_npm install -g decentraland_

Para el workshop se utilizó versión _3.10.2_.

_NOTA:  [Guía completa de instalación de SDK](https://docs.decentraland.org/development-guide/SDK-101/)._

---

Se utiliza librería _[decentraland-ecs-utils](https://github.com/decentraland/decentraland-ecs-utils)_ que proporciona numerosas herramientas y utilidades para el desarrollo de una escena y se instala ejecutando: 

_npm install @dcl/ecs-scene-utils -B_

---

Para interactuar con contratos inteligentes se utiliza librería _[eth connect](https://github.com/decentraland/eth-connect)_ que se instala ejecutando:

_npm install eth-connect -B_


# **Ambientes y Ejecución**

Se introdujeron tres ambientes durante el desarrollo de la escena.  

**Local**

Para ejecutar  escena en el ambiente local se debe ejecutar:

_dcl start_ o  _dcl start --web3_ en caso de querer conectarse con billetera.

**Heroku**

Este ambiente permite compartir escena con otros usuarios y probar  [experiencia multijugador](https://docs.decentraland.org/development-guide/remote-scene-considerations/).

_NOTA:  [Guia completa para previsualizar escena en Heroku](https://docs.decentraland.org/development-guide/deploy-third-party/)_.

**Test**

Para publicar en ambiente de test se requiere la adquisición de tierras.  
Este ambiente permite visualizar escena de igual forma que en ambiente productivo.
Para desplegar escena se debe ejecutar:

_dcl deploy --target_ [_peer-testing.decentraland.org_](http://peer-testing.decentraland.org/)

Se podrá previsualizar ingresando  [aquí](https://play.decentraland.org/?CATALYST=peer-testing.decentraland.org) navegando a las coordenadas donde se despliega la escena que se encuentran especificadas en el archivo _scenes.json_.

_NOTA:  [Guia completa para publicar en test o producción](https://docs.decentraland.org/development-guide/publishing/)._

# **Código**

Se trabajó sobre _branch develop_ y los commits que abarcan el workshop son los siguientes:
-   Commit 2 (dcl builder scene)
-   Commit 3 (files reordering)
-   Commit 4 (door added to scene / multiplayer enabled)
-   Commit 5 (smart contract interaction)

Se extrajo código del proyecto  [Open-Door](https://github.com/decentraland-scenes/Open-door)  del repositorio _decentraland-scenes_.

# **A tener en cuenta**
-   El contrato inteligente utilizado admite minteo de un máximo de 4 NFTs. (uno ya fue minteado durante el workshop)
-   El contrato inteligente fue deployado en Ropsten. (Red de pruebas de Ethereum)

# **Oportunidades de mejora**
-  Archivos door.ts y key.ts extraerlos como  [smart items](https://docs.decentraland.org/development-guide/smart-items/).
-  Mejorar interacciones con smart contract. Por ej, detectar si la transacción falla, reemplazar timmer por eventos que debieran emitirse en el contrato inteligente.