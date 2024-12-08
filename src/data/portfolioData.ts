import { Subtitles } from "lucide-react";
import { DownloadButton } from "../components/DownloadButton";

export const portfolioSections = [
  {
    title: "Portfolio herunterladen",
    subtitle: "Hier kann das Portfolio in Text-Form heruntergeladen werden",
    downloadButtons: [
      {
        label: "PDF herunterladen",
        fileUrl: "public/Studium und Beruf Portfolio^J Cédric Klinge.pdf",
        fileName: "Studium und Beruf Portfolio^J Cédric Klinge.pdf",
      },
      {
        label: "DOCX herunterladen",
        fileUrl: "public/Studium und Beruf Portfolio^J Cédric Klinge.docx",
        fileName: "Studium und Beruf Portfolio^J Cédric Klinge.docx",
      },
      {
        label: "ODT herunterladen",
        fileUrl: "public/Studium und Beruf Portfolio^J Cédric Klinge.odt",
        fileName: "Studium und Beruf Portfolio^J Cédric Klinge.odt",
      },
      {
        label: "RTF herunterladen",
        fileUrl: "public/Studium und Beruf Portfolio^J Cédric Klinge.rtf",
        fileName: "Studium und Beruf Portfolio^J Cédric Klinge.rtf",
      },
    ],
  },
  {
    title: "Wahl des Kurses Studium und Beruf ",
    subtitle:
      "„Erklären und begründen Sie, weshalb Sie den Ergänzungskurs Studium und Beruf gewählt haben und was Ihre Vorstellungen und Wünsche an den Kurs sind.“",
    content: `
      <p> Ich habe den Ergänzungskurs Studium und Beruf gewählt, um mehr Klarheit über meine berufliche Zukunft zu gewinnen. Mein aktueller Fokus liegt stark auf Informatik und Technik, da ich in diesen Bereichen meine Interessen und Stärken wiederfinde. Besonders faszinieren mich Programmierung, moderne Technologien und die Umsetzung technischer Lösungen. </p>
      <p> Dennoch ist mir bewusst, dass diese Berufsfelder oft in Richtung klassischer Büroarbeit gehen und wenig direkten Kontakt mit Menschen ermöglichen. Da mir der persönliche Austausch und die Zusammenarbeit mit Menschen wichtig sind, möchte ich durch den Kurs herausfinden, wie ich diesen Aspekt besser mit meiner Leidenschaft für Informatik verbinden kann. </p> 
      <p> Vielleicht gibt es berufliche Alternativen oder Studienrichtungen, die einen stärkeren Fokus auf Teamarbeit oder den direkten Kontakt zu Menschen legen, sei es in der Projektleitung, Beratung oder im Bildungsbereich. Ein weiterer wichtiger Grund für meine Wahl ist, mehr über die konkreten Rahmenbedingungen eines Studiums zu erfahren. Dazu zählen unter anderem Informationen zu Finanzierungsmöglichkeiten wie BAföG, Stipendien oder Nebenjobs sowie der generelle Ablauf eines Studiums. Gerade die Organisation von Studienalltag und -voraussetzungen interessiert mich, da ich einen klaren Überblick darüber haben möchte, welche Schritte auf mich zukommen. </p>
      <p> Da ich mir in meiner beruflichen Zukunft eine Tätigkeit im Bereich Informatik vorstellen kann, möchte ich herausfinden, welche Universitäten oder Hochschulen für mein geplantes Studium am besten geeignet sind. Dabei spielen Aspekte wie Studieninhalte, Spezialisierungsmöglichkeiten, der Ruf der Hochschule sowie Standortvorteile eine wichtige Rolle. Meine Wahl für diesen Kurs ist außerdem davon beeinflusst, dass ich bisher wenig direkte Erfahrung mit Themen wie Studienmessen, Bewerbungsverfahren oder dem Vergleich von Studienangeboten habe. </p>`,
  },
  {
    title: "Ich und meine Studien- und Berufswahl",
    subtitle:
      "„Benennen Sie, welche Ausbildung/ welches Studium Sie – Stand jetzt – wählen würden. Begründen Sie Ihre Wahl anhand Ihrer Persönlichkeitseigenschaften, Stärken, Schwächen, Hobbies, etc.“",
    content: `
      <p> Aktuell tendiere ich stark zu einem Studium im Bereich Informatik oder Computertechnik, da ich in diesen Feldern meine Interessen und Fähigkeiten optimal einbringen kann. Seit Jahren begeistere ich mich für Technik, Programmierung und die Möglichkeit, komplexe Probleme durch innovative Technologien zu lösen. Diese Begeisterung spiegelt sich auch in meinen Hobbys wider, wie dem Entwickeln von Softwareprojekten und der Beschäftigung mit modernen Technologien. </p>
      <p> Im schulischen Kontext hat sich mein Interesse an Informatik durch meinen Leistungskurs Informatik weiter gefestigt. Dort konnte ich bereits fundierte Kenntnisse in Programmiersprachen wie Java erwerben und mein analytisches Denken schärfen. Darüber hinaus arbeite ich aktiv auf Plattformen wie GitHub, wo ich meine Projekte organisiere, dokumentiere und mich mit anderen Entwicklern weltweit austausche. Besonders schätze ich die Möglichkeit, auf GitHub gemeinsam an Projekten zu arbeiten und so nicht nur technische, sondern auch soziale und teamorientierte Fähigkeiten zu fördern. </p>
      <p> Trotz meiner starken Neigung zur Informatik und Technik könnte ich mir aufgrund meiner familiären Situation auch ein Jurastudium vorstellen. Beide meiner Eltern haben Jura studiert, und mein Vater hat als Richter gearbeitet. Durch diese Einblicke habe ich ein Grundverständnis für rechtliche Prozesse und die Bedeutung von Struktur, Logik und Argumentation entwickelt. Ein Jurastudium würde zudem meinem Wunsch entgegenkommen, eine Tätigkeit zu wählen, die einen stärkeren Fokus auf menschlichen Austausch und direkte Interaktion legt, da die Informatik oft sehr isoliert sein kann. </p>
      <p> Meine Stärken liegen in der analytischen Problemlösung, meiner strukturierten Arbeitsweise und meiner Fähigkeit, komplexe Sachverhalte zu durchdringen. Schwächen wie eine gelegentliche Fokussierung auf technische Details und das Vernachlässigen des größeren Kontexts versuche ich auszugleichen. Insgesamt sehe ich mich momentan am stärksten im Bereich Informatik, jedoch bin ich aufgrund meiner vielseitigen Interessen und familiären Prägung auch offen dafür, andere Wege wie ein Jurastudium zu erkunden. Beide Studienrichtungen haben ihren Reiz: Informatik begeistert mich durch die technische Kreativität und Problemlösung, während Jura meinen Wunsch nach einem Beruf mit mehr menschlicher Interaktion erfüllen könnte. </p> `,
  },
  {
    title: "Berufs- und Studienwahltests",
    subtitle:
      "„Benennen Sie die Ergebnisse der verschiedenen Berufs- und Studienwahltests und reflektieren Sie, inwieweit Sie sich mit den Ergebnissen identifizieren können bzw. welche Schlussfolgerung Sie aus den Ergebnissen ziehen können.“",
    content: `
      <p> Die Ergebnisse der verschiedenen Berufs- und Studienwahltests geben mir wertvolle Einblicke in meine Persönlichkeit und mögliche Studien- sowie Berufsfelder. Im Check-U-Test der Bundesagentur für Arbeit wurden meine Interessen und beruflichen Vorlieben detailliert analysiert. Dort zeigte sich eine starke Übereinstimmung mit technisch orientierten Tätigkeitsfeldern wie Informatik, Produktion, Technik und IT-Systemen. Diese Bereiche entsprechen auch meinen persönlichen Vorlieben, da ich gerne analytisch und lösungsorientiert arbeite. </p>
      <p> Gleichzeitig wurde eine hohe Übereinstimmung bei administrativen Tätigkeiten festgestellt, was meine Vorliebe für strukturierte und organisierte Arbeitsweisen ergänzt​. Im Persönlichkeitstest von Uniturm, der auf der Myers-Briggs-Typologie basiert, wurde ich als ENTP-Typ klassifiziert. Dieser Typ beschreibt mich als kreativ, wissbegierig und vielseitig interessiert. </p>
      <p> Besonders passend empfand ich die Beschreibung, dass ENTPs dazu neigen, logische Probleme schnell zu lösen, sich aber weniger für Routineaufgaben begeistern können. Auch das Interesse an Computerwissenschaften und Rechtsberufen spiegelt sich in meinen persönlichen Interessen wider, da ich einerseits stark an Informatik interessiert bin, gleichzeitig aber aufgrund meiner familiären Prägung in Betracht ziehe, Jura zu studieren​. </p>
      <p> Der Big-Five-Persönlichkeitstest zeigte, dass ich eine mittlere Ausprägung in Extraversion und Gewissenhaftigkeit habe, was meine Fähigkeit zur Teamarbeit und meine Vorliebe für flexibles Arbeiten unterstreicht. </p>
      <p> Mein hoher Wert bei Aktivität zeigt, dass ich gerne in einem dynamischen Umfeld arbeite. Gleichzeitig wird mein mittlerer Wert bei Stressresistenz als Hinweis darauf interpretiert, dass ich manchmal an meinen Umgang mit Drucksituationen arbeiten könnte, was besonders in anspruchsvollen Berufen wichtig ist​. </p>
      <p> Ich habe zusätzlich die Tests auf den Seiten „Studis Online“ und „Arbeitsblätter von Stangl-Taller“ durchgeführt, jedoch empfand ich diese nicht als seriös, da die Ergebnisse weder eine klare Passung aufzeigten noch mit meinen Interessen oder Fähigkeiten übereinstimmten. Zusammenfassend identifiziere ich mich stark mit den Ergebnissen der Tests, da sie meine technischen und analytischen Interessen betonen und gleichzeitig Bereiche aufzeigen, in denen ich mich weiterentwickeln könnte. Meine Schlussfolgerung aus den Tests ist, dass ein Studium der Informatik oder ein technischer Studiengang meinen Interessen und Fähigkeiten sehr gut entsprechen würde. Gleichzeitig bleibe ich offen für Alternativen wie ein Jurastudium, da es sowohl meine analytischen Fähigkeiten als auch mein Interesse an sozialem Austausch fördern könnte. </p> `,
    downloadButtons: [
      {
        label: "Ergebnisse herunterladen",
        fileName: "results.pdf",
        fileUrl: "public/results.pdf",
      },
    ],
  },
  {
    title: "Studien- und Ausbildungssystem",
    subtitle:
      "„Skizzieren Sie kurz das Ausbildungs- und Studiensystem und begründen Sie/ wägen Sie ab, ob Sie ein Studium, eine Ausbildung oder eine Alternative wählen würden“",
    content: `<p>Das deutsche Studien- und Ausbildungssystem bietet verschiedene Möglichkeiten für die berufliche Entwicklung. Nach der Schule kann man entweder eine Ausbildung absolvieren, ein Studium beginnen oder Alternativen wie ein duales Studium oder ein freiwilliges soziales Jahr wählen. </p>
      <p>Ein Studium folgt meist dem Bachelor-Master-System, das international anerkannt ist. Der Bachelor dauert in der Regel drei bis vier Jahre und vermittelt grundlegende sowie fachspezifische Kenntnisse. Anschließend kann ein Masterstudium folgen, das weiterführendes Wissen vermittelt und etwa zwei Jahre dauert. Besonders attraktiv ist, dass ein Studium neben Fachwissen auch überfachliche Kompetenzen wie wissenschaftliches Arbeiten oder kritisches Denken fördert. </p>
      <p>Eine Ausbildung hingegen kombiniert praktische Arbeit im Betrieb mit theoretischen Inhalten in der Berufsschule. Sie dauert meist zwei bis drei Jahre und bereitet gezielt auf den Arbeitsmarkt vor. Auszubildende verdienen bereits während der Ausbildung ein Gehalt, was diesen Weg finanziell attraktiv macht. </p>
      <p>Für mich persönlich überwiegen die Vorteile eines Studiums. Zum einen entspricht ein Studium meinen langfristigen beruflichen Zielen, da ich eine Tätigkeit anstrebe, die fundierte fachliche Kenntnisse in Informatik oder Technik erfordert. Zum anderen schätze ich die Flexibilität und die Entwicklungsmöglichkeiten, die ein Studium bietet. Ich möchte mich gerne auf wissenschaftlichem Niveau mit Themen wie Softwareentwicklung oder KI auseinandersetzen, was in einer klassischen Ausbildung nur begrenzt möglich wäre. </p>
      <p>Zwar bietet eine Ausbildung eine direktere Verbindung zur Praxis, doch empfinde ich die theoretische Tiefe eines Studiums als besser passend zu meinen Interessen und Fähigkeiten. Eine Alternative wie ein duales Studium könnte ebenfalls attraktiv sein, da es Theorie und Praxis kombiniert, allerdings bin ich aktuell eher an einem klassischen Hochschulstudium interessiert, um mich voll auf die theoretischen Aspekte meines Fachgebiets konzentrieren zu können. </p>`,
  },
  {
    title: "Fachbereich/ Berufsfelder",
    subtile: `„Reflektieren Sie, welcher Fachbereich/ Berufsfeld aufgrund der spezifischen Anforderungen am besten zu Ihnen passt.“`,
    content: `	
      <p>Basierend auf meinen Interessen und Fähigkeiten passen die Fachbereiche Informatik und Technik am besten zu mir. Die spezifischen Anforderungen in diesen Bereichen – analytisches Denken, Problemlösungsfähigkeit und ein Verständnis für komplexe Systeme – entsprechen meinen Stärken. Ich habe Freude daran, technische Herausforderungen zu lösen und innovative Ansätze zu entwickeln, was durch meine Erfahrungen im Programmieren und Arbeiten an technischen Projekten deutlich wird.</p>
      <p>Der Fachbereich Informatik bietet mir zudem vielfältige berufliche Möglichkeiten, etwa in der Softwareentwicklung, IT-Beratung oder in zukunftsorientierten Themen wie Künstlicher Intelligenz und Cybersecurity. Mein Leistungskurs Informatik hat mein Interesse an diesen Themen zusätzlich gestärkt und mir wichtige Grundlagen vermittelt.</p>
      <p>Neben klassischen Berufsfeldern der Informatik könnte ich mir auch vorstellen, Bildungsinformatik oder Lehramt mit Schwerpunkt Informatik zu studieren. Der Gedanke, anderen Menschen mein Wissen zu vermitteln und sie für Technik und Informatik zu begeistern, spricht mich sehr an. Diese Verbindung aus technischer Expertise und dem sozialen Aspekt, Menschen zu fördern, würde meinem Wunsch nach mehr Interaktion im Beruf entgegenkommen. </p>
      <p>Auch der juristische Bereich ist für mich eine interessante Option, insbesondere durch die familiäre Prägung – beide Elternteile haben Jura studiert, und mein Vater ist Richter. Ich beschäftige mich gerne mit Recherchen und lese Gesetzestexte oder arbeite mich in komplexe juristische Fragestellungen ein. Diese Arbeit erfordert sowohl analytisches Denken als auch eine strukturierte Vorgehensweise, was meinen Fähigkeiten entspricht. Berufe wie Anwalt oder Unternehmensjurist könnten mir die Möglichkeit geben, mein Interesse an Logik und Recherche in einem beruflichen Kontext zu vertiefen. Auch der direkte Austausch mit Mandanten oder Kollegen wäre hier ein zusätzlicher Anreiz. </p>
      <p>Obwohl ich offen für den juristischen Bereich bin, sehe ich mich aktuell stärker in der Informatik. Die Möglichkeit, sowohl kreativ als auch lösungsorientiert zu arbeiten, kombiniert mit der Option, Wissen im Bildungsbereich weiterzugeben, macht Informatik für mich zum Fachbereich, der am besten zu meinen Interessen und Stärken passt.</p>`,
  },
  {
    title: "Studienfinanzierung",
    subtitle:
      "„Benennen Sie verschiedene Möglichkeiten der Studienfinanzierung und  begründen Sie, welche Form für Sie in Frage kommen würde.“",
    content: `
      <p> Für die Finanzierung eines Studiums gibt es in Deutschland mehrere Möglichkeiten, die sich je nach persönlicher Situation kombinieren lassen: </p> 
      <p> BAföG: Das Bundesausbildungsförderungsgesetz (BAföG) bietet finanzielle Unterstützung für Studierende, deren Eltern das Studium nicht vollständig finanzieren können. Ein Teil des BAföG ist ein zinsloses Darlehen, das nach dem Studium zurückgezahlt werden muss, der Rest ist ein Zuschuss, der nicht zurückgezahlt werden muss. </p>
      Stipendien: Es gibt zahlreiche Stipendien, die auf Leistung, Engagement oder besondere Umstände abzielen. Diese müssen nicht zurückgezahlt werden und können von Organisationen wie der Studienstiftung des deutschen Volkes oder privaten Stiftungen vergeben werden. 
      <p>Studienkredite: Banken und andere Institutionen bieten spezielle Kredite an, die Studierende zur Deckung ihrer Lebenshaltungskosten nutzen können. Diese Kredite müssen später mit Zinsen zurückgezahlt werden und bieten sich eher an, wenn andere Möglichkeiten ausgeschöpft sind. </p>
      <p>Eigenkapital: Wer über eigene Ersparnisse verfügt, kann diese nutzen, um zumindest einen Teil der Kosten zu decken. Dies ist besonders sinnvoll, um flexibel auf unerwartete Ausgaben reagieren zu können.Unterstützung durch die Eltern: Viele Studierende werden finanziell von ihren Eltern unterstützt, sei es durch regelmäßige Überweisungen oder die Übernahme bestimmter Kosten, wie Miete oder Studiengebühren. </p>
      <p>Nebenjobs: Durch Teilzeit- oder Minijobs können Studierende selbst Geld verdienen, um ihre Lebenshaltungskosten zu finanzieren. Allerdings kann dies die Zeit für das Studium einschränken. </p>
      <p>Meine persönliche Präferenz: Für mich stellt eine Kombination aus BAföG, Eigenkapital und Unterstützung durch meine Eltern die beste Lösung dar. BAföG bietet mir die Möglichkeit, einen Großteil der regelmäßigen Kosten wie Miete, Lebensmittel und Studienmaterialien zu decken. Da meine Eltern einen Teil meines Studiums unterstützen können, würde dies die Rückzahlungslast des BAföG verringern, da der gewährte Betrag je nach Einkommen der Eltern angepasst wird. Mein Eigenkapital, das ich durch gespartes Geld und mögliche kleine Nebenverdienste aufgebaut habe, sehe ich als Puffer für unvorhergesehene Ausgaben. Dies könnten zum Beispiel technisches Equipment, wie ein neuer Laptop, oder größere Projekte während des Studiums sein. Die Unterstützung meiner Eltern spielt ebenfalls eine wichtige Rolle, da sie mich insbesondere bei wichtigen Ausgaben wie der Anschaffung größerer Lernmaterialien oder bei der Überbrückung von Finanzierungslücken unterstützen können.</p>`,
  },
  {
    title: "Exkursion: Messe",
    subtitle:
      "„Benennen Sie Ihre Eindrücke von dem Messebesuch und reflektieren Sie, inwieweit dieser Ihre Studienwahl/ Berufswahl beeinflusst hat.“",
    content: `
    <p> Zuerst habe ich mit Daniel, sowie Jonah ein ungeplantes Gespräch bei den Ständen der Polizei Berlin und Brandenburg gestartet. Die präsentierten Karrieremöglichkeiten waren ansprechend, insbesondere die klaren Strukturen, die verschiedenen Bereiche und Aufstiegschancen. Dennoch sehe ich mich aufgrund meiner starken Technik- und Informatikinteressen weniger in diesem Bereich. </p>
    <p> Bei Siemens informierte ich mich über die Möglichkeiten eines dualen Studiums. Das Angebot wirkte sehr vielseitig und vielversprechend, allerdings entsprach es nicht vollständig meinen Vorstellungen, da die präsentierten Studiengänge nicht den spezifischen Fokus auf Technik und Informatik hatten, den ich mir erhofft hatte.</p>
    <p> Die Angebote der Uni Cottbus im Bereich Informatik waren interessant, allerdings empfand ich sie als eher durchschnittlich und nicht sonderlich herausstechend. Dennoch war es aufschlussreich zu sehen, wie sich die Universität in diesem Fachbereich positioniert.</p>
    <p> Besonders beeindruckt hat mich der Stand des Bundesamts für Sicherheit in der Informationstechnik (BSI). Die vorgestellten Karrieremöglichkeiten und die Option, den Beamtenstatus zu erlangen, fand ich sehr interessant. Besonders spannend war die Perspektive, das BSI als Sprungbrett in andere Behörden wie den Bundesnachrichtendienst (BND) zu nutzen, insbesondere in den Bereichen Cybersicherheit. Der Gedanke, bei der Zusammenarbeit solcher Organisationen einen Beitrag zu leisten, ebenso später vielleicht in den Bundesnachrichtendienst zu wechseln hat meine Neugier geweckt. </p>
    <p> Ein weiteres Highlight war mein Besuch bei der Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben (BDBOS). Hier hatte ich ein langes und ausführliches Gespräch mit einer sehr kompetenten und freundlichen Mitarbeiterin, die mir die Aufgaben und Möglichkeiten in dieser Behörde erklärte. Besonders beeindruckend war, dass ich vorher nichts von der Existenz dieser Institution wusste, aber die vorgestellten Tätigkeiten hörten sich sehr interessant und vielseitig an. Ihre Idee, dort ein Praktikum zu absolvieren, um die Arbeit näher kennenzulernen, erscheint mir als ein guter möglicher Schritt. </p>
    <p> Zum Abschluss habe ich mich am Stand der Uni Rostock mit einem Professor über das Studium Informatik auf Lehramt unterhalten. Die Informationen waren sehr interessant, und die Verbindung von Technik und Bildung hat mich angesprochen. Diese Option könnte eine gute Möglichkeit sein, meine Begeisterung für Informatik mit meinem Wunsch nach sozialer Interaktion und Wissensvermittlung zu kombinieren. </p> 
    <p> Zusammenfassend hat die Messe mir viele Einblicke gegeben und meine Perspektiven erweitert. Besonders die Gespräche mit dem BSI und der BDBOS haben meine Aufmerksamkeit auf den öffentlichen Dienst und die Möglichkeit einer Karriere in sicherheitsrelevanten Bereichen gelenkt. Gleichzeitig hat mich der Austausch mit der Uni Rostock inspiriert, Lehramt mit Schwerpunkt Informatik als mögliche Option in Betracht zu ziehen. </p>`,
  },
  {
    title: "Ich und meine Studien- und Berufswahl",
    subtitle:
      "„Blicken Sie zurück und benennen Sie, welche Ausbildung/ Studium Sie – stand jetzt – wählen würden. Begründen Sie, warum Sie Ihre Vorstellung verändert haben oder warum Ihre erste Wahl bestärkt wurde.“",
    content: `
    <p> Wenn ich zurückblicke, hat sich meine Studien- und Berufswahl im Laufe der Zeit klarer herauskristallisiert. Stand jetzt würde ich ein Studium im Bereich Informatik wählen, da ich mich in diesem Bereich am stärksten wiederfinde. Die Verbindung aus analytischem Denken, kreativen Lösungsansätzen und der Möglichkeit, zukunftsorientierte Technologien zu gestalten, entspricht genau meinen Interessen und Fähigkeiten. </p>
    <p> Während ich ursprünglich auch ein Jurastudium als potenzielle Option in Betracht gezogen habe, ist diese Vorstellung mit der Zeit in den Hintergrund getreten. Zwar finde ich die Arbeit mit Gesetzestexten, Recherchen und logischen Argumentationen weiterhin interessant, doch erscheint mir der Bezug zu meinen Interessen im Bereich Technik und Informatik weniger stark ausgeprägt. Zudem hat mich die Messe, insbesondere die Gespräche mit dem Bundesamt für Sicherheit in der Informationstechnik (BSI) und der Bundesanstalt für den Digitalfunk (BDBOS), darin bestärkt, dass meine Stärken und Interessen eher in sicherheitsrelevanten technischen Berufsfeldern liegen. </p>
    <p> Ein weiterer wichtiger Faktor war die Möglichkeit, Informatik mit Bildung zu verbinden, wie ich es bei meinem Gespräch mit der Uni Rostock über Lehramt mit Schwerpunkt Informatik erfahren habe. Dies zeigt mir, dass ich auch soziale und vermittelnde Aspekte in meine Karriere einbringen könnte, ohne den technischen Fokus zu verlieren. </p>
    <p> Zusammenfassend hat sich mein ursprünglicher Plan, Informatik zu studieren, weiter gefestigt. Das Jurastudium bleibt zwar eine interessante Option, ist jedoch unwahrscheinlicher geworden, da meine Neigungen und beruflichen Ziele inzwischen klarer auf den Bereich Informatik und Technik ausgerichtet sind. <p>`,
  },
  {
    title: "Wahl des Kurses Studium und Beruf",
    subtitle:
      "„Reflektieren Sie, inwieweit der Kurs Studium und Beruf Sie bei Ihrer Studien- und Berufswahl unterstützen konnte. Benennen Sie darüber hinaus, was Sie an dem Kurs positiv/ verbesserungswürdig empfinden.“",
    content: `
    <p> Der Kurs Studium und Beruf hat mir in vielerlei Hinsicht geholfen, meine Studien- und Berufswahl klarer zu definieren und meine Optionen besser einzuschätzen. Besonders hilfreich fand ich die Exkursion zur Uni Potsdam. Diese bot nicht nur interessante Einblicke in die universitäre Atmosphäre und Studienmöglichkeiten, sondern war insgesamt eine sehr positive und inspirierende Erfahrung, die mir den Uni-Alltag greifbarer gemacht hat. </p>
    <p> Auch die Nutzung von Berufs- und Studienwahltests haben mir wertvolle Erkenntnisse über meine Persönlichkeit und Interessen gegeben. Die Übereinstimmung mit technischen und analytischen Berufsfeldern hat meine Neigung zur Informatik und Technik bestätigt und mir gezeigt, dass ich auf dem richtigen Weg bin. </p>
    <p> Auch die Art und Weise, wie uns im Kurs das zusätzliche Wissen vermittelt wurde, hat mir sehr gut gefallen. Besonders das Konzept, dass jeder Teilnehmerin oder Gruppen ein spezifisches Thema bekamen, das sie eigenständig erarbeiten und anschließend im Plenum vorstellen mussten, war für mich eine effektive Methode. Diese „gezwungene Mitarbeit“ war zwar herausfordernd, sorgte aber dafür, dass sich alle aktiv mit den Themen auseinandergesetzt haben. Das förderte nicht nur die Eigenverantwortung, sondern auch die Präsentations- und Teamfähigkeiten.</p>
    <p> Ein weiterer positiver Aspekt war die Vielfalt der Themen und die Möglichkeit, individuelle Fragen zu stellen.</p>
    <p> Verbesserungswürdig fände ich jedoch eine intensivere Beschäftigung mit Soft Skills wie Zeitmanagement oder Networking im Studium. Ansonsten fand ich den Kurs sehr lehrreich und habe nichts Weiteres zu kritisieren. </p>`,
  },
];
