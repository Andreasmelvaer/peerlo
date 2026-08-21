import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { parseLegalMarkdown } from "@/lib/legalMarkdown";

export const metadata: Metadata = {
  title: "Vilkår og brukervilkår (EULA)",
  description:
    "Peerlos sluttbrukerlisensavtale og brukervilkår (EULA): hva Peerlo er, hva tjenesten ikke er, brukerens ansvar og vilkår for bruk via Apple App Store.",
  alternates: { canonical: "https://peerlo.no/vilkar" },
  openGraph: {
    title: "Vilkår og brukervilkår (EULA) | Peerlo",
    description:
      "Peerlos sluttbrukerlisensavtale og brukervilkår (EULA) for bruk av Peerlo-appen og tilhørende tjenester.",
    url: "https://peerlo.no/vilkar",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const raw = `
# Peerlo – Sluttbrukerlisensavtale og brukervilkår (EULA)

**Sist oppdatert: 19. august 2026**

Denne sluttbrukerlisensavtalen og disse brukervilkårene («Vilkårene») gjelder for bruk av Peerlo-appen og tilhørende tjenester («Tjenesten»).

Tjenesten leveres av:

**Peerlo AS**
Theodor Dahls Veg 4
4353 Klepp stasjon
Norge
E-post: ole@peerlo.no
Telefon: +47 988 11 908

Personopplysninger behandles i henhold til Peerlos til enhver tid gjeldende [personvernerklæring](/personvernerklaering).

## 1. Avtalen

Disse Vilkårene utgjør en avtale mellom deg som bruker («du» eller «brukeren») og Peerlo AS («Peerlo», «vi», «oss»).

Ved å opprette eller ta i bruk en brukerprofil, akseptere Vilkårene i appen eller på annen måte bruke Tjenesten, bekrefter du at du har lest, forstått og akseptert Vilkårene.

Dersom du ikke aksepterer Vilkårene, skal du ikke bruke Tjenesten.

## 2. Aldersgrense

Peerlo er beregnet for personer som har fylt 18 år.

Ved å bruke Tjenesten bekrefter du at du er minst 18 år gammel.

Peerlo kan begrense eller avslutte tilgang til Tjenesten dersom vi har rimelig grunn til å tro at alderskravet ikke er oppfylt.

## 3. Hva Peerlo er

Peerlo er en digital plattform for peer support og erfaringsbasert støtte.

Tjenesten gjør det mulig for personer som ønsker noen å snakke med («søkere»), å finne og ha samtaler med personer som har relevant egenerfaring («peers»).

En søker får tilgang til Peerlo gjennom en organisasjons- eller bedriftskode og kan selv velge hvilken peer vedkommende ønsker å snakke med, blant annet basert på peerens profil, bakgrunn og egenerfaring.

Peerlo er ikke en tjeneste for tilfeldig kobling eller tilfeldig anonym chat mellom brukere. En samtale mellom søker og peer oppstår etter at søkeren aktivt har valgt en bestemt peer.

Peers som tilbyr samtaler gjennom Peerlo, skal ha gjennomført Peerlos sertifiseringsprosess. Denne kan blant annet omfatte vurdering av relevant egenerfaring, intervju, opplæring og aksept av Peerlos retningslinjer for peerrollen.

Peerlo-sertifisering er en intern godkjenning fra Peerlo og innebærer ikke offentlig autorisasjon, helsepersonellgodkjenning eller annen offentlig eller faglig sertifisering.

## 4. Peerlo er ikke helsehjelp eller terapi

Peerlo tilbyr peer support basert på egenerfaring.

Peerlo tilbyr ikke medisinsk eller psykologisk behandling, psykoterapi, diagnostisering eller annen helsehjelp.

Peerlo skal ikke erstatte lege, psykolog, psykiater eller annet kvalifisert helsepersonell når det er behov for profesjonell helsehjelp.

Selv om enkelte peers kan ha relevant utdanning eller yrkesbakgrunn, deltar de i Peerlo i rollen som peer. En samtale gjennom Peerlo etablerer ikke et lege–pasient-, psykolog–pasient-, terapeut–klient- eller annet behandlingsforhold.

Peers skal ikke diagnostisere eller behandle brukere gjennom Peerlo.

Informasjon, erfaringer, perspektiver eller forslag som deles i en samtale, skal ikke forstås som medisinsk, psykologisk, juridisk, økonomisk eller annen profesjonell rådgivning.

Dersom det under en samtale fremstår som at en søker kan ha behov for profesjonell hjelp, kan peeren oppfordre søkeren til å kontakte relevant fagperson eller tjeneste.

## 5. Peerlo er ikke en akutt- eller krisetjeneste

Peerlo er ikke beregnet for akutte situasjoner og tilbyr ikke akutt helsehjelp eller døgnbemannet kriseberedskap.

Peerlo kan ikke garantere at en peer eller annen person er tilgjengelig når en bruker trenger hjelp.

Ved umiddelbar fare for liv eller helse skal brukeren kontakte offentlig nødhjelp eller annen relevant akuttjeneste.

I Norge:

**Medisinsk nødtelefon: 113**
**Politi: 112**

Ved behov for akutt hjelp skal Peerlo ikke brukes som erstatning for nødetatene eller profesjonelle krisetjenester.

## 6. Søkere og anonymitet

Peerlo er utformet slik at søkere kan bruke Tjenesten uten å oppgi navn, e-postadresse eller telefonnummer til Peerlo som del av den ordinære søkerregistreringen.

Tilgang gis gjennom en organisasjons- eller bedriftskode.

Peerlo kan behandle en tilfeldig generert teknisk identifikator og andre opplysninger som er nødvendige for å levere Tjenesten, administrere samtaler, ivareta sikkerhet og håndtere rapportering.

Arbeidsgiveren eller organisasjonen som gir tilgang til Peerlo, skal ikke få tilgang til innholdet i individuelle samtaler gjennom Peerlo.

Nærmere informasjon om hvilke opplysninger som behandles, formål, lagringstid og brukerens rettigheter fremgår av Peerlos [personvernerklæring](/personvernerklaering).

Anonymitet skal aldri brukes til trakassering, trusler, misbruk eller andre brudd på disse Vilkårene.

## 7. Brukerens ansvar

Du skal bruke Peerlo på en respektfull, lovlig og forsvarlig måte.

Ved bruk av Tjenesten skal du ikke:

- trakassere, true, mobbe eller intimidere andre
- sende hatefullt, diskriminerende, seksualisert eller seksuelt trakasserende innhold
- sende uønsket seksuelt innhold eller bruke Peerlo til seksuelle henvendelser
- oppfordre til vold, ulovlige handlinger eller handlinger som kan påføre andre skade
- bruke Tjenesten til å gi instruksjoner om selvskading eller selvmord
- utgi deg for å være en annen person
- gi uriktige opplysninger om kvalifikasjoner, erfaring eller identitet
- forsøke å omgå Peerlos mekanismer for anonymitet eller sikkerhet
- forsøke å identifisere en anonym søker uten vedkommendes samtykke
- bruke Tjenesten til reklame, salg, uønskede henvendelser eller andre kommersielle formål som ikke er en del av Peerlo
- dele innhold som er ulovlig, ærekrenkende eller krenker andres rettigheter
- forsøke å skade, forstyrre eller få uautorisert tilgang til Peerlo, våre systemer eller andre brukeres kontoer.

Alvorlige eller gjentatte brudd kan medføre umiddelbar suspensjon eller permanent utestengelse fra Peerlo.

Peerlo kan også gjøre nødvendige tiltak når dette følger av lov eller er nødvendig for å ivareta sikkerheten til Tjenesten og dens brukere.

## 8. Rapportering og avslutning av samtaler

Brukere kan rapportere en samtale eller en annen brukers opptreden gjennom funksjonene som er tilgjengelige i Peerlo.

En bruker kan når som helst avslutte en pågående samtale.

Peerlo vurderer rapporter om mulige brudd på Vilkårene og kan blant annet gi advarsel, begrense tilgang eller suspendere eller permanent utestenge en bruker når dette anses nødvendig og forholdsmessig.

Ved alvorlige forhold kan Peerlo treffe tiltak uten forhåndsvarsel.

Dersom loven krever det, kan relevante opplysninger utleveres til kompetent offentlig myndighet i samsvar med gjeldende personvern- og annen lovgivning.

Misbruk eller sikkerhetshendelser kan også meldes direkte til:

**E-post:** ole@peerlo.no
**Telefon:** +47 988 11 908

## 9. Private samtaler

Samtaler mellom søker og peer er private og er ikke offentlig tilgjengelige i Peerlo.

Peerlo foretar ikke rutinemessig gjennomlesning eller screening av private samtaler.

Dette begrenser ikke Peerlos adgang til å behandle informasjon som en bruker selv rapporterer til Peerlo, eller opplysninger som Peerlo må behandle når dette er nødvendig for å undersøke rapportert misbruk, ivareta sikkerheten, oppfylle rettslige forpliktelser eller håndheve disse Vilkårene.

Behandling av samtaleinnhold og andre personopplysninger er nærmere beskrevet i Peerlos [personvernerklæring](/personvernerklaering).

## 10. Konto og tilgang

Du er ansvarlig for å bruke Peerlo i samsvar med Vilkårene og for å beskytte eventuell tilgangsinformasjon som er knyttet til din bruk av Tjenesten.

Tilgangskoder som er gitt til en bestemt virksomhet eller organisasjon, skal ikke distribueres offentlig eller brukes av personer som ikke omfattes av den aktuelle tilgangen.

Peerlo kan begrense eller stenge tilgang ved misbruk av tilgangskoder eller andre sikkerhetsmekanismer.

## 11. Sletting av konto og data

Brukere kan be om eller gjennomføre sletting av brukerdata i samsvar med funksjonene som tilbys i Peerlo og Peerlos [personvernerklæring](/personvernerklaering).

Enkelte opplysninger kan oppbevares når dette er nødvendig eller pålagt etter gjeldende lov, for eksempel for å håndtere sikkerhetshendelser, rettskrav eller lovpålagte forpliktelser.

Nærmere informasjon om lagring og sletting finnes i Peerlos [personvernerklæring](/personvernerklaering).

## 12. Brukerinnhold og immaterielle rettigheter

Du beholder eventuelle rettigheter du har til innhold du selv deler gjennom Peerlo.

I den utstrekning det er nødvendig for å levere Tjenesten, gir du Peerlo en begrenset, ikke-eksklusiv rett til å lagre, behandle og formidle innholdet teknisk som del av tjenesteleveransen.

Denne retten gjelder kun i den utstrekning det er nødvendig for å levere, sikre og administrere Peerlo og oppfylle Peerlos rettslige forpliktelser.

Peerlo-navnet, logoen, designet, programvaren og annet materiale som tilhører Peerlo AS, kan ikke kopieres, endres eller distribueres uten tillatelse, med mindre dette følger av ufravikelig lov.

## 13. Betaling

Søkere betaler ikke for bruk av Peerlo gjennom appen.

Tilgang for søkere kan finansieres av arbeidsgiver eller annen organisasjon gjennom en separat avtale med Peerlo AS. Slik betaling skjer utenfor appen og er ikke en del av avtalen mellom Peerlo og søkeren etter disse Vilkårene.

Peers kan motta godtgjørelse fra Peerlo AS for gjennomførte samtaler i henhold til en separat avtale eller separate vilkår mellom Peerlo og peeren.

Peerlo tilbyr per i dag ikke søkere kjøp av digitalt innhold, abonnement eller andre betalte funksjoner i appen.

Dersom dette endres, vil relevante priser og vilkår bli opplyst, og betaling vil håndteres i samsvar med gjeldende regler og krav fra den aktuelle appbutikken.

## 14. Tilgjengelighet og endringer i Tjenesten

Peerlo arbeider for at Tjenesten skal være tilgjengelig og fungere som forutsatt, men kan ikke garantere kontinuerlig eller feilfri tilgjengelighet.

Tjenesten kan midlertidig være utilgjengelig på grunn av vedlikehold, tekniske feil, sikkerhetstiltak eller forhold utenfor Peerlos kontroll.

Peerlo kan videreutvikle, endre eller avvikle hele eller deler av Tjenesten når det foreligger saklig grunn, med de begrensninger som følger av gjeldende lov.

## 15. Ansvar

Peerlo er ansvarlig for Tjenesten i den utstrekning dette følger av gjeldende lov.

Peerlo kan ikke garantere at en samtale med en peer vil gi et bestemt resultat, eller at en peers erfaringer, perspektiver eller forslag vil være relevante eller hensiktsmessige for den enkelte bruker.

Brukeren er selv ansvarlig for beslutninger vedkommende tar på bakgrunn av en samtale gjennom Peerlo.

Peerlo er ikke ansvarlig for indirekte tap eller følgeskader i den utstrekning slikt ansvar lovlig kan begrenses.

Ingen bestemmelse i disse Vilkårene skal begrense eller utelukke ansvar som ikke lovlig kan begrenses eller utelukkes etter ufravikelig norsk lov.

## 16. Suspensjon og avslutning

Peerlo kan midlertidig suspendere eller avslutte en brukers tilgang dersom brukeren:

- bryter disse Vilkårene
- misbruker Tjenesten
- utgjør en sikkerhetsrisiko for andre brukere eller Tjenesten
- bruker Peerlo på en ulovlig måte
- eller dersom suspensjon eller avslutning ellers er nødvendig for å oppfylle rettslige forpliktelser.

Ved alvorlige sikkerhets- eller misbrukssituasjoner kan tilgangen stenges umiddelbart.

## 17. Endringer i Vilkårene

Peerlo kan oppdatere disse Vilkårene når Tjenesten, lovgivningen eller andre relevante forhold endres.

Vesentlige endringer vil bli kommunisert på egnet måte, for eksempel i appen eller på Peerlos nettsted.

Dersom gjeldende lov krever nytt samtykke eller ny aksept, vil Peerlo innhente dette før de nye vilkårene får virkning for brukeren.

## 18. Lovvalg og tvister

Disse Vilkårene er underlagt norsk rett.

Tvister skal søkes løst i minnelighet.

Dersom dette ikke lykkes, kan saken bringes inn for norske domstoler.

Bestemmelsen begrenser ikke rettigheter en forbruker har etter ufravikelige regler om verneting, lovvalg eller forbrukerbeskyttelse.

## 19. Særlige vilkår for bruk via Apple App Store

Bestemmelsene i dette punktet gjelder når Peerlo lastes ned, installeres eller brukes gjennom Apple App Store.

Ved motstrid mellom øvrige deler av disse Vilkårene og dette punktet, skal dette punktet ha forrang i den utstrekning dette er nødvendig for å oppfylle Apples gjeldende minimumskrav til sluttbrukerlisensavtaler.

### 19.1 Avtalepart og ansvar

Du og Peerlo AS erkjenner og aksepterer at denne avtalen inngås **mellom deg og Peerlo AS, og ikke mellom deg og Apple Inc. («Apple»).**

**Peerlo AS, og ikke Apple, er ansvarlig for Peerlo-appen, Tjenesten og innholdet i Tjenesten.**

Disse Vilkårene skal ikke gi bruksrettigheter som er i strid med gjeldende bruksregler i Apple Media Services Terms and Conditions eller andre Apple-vilkår som gjelder for din bruk av appen.

### 19.2 Lisens

Peerlo AS gir deg en begrenset, personlig, ikke-eksklusiv og ikke-overførbar lisens til å bruke Peerlo på Apple-merkede produkter som du eier eller kontrollerer, i samsvar med bruksreglene i Apple Media Services Terms and Conditions.

Appen kan også brukes av andre kontoer som er knyttet til kjøperen gjennom funksjoner som Apple tillater, herunder Family Sharing, volumkjøp eller Legacy Contacts, i den utstrekning slike ordninger er relevante og tilgjengelige.

### 19.3 Vedlikehold og support

**Peerlo AS, og ikke Apple, er ansvarlig for vedlikehold og brukerstøtte knyttet til Peerlo**, i den utstrekning dette følger av disse Vilkårene eller gjeldende lov.

Apple har ingen forpliktelse til å levere vedlikehold eller brukerstøtte for Peerlo.

Henvendelser om Peerlo skal rettes til Peerlo AS:

E-post: ole@peerlo.no
Telefon: +47 988 11 908
Adresse: Theodor Dahls Veg 4, 4353 Klepp stasjon, Norge

### 19.4 Garantier

Peerlo AS er ansvarlig for eventuelle garantier knyttet til Tjenesten i den utstrekning slike garantier følger av disse Vilkårene eller ufravikelig lov.

Dersom Peerlo ikke oppfyller en garanti som gjelder etter loven, kan du varsle Apple. I den utstrekning det er relevant, kan Apple refundere eventuell kjøpesum som er betalt for selve appen.

Så langt gjeldende lov tillater det, har Apple ingen øvrig garanti- eller erstatningsforpliktelse knyttet til Peerlo.

Andre krav, tap, ansvar, skader, kostnader eller utgifter som skyldes manglende oppfyllelse av en garanti knyttet til Peerlo, er Peerlo AS' ansvar i den utstrekning dette følger av gjeldende lov.

### 19.5 Krav knyttet til Tjenesten

**Peerlo AS, og ikke Apple, er ansvarlig for å håndtere krav fra deg eller tredjeparter som gjelder Peerlo eller din besittelse eller bruk av appen.**

Dette omfatter blant annet:

- produktansvarskrav
- krav om at Peerlo ikke oppfyller gjeldende lov eller regulatoriske krav
- krav etter forbrukervern-, personvern- eller tilsvarende lovgivning.

Denne bestemmelsen begrenser ikke Peerlo AS' ansvar utover det som er tillatt etter gjeldende lov.

### 19.6 Immaterielle rettigheter

Dersom en tredjepart hevder at Peerlo-appen eller din bruk av den krenker tredjepartens immaterielle rettigheter, er **Peerlo AS, og ikke Apple**, ansvarlig for å undersøke, forsvare, håndtere og eventuelt gjøre opp et slikt krav, i den utstrekning dette følger av gjeldende lov.

### 19.7 Overholdelse av amerikanske sanksjonsregler

Ved å bruke Peerlo bekrefter du at:

1. du ikke befinner deg i et land eller område som er underlagt embargo fra amerikanske myndigheter eller som av amerikanske myndigheter er klassifisert som et område som støtter terrorisme, og
2. du ikke står oppført på amerikanske myndigheters lister over forbudte eller begrensede parter.

### 19.8 Utviklerens navn og kontaktinformasjon

Utvikleren og leverandøren av Peerlo er:

**Peerlo AS**
Theodor Dahls Veg 4
4353 Klepp stasjon
Norge

E-post: ole@peerlo.no
Telefon: +47 988 11 908

Spørsmål, klager eller krav knyttet til Peerlo skal rettes til Peerlo AS.

### 19.9 Tredjepartsvilkår

Ved bruk av Peerlo skal du overholde relevante vilkår fra tredjeparter som gjelder for din bruk av enheten eller Tjenesten.

Dette kan for eksempel omfatte vilkår fra din mobil- eller internettleverandør.

### 19.10 Apple som tredjepartsbegunstiget

Du og Peerlo AS erkjenner og aksepterer at **Apple og Apples datterselskaper er tredjepartsbegunstigede etter disse Vilkårene** når Peerlo brukes via Apple App Store.

Når du aksepterer Vilkårene, har Apple rett til å håndheve de relevante bestemmelsene i avtalen overfor deg som tredjepartsbegunstiget.

Apple er likevel **ikke part i avtalen mellom deg og Peerlo AS og er ikke ansvarlig for å levere Peerlo eller tjenestene som tilbys gjennom Peerlo.**

## 20. Kontakt

Har du spørsmål om disse Vilkårene, Peerlo eller bruk av Tjenesten, kan du kontakte:

**Peerlo AS**
Theodor Dahls Veg 4
4353 Klepp stasjon
Norge

**E-post:** ole@peerlo.no
**Telefon:** +47 988 11 908
`;

const doc = parseLegalMarkdown(raw);

export default function VilkarPage() {
  return <LegalPageLayout eyebrow="Vilkår" doc={doc} />;
}
