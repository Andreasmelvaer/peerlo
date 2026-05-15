export type ContentBlock = string | { items: string[] };

export interface InlineImage {
  src: string;
  alt: string;
  afterBlock: number;
}

export interface ImageCredit {
  photographer: string;
  url: string;
  source: "Unsplash";
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: number;
  image: string;
  inlineImages?: InlineImage[];
  credits?: ImageCredit[];
  relatedSlugs: string[];
  content: ContentBlock[];
}

const posts: Post[] = [
  {
    slug: "hva-jeg-savnet",
    title: "Hva jeg egentlig savnet da jeg hadde det vanskelig",
    excerpt:
      "Da jeg selv slet psykisk, prøvde jeg terapi. Flere former også. Noe hjalp litt. Mye hjalp ikke. Men for meg føltes det ofte som om noe manglet.",
    date: "2026-05-18",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/hva-jeg-savnet.jpg",
    inlineImages: [
      { src: "/images/blog/hva-jeg-savnet-inline-1.jpg", alt: "En mann som sitter alene på et fjell og ser utover norsk natur", afterBlock: 6 },
      { src: "/images/blog/hva-jeg-savnet-inline-2.jpg", alt: "En person som sitter i ro ved et vindu med utsikt over norsk natur", afterBlock: 15 },
    ],
    credits: [
      { photographer: "Daniel", url: "https://unsplash.com/@danieluvegard", source: "Unsplash" },
    ],
    relatedSlugs: [
      "forskjellen-hort-og-forstatt",
      "hva-er-peer-support",
      "hvorfor-hjelp-for-sent",
    ],
    content: [
      "Da jeg selv slet psykisk, prøvde jeg terapi. Flere former også. Noe hjalp litt, mye hjalp ikke. Det betyr ikke at terapi er feil. For mange er det helt avgjørende. Men for meg føltes det ofte som om noe manglet.",
      "Jeg savnet ikke nødvendigvis flere råd. Jeg savnet et menneske som faktisk visste hvordan det føltes. Noen som kunne si:\n«Jeg har stått i noe lignende selv.»",
      "Ikke som fagperson. Ikke som ekspert. Men som medmenneske.",
      "For når man sliter psykisk, føler man seg ofte alene, selv når man er omgitt av mennesker. Mange blir flinke til å skjule det. Man går på jobb. Smiler. Leverer. Fungerer på utsiden. Men inni seg kan man føle skam, håpløshet, uro, ensomhet og frykt for å være en belastning.",
      "Og det er akkurat der jeg tror [peer support](/blog/hva-er-peer-support) kan gjøre en enorm forskjell. For noen ganger trenger man ikke et menneske som skal «fikse» deg. Man trenger et menneske som gjør at du føler deg mindre alene i det du står i.",
      "Det er noe spesielt med å møte noen som har kjent på lignende tanker, vært langt nede selv, og kommet seg videre. Det skaper en annen type trygghet. En annen type troverdighet.",
      "Man slipper å bruke like mye energi på å forklare hvordan det føles. Man kjenner ofte ganske raskt:\n«Ok … denne personen skjønner faktisk litt av det jeg prøver å si.»",
      "Jeg tror også det senker terskelen enormt. Mange søker ikke hjelp fordi det føles for formelt, for alvorlig, for skummelt, eller fordi de ikke føler seg «syke nok». Peer support kan være noe annet. Noe mer menneskelig, mer lavterskel, mer tilgjengelig.",
      "Ikke som en erstatning for terapi eller profesjonell hjelp, men som et supplement. Eller som det første steget [før ting vokser seg større](/blog/hvorfor-hjelp-for-sent).",
      "Det er også en av hovedgrunnene til at jeg bygger Peerlo i dag. Fordi jeg tror mange mennesker går rundt og bærer på ting alene altfor lenge. Og fordi jeg tror det finnes enorm verdi i å kunne si:\n«Du trenger ikke forklare alt. Jeg har vært der selv.»",
      "Les også: [Forskjellen på å bli hørt og å bli forstått](/blog/forskjellen-hort-og-forstatt)",
    ],
  },
  {
    slug: "forskjellen-hort-og-forstatt",
    title: "Forskjellen på å bli hørt og å bli forstått",
    excerpt:
      "Jeg husker ikke nødvendigvis alle rådene jeg fikk da jeg hadde det vanskelig. Men jeg husker følelsen av å møte mennesker som faktisk forstod.",
    date: "2026-05-25",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/forskjellen-hort-og-forstatt.jpg",
    inlineImages: [],
    relatedSlugs: [
      "hva-jeg-savnet",
      "hva-er-peer-support",
      "vanlig-menneske-hjelpe",
    ],
    content: [
      "Jeg husker ikke nødvendigvis alle rådene jeg fikk da jeg hadde det vanskelig. Men jeg husker følelsen av å møte mennesker som faktisk forstod. Det er en stor forskjell på de to tingene.",
      "Mange mennesker er flinke til å lytte. Mange mener godt og prøver virkelig å hjelpe. Men noen ganger merker man ganske raskt om personen foran deg virkelig forstår følelsen, eller bare prøver å forstå den. Og den forskjellen kan være enorm når man sliter psykisk.",
      "Jeg har hatt samtaler der jeg satt igjen med følelsen av å være analysert. Kartlagt. Vurdert. Andre ganger har jeg møtt mennesker som bare traff på en helt annen måte. Ikke fordi de hadde perfekt utdanning, og ikke fordi de sa alle de riktige tingene. Men fordi de hadde kjent på noe lignende selv.",
      "Det skaper ofte en helt annen ro i samtalen. Man slipper å overforklare. Man slipper å «bevise» hvordan man har det. Man føler seg mindre rar.",
      "Noen ganger holder det nesten med små ting. Måten noen nikker på. Stillheten de tåler. At de ikke prøver å fikse deg med én gang, men tør å være ærlige tilbake.",
      "Det er kanskje nettopp derfor [peer support](/blog/hva-er-peer-support) kan oppleves så annerledes. For i peer support handler det ikke om å være ekspert på mennesker. Det handler om å møte noen som menneske.",
      "Jeg tror også mange undervurderer hvor mye håp det kan gi å møte noen som faktisk har kommet seg gjennom noe vanskelig. Ikke fordi livet deres er perfekt nå, men fordi de er et levende bevis på at det går an å komme videre. Det kan være utrolig kraftfullt når man selv står midt i mørket.",
      "Og kanskje er det nettopp derfor så mange [åpner seg lettere](/blog/apne-deg-forste-gang) for mennesker med egenerfaring. Ikke fordi de nødvendigvis har alle svarene, men fordi de vet hvordan det føles når livet gjør vondt.",
      "Les også: [Hvordan kan et vanlig menneske hjelpe meg?](/blog/vanlig-menneske-hjelpe)",
    ],
  },
  {
    slug: "hva-er-peer-support",
    title: "Hva er egentlig peer support?",
    excerpt:
      "«Peer support» høres kanskje ut som et fancy faguttrykk. Men egentlig handler det om noe ganske menneskelig. Å få støtte fra noen som har opplevd noe lignende.",
    date: "2026-06-01",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/hva-er-peer-support-inline-1.jpg",
    inlineImages: [],
    credits: [
      { photographer: "Faris Mohammed", url: "https://unsplash.com/@pkmfaris", source: "Unsplash" },
    ],
    relatedSlugs: [
      "hva-jeg-savnet",
      "hvorfor-hjelp-for-sent",
      "hvem-peer-support-hjelpe",
    ],
    content: [
      "«Peer support» høres kanskje ut som et fancy faguttrykk. Men egentlig handler det om noe ganske menneskelig. Det handler om å få støtte fra noen som har opplevd noe lignende selv. Noen som ikke bare har lest om det, men kjent det på kroppen.",
      "Det kan dreie seg om psykiske utfordringer, ensomhet, utbrenthet, angst, depresjon, sorg eller traumer. Eller bare perioder der livet føles tungt og man trenger noen å snakke med.",
      "I stedet for å møte noen som analyserer deg, møter du noen som kan si:\n«Jeg kjenner igjen følelsen.»",
      "Og akkurat det kan bety mer enn mange tror. For når man har det vanskelig, føler man seg ofte alene i det man står i. Man kan tenke at ingen skjønner meg, at det bare er jeg som har det sånn, eller at jeg burde klart dette bedre.",
      "Peer support kan bryte litt med den følelsen. Ikke fordi den andre personen har alle svarene, men fordi de gjør at man føler seg mindre alene. Det handler mer om støtte, gjenkjennelse, håp, ærlige samtaler og følelsen av å bli forstått.",
      "Noen ganger kan det faktisk være lettere å [åpne seg](/blog/apne-deg-forste-gang) for noen med egenerfaring enn for venner eller familie. Fordi det ofte er mindre skam, mindre frykt for å bli dømt, og mindre behov for å forklare alt i detalj.",
      "Mange opplever også at terskelen blir lavere. Det føles mindre dramatisk å ta en prat med et medmenneske enn å «søke hjelp». Og kanskje er det nettopp derfor peer support kan hjelpe mennesker tidligere, før ting vokser seg større.",
      "Jeg tror egentlig ikke peer support handler om perfekte samtaler. Jeg tror det handler om noe mye enklere. Å møte et menneske som sier:\n«Du er ikke alene i dette.»",
      "Les også: [Hvem kan peer support være ekstra viktig for?](/blog/hvem-peer-support-hjelpe)",
    ],
  },
  {
    slug: "hvorfor-hjelp-for-sent",
    title: "Hvorfor søker så mange hjelp altfor sent?",
    excerpt:
      "Jeg tror ikke hovedproblemet er at mennesker ikke vil ha hjelp. Jeg tror problemet er at terskelen føles altfor høy. Så man venter. Ofte altfor lenge.",
    date: "2026-06-08",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/hvorfor-hjelp-for-sent.jpg",
    inlineImages: [],
    relatedSlugs: [
      "vanskelig-forsta-psykisk-helse",
      "alene-for-lenge",
      "apne-deg-forste-gang",
    ],
    content: [
      "Jeg tror ikke hovedproblemet er at mennesker ikke vil ha hjelp. Jeg tror problemet er at terskelen føles altfor høy. Mange går rundt med tanker som «det er ikke alvorlig nok», «andre har det verre enn meg», «jeg burde klare dette selv», eller «jeg vil ikke være en belastning».",
      "Så man venter. Og venter litt til. Ofte helt til kroppen eller hodet sier stopp.",
      "Jeg tror også mange er redde for hva det betyr å «søke hjelp». For noen føles det stort, nesten dramatisk. Det kan føles som å innrømme nederlag, som å miste kontroll, eller som å måtte sette ord på noe man knapt forstår selv.",
      "Og kanskje er det nettopp derfor [peer support](/blog/hva-er-peer-support) kan være lettere for mange. For det føles ofte mer menneskelig. Mer som:\n«Kan jeg bare få snakke med noen som skjønner litt?»",
      "I stedet for:\n«Jeg trenger behandling.»",
      "Det er en stor forskjell. Når man møter noen med egenerfaring, senkes ofte skuldrene litt. Man slipper følelsen av å måtte prestere i samtalen, og man slipper kanskje også frykten for å bli analysert eller misforstått.",
      "For det er noe eget med mennesker som faktisk har kjent på lignende ting selv. De vet ofte hvor vanskelig det kan være å [åpne seg](/blog/apne-deg-forste-gang), hvor mye skam som kan ligge bak, og hvor slitsomt det er å late som alt går fint.",
      "Og noen ganger er det akkurat derfor folk tør å være ærlige. Ikke fordi den andre personen har perfekte svar, men fordi de skaper trygghet.",
      "Jeg tror egentlig mange mennesker kunne fått hjelp mye tidligere dersom terskelen føltes lavere. Hvis det føltes mer normalt å si:\n«Jeg har det litt tungt om dagen.»",
      "Før det blir:\n«Jeg klarer ikke mer.»",
      "Kanskje er det nettopp der peer support kan gjøre den største forskjellen.",
      "Les også: [Hva skjer når man går alene for lenge?](/blog/alene-for-lenge)",
    ],
  },
  {
    slug: "vanskelig-forsta-psykisk-helse",
    title: "Vanskelig å forstå psykisk helse uten å ha kjent det",
    excerpt:
      "Jeg tror mange mennesker misforstår psykisk helse. Ikke fordi de er onde, men fordi de aldri har kjent det på kroppen selv. Det er vanskelig å forstå det usynlige.",
    date: "2026-06-15",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/vanskelig-forsta-psykisk-helse.jpg",
    inlineImages: [],
    relatedSlugs: [
      "hva-jeg-savnet",
      "hvorfor-hjelp-for-sent",
      "alene-for-lenge",
    ],
    content: [
      "Jeg tror mange mennesker misforstår psykisk helse. Ikke fordi de er onde, men fordi de aldri har kjent det på kroppen selv. Det er vanskelig å forstå hvor tungt noe kan være når det ikke synes utenpå.",
      "Mange tenker fortsatt: «Bare ta deg sammen», «kom deg ut litt», «tenk positivt», «alle har det vanskelig iblant». Og ja, alle har tunge dager. Men psykiske utfordringer handler ofte om noe helt annet enn å være litt sliten eller lei seg.",
      "Det kan være som å gå rundt med en usynlig vekt på kroppen hver eneste dag. Noen klarer fortsatt å gå på jobb, smile, levere, være sosial. Men inni seg kan de være helt utslitt.",
      "Det tror jeg mange undervurderer. Jeg gjorde kanskje det selv også, før jeg opplevde det på nært hold. Jeg trodde nok psykisk uhelse ofte så mer «tydelig» ut, at man kunne se det.",
      "Men mange av de som sliter mest er ofte de flinkeste til å skjule det. De fungerer. Helt til de plutselig ikke gjør det lenger.",
      "Og kanskje er det nettopp derfor så mange føler seg alene. For hvis ingen ser det, begynner man ofte å tenke at man bare er svak, at man overdriver, at man burde tålt mer. Det er en farlig spiral.",
      "Jeg tror også mange ikke forstår hvor mye skam som kan ligge bak psykiske utfordringer. Skam over å ikke mestre, over å være sliten, over å ikke kjenne seg selv igjen. Og jo lenger man [går alene med det](/blog/alene-for-lenge), jo vanskeligere kan det bli å åpne seg.",
      "Kanskje er det derfor [peer support](/blog/hva-er-peer-support) kan bety så mye. For noen ganger trenger man ikke nødvendigvis et menneske som har alle løsningene. Man trenger et menneske som sier:\n«Det du føler er ikke rart.»",
      "Det kan være starten på noe veldig viktig.",
      "Les også: [Hvorfor søker så mange hjelp altfor sent?](/blog/hvorfor-hjelp-for-sent)",
    ],
  },
  {
    slug: "vanlig-menneske-hjelpe",
    title: "«Hvordan kan et vanlig menneske hjelpe meg?»",
    excerpt:
      "Mange tenker: «Hvis noen skal hjelpe meg psykisk, må de vel være ekspert?» Men jeg tror mange undervurderer verdien av et menneske som virkelig forstår følelsen.",
    date: "2026-06-22",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/vanlig-menneske-hjelpe.jpg",
    inlineImages: [
      { src: "/images/blog/vanlig-menneske-hjelpe-inline-1.jpg", alt: "Et varmt og trygt rom der to mennesker sitter sammen", afterBlock: 6 },
    ],
    relatedSlugs: [
      "forskjellen-hort-og-forstatt",
      "hva-er-peer-support",
      "etter-god-samtale",
    ],
    content: [
      "Det er egentlig et veldig forståelig spørsmål. Mange tenker nok:\n«Hvis noen skal hjelpe meg psykisk, må de vel være ekspert?»",
      "Og noen ganger trenger man selvfølgelig profesjonell hjelp. Men jeg tror også mange undervurderer hvor mye verdi det kan ligge i et menneske som virkelig forstår følelsen. For ofte handler ikke psykiske utfordringer bare om mangel på råd. Det handler om ensomhet, skam, håpløshet og følelsen av å være alene i det man står i.",
      "Og da kan et menneske med egenerfaring bety utrolig mye. Ikke fordi de har fasiten, men fordi de vet hvordan det kan føles når livet blir tungt. De vet kanskje hvordan det er å late som alt går fint, å trekke seg unna mennesker, å føle seg misforstått, og hvor vanskelig det kan være å be om hjelp.",
      "Noen ganger er det faktisk nok at noen sier:\n«Jeg kjenner meg igjen i det du sier.»",
      "Det kan senke skuldrene enormt. Jeg tror også mange blir overrasket over hvor mye trygghet som kan oppstå når man slipper å forklare absolutt alt fra bunnen av. Man føler seg mindre rar, mindre alene, mindre «feil».",
      "Og kanskje er det nettopp derfor [peer support](/blog/hva-er-peer-support) kan fungere så godt for mange. Ikke fordi peers er supermennesker, men fordi de er vanlige mennesker som har vært gjennom noe vanskelig selv. Mennesker som vet at livet kan gjøre vondt, og som tør å møte andre med ærlighet, varme og gjenkjennelse.",
      "Noen ganger kan det være mer kraftfullt enn folk tror.",
      "Les også: [Forskjellen på å bli hørt og å bli forstått](/blog/forskjellen-hort-og-forstatt)",
    ],
  },
  {
    slug: "etter-god-samtale",
    title: "Hvordan føles det etter en god peer support-samtale?",
    excerpt:
      "Jeg tror ikke målet med en god samtale er at alt skal være løst etterpå. Kanskje handler det mer om å føle seg litt mindre alene, litt lettere i kroppen.",
    date: "2026-06-29",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/etter-god-samtale-inline-1.jpg",
    inlineImages: [
      { src: "/images/blog/etter-god-samtale-inline-2.jpg", alt: "Morgenlys over et stille norsk landskap med fjell og vann", afterBlock: 11 },
    ],
    relatedSlugs: [
      "forskjellen-hort-og-forstatt",
      "vanlig-menneske-hjelpe",
      "apne-deg-forste-gang",
    ],
    content: [
      "Jeg tror ikke målet med en god samtale nødvendigvis er at alt skal være løst etterpå. Livet fungerer sjelden sånn. Man kan ikke alltid «fikse» angst, ensomhet, sorg eller tunge tanker på 40 minutter.",
      "Men kanskje kan man føle noe annet. Litt mindre alene. Litt lettere i kroppen. Litt mer forstått.",
      "Jeg tror egentlig mange mennesker går rundt og bærer veldig mye alene. Ikke fordi de vil, men fordi de ikke føler at de kan si det høyt. Så når noen endelig får en trygg samtale med et menneske som faktisk lytter, kan det gjøre mer enn man tror. Ikke nødvendigvis fordi den andre personen sier noe genialt, men fordi man kjenner:\n«Ok … jeg ble faktisk møtt nå.»",
      "Det kan være utrolig verdifullt.",
      "Jeg tror også mange undervurderer hvor mye håp som kan ligge i å møte [noen som har vært langt nede selv](/blog/vanlig-menneske-hjelpe), og fortsatt står oppreist. Ikke perfekt, ikke «ferdig fikset», bare et menneske som har kommet seg gjennom noe vanskelig. Det kan gjøre noe med hvordan man ser på sitt eget liv.",
      "Kanskje begynner man å tenke at man ikke er alene. At det finnes en vei videre. At det ikke alltid skal føles så tungt. Og noen ganger er det faktisk nok for én dag.",
      "Jeg tror derfor en god peer support-samtale ikke nødvendigvis handler om å løse alt. Kanskje handler det mer om å føle seg sett, å føle seg trygg, å tørre å være ærlig. Og å sitte igjen med litt mer håp enn man hadde før samtalen startet.",
      "Det kan være mye viktigere enn folk tror.",
      "Les også: [Til deg som vurderer å åpne deg for første gang](/blog/apne-deg-forste-gang)",
    ],
  },
  {
    slug: "hvem-peer-support-hjelpe",
    title: "Hvem kan peer support være ekstra viktig for?",
    excerpt:
      "Jeg tror peer support kan hjelpe mange forskjellige mennesker. Men kanskje spesielt dem som har blitt veldig flinke til å skjule hvordan de egentlig har det.",
    date: "2026-07-06",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/hvem-peer-support-hjelpe-inline-2.jpg",
    inlineImages: [],
    relatedSlugs: [
      "hva-er-peer-support",
      "hvorfor-hjelp-for-sent",
      "apne-deg-forste-gang",
    ],
    content: [
      "Jeg tror peer support kan hjelpe mange forskjellige mennesker. Men kanskje spesielt dem som har blitt veldig flinke til å skjule hvordan de egentlig har det. De som fungerer på utsiden, men har det tungt på innsiden.",
      "For sannheten er at mange som sliter psykisk fortsatt går på jobb. Trener. Smiler. Leverer. Svarer «det går fint». Samtidig som de føler seg helt tomme.",
      "Jeg tror også peer support kan være ekstra viktig for mennesker som bærer mye skam. Menn som føler de må være sterke. Ledere som føler de alltid må ha kontroll. Ansatte som er redde for konsekvenser på jobb. Pårørende som setter alle andre først. Mennesker som har blitt flinke til å lide i stillhet.",
      "Mange av disse menneskene søker aldri hjelp. Ikke fordi de ikke trenger det, men fordi terskelen føles for høy. De vil ikke være til bry, ikke virke svake, ikke miste kontroll, ikke bli sett annerledes på.",
      "Og kanskje er det nettopp derfor peer support kan treffe noe annet. For det føles ofte mindre skummelt å snakke med et medmenneske enn å «be om hjelp». Man møter ikke nødvendigvis et system. Man møter et menneske.",
      "Et menneske som kanskje vet hvordan det er å smile når man egentlig har det tungt. Å fungere på jobb mens hodet er kaos. Og å føle seg alene midt blant andre mennesker.",
      "Jeg tror også mange unge voksne kunne hatt stor nytte av [peer support](/blog/hva-er-peer-support). Spesielt i en tid der mange føler press, sammenligning, ensomhet og frykten for å ikke strekke til, samtidig som alt ser perfekt ut på utsiden.",
      "Kanskje er det nettopp derfor peer support kan bli så viktig fremover. Fordi mange mennesker ikke nødvendigvis trenger et perfekt svar. De trenger et menneske som sier:\n«Jeg kjenner igjen følelsen.»",
      "Les også: [Hva er egentlig peer support?](/blog/hva-er-peer-support)",
    ],
  },
  {
    slug: "alene-for-lenge",
    title: "Hva skjer når man går alene for lenge?",
    excerpt:
      "Jeg tror veldig mye psykisk smerte vokser i stillhet. Ikke over natten, men gradvis. Man venter, holder ut, og later som alt er fint. Helt til det ikke går lenger.",
    date: "2026-07-13",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/alene-for-lenge.jpg",
    inlineImages: [
      { src: "/images/blog/alene-for-lenge-inline-2.jpg", alt: "Et stille tåkelagt landskap med trær i dempet morgenlys", afterBlock: 12 },
    ],
    relatedSlugs: [
      "hvorfor-hjelp-for-sent",
      "vanskelig-forsta-psykisk-helse",
      "apne-deg-forste-gang",
    ],
    content: [
      "Jeg tror veldig mye psykisk smerte vokser i stillhet. Ikke over natten, men gradvis. Man begynner kanskje med å tenke:\n«Det går sikkert over.»",
      "Så holder man litt til. Og litt til. Man går på jobb, svarer på meldinger, smiler når man må, fungerer så godt man kan. Samtidig blir man kanskje mer sliten for hver uke som går.",
      "Jeg tror mange undervurderer hvor tungt det er å bære alt alene over tid. For når man ikke setter ord på det man kjenner på, begynner tankene ofte å vokse seg større inne i hodet. Man kan begynne å tvile på seg selv, trekkes bort fra mennesker, miste energi, håp og selvtillit.",
      "Noen blir sittende alene med tanker ingen rundt dem aner at de har. Og kanskje er det nettopp det som skremmer meg mest. At så mange mennesker ser helt «fine» ut på utsiden, samtidig som de har det utrolig tungt inni seg.",
      "Jeg tror også mange [venter altfor lenge](/blog/hvorfor-hjelp-for-sent) før de åpner seg. Ikke fordi de ikke vil ha hjelp, men fordi de ikke vil være en belastning, fordi de tror de burde håndtere det selv, fordi de er redde for å bli dømt, eller fordi de ikke føler seg «syke nok».",
      "Så man tier. Helt til kroppen eller hodet til slutt sier stopp. Noen ender kanskje med sykmelding, andre mister relasjoner, noen mister seg selv litt underveis. Og noen kommer så langt ned at det blir veldig vanskelig å finne veien opp alene.",
      "Det er derfor jeg tror tidlig [støtte fra noen som forstår](/blog/hva-er-peer-support) betyr så mye. Ikke nødvendigvis store løsninger, men små, trygge samtaler før ting vokser seg for stort. Kanskje med et menneske som tør å spørre:\n«Hvordan har du det egentlig?»",
      "Og som faktisk tåler det ekte svaret.",
      "Les også: [Til deg som vurderer å åpne deg for første gang](/blog/apne-deg-forste-gang)",
    ],
  },
  {
    slug: "apne-deg-forste-gang",
    title: "Til deg som vurderer å åpne deg for første gang",
    excerpt:
      "Hvis du sitter alene akkurat nå og vurderer å åpne deg for noen. Jeg håper du vet at du ikke er svak. Det krever mot å være ærlig om hvordan man har det.",
    date: "2026-07-20",
    author: "Ole Aarre",
    readingTime: 4,
    image: "/images/blog/apne-deg-forste-gang.jpg",
    inlineImages: [
      { src: "/images/blog/apne-deg-forste-gang-inline-2.jpg", alt: "Varmt lys som faller inn gjennom et vindu i et stille rom", afterBlock: 12 },
    ],
    relatedSlugs: [
      "hva-er-peer-support",
      "etter-god-samtale",
      "alene-for-lenge",
    ],
    content: [
      "Hvis du sitter alene akkurat nå og vurderer å åpne deg for noen, håper jeg du vet at du ikke er svak. Selv om det kanskje føles sånn.",
      "Det er utrolig mange mennesker som går rundt og bærer på ting ingen andre ser. Mennesker som fungerer på jobb, smiler til andre, svarer «det går fint», og samtidig har det veldig tungt inni seg. Du er ikke alene om det.",
      "Og du trenger heller ikke ha «store nok problemer» for å snakke med noen. Man trenger ikke være helt knust før man fortjener støtte. Jeg tror faktisk mange hadde hatt godt av å [åpne seg mye tidligere](/blog/alene-for-lenge), før alt vokser seg så stort.",
      "For sannheten er at det ofte krever mer styrke å være ærlig enn å late som alt går fint. Selv små ord kan være vanskelige å si høyt. «Jeg sliter litt.» «Jeg er sliten.» «Jeg føler meg alene.» «Jeg vet ikke helt hvordan jeg har det.»",
      "Men kanskje er det nettopp der noe kan begynne å løsne litt. Ikke nødvendigvis fordi én samtale løser alt, men fordi man slipper å bære alt alene. Og noen ganger kan det være starten på [noe viktig](/blog/etter-god-samtale).",
      "Jeg tror heller ikke du trenger å forklare alt perfekt. Du trenger ikke ha de riktige ordene, og du trenger ikke vite nøyaktig hva som er galt. Noen ganger holder det egentlig å si:\n«Jeg tror jeg trenger noen å snakke med.»",
      "Det er mer enn nok.",
      "Les også: [Hva jeg egentlig savnet da jeg hadde det vanskelig](/blog/hva-jeg-savnet)",
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post): Post[] {
  return post.relatedSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is Post => p !== undefined);
}
