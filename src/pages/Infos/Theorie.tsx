export default function Theorie() {
  return (
    <>
      <img
        className="info-img"
        src="https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/theorie.jpg"
        alt="Theorieprüfung"
      />
      <h1 className="theorie--title">Theorieunterricht</h1>
      <div className="textContainer">
        {/* <div className="theorieunterricht">    
              <div className="theorieunterricht--left">
                  <h1>Themen</h1>
              </div>
              <div className="theorieunterricht--right">
                  <p>Oldenburg: Di. & Do. 19:00 - 20:30</p>
                  <p>Lensahn: Mo. & Mi. 19:00 - 20:30</p>
              </div>      
          </div> */}
        <h2>Themen</h2>
        <div className="theorieunterricht--thema">
          <div className="theorieunterricht--thema-left">
            <p>Thema 1: Persönliche Voraussetzungen</p>
            <p>Thema 2: Risikofaktor Mensch</p>
            <p>Thema 3: Rechtliche Rahmenbedingungen</p>
            <p>Thema 4: Straßenverkehrssystem und Bahnübergänge</p>
            <p>Thema 5: Grundregel, Vorfahrt und Verkehrszeichen</p>
            <p>Thema 6. Verkehrszeichen und Verkehrseinrichtungen</p>
            <p>
              Thema 7: Teilnehmer am Straßenverkehr – Besonderheiten und
              Verhalten
            </p>
          </div>
          <div className="theorieunterricht--thema-right">
            <p>
              Thema 8: Geschwindigkeit, Abstand und Umweltschonende Fahrweise
            </p>
            <p>
              Thema 9: Verkehrsbeobachtung und Verkehrsverhalten bei
              Fahrmanövern
            </p>
            <p>Thema 10: Ruhender Verkehr</p>
            <p>
              Thema 11: Verhalten in besonderen Situationen, Folgen von
              Verstößen gegen Verkehrsvorschriften
            </p>
            <p>Thema 12: Lebenslanges Lernen</p>
            <p>
              Thema 13 (B1): Technische Bedingungen, Personen- und
              Güterbeförderung Umweltschutz
            </p>
            <p>Thema 14 (B2): Fahren mit Solokraftfahrzeugen und Zügen</p>
          </div>
        </div>

        <div className="t-kalendar">
          <h2>Kalender</h2>
          <p style={{ paddingTop: 5, paddingBottom: 20, color: "red" }}>
            Grundunterrichte und Klasse B für 2025. Spezielle Unterrichte nach
            Absprache.
          </p>
          <h3>Di. & Do. 19:00 - 20:30 Oldenburg i.H.</h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBerlin&showTz=0&showCalendars=0&showTabs=0&showPrint=1&src=ZmFocnNjaHVsZWFtZ3ltbmFzaXVtQGdtYWlsLmNvbQ&color=%23039BE5"
            style={{ width: "100%", height: 400, border: "none" }}
          ></iframe>
          <br />
          <br />
          <h3>Mo. & Mi. 19:00 - 20:30 Lensahn</h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBerlin&showTz=0&showCalendars=0&showTabs=0&showPrint=1&src=ZDg1ZDBjMzUwMDg4YTAzMWZhMGQ3ZDdmMjYyZjBkNzQ2MTcyNzM5NGQzMjZmOThlNjk3MDM2ZTRjZDJmY2RlY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5"
            style={{ width: "100%", height: 400, border: "none" }}
          ></iframe>
        </div>
        {/* <div className="theorieprüfung">   
            <h1>Theorieprüfung</h1>
            <ul>
              <li>Die theoretische Führerscheinprüfung wird von Prüfstellen wie TÜV oder Dekra abgenommen.</li>
              <li>Bei der Fahrerlaubnis der Klasse B werden 30 Fragen gestellt, und es sind zehn Fehlerpunkte gestattet. Man darf jedoch nur eine mit fünf Fehlerpunkten bewertete Frage falsch beantworten.</li>
              <li>Theorieprüfung zwölf Monate gültig, Ausbildungsbescheinigung zwei Jahre gültig.</li>
              <li>Sperrfrist bei Täuschungsversuch bis zu neun Monate möglich.</li>   
              <li>Die theoretische Prüfung darf nicht früher als drei Monate vor Erreichen des gesetzlichen Mindestalters absolviert werden, beim Autoführerschein B17 beispielsweise mit 16 ¾ Jahren, beim Mofa mit 14 ¾ Jahren.</li>
              <li>Vor der Prüfung muss Folgendes vorgelegt werden: </li>
                <br />
                <p> - Nachweis über die bezahlten Prüfungsgebühren.</p>
                <br />
                <p> - Ausweisdokument: Personalausweis oder Reisepass mitbringen.</p> 
                <br />
              <li>Die Theorieprüfung kostet Sie ungefähr 25 Euro.</li>        
            </ul>
          </div>    */}
      </div>
    </>
  );
}
