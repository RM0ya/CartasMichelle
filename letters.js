// Configura aquí tus cartas/sobres
const letters = [
  {
    title: 'Para ti,',
    previewText: 'De Mamá',
    text: `<p>1</p>
           <p><2/p>`,
    sign: 'Con todo mi cariño'
  },
  {
    title: 'Un recordatorio,',
    previewText: 'De Papá',
    text: `<p>1</p>
           <p>2</p>`,
    sign: 'Siempre tuyo/a'
  },
  {
    title: 'Querida hermanita:',
    previewText: 'De Panchi',
    text: `<p>Hoy es un día demasiado especial, porque no todos los días se cumplen 18 años. Hoy comienzas una etapa nueva de tu vida,
              una etapa llena de sueños, cambios, aprendizajes, aventuras y momentos que estoy segura de que vas a recordar para siempre. 
              Y yo no podía dejar pasar este día sin decirte todo lo que significas para mí.
              Primero que todo, quiero desearte un muy feliz cumpleaños. Espero que este nuevo año de vida venga lleno de cosas bonitas,
              de personas que te quieran de verdad,
              de momentos que te hagan sonreír y de sueños que poco a poco puedas cumplir.
              Te mereces todo lo lindo que la vida pueda darte.
              A veces quizás no te lo digo, o quizás no soy muy buena demostrando lo que siento, pero quiero que sepas que te quiero muchísimo.
              Eres una persona muy importante para mí y, aunque 
              como hermanas seguramente hemos tenido nuestras peleas, diferencias, enojos y momentos en los que no nos hemos entendido, 
              nada de eso cambia el cariño enorme que te tengo.
              Hemos compartido tantos momentos juntas. Algunos han sido felices, otros no tanto, 
              pero todos forman parte de nuestra historia. Hemos reído, hemos conversado, 
              hemos discutido por cosas pequeñas y también hemos estado ahí en momentos importantes.
              Y aunque el tiempo pase y cada una vaya creciendo y tomando su propio camino, siempre vas a ser mi hermana y siempre voy a guardar un lugar muy especial para ti en mi corazón.
              Hoy que cumples 18 años, quiero que mires hacia atrás y recuerdes todo lo que has vivido. 
              Mira cuánto has crecido, cuánto has aprendido y todas las cosas que has logrado superar. 
              Quizás todavía no te das cuenta de todo lo que eres capaz de hacer, pero espero que nunca dudes de ti misma. 
              Te quiero mucho y sige cumpliendo más años mas
           </p>`,
    sign: 'Con amor Panchi'
  },
  {
    title: 'Feliz cumpleaños:',
    previewText: 'De Hans',
    text: `<p>  Ojalá que pases un buen dia y que te regaloneen harto hoy te mereces un descanso aun que no haces nada casi , 
                comer rico y pasarlo bien con todos juntos, sin andar estresada por ni una tontera de verdad da gusto ver que te mantienes enfocada y que te va bien en todo logrando tus metas. 
                Sigue así no más, que vas súper bien.Espero que este año que viene llegue cargado de puras cosas buenas, de buenas noticias, éxito y harta salud, que es lo más importante que te salga todo tal cual lo tienes planeado pásala bacán hoy, 
                un abrazo gigante y los mejores deseos siempre, bruja floja pesa
          </p>`,
    sign: 'Tu hermano Hans'
  },
  {
    title: '',
    previewText: 'De Elias',
    text: `<p>Querida hermana:te quiero decir algo eres la mejor hermana que es visto en mi vida , 
          aunque me reti y me peges siempre te amaré,  te deseo un feliz cumpleaños y que la pase bien con nosotros que te amamos mucho,  
          que este año se muy feliz para ti te quiero mucho, que cumplas muchos años más,  
          feliz 18 años te amamos
          </p>`,
    sign: 'Te amo mucho michi'
  },
  {
    title: '',
    previewText: 'De Dylan ',
    text: `<p> </p>`,
    sign: ''
  },
  {
    title: 'Mi princesa:',
    previewText: 'De Nachito',
    text: `<p> Hace casi un año que empezamos a hablar y son impresionantes las cosas que hemos pasado juntos, y hoy estoy aquí celebrando sus 18 años.
               Muchas veces se lo he dicho pero me faltarán palabras para decirle que estoy muy orgulloso de usted, es increíble en la gran mujer que se ha convertido, una mujer hermosa y sobre todo pura de corazón, una mujer valiente y fuerte ya que no importa los golpes que le da la vida usted se sabe levantar y salir adelante. Hoy comienza una nueva temporada en su vida, y de corazón le quiero pedir que nunca cambie su forma ser, ese carácter fuerte que tiene, su forma de amar, su manera de siempre pensar en la otra persona, en siempre dar lo mejor de usted sin importarle si sale dañada o no.
               Hoy está cumpliendo 18 años, una edad más seria, con más responsabilidades dónde empieza a formar su propio camino, pero quiero que sepa que siempre me tendrá ahí para lo que necesite, siempre se lo he dicho que usted es mi mundo entero.
               Se que es un cumpleaños diferente, un poco triste, pero por favor disfrute en este día y los próximos 365 días que se vienen, nunca deje de sonreír porque créame que estoy seguro que hay una persona que está mucho más orgullosa que yo, por lo fuerte y valiente que ha sido en este difícil proceso, y usted sabe de quién hablo...
               Se que en este día tiene un millón de emociones, quizás estos últimos meses no han sido los mejores, muchas cosas no han salido como usted ha querido, pero no pierda el foco mi vida, usted es una mujer inteligente, la única que se pone el límite es usted, porque créame que si usted se lo propone logrará muchas cosas.
              Mi vida en este día le quiero desear un muy feliz cumpleaños, que Dios me la proteja en todo momento y que nunca pierda ese brillo que la caracteriza, la amo hoy, mañana y siempre mi princesa.
          </p>`,
    sign: 'Su gordito.'
  },
  {
    title: '¡Feliz cumpleaños, mi niña hermosa!',
    previewText: 'De Abuela Nita',
    text: `<p>  Que sigas cumpliendo muchos más junto a tu padres y hermanos; 
                yo, tu abuela, me siento muy orgullosa de la niña que eres. 
                Sé que tienes muchos sueños en tu vida y sé que los vas a lograr; 
                espero verte convertida en una gran mujer. Mi niña, no olvides que la amo con todo mi corazón.
                </p>`,
    sign: 'Con amor tu abuela Nita.'
  },
  {
    title: '',
    previewText: 'De Sally',
    text: `<p> </p>`,
    sign: ''
  },
  {
    title: 'Feliz Cumpleaños Sobrina:',
    previewText: 'De Telo',
    text: `<p>Hola sobrina le habla su tio telo, quiero desearle un gran día junto a sus seres queridos, un día que disfrute, que descanse y sobre todo que se sienta acompañada.
              Además quiero decirle todo lo que siento por su forma de actuar, su empatía, su forma de actuar frente a las adversidades y sobre todo su sinceridad sin pelos en la lengua y 
              eso se agradece, las personas que son capaces de decir las cosas sin pensar en como la otra persona se pueda sentir mal, habla bien de ud y mejor aun de la crianza de sus papás.
          </p>`,
    sign: 'Con cariño Tio Telo'
  },
  {
    title: 'Hoy es tu cumpleaños',
    previewText: 'Benjamín Zenteno',
    text: `<p> Chora michi espero sea un día muy feliz
              y agradable para ti que disfrutes un montón tú sabes todo el cariño que te tengo nos conocemos de muy chicos
              y sé a formado una amistad muy agradable tú sabes que cuentas con un amigo para todas para las buenas y sobre todo para las malas 
              te mando un fuerte abrazo te has convertido en una grandiosa mujer y sigue así que llegarás muy lejos espero esta vuelta al sol esté llena de alegría
              y salud para ti y tu familia y seres queridos un abrazó chora michi , con cariño tu amigo zenteno.
            </p>`,
    sign: 'Chora Michi'
  },
  {
    title: 'feliz cumpleaños negra',
    previewText: 'De Jordan',
    text: `<p>espero que sigas cumpliendo muchos más eres una persona maravillosa  eres la mejor espero que cumplas todos tus sueños junto a tu familia. 
            siempre contaras con migo en todo te quiero mucho mi negra🥳🥰❤️
           </p>`,
    sign: ''
  },
  {
    title: 'Hola Michel',
    previewText: 'De Misa',
    text: `<p> 
    espero cumplas mucho años mas y que todas tus metas se. 
    Cumplan espero que todos tus sueños se cumplan, estoy grandemente agradecido por todo ah sido una amiga legal y 
    leal a pesar se que ya no nos vemos pero yo se que si te nesesito estaras aki y si tu me nesesitas yo estare hay para pegarle a cualqueir klo mi hermana te amo como 
    a la hermana que no tube, espero que esta amistad siga para muchos años mas hasta que se te caiga el bigote y ami me salga bigote jaja.
    </p>`,
    sign: 'te quiero negraaaa'
  },
  {
    title: 'Holii mi morenitaaa lindaa',
    previewText: 'De Kote',
    text: `<p>feliz cumpleaños reyna que cumplas muchos mas y que dios te bendiga siempre, 
              ojala estar pronto por aya, celebrarlos y colocarnos al dia jeje que este nuevo año de vida vengan con muchisimas cosas bonitas para ti porque te lo mereces tanto, 
              ya son 18 recuerdo cuando eramos mas pequeñas y grabando tiktoks ajjaja y los bajones solo para nosotras, te amo mucho mi morena linda te deseo un muy feliz cumpleaños y 
              que te regaloneen mucho ❤️ y gracias igual a nachito pop por hacerte esto tan lindo disfruta tu dia al mil.
            </p>`,
    sign: 'Te quiere Kote'
  },
  {
    title: 'Felices 18, amiga',
    previewText: 'De Estefani',
    text: `<p>Felices 18, amiga 
              Espero que este día sea muy lindo para ti y que disfrutes mucho junto a las personas que quieres. Espero que esta nueva etapa venga llena de cosas bonitas, nuevas experiencias y muchos momentos que puedas recordar con cariño.
              Eres una persona muy especial y, sobre todo, alguien muy fuerte. Admiro la forma en que has sabido seguir adelante y enfrentar las distintas situaciones que se te han presentado
              Deseo de corazón que puedas cumplir todas tus metas, que nunca dejes de luchar por lo que quieres y que siempre tengas muchos motivos para sonreír. Espero que estos 18 años estén llenos de momentos bonitos y que sea el comienzo de una etapa muy especial para ti Felices 18, amiga. Espero que tengas un día hermoso y que seas muy feliz siempre. 
          </p>`,
    sign: 'Felices 18, amiga'
  },
  {
    title: 'Hola, hija mía, mi princesa:',
    previewText: 'De Don Mauri',
    text: `<p> 
    mi bebé. ¿Cómo estás?
    Admiro tu alegría, tu humildad e inteligencia. Adoro verte disfrutar de la música, tal como la disfruto yo; disfruto y me llena de orgullo tu talento artístico, que tengo muy claro de quién lo sacaste, jaja.
    Mi wawa, solo quiero desearte un feliz cumpleaños y que, en esta nueva vuelta al sol, el brillo de tu aura nada ni nadie lo apague, porque, como siempre te he dicho, tú brillas con luz propia.
    Te amo con toda el alma, mi princesa, hasta el final de mis días.
    Con todo mi amor,
    En Un día como hoy, hace 18 años, te recibí en mis brazos con la emoción con la que un padre feliz recibe a su hija, y juré que siempre estaría cuidando de ti. Tal vez las cosas no resultaron como esperaba, pero nunca dejé de lado el amor que siempre voy a sentir por ti, porque eres mi única hija, la cual amo con todo mi corazón.
    Tu papá...  </p>`,
    sign: 'Mauricio Araya'
  },

];
