import React, { useEffect } from "react";

export default function Opleiding() {
  useEffect(() => {
    document.title = "opleiding";
  }, []);
  return (
    <>
      <section className="learn">
        <h1>Leer de opleiding kennen</h1>
        <div className="learn--collection">
          <div className="info">
            <h3>Infodag 29 juni</h3>
            <p>
              Vragen stellen aan docenten en studenten? Een rondleiding volgen
              of een cursus inkijken? Kom naar de infodag op zaterdag 29 juni en
              ontdek of de opleiding écht bij jou past.
            </p>
            <a href="https://www.arteveldehogeschool.be/nl/bij-ons-studeren/kennismaken/infomomenten#infodagen">
              Kom naar de infodag
            </a>
          </div>
          <div className="suggestion">
            <h2>Iets voor jou?</h2>
            <ul>
              <li>
                <p>Je combineert jouw passie voor IT met een creatief brein.</p>
              </li>
              <li>
                <p>
                  Je hebt zojuist jouw secundair afgerond of hebt al enkele
                  jaren werkervaring op zak.
                </p>
              </li>
              <li>
                <p>
                  Je wil flitsende en gebruiksvriendelijke websites en mobiele
                  apps van zero leren programmeren en bouwen.
                </p>
              </li>
              <li>
                <p>
                  Je wil vooral doen. Theorie moet voor jou meteen omgezet
                  kunnen worden naar de praktijk.
                </p>
              </li>
              <li>
                <p>
                  Je hebt nog geen specifieke voorkennis, maar wel enorm veel
                  goesting.
                </p>
              </li>
            </ul>
          </div>
          <div className="quote">
            <p className="quote--text">
              "Ik zet mijn tanden in iets totaal nieuws en vind het vooral leuk
              dat je meteen het resultaat van je werk ziet: met enkele ingrepen
              kan je een website in een bepaalde stijl gieten of zelfs helemaal
              veranderen. Mijn tip aan toekomstige studenten luidt: laat je niet
              overdonderen, maar ga mee in de flow. En aanvaard dat het wat tijd
              kost om alles onder de knie te krijgen."
            </p>
            <div>
              <h5>Elien Maes</h5>
              <p>Tweedejaarsstudent Graduaat Programmeren</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div>
          <h3>Erkend knelpuntberoep</h3>
          <p>
            Het tekort aan programmeurs in Vlaanderen is zo groot dat de VDAB
            ons Graduaat Programmeren actief promoot onder werkzoekenden.
            Kandidaten die aan alle voorwaarden voldoen, krijgen hun
            inschrijvingsgeld terugbetaald en ontvangen een forfaitaire
            tussenkomst voor leerkosten zoals de aankoop van een laptop. Verder
            is er nog een vergoeding voor hun verplaatsingen, en worden
            eventuele kosten voor kinderopvang terugbetaald.
          </p>
        </div>
        <div>
          <h3>Al doende leren</h3>
          <p>
            De focus in de opleiding ligt op de praktijk. Van bij de start leer
            je theorie omzetten in praktijk aan de hand van concrete opdrachten.
            Zo werk je in het vak @Work real life cases van digital agencies uit
            onder begeleiding van de docenten. Je gaat op kijkstage en doet mee
            aan hackathons. In het tweede jaar draai je mee in een echt bedrijf
            en word je gecoacht door de docenten. Daarnaast weerspiegelt deze
            opleiding de verscheidenheid van de maatschappij vandaag de dag.
            Jongeren en ouderen, Vlamingen en niet-Vlamingen, jullie gaan samen
            aan de slag binnen deze opleiding en plukken de vruchten van elkaar
            werk- en levenservaring.
          </p>
        </div>
        <div>
          <h3>Uitstekende begeleiding</h3>
          <p>
            Je krijgt les in relatief kleine groepen. Verschillende coaches
            staan steeds paraat om je vragen te beantwoorden. Trajectcoaches
            volgen je nauwgezet op en sturen bij waar nodig. Je kan gebruik
            maken van de leerbegeleiding die wordt aangeboden voor onderwerpen
            zoals faalangst, uitstelgedrag, planning, timemanagement, ... We
            werken ook in verschillende niveaus, dus je kan perfect starten
            zonder enige voorkennis. Pik je kennis sneller op? Dan voorzien we
            extra uitdagende opdrachten.
          </p>
        </div>
        <div>
          <h3>Ervaring op je cv</h3>
          <p>
            Werkplekleren en bootcamps maken een groot en belangrijk deel uit
            van een graduaat. Hierbij ga je concrete opdrachten en vragen van
            bedrijven aanpakken en tot een goed einde brengen. Zo doe je
            werkervaring op tijdens je opleiding en kan je hiermee uitpakken
            tijdens een sollicitatiegesprek of in je portfolio.
          </p>
        </div>
        <div>
          <h3>Bachelordiploma</h3>
          <p>
            Dat kan na je graduaatsopleiding via een verkort traject (minstens
            90 studiepunten of 1,5 jaar).
          </p>
        </div>
      </section>
    </>
  );
}
