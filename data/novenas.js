// Contenido de las 10 novenas. Estructura común por novena:
//  - id, titulo, imagen, colorTema
//  - oracionInicial (se reza los 9 días)
//  - dias: [{titulo, reflexion, peticion}]  (9 elementos)
//  - oracionFinal (se reza los 9 días)
// Cada día incluye además Padre Nuestro, Ave María y Gloria (ya en data/rosario.js),
// que la app intercala automáticamente.

export const NOVENAS = [
  // 1) NAVIDAD
  {
    id: "navidad",
    titulo: "Novena de Navidad (Aguinaldos)",
    subtitulo: "Del 16 al 24 de diciembre",
    imagen: "images/novena-navidad.jpg",
    color: "#7a1f2b",
    oracionInicial:
      "Señor Jesús, que quisiste nacer pobre entre nosotros para enriquecernos con tu amor: " +
      "venimos, en estos nueve días, a prepararte un lugar en nuestro corazón. " +
      "Que la espera de tu nacimiento nos llene de fe, esperanza y alegría. Amén.",
    dias: [
      { titulo: "Día 1 · El anuncio a María", reflexion: "El ángel Gabriel anuncia a María que será la Madre del Salvador. Ella responde con un «sí» humilde y confiado, enseñándonos a aceptar la voluntad de Dios aun sin entenderla del todo.", peticion: "Por quienes esperan una noticia difícil, para que encuentren la paz de confiar en Dios." },
      { titulo: "Día 2 · La visita a Isabel", reflexion: "María va a visitar y servir a su prima Isabel. Su alegría por llevar a Jesús en su interior se convierte en servicio generoso hacia los demás.", peticion: "Por nuestras familias, para que el amor se traduzca siempre en servicio concreto." },
      { titulo: "Día 3 · La duda de San José", reflexion: "José, un hombre justo, enfrenta una situación que no comprende. Un ángel lo tranquiliza en sueños y él confía, acogiendo a María y al Niño.", peticion: "Por quienes atraviesan dudas o incertidumbre, para que encuentren luz y paz interior." },
      { titulo: "Día 4 · El camino a Belén", reflexion: "María y José emprenden un largo y cansado viaje hasta Belén, obedeciendo el mandato del emperador, sin saber que allí se cumpliría la promesa de Dios.", peticion: "Por los que viajan, los migrantes y quienes buscan un lugar donde vivir con dignidad." },
      { titulo: "Día 5 · No hay lugar en el mesón", reflexion: "Belén está lleno y nadie tiene espacio para la Sagrada Familia. Sin embargo, Dios elige lo pequeño y lo sencillo para manifestarse al mundo.", peticion: "Por los que hoy son rechazados o no encuentran un lugar, para que hallen acogida." },
      { titulo: "Día 6 · Los pastores reciben la noticia", reflexion: "Un ángel anuncia a los pastores, los más sencillos, la buena noticia del nacimiento del Salvador. Los pobres son los primeros invitados a la alegría de Navidad.", peticion: "Por los más pobres y olvidados, para que sientan que Dios los mira con predilección." },
      { titulo: "Día 7 · La noche silenciosa", reflexion: "En el silencio de la noche, en una gruta pobre, se prepara el mayor acontecimiento de la historia: Dios que se hace uno de nosotros.", peticion: "Por quienes atraviesan la noche oscura del sufrimiento, para que descubran que Dios está cerca." },
      { titulo: "Día 8 · Nace el Salvador", reflexion: "Jesús nace en un pesebre, envuelto en pañales, mostrando desde el primer instante su humildad y su cercanía con los más sencillos.", peticion: "Por la paz en el mundo y en cada hogar, fruto del nacimiento del Príncipe de la Paz." },
      { titulo: "Día 9 · La adoración en Belén (Nochebuena)", reflexion: "Pastores, José y María adoran juntos al Niño Dios. Esta noche, toda la Iglesia se une en la misma adoración y en el mismo gozo.", peticion: "Por todas nuestras intenciones especiales de esta Navidad, y por la unidad de nuestra familia." },
    ],
    oracionFinal:
      "Niño Jesús, que naciste para salvarnos: te pedimos que renueves en nosotros la alegría de tu venida. " +
      "Ayúdanos a prepararte un lugar digno en nuestro corazón todo el año, no solo en Navidad. Amén.",
  },

  // 2) DIVINA MISERICORDIA
  {
    id: "divina-misericordia",
    titulo: "Novena a la Divina Misericordia",
    subtitulo: "Basada en el Diario de Santa Faustina Kowalska",
    imagen: "images/novena-divina-misericordia.jpg",
    color: "#c0392b",
    oracionInicial:
      "Jesús misericordioso, que dijiste «Jesús, en Ti confío»: ponemos en tus manos, durante estos nueve días, " +
      "a toda la humanidad, especialmente a quienes más necesitan de tu misericordia. Amén.",
    dias: [
      { titulo: "Día 1 · Toda la humanidad", reflexion: "Hoy encomendamos a toda la familia humana al océano de la misericordia de Dios, para que todos podamos experimentar su amor infinito.", peticion: "Que toda persona, sin excepción, sienta en su vida la ternura de Dios." },
      { titulo: "Día 2 · Los sacerdotes y religiosos", reflexion: "Pedimos por quienes se han consagrado al servicio de Dios y de su Iglesia, para que sean fieles instrumentos de su misericordia.", peticion: "Por la santidad y perseverancia de sacerdotes, religiosos y religiosas." },
      { titulo: "Día 3 · Las almas fieles y devotas", reflexion: "Damos gracias por quienes viven su fe con constancia, y pedimos que sigan siendo luz para los demás.", peticion: "Por quienes se esfuerzan cada día por vivir según el Evangelio." },
      { titulo: "Día 4 · Los que no conocen a Dios", reflexion: "Pedimos por quienes aún no han encontrado la fe, para que la luz de la misericordia divina los alcance.", peticion: "Por quienes buscan la verdad sin encontrarla todavía." },
      { titulo: "Día 5 · Los hermanos separados", reflexion: "Oramos por la unidad de todos los cristianos, para que un día seamos «un solo rebaño y un solo pastor».", peticion: "Por la unidad de todas las Iglesias cristianas." },
      { titulo: "Día 6 · Los sencillos y los niños", reflexion: "Los corazones humildes y confiados, como los de los niños, son especialmente amados por el Corazón de Jesús.", peticion: "Por la protección de los niños y de las personas más vulnerables." },
      { titulo: "Día 7 · Quienes honran la misericordia", reflexion: "Damos gracias por quienes reconocen y proclaman la misericordia de Dios en su vida y en su entorno.", peticion: "Para que más personas descubran y confíen en la misericordia divina." },
      { titulo: "Día 8 · Las almas del Purgatorio", reflexion: "Recordamos a quienes ya partieron de este mundo y esperan la plenitud de la purificación en la misericordia de Dios.", peticion: "Por el descanso eterno de nuestros seres queridos difuntos." },
      { titulo: "Día 9 · Las almas tibias", reflexion: "Pedimos por quienes, teniendo fe, viven alejados o indiferentes, para que el fuego del amor de Dios los reavive.", peticion: "Por quienes se han alejado de la fe, para que encuentren el camino de regreso." },
    ],
    oracionFinal:
      "Eterno Padre, por la Pasión dolorosa de tu Hijo, ten misericordia de nosotros y del mundo entero. Amén.",
  },

  // 3) SAGRADO CORAZÓN
  {
    id: "sagrado-corazon",
    titulo: "Novena al Sagrado Corazón de Jesús",
    subtitulo: "Amor, reparación y confianza",
    imagen: "images/novena-sagrado-corazon.jpg",
    color: "#a83246",
    oracionInicial:
      "Corazón Sagrado de Jesús, fuente de amor infinito: nos acercamos a Ti en estos nueve días " +
      "para conocerte más, amarte más y confiar en Ti sin medida. Amén.",
    dias: [
      { titulo: "Día 1 · Un corazón que ama sin medida", reflexion: "El Corazón de Jesús es símbolo de un amor que se entrega por completo, sin condiciones ni reservas.", peticion: "Para que aprendamos a amar con la misma generosidad de Jesús." },
      { titulo: "Día 2 · Reparación por la indiferencia", reflexion: "Pedimos perdón por la frialdad y la indiferencia con que a veces respondemos al amor de Dios.", peticion: "Por un corazón más atento y agradecido hacia el amor de Dios." },
      { titulo: "Día 3 · Confianza en medio de la prueba", reflexion: "Cuando todo parece difícil, el Corazón de Jesús es un refugio seguro donde depositar nuestras angustias.", peticion: "Por quienes atraviesan pruebas y dificultades, para que no pierdan la confianza." },
      { titulo: "Día 4 · Por las familias", reflexion: "El Sagrado Corazón es fuente de unidad y paz para los hogares que se consagran a Él.", peticion: "Por la unidad, el perdón y el amor en nuestras familias." },
      { titulo: "Día 5 · Por los enfermos", reflexion: "Jesús, con su Corazón herido, comprende el dolor humano y acompaña a quienes sufren en su cuerpo o su alma.", peticion: "Por la salud y la fortaleza de los enfermos y de quienes los cuidan." },
      { titulo: "Día 6 · Por los que se alejaron de Dios", reflexion: "El Corazón de Jesús sigue buscando, con paciencia infinita, a quienes se han alejado de Él.", peticion: "Por la conversión de quienes hoy están lejos de la fe." },
      { titulo: "Día 7 · Por los sacerdotes", reflexion: "Pedimos que los ministros de la Iglesia reflejen en su vida la mansedumbre y el amor del Corazón de Jesús.", peticion: "Por la santidad de los sacerdotes y por nuevas vocaciones." },
      { titulo: "Día 8 · Por las almas del Purgatorio", reflexion: "Encomendamos al amor misericordioso de Jesús a quienes ya partieron de este mundo.", peticion: "Por el eterno descanso de nuestros difuntos." },
      { titulo: "Día 9 · Acción de gracias", reflexion: "Terminamos esta novena dando gracias por todo el amor recibido del Corazón de Jesús a lo largo de nuestra vida.", peticion: "Por un corazón agradecido, capaz de reconocer las bendiciones recibidas." },
    ],
    oracionFinal:
      "Corazón Sagrado de Jesús, en Ti confío. Que nuestro corazón se parezca cada día más al tuyo: manso, humilde y lleno de amor. Amén.",
  },

  // 4) GUADALUPE
  {
    id: "guadalupe",
    titulo: "Novena a la Virgen de Guadalupe",
    subtitulo: "Madre y estrella de la evangelización",
    imagen: "images/novena-guadalupe.jpg",
    color: "#0e6b52",
    oracionInicial:
      "Virgen de Guadalupe, Madre de América y Estrella de la Evangelización: ayúdanos, en estos nueve días, " +
      "a reconocernos como tus hijos amados y a confiar en tu protección maternal. Amén.",
    dias: [
      { titulo: "Día 1 · Una Madre que se hace presente", reflexion: "María se aparece a Juan Diego mostrando que quiere estar cerca de los sencillos, hablando su propia lengua y comprendiendo su cultura.", peticion: "Para sentir siempre la cercanía maternal de María en nuestra vida." },
      { titulo: "Día 2 · «¿No estoy yo aquí, que soy tu Madre?»", reflexion: "Estas palabras de la Virgen a Juan Diego siguen siendo un consuelo para todo el que se siente solo o angustiado.", peticion: "Por quienes se sienten solos, para que descubran la compañía de María." },
      { titulo: "Día 3 · La fe sencilla de Juan Diego", reflexion: "Un hombre humilde es elegido como mensajero. Dios no mira la posición social, sino la disponibilidad del corazón.", peticion: "Por la humildad para servir a Dios sin buscar reconocimiento." },
      { titulo: "Día 4 · Las rosas en pleno invierno", reflexion: "El signo de las flores fuera de temporada muestra que, con María, siempre es posible un milagro inesperado.", peticion: "Por las intenciones que hoy parecen imposibles de resolver." },
      { titulo: "Día 5 · La imagen en la tilma", reflexion: "La imagen que quedó grabada milagrosamente sigue siendo, siglos después, signo de esperanza para millones de personas.", peticion: "Por una fe que se renueve al contemplar los signos del amor de Dios." },
      { titulo: "Día 6 · Madre de todos los pueblos", reflexion: "En su rostro mestizo, la Virgen de Guadalupe se muestra como Madre de todas las razas y culturas, unidas en un mismo amor.", peticion: "Por la unidad entre los pueblos y el respeto a toda persona." },
      { titulo: "Día 7 · Estrella de la evangelización", reflexion: "Gracias a esta aparición, multitudes se acercaron a la fe cristiana. María sigue conduciendo a los hombres hacia su Hijo.", peticion: "Por quienes anuncian el Evangelio hoy, con su palabra y su testimonio." },
      { titulo: "Día 8 · Refugio de los que sufren", reflexion: "Como Madre, la Virgen de Guadalupe acoge el dolor y las cargas de sus hijos, y las presenta a Jesús.", peticion: "Por quienes atraviesan enfermedad, pobreza o injusticia." },
      { titulo: "Día 9 · Confianza filial en María", reflexion: "Terminamos esta novena renovando nuestra confianza de hijos en las manos de nuestra Madre del Cielo.", peticion: "Por nuestras intenciones personales, encomendadas hoy a la Virgen de Guadalupe." },
    ],
    oracionFinal:
      "Virgen de Guadalupe, Madre nuestra: cúbrenos con tu manto y llévanos siempre más cerca de tu Hijo Jesús. Amén.",
  },

  // 5) CARMEN
  {
    id: "carmen",
    titulo: "Novena a la Virgen del Carmen",
    subtitulo: "Estrella del mar y Madre del Carmelo",
    imagen: "images/novena-carmen.jpg",
    color: "#3b5b8c",
    oracionInicial:
      "Virgen del Carmen, Estrella del mar y Madre nuestra: acompáñanos en estos nueve días " +
      "y ayúdanos a vivir bajo tu protección y tu manto. Amén.",
    dias: [
      { titulo: "Día 1 · Madre y protectora", reflexion: "La Virgen del Carmen es venerada como protectora en los momentos de peligro, especialmente de los marineros y viajeros.", peticion: "Por quienes viajan o trabajan en el mar, para que estén siempre protegidos." },
      { titulo: "Día 2 · El signo del escapulario", reflexion: "El escapulario recuerda la promesa de protección de María a quienes se consagran a ella con fe y perseverancia.", peticion: "Por una fe constante, que no se apague ante las dificultades." },
      { titulo: "Día 3 · Silencio y oración del Carmelo", reflexion: "La espiritualidad del Carmen invita al silencio interior y a la oración constante, siguiendo el ejemplo de los grandes místicos.", peticion: "Por más momentos de silencio y oración en nuestra vida diaria." },
      { titulo: "Día 4 · Refugio en la tempestad", reflexion: "Como estrella que orienta a los navegantes, María guía a quienes atraviesan tempestades interiores o exteriores.", peticion: "Por quienes atraviesan momentos de crisis o incertidumbre." },
      { titulo: "Día 5 · Madre de la ternura", reflexion: "La Virgen del Carmen es representada con el Niño Jesús en brazos, mostrando su ternura maternal hacia todos sus hijos.", peticion: "Por las madres y por todos los que ejercen un cuidado maternal." },
      { titulo: "Día 6 · Fortaleza en las dificultades", reflexion: "Bajo su manto, los fieles encuentran fuerza para enfrentar las pruebas del camino con esperanza.", peticion: "Por fortaleza para las personas que hoy enfrentan grandes dificultades." },
      { titulo: "Día 7 · Intercesora ante Dios", reflexion: "María intercede constantemente por sus hijos, presentando nuestras necesidades ante su Hijo Jesús.", peticion: "Por nuestras intenciones más urgentes de este día." },
      { titulo: "Día 8 · Camino hacia la santidad", reflexion: "La tradición carmelita nos invita a la santidad sencilla de cada día, vivida en la fidelidad a las pequeñas cosas.", peticion: "Por perseverancia en el camino de la fe cotidiana." },
      { titulo: "Día 9 · Bajo tu manto y amparo", reflexion: "Terminamos esta novena poniéndonos, como toda la vida, bajo el manto protector de la Virgen del Carmen.", peticion: "Por la protección constante de María sobre nuestra familia." },
    ],
    oracionFinal:
      "Virgen del Carmen, Estrella del mar: guíanos siempre hacia el puerto seguro del amor de tu Hijo Jesús. Amén.",
  },

  // 6) SAN JUDAS TADEO
  {
    id: "san-judas-tadeo",
    titulo: "Novena a San Judas Tadeo",
    subtitulo: "Patrono de las causas difíciles",
    imagen: "images/novena-san-judas-tadeo.jpg",
    color: "#2f4858",
    oracionInicial:
      "Glorioso San Judas Tadeo, apóstol fiel y amigo de Jesús: acudimos a tu intercesión " +
      "en estos nueve días, confiando en tu poder para las causas más difíciles. Amén.",
    dias: [
      { titulo: "Día 1 · Apóstol y amigo de Jesús", reflexion: "Judas Tadeo caminó junto a Jesús, escuchó su palabra y fue testigo de su vida, muerte y resurrección.", peticion: "Por una amistad más cercana e íntima con Jesús." },
      { titulo: "Día 2 · Fe en medio de la duda", reflexion: "Su nombre, semejante al del traidor, no le impidió permanecer fiel. Su fidelidad nos anima a no rendirnos ante los prejuicios.", peticion: "Por perseverar en la fe aun cuando todo parezca en contra." },
      { titulo: "Día 3 · Patrono de las causas difíciles", reflexion: "La tradición cristiana acude a San Judas Tadeo precisamente cuando una situación parece no tener solución humana.", peticion: "Presentamos hoy nuestra causa más difícil a su intercesión." },
      { titulo: "Día 4 · Confianza que no defrauda", reflexion: "Quienes acuden a él con fe sencilla experimentan que su intercesión nunca deja de dar fruto, a su tiempo y modo.", peticion: "Por una confianza firme, aunque la respuesta tarde en llegar." },
      { titulo: "Día 5 · Valentía para anunciar el Evangelio", reflexion: "Como apóstol, Judas Tadeo llevó la Buena Noticia hasta tierras lejanas, sin miedo a las dificultades.", peticion: "Por valentía para vivir y compartir nuestra fe sin temor." },
      { titulo: "Día 6 · Fidelidad hasta el final", reflexion: "La tradición lo recuerda como mártir, fiel a Jesús hasta entregar la vida. Su ejemplo nos invita a la perseverancia.", peticion: "Por perseverar en el bien aunque cueste sacrificio." },
      { titulo: "Día 7 · Intercesor de los que nadie escucha", reflexion: "Muchos que sienten que nadie los escucha encuentran en San Judas Tadeo un intercesor cercano y accesible.", peticion: "Por quienes se sienten ignorados o sin apoyo en este momento." },
      { titulo: "Día 8 · Esperanza en lo imposible", reflexion: "Lo que a los ojos humanos parece imposible, puede resolverse cuando se pone en las manos de Dios con fe.", peticion: "Por una esperanza renovada frente a lo que parece imposible." },
      { titulo: "Día 9 · Gratitud y confianza renovada", reflexion: "Cerramos esta novena agradeciendo la intercesión de San Judas Tadeo y renovando nuestra confianza en Dios.", peticion: "Por agradecer cada favor recibido a través de su intercesión." },
    ],
    oracionFinal:
      "San Judas Tadeo, apóstol y mártir, ruega por nosotros y alcánzanos de Dios el favor que con fe te pedimos. Amén.",
  },

  // 7) ESPÍRITU SANTO
  {
    id: "espiritu-santo",
    titulo: "Novena al Espíritu Santo",
    subtitulo: "Los siete dones y la vida nueva",
    imagen: "images/novena-espiritu-santo.jpg",
    color: "#b8860b",
    oracionInicial:
      "Ven, Espíritu Santo, llena nuestro corazón y enciende en él el fuego de tu amor. " +
      "Acompáñanos en estos nueve días de oración y renuévanos por completo. Amén.",
    dias: [
      { titulo: "Día 1 · El don de Sabiduría", reflexion: "Pedimos al Espíritu Santo que nos ayude a valorar las cosas según el criterio de Dios y no solo del mundo.", peticion: "Por sabiduría para tomar buenas decisiones en nuestra vida." },
      { titulo: "Día 2 · El don de Entendimiento", reflexion: "Este don nos ayuda a comprender más profundamente las verdades de la fe y su sentido para nuestra vida.", peticion: "Por una fe más comprendida y más vivida." },
      { titulo: "Día 3 · El don de Consejo", reflexion: "El Espíritu Santo nos guía para actuar rectamente en cada circunstancia, especialmente en los momentos difíciles.", peticion: "Por discernimiento en las decisiones importantes que debemos tomar." },
      { titulo: "Día 4 · El don de Fortaleza", reflexion: "Este don nos da valor para superar las dificultades y perseverar en el bien, aun en medio de las pruebas.", peticion: "Por fortaleza para no desanimarnos ante las dificultades." },
      { titulo: "Día 5 · El don de Ciencia", reflexion: "Nos ayuda a reconocer la mano de Dios en la creación y en los acontecimientos de nuestra vida.", peticion: "Por ojos capaces de reconocer a Dios en lo cotidiano." },
      { titulo: "Día 6 · El don de Piedad", reflexion: "Este don despierta en nosotros un amor filial hacia Dios y una fraternidad sincera hacia los demás.", peticion: "Por una relación más cercana y confiada con Dios Padre." },
      { titulo: "Día 7 · El don de Temor de Dios", reflexion: "No se trata de miedo, sino de un respeto amoroso que nos aparta del pecado por amor, no por temor al castigo.", peticion: "Por un corazón que evite el mal por amor a Dios." },
      { titulo: "Día 8 · Los frutos del Espíritu", reflexion: "Amor, alegría, paz, paciencia, bondad: así se reconoce la presencia del Espíritu Santo en una vida.", peticion: "Por dejar ver en nuestra vida los frutos del Espíritu." },
      { titulo: "Día 9 · Un Pentecostés personal", reflexion: "Como en el primer Pentecostés, pedimos que el Espíritu Santo descienda hoy sobre nuestra vida y la renueve por completo.", peticion: "Por una renovación profunda de nuestra fe y de nuestra vida." },
    ],
    oracionFinal:
      "Ven, Espíritu Santo, envía desde el cielo un rayo de tu luz. Renueva la faz de la tierra, comenzando por nuestro propio corazón. Amén.",
  },

  // 8) SAN ANTONIO
  {
    id: "san-antonio",
    titulo: "Novena a San Antonio de Padua",
    subtitulo: "Patrono de los pobres y de las cosas perdidas",
    imagen: "images/novena-san-antonio.jpg",
    color: "#6b4423",
    oracionInicial:
      "San Antonio de Padua, amigo de los pobres y de los que sufren: te pedimos que intercedas por nosotros " +
      "en estos nueve días, ayudándonos a confiar en la providencia de Dios. Amén.",
    dias: [
      { titulo: "Día 1 · Un corazón sencillo", reflexion: "San Antonio dejó todo para seguir a Cristo con sencillez, mostrando que la verdadera riqueza está en Dios.", peticion: "Por un corazón desprendido de lo material y confiado en Dios." },
      { titulo: "Día 2 · Amigo de los pobres", reflexion: "Toda su vida estuvo marcada por el amor a los más necesitados, a quienes ayudaba con generosidad.", peticion: "Por quienes hoy pasan necesidad, para que encuentren ayuda oportuna." },
      { titulo: "Día 3 · Predicador de la Palabra", reflexion: "Su predicación sencilla y profunda tocaba los corazones y llevaba a muchos a la conversión.", peticion: "Por quienes anuncian el Evangelio con su palabra y su vida." },
      { titulo: "Día 4 · Devoción al Niño Jesús", reflexion: "San Antonio es representado con el Niño Jesús en brazos, signo de su ternura y cercanía con Cristo.", peticion: "Por una devoción sencilla y confiada hacia Jesús." },
      { titulo: "Día 5 · Intercesor de lo perdido", reflexion: "La tradición popular acude a San Antonio para encontrar tanto objetos perdidos como caminos de vida extraviados.", peticion: "Por lo que hoy sentimos perdido: objetos, relaciones o rumbo de vida." },
      { titulo: "Día 6 · Milagros de fe sencilla", reflexion: "Muchos milagros se atribuyen a su intercesión, siempre unida a la fe sencilla de quienes se lo pedían.", peticion: "Por una fe sencilla capaz de esperar grandes cosas de Dios." },
      { titulo: "Día 7 · Caridad concreta", reflexion: "El «pan de los pobres» recuerda su ejemplo de compartir con los necesitados lo que se tiene.", peticion: "Por generosidad concreta hacia quienes menos tienen." },
      { titulo: "Día 8 · Paciencia en la prueba", reflexion: "Su vida no estuvo libre de dificultades, pero las enfrentó con paciencia, apoyado en la oración.", peticion: "Por paciencia y perseverancia en nuestras propias pruebas." },
      { titulo: "Día 9 · Confianza total", reflexion: "Terminamos esta novena poniendo en sus manos nuestras necesidades, con la confianza sencilla que él mismo vivió.", peticion: "Por nuestra intención especial de esta novena." },
    ],
    oracionFinal:
      "San Antonio de Padua, aboga por nosotros ante Dios y ayúdanos a vivir con la sencillez y la caridad que marcaron tu vida. Amén.",
  },

  // 9) SANTA RITA
  {
    id: "santa-rita",
    titulo: "Novena a Santa Rita de Casia",
    subtitulo: "Patrona de las causas imposibles",
    imagen: "images/novena-santa-rita.jpg",
    color: "#8b2635",
    oracionInicial:
      "Santa Rita de Casia, abogada de las causas imposibles: acompáñanos en estos nueve días " +
      "y alcánzanos de Dios la gracia que con fe te confiamos. Amén.",
    dias: [
      { titulo: "Día 1 · Una vida marcada por la fe", reflexion: "Desde niña, Rita mostró un amor profundo por Dios, que sostuvo cada etapa de su vida.", peticion: "Por una fe que nos acompañe en cada etapa de la vida." },
      { titulo: "Día 2 · Esposa y madre paciente", reflexion: "En su matrimonio difícil, Rita vivió la paciencia y el perdón, sin perder nunca la esperanza.", peticion: "Por las familias que atraviesan dificultades matrimoniales." },
      { titulo: "Día 3 · El perdón como camino", reflexion: "Rita perdonó a quienes le hicieron daño, mostrando que el perdón sana antes que nada al que perdona.", peticion: "Por la gracia de perdonar a quienes nos han lastimado." },
      { titulo: "Día 4 · Dolor de madre", reflexion: "Rita conoció el dolor de perder a sus hijos, y lo transformó en entrega y oración confiada a Dios.", peticion: "Por los padres que han perdido a un hijo, para que encuentren consuelo." },
      { titulo: "Día 5 · Vida religiosa y entrega", reflexion: "Ya viuda, Rita entra al convento agustino y vive con humildad y entrega total a Dios.", peticion: "Por las vocaciones religiosas y su fidelidad." },
      { titulo: "Día 6 · La espina en la frente", reflexion: "Rita recibió una herida que la asemejó al sufrimiento de Cristo, signo de su unión profunda con Él.", peticion: "Por quienes cargan un sufrimiento oculto o incomprendido." },
      { titulo: "Día 7 · Patrona de lo imposible", reflexion: "Su vida enseña que, con fe y perseverancia, Dios puede transformar lo que parece imposible.", peticion: "Presentamos hoy nuestra causa que parece imposible de resolver." },
      { titulo: "Día 8 · El signo de las rosas", reflexion: "La tradición recuerda el milagro de las rosas en invierno, signo de que Dios responde a su manera y a su tiempo.", peticion: "Por confiar en el tiempo de Dios, aunque no sea el nuestro." },
      { titulo: "Día 9 · Confianza y gratitud", reflexion: "Terminamos esta novena confiando nuestra intención a Santa Rita y agradeciendo su cercanía en nuestra vida.", peticion: "Por nuestra intención especial de esta novena." },
    ],
    oracionFinal:
      "Santa Rita de Casia, abogada de los imposibles, intercede por nosotros ante Dios y alcánzanos la gracia que necesitamos. Amén.",
  },

  // 10) ÁNIMAS DEL PURGATORIO
  {
    id: "animas-purgatorio",
    titulo: "Novena por las Ánimas del Purgatorio",
    subtitulo: "Oración por nuestros difuntos",
    imagen: "images/novena-animas-purgatorio.jpg",
    color: "#4a4a4a",
    oracionInicial:
      "Señor, en tu misericordia infinita, acoge a las almas del Purgatorio y concédeles la plenitud de tu descanso. " +
      "Te ofrecemos esta novena por ellas y por nuestros seres queridos difuntos. Amén.",
    dias: [
      { titulo: "Día 1 · Por nuestros padres y abuelos difuntos", reflexion: "Recordamos con gratitud a quienes nos dieron la vida y nos formaron en la fe, y pedimos por su descanso eterno.", peticion: "Por el eterno descanso de nuestros padres y abuelos difuntos." },
      { titulo: "Día 2 · Por nuestros familiares difuntos", reflexion: "Encomendamos a Dios a todos los miembros de nuestra familia que ya partieron de este mundo.", peticion: "Por el descanso de todos nuestros familiares difuntos." },
      { titulo: "Día 3 · Por los amigos que ya no están", reflexion: "Guardamos en la memoria a quienes fueron amigos fieles en nuestra vida, hoy en las manos de Dios.", peticion: "Por el descanso de nuestros amigos difuntos." },
      { titulo: "Día 4 · Por las almas más abandonadas", reflexion: "Pedimos especialmente por aquellas almas que no tienen quien ore por ellas.", peticion: "Por las almas del Purgatorio más solas y olvidadas." },
      { titulo: "Día 5 · Por quienes murieron repentinamente", reflexion: "Encomendamos a quienes partieron sin previo aviso, confiando en la misericordia de Dios.", peticion: "Por quienes fallecieron de forma repentina o inesperada." },
      { titulo: "Día 6 · Por los sacerdotes y consagrados difuntos", reflexion: "Damos gracias por su servicio a la Iglesia y pedimos por su descanso eterno.", peticion: "Por el descanso de sacerdotes, religiosos y religiosas difuntos." },
      { titulo: "Día 7 · Por quienes no tuvieron quien los recordara", reflexion: "Oramos por todas las almas anónimas que la historia y el mundo han olvidado.", peticion: "Por todas las almas que nadie recuerda ya en este mundo." },
      { titulo: "Día 8 · Por nosotros mismos en el futuro", reflexion: "Pedimos la gracia de vivir preparados para el encuentro final con Dios, con fe y esperanza.", peticion: "Por la gracia de una vida y una muerte en paz con Dios." },
      { titulo: "Día 9 · Por la comunión de los santos", reflexion: "Terminamos esta novena recordando que estamos unidos a los difuntos en la comunión de los santos, en la esperanza de la resurrección.", peticion: "Por la esperanza cierta de reunirnos un día con ellos junto a Dios." },
    ],
    oracionFinal:
      "Dales, Señor, el descanso eterno, y que la luz perpetua les alumbre. Que descansen en paz. Amén.",
  },
];
