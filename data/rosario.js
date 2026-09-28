// Contenido del Santo Rosario: oraciones fijas y los 20 misterios.
// Las oraciones marcadas con audio: true tienen (o tendrán) un clip de voz
// pregrabado en /audio/rosario/<id>.mp3. Si el archivo no existe todavía,
// la app cae automáticamente a la voz del teléfono (Web Speech API).

export const ORACIONES = {
  senal_cruz: {
    id: "senal_cruz",
    titulo: "Señal de la Cruz",
    audio: true,
    texto:
      "Por la señal de la Santa Cruz, de nuestros enemigos líbranos, Señor, Dios nuestro. " +
      "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.",
  },
  credo: {
    id: "credo",
    titulo: "Credo (Símbolo de los Apóstoles)",
    audio: true,
    texto:
      "Creo en Dios, Padre todopoderoso, creador del cielo y de la tierra. " +
      "Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, " +
      "nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, " +
      "descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos " +
      "y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. " +
      "Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, " +
      "la resurrección de la carne y la vida eterna. Amén.",
  },
  padre_nuestro: {
    id: "padre_nuestro",
    titulo: "Padre Nuestro",
    audio: true,
    texto:
      "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; " +
      "hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; " +
      "perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; " +
      "no nos dejes caer en la tentación, y líbranos del mal. Amén.",
  },
  ave_maria: {
    id: "ave_maria",
    titulo: "Ave María",
    audio: true,
    texto:
      "Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres, " +
      "y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, " +
      "ahora y en la hora de nuestra muerte. Amén.",
  },
  gloria: {
    id: "gloria",
    titulo: "Gloria",
    audio: true,
    texto:
      "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, " +
      "por los siglos de los siglos. Amén.",
  },
  fatima: {
    id: "fatima",
    titulo: "Oración de Fátima",
    audio: true,
    texto:
      "Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, " +
      "lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia.",
  },
  salve: {
    id: "salve",
    titulo: "Salve",
    audio: true,
    texto:
      "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra, Dios te salve. " +
      "A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando en este valle de lágrimas. " +
      "Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, " +
      "y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. " +
      "¡Oh clemente, oh piadosa, oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, " +
      "para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.",
  },
  final: {
    id: "final",
    titulo: "Oración final",
    audio: true,
    texto:
      "Oh Dios, cuyo Hijo unigénito nos dio, con su vida, muerte y resurrección, los tesoros de la salvación eterna, " +
      "concédenos, meditando los misterios del Santo Rosario de la Santísima Virgen María, " +
      "imitar lo que contienen y alcanzar lo que prometen. Por Jesucristo, Nuestro Señor. Amén.",
  },
  letania_intro: {
    id: "letania_intro",
    titulo: "Letanías (introducción)",
    audio: false,
    texto:
      "Señor, ten piedad. Cristo, ten piedad. Señor, ten piedad. Cristo, óyenos. Cristo, escúchanos. " +
      "Dios Padre celestial, ten piedad de nosotros. Dios Hijo, Redentor del mundo, ten piedad de nosotros. " +
      "Dios Espíritu Santo, ten piedad de nosotros. Santísima Trinidad, que eres un solo Dios, ten piedad de nosotros.",
  },
};

