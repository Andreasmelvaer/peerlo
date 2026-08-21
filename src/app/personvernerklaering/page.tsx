import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { parseLegalMarkdown } from "@/lib/legalMarkdown";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description:
    "Peerlos fullstendige personvernerklæring: hvilke personopplysninger vi behandler, hvorfor, hvordan de beskyttes og hvilke rettigheter du har.",
  alternates: { canonical: "https://peerlo.no/personvernerklaering" },
  openGraph: {
    title: "Personvernerklæring | Peerlo",
    description:
      "Peerlos fullstendige personvernerklæring: hvilke personopplysninger vi behandler, hvorfor, hvordan de beskyttes og hvilke rettigheter du har.",
    url: "https://peerlo.no/personvernerklaering",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const raw = `
# Personvernerklæring for Peerlo

**Sist oppdatert: 19. august 2026**

Peerlo tar personvern på alvor. Denne personvernerklæringen forklarer hvilke personopplysninger Peerlo behandler, hvorfor vi behandler dem, hvordan opplysningene beskyttes og hvilke rettigheter du har.

Peerlo er utviklet for å gjøre det mulig å søke erfaringsbasert støtte med lav terskel og høy grad av anonymitet for den som søker støtte.

## 1. Behandlingsansvarlig

Peerlo AS er behandlingsansvarlig for behandling av personopplysninger som skjer som en del av Peerlo-tjenesten, med mindre annet følger av lov eller særskilt avtale.

**Peerlo AS**
Theodor Dahls Veg 4
4353 Klepp stasjon
Norge

E-post: ole@peerlo.no
Telefon: +47 988 11 908

## 2. Om Peerlo

Peerlo er en digital plattform for peer support og erfaringsbasert støtte.

Tjenesten gjør det mulig for personer som ønsker noen å snakke med («søkere»), å finne og ha samtaler med personer som har relevant egenerfaring («peers»).

Peerlo tilbyr ikke terapi, diagnostisering, medisinsk eller psykologisk behandling eller annen helsehjelp.

En søker får tilgang gjennom en organisasjons- eller bedriftskode og velger selv hvilken peer vedkommende ønsker å snakke med.

## 3. Personvern for søkere

Peerlo er utformet for at søkere skal kunne bruke tjenesten uten å oppgi navn, e-postadresse eller telefonnummer som del av den ordinære tilgangen til Peerlo.

Når du bruker Peerlo som søker, kan vi behandle:

- organisasjons- eller bedriftskoden som brukes for å kontrollere at du har tilgang til tjenesten
- en tilfeldig generert teknisk identifikator (UUID) som gjør det mulig for systemet å håndtere din bruk av tjenesten uten at du oppgir navn
- temaer eller kategorier du selv velger i forbindelse med bruk av Peerlo
- informasjon om bruk av tjenesten, for eksempel gjennomførte samtaler og nødvendig teknisk informasjon
- innhold du selv velger å dele i samtaler med en peer
- rapporter eller andre opplysninger du sender til Peerlo dersom du rapporterer en hendelse eller ber om bistand.

Peerlo ber ikke søkere om navn, privat e-postadresse eller telefonnummer for ordinær bruk av tjenesten.

Organisasjons- eller bedriftskoden skal ikke i seg selv identifisere hvilken ansatt som bruker Peerlo.

## 4. Opplysninger om peers

For personer som oppretter en peer-profil, kan Peerlo behandle blant annet:

- navn
- e-postadresse
- profilbilde
- profiltekst og presentasjon
- opplysninger om egen erfaring som peeren selv velger å oppgi
- relevante temaer og erfaringsområder
- eventuell relevant utdanning og arbeidserfaring
- opplysninger knyttet til Peerlos sertifiseringsprosess
- tilgjengelighet
- gjennomførte samtaler
- vurderinger og tilbakemeldinger knyttet til samtaler
- opplysninger som er nødvendige for administrasjon og utbetaling av eventuell godtgjørelse
- nødvendig teknisk informasjon knyttet til bruk av tjenesten.

Peer-profiler er ment å være synlige for brukere av Peerlo slik at søkere kan velge hvem de ønsker å snakke med.

Peeren bestemmer selv, innenfor Peerlos retningslinjer, hvilke personlige erfaringer som skal presenteres offentlig i profilen.

## 5. Samtaleinnhold og særlige kategorier personopplysninger

Samtaler gjennom Peerlo kan inneholde svært personlige opplysninger.

En søker kan for eksempel frivillig dele opplysninger om psykisk helse, fysisk helse, familieforhold, relasjoner, rus, sorg eller andre private forhold.

Opplysninger om helse og enkelte andre typer opplysninger kan etter personvernforordningen (GDPR) være særlige kategorier personopplysninger og er underlagt et særskilt vern.

Peerlo ber ikke brukeren dele mer informasjon enn det som er nødvendig eller ønskelig for samtalen.

Når behandling av særlige kategorier personopplysninger krever et særskilt behandlingsgrunnlag, baserer Peerlo behandlingen på brukerens uttrykkelige samtykke, jf. GDPR artikkel 9 nr. 2 bokstav a, med mindre et annet behandlingsgrunnlag gjelder.

Brukeren skal få nødvendig informasjon før slikt samtykke gis.

Et samtykke kan trekkes tilbake. Tilbaketrekking påvirker ikke lovligheten av behandling som allerede har funnet sted før samtykket ble trukket tilbake.

## 6. Hvorfor vi behandler opplysninger

Peerlo behandler personopplysninger for å:

- gi brukere tilgang til tjenesten
- gjøre det mulig for søkere å finne og velge peers
- gjennomføre og administrere samtaler
- administrere peer-profiler og Peerlos sertifiseringsprosess
- håndtere tilgjengelighet og booking
- administrere eventuell godtgjørelse til peers
- ivareta sikkerheten i tjenesten
- motta og behandle rapporter om misbruk eller andre hendelser
- forebygge misbruk av tjenesten
- drifte, vedlikeholde og forbedre Peerlo
- oppfylle rettslige forpliktelser
- utarbeide aggregert statistikk om bruk av Peerlo.

Vi bruker ikke innholdet i private Peerlo-samtaler til målrettet annonsering.

## 7. Behandlingsgrunnlag

Hvilket rettslig grunnlag Peerlo benytter, avhenger av hvilken behandling det gjelder.

Behandling som er nødvendig for å levere Peerlo til brukeren kan være basert på at behandlingen er nødvendig for å oppfylle avtalen med brukeren, jf. GDPR artikkel 6 nr. 1 bokstav b.

Enkelte behandlinger kan være basert på Peerlos berettigede interesser, jf. GDPR artikkel 6 nr. 1 bokstav f, for eksempel nødvendig behandling for sikkerhet, forebygging av misbruk og forsvarlig drift av tjenesten, etter en vurdering av Peerlos behov opp mot brukerens personverninteresser.

Behandling kan også være nødvendig for å oppfylle en rettslig forpliktelse, jf. GDPR artikkel 6 nr. 1 bokstav c.

Når Peerlo behandler særlige kategorier personopplysninger som krever et særskilt grunnlag etter GDPR artikkel 9, vil Peerlo blant annet kunne basere behandlingen på uttrykkelig samtykke etter artikkel 9 nr. 2 bokstav a.

## 8. Arbeidsgiver og organisasjoner som gir tilgang

En arbeidsgiver eller annen organisasjon kan betale for at ansatte eller medlemmer får tilgang til Peerlo.

Det betyr ikke at arbeidsgiveren får tilgang til den enkelte brukerens samtaler.

Arbeidsgiver skal ikke gjennom Peerlo få:

- tilgang til innholdet i individuelle samtaler
- navn på hvilke søkere som har brukt tjenesten
- tilgang til den enkelte søkers peer-samtaler.

Peerlo kan gi virksomheten aggregert statistikk om bruken av tjenesten, for eksempel samlet antall gjennomførte samtaler i en periode.

Slik rapportering skal utformes slik at den ikke skal gjøre det mulig for arbeidsgiveren å identifisere enkeltbrukere.

Peerlo skal ikke bruke rapportering til arbeidsgiver til individuell overvåking eller vurdering av ansatte.

## 9. Private samtaler

Samtaler mellom søker og peer er private og er ikke offentlig tilgjengelige i Peerlo.

Peerlo foretar ikke rutinemessig gjennomlesning eller automatisk screening av innholdet i private samtaler.

Dersom en bruker rapporterer en samtale eller hendelse, kan Peerlo behandle den informasjonen som er nødvendig for å undersøke rapporten og vurdere eventuelle tiltak.

Peerlo kan også behandle opplysninger når dette er nødvendig for å oppfylle rettslige forpliktelser eller håndtere alvorlige sikkerhetshendelser.

## 10. Akutte situasjoner

Peerlo er ikke en akutt- eller krisetjeneste og kan ikke garantere overvåking eller oppfølging av innhold som deles i en samtale.

Ved umiddelbar fare for liv eller helse skal offentlig nødhjelp kontaktes.

I Norge:

**Medisinsk nødtelefon: 113**
**Politi: 112**

Peers skal ikke forventes å håndtere akutte medisinske eller psykiatriske situasjoner som helsepersonell.

Dersom en peer blir kjent med en situasjon som fremstår som akutt eller alvorlig, kan peeren oppfordre søkeren til å kontakte profesjonell hjelp eller nødtjenestene.

Eventuelle særskilte prosedyrer for alvorlige hendelser skal gjennomføres i samsvar med gjeldende lov og Peerlos interne sikkerhetsrutiner.

## 11. Frivillig deling av identitet

Peerlo er utformet med høy grad av anonymitet for søkeren som utgangspunkt.

Dersom Peerlo tilbyr funksjoner hvor søker og peer etter hvert kan velge å dele identitet eller kontaktinformasjon, skal slik deling være frivillig.

Peerlo kan legge til rette for at partene på bestemte tidspunkt vurderer om de ønsker en annen form for kontakt, for eksempel video eller fysisk møte.

Ingen slik overgang skal skje automatisk.

Når identitetsdeling krever samtykke fra begge parter, skal begge aktivt akseptere dette før funksjonen aktiveres.

## 12. Deling med databehandlere og andre mottakere

Peerlo bruker eksterne leverandører for å kunne drifte tjenesten.

Dette kan blant annet omfatte leverandører av:

- server- og skylagring
- teknisk infrastruktur
- kommunikasjonstjenester
- sikkerhet og drift
- andre tekniske tjenester som er nødvendige for å levere Peerlo.

Når en leverandør behandler personopplysninger på vegne av Peerlo, skal leverandøren være bundet av en databehandleravtale i samsvar med GDPR.

Databehandlere skal bare behandle personopplysninger etter dokumenterte instrukser fra Peerlo og i den utstrekning det er nødvendig for å levere den aktuelle tjenesten.

Peerlo selger ikke brukernes personopplysninger.

Peerlo deler ikke innhold fra private samtaler med arbeidsgivere for markedsføring, personaloppfølging eller individuell vurdering av ansatte.

Personopplysninger kan utleveres til offentlige myndigheter når Peerlo er rettslig forpliktet til dette.

## 13. Overføring av opplysninger utenfor EØS

Peerlo søker å bruke løsninger hvor personopplysninger behandles innenfor EØS.

Dersom en leverandør medfører overføring av personopplysninger til et land utenfor EØS, skal Peerlo sørge for at overføringen har gyldig overføringsgrunnlag etter GDPR.

Dette kan blant annet være en beslutning fra EU-kommisjonen om tilstrekkelig beskyttelsesnivå eller EUs standard personvernbestemmelser (Standard Contractual Clauses), sammen med nødvendige tilleggstiltak der dette kreves.

## 14. Informasjonssikkerhet

Peerlo skal gjennomføre egnede tekniske og organisatoriske tiltak for å beskytte personopplysninger mot blant annet:

- uautorisert tilgang
- ulovlig behandling
- utilsiktet tap
- endring
- ødeleggelse
- uautorisert utlevering.

Sikkerhetstiltakene vurderes ut fra opplysningenes art, risikoen ved behandlingen og tilgjengelig teknologi.

Ingen digital tjeneste kan garantere absolutt sikkerhet, men Peerlo arbeider for å redusere risikoen og beskytte brukernes opplysninger.

## 15. Lagring og sletting

Peerlo skal ikke oppbevare personopplysninger lenger enn det som er nødvendig for formålet de ble samlet inn for, med mindre lengre lagring er nødvendig etter lov.

**Samtaleinnhold:** Chatmeldinger lagres som hovedregel i inntil 30 dager etter at en samtale er avsluttet og slettes eller anonymiseres deretter, med mindre opplysningene må oppbevares lenger som følge av en rapportert hendelse, rettslig forpliktelse eller annet gyldig behandlingsgrunnlag.

**Peer-profiler:** Opplysninger knyttet til en peer-profil lagres så lenge profilen er aktiv og slettes eller anonymiseres når de ikke lenger er nødvendige, med forbehold om lovpålagte oppbevaringskrav.

**Administrative opplysninger:** Opplysninger knyttet til betaling, regnskap eller andre lovpålagte formål kan oppbevares så lenge gjeldende lov krever.

## 16. Sletting av konto og brukerdata

Brukere kan benytte tilgjengelige funksjoner i Peerlo for å slette konto eller tilknyttede brukerdata der dette tilbys.

Søkere bruker tjenesten uten ordinær identitetsregistrering. Forespørsler og handlinger knyttet til søkerdata kan derfor være knyttet til den tekniske identifikatoren som brukes av den aktuelle installasjonen eller brukeren.

Peers kan slette konto gjennom tilgjengelig funksjonalitet eller kontakte Peerlo på ole@peerlo.no.

Sletting kan begrenses dersom Peerlo er rettslig forpliktet til å beholde bestemte opplysninger.

## 17. Dine rettigheter

Når personvernforordningen gjelder for behandlingen, kan du blant annet ha rett til:

- informasjon om hvordan opplysningene dine behandles
- innsyn i personopplysningene Peerlo har om deg
- retting av uriktige opplysninger
- sletting av personopplysninger
- begrensning av behandling
- dataportabilitet når vilkårene for dette er oppfylt
- å protestere mot behandling som bygger på berettiget interesse
- å trekke tilbake et samtykke når behandlingen bygger på samtykke.

Rettighetene er ikke absolutte og kan være begrenset av vilkårene i GDPR eller annen lovgivning.

Fordi Peerlo er utformet slik at søkere ikke oppgir sin ordinære identitet, kan Peerlo i enkelte tilfeller ikke være i stand til å identifisere hvilke opplysninger som gjelder en bestemt fysisk person uten ytterligere informasjon fra brukeren.

Peerlo skal ikke samle inn nye identitetsopplysninger utelukkende for å kunne identifisere en anonym bruker dersom dette ikke er nødvendig etter personvernregelverket.

## 18. Barn

Peerlo er beregnet for personer som har fylt 18 år.

Tjenesten skal ikke brukes av personer under 18 år.

Dersom Peerlo blir kjent med at personopplysninger om en person under aldersgrensen er behandlet i strid med [Vilkårene](/vilkar) eller gjeldende regelverk, vil vi vurdere nødvendige tiltak, herunder sletting.

## 19. Informasjonskapsler og lignende teknologi

Peerlo kan bruke teknologier som er nødvendige for at nettsiden og tjenesten skal fungere.

Peerlo bruker ikke personopplysninger fra private peer-samtaler til atferdsbasert eller målrettet annonsering.

Dersom Peerlo benytter informasjonskapsler eller tilsvarende teknologi som krever samtykke etter gjeldende regelverk, vil brukeren få informasjon om dette og mulighet til å foreta nødvendige valg.

## 20. Endringer i personvernerklæringen

Peerlo kan oppdatere denne personvernerklæringen når tjenesten, behandlingen av personopplysninger eller regelverket endres.

Vesentlige endringer vil bli kommunisert på egnet måte.

Datoen øverst i erklæringen viser når den sist ble oppdatert.

## 21. Klage til Datatilsynet

Dersom du mener at Peerlo behandler personopplysninger i strid med personvernregelverket, ønsker vi at du kontakter oss slik at vi kan forsøke å løse saken.

Du har også rett til å klage til:

**Datatilsynet**
Postboks 458 Sentrum
0105 Oslo
Norge

Nettside: datatilsynet.no

## 22. Kontakt oss om personvern

Har du spørsmål om denne personvernerklæringen eller Peerlos behandling av personopplysninger, kan du kontakte:

**Peerlo AS**
Theodor Dahls Veg 4
4353 Klepp stasjon
Norge

**E-post:** ole@peerlo.no
**Telefon:** +47 988 11 908
`;

const doc = parseLegalMarkdown(raw);

export default function PersonvernerklaeringPage() {
  return <LegalPageLayout eyebrow="Personvern" doc={doc} />;
}