// Invocaciones de la Letanía Lauretana (cada una se puede leer con "Ruega por nosotros").
export const LETANIAS_INVOCACIONES = [
  "Santa María", "Santa Madre de Dios", "Santa Virgen de las vírgenes",
  "Madre de Cristo", "Madre de la Iglesia", "Madre de la misericordia",
  "Madre de la divina gracia", "Madre purísima", "Madre castísima",
  "Madre siempre virgen", "Madre inmaculada", "Madre amable", "Madre admirable",
  "Madre del buen consejo", "Madre del Creador", "Madre del Salvador",
  "Virgen prudentísima", "Virgen digna de veneración", "Virgen digna de alabanza",
  "Virgen poderosa", "Virgen clemente", "Virgen fiel", "Espejo de justicia",
  "Trono de la eterna sabiduría", "Causa de nuestra alegría", "Vaso espiritual",
  "Vaso digno de honor", "Vaso insigne de devoción", "Rosa mística",
  "Torre de David", "Torre de marfil", "Casa de oro", "Arca de la alianza",
  "Puerta del cielo", "Estrella de la mañana", "Salud de los enfermos",
  "Refugio de los pecadores", "Consuelo de los migrantes", "Consuelo de los afligidos",
  "Auxilio de los cristianos", "Reina de los Ángeles", "Reina de los Patriarcas",
  "Reina de los Profetas", "Reina de los Apóstoles", "Reina de los Mártires",
  "Reina de los Confesores", "Reina de las Vírgenes", "Reina de todos los Santos",
  "Reina concebida sin pecado original", "Reina asunta a los cielos",
  "Reina del Santísimo Rosario", "Reina de la familia", "Reina de la paz",
];

// Los 20 misterios agrupados en 4 series.
export const MISTERIOS = {
  gozosos: {
    nombre: "Misterios Gozosos",
    dias: ["lunes", "sabado"],
    lista: [
      {
        titulo: "1. La Anunciación del Ángel a María",
        texto:
          "El ángel Gabriel es enviado por Dios a Nazaret para anunciar a María que ha sido elegida " +
          "para ser la Madre del Salvador. María responde con humildad: «He aquí la esclava del Señor, " +
          "hágase en mí según tu palabra». Pidamos la virtud de la humildad.",
      },
      {
        titulo: "2. La Visitación de María a su prima Isabel",
        texto:
          "Apenas concebido el Hijo de Dios, María va a servir a su prima Isabel, madre de Juan el Bautista. " +
          "Isabel la saluda llena del Espíritu Santo: «Bendita tú entre las mujeres». Pidamos la caridad hacia el prójimo.",
      },
      {
        titulo: "3. El Nacimiento de Jesús en Belén",
        texto:
          "En una pobre gruta de Belén, María da a luz al Hijo de Dios hecho hombre. " +
          "Los ángeles anuncian a los pastores una gran alegría para todo el pueblo. Pidamos el espíritu de pobreza y sencillez.",
      },
      {
        titulo: "4. La Presentación de Jesús en el Templo",
        texto:
          "María y José presentan al Niño Jesús en el Templo, cumpliendo la Ley. " +
          "El anciano Simeón lo reconoce como la luz de las naciones. Pidamos la virtud de la obediencia.",
      },
      {
        titulo: "5. El Niño Jesús es hallado en el Templo",
        texto:
          "Después de tres días de búsqueda, María y José encuentran a Jesús, de doce años, " +
          "enseñando entre los doctores del Templo. Pidamos la gracia de buscar siempre a Dios en nuestra vida.",
      },
    ],
  },
  dolorosos: {
    nombre: "Misterios Dolorosos",
    dias: ["martes", "viernes"],
    lista: [
      {
        titulo: "1. La Oración de Jesús en el Huerto",
        texto:
          "Jesús, agobiado por la angustia, ora en Getsemaní y suda sangre, aceptando la voluntad del Padre: " +
          "«no se haga mi voluntad, sino la tuya». Pidamos arrepentimiento por nuestros pecados.",
      },
      {
        titulo: "2. La Flagelación de Jesús",
        texto:
          "Jesús es atado a la columna y azotado cruelmente por los soldados. " +
          "Su cuerpo es desgarrado por nuestros pecados. Pidamos la virtud de la pureza.",
      },
      {
        titulo: "3. La Coronación de espinas",
        texto:
          "Los soldados se burlan de Jesús, lo visten de púrpura y le colocan una corona de espinas, " +
          "aclamándolo con desprecio como «rey de los judíos». Pidamos la virtud de la humildad ante las humillaciones.",
      },
      {
        titulo: "4. Jesús con la Cruz a cuestas",
        texto:
          "Jesús carga la pesada cruz camino del Calvario, cae varias veces y es ayudado por el Cirineo. " +
          "Pidamos paciencia para llevar las cruces de cada día.",
      },
      {
        titulo: "5. La Crucifixión y Muerte de Jesús",
        texto:
          "En el monte Calvario, Jesús es clavado en la cruz y muere por la salvación de toda la humanidad, " +
          "entregando su espíritu al Padre. Pidamos la gracia de la perseverancia final.",
      },
    ],
  },
  gloriosos: {
    nombre: "Misterios Gloriosos",
    dias: ["miercoles", "domingo"],
    lista: [
      {
        titulo: "1. La Resurrección de Jesús",
        texto:
          "Al tercer día, Jesús resucita glorioso, venciendo a la muerte para siempre. " +
          "Pidamos la virtud de la fe.",
      },
      {
        titulo: "2. La Ascensión de Jesús al Cielo",
        texto:
          "Cuarenta días después de resucitar, Jesús sube a los cielos ante sus discípulos, " +
          "y les promete enviar al Espíritu Santo. Pidamos la virtud de la esperanza.",
      },
      {
        titulo: "3. La Venida del Espíritu Santo",
        texto:
          "El día de Pentecostés, el Espíritu Santo desciende sobre María y los apóstoles reunidos " +
          "en el Cenáculo, dándoles fortaleza para anunciar el Evangelio. Pidamos los dones del Espíritu Santo.",
      },
      {
        titulo: "4. La Asunción de María a los Cielos",
        texto:
          "Al concluir su vida en la tierra, María es llevada en cuerpo y alma a la gloria del Cielo. " +
          "Pidamos una verdadera devoción a la Virgen María.",
      },
      {
        titulo: "5. La Coronación de María como Reina",
        texto:
          "María es coronada por su Hijo como Reina del Cielo y de la Tierra, Madre y Reina nuestra. " +
          "Pidamos confiar siempre en su intercesión maternal.",
      },
    ],
  },
  luminosos: {
    nombre: "Misterios Luminosos",
    dias: ["jueves"],
    lista: [
      {
        titulo: "1. El Bautismo de Jesús en el Jordán",
        texto:
          "Jesús se hace bautizar por Juan en el río Jordán, y el Padre lo proclama su Hijo amado " +
          "mientras el Espíritu Santo desciende sobre Él. Pidamos vivir con fidelidad nuestro bautismo.",
      },
      {
        titulo: "2. Las Bodas de Caná",
        texto:
          "En Caná, Jesús convierte el agua en vino a petición de su Madre, realizando su primer milagro. " +
          "Pidamos confiar en la intercesión de María ante Jesús.",
      },
      {
        titulo: "3. El anuncio del Reino de Dios",
        texto:
          "Jesús predica la conversión y anuncia el Reino de Dios, invitando a todos a la penitencia y a la fe " +
          "en el Evangelio. Pidamos un corazón dispuesto a la conversión.",
      },
      {
        titulo: "4. La Transfiguración de Jesús",
        texto:
          "En el monte Tabor, Jesús se transfigura ante Pedro, Santiago y Juan, mostrando su gloria divina. " +
          "Pidamos la fortaleza para atravesar los momentos difíciles con esperanza en la gloria futura.",
      },
      {
        titulo: "5. La Institución de la Eucaristía",
        texto:
          "En la Última Cena, Jesús instituye la Eucaristía, entregando su Cuerpo y su Sangre " +
          "como alimento espiritual para siempre. Pidamos amor y reverencia hacia la Eucaristía.",
      },
    ],
  },
};

export const DIA_A_MISTERIO = {
  domingo: "gloriosos",
  lunes: "gozosos",
  martes: "dolorosos",
  miercoles: "gloriosos",
  jueves: "luminosos",
  viernes: "dolorosos",
  sabado: "gozosos",
};
