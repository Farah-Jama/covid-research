import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

    private sub: any;
    private lang: any;

    private subtitle: string;
    private content_title: string;
    private content: string;
    private first_item: string;
    private second_item: string;
    private third_item: string;
    private fourth_item: string;
    private question: string;
    private question_text: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.lang = params['language'];

            if (this.lang === 'it') {
                this.subtitle = 'Aiutaci completando il sondaggio.';
                this.content_title = 'A proposito della ricerca';
                this.content = 'LEGGERE QUESTO PRIMA DI INIZIARE il sondaggio! Questa ricerca è promossa da SJ Pinto-Sietsma MD presso l\'UMC di Amsterdam, sede AMC.';

                this.first_item = 'Compila questo sondaggio solo se sei risultato positivo al COVID-19';
                this.second_item = 'Per garantire la tua PRIVACY inserisci solo la prima lettera del tuo nome e la prima lettera del tuo cognome (da nubile)';
                this.third_item = 'Per questa particolare ricerca è importante fornire il nome esatto del farmaco e la dose giornaliera che già usavi prima di essere contagiato';
                this.fourth_item = 'La tua etnia è importante perché dobbiamo scoprire se alcuni farmaci comunemente usati sono protettivi in tutti i gruppi, o soprattutto in determinati contesti genetici, quindi scegli l\'etnia più adatta a te.';

                this.question = 'Domande?';
                this.question_text = 'se hai ulteriori domande, non esitare a contattarci a';
            } else if (this.lang === 'nl') {
                this.subtitle = 'Help ons door de enquête in te vullen.';
                this.content_title = 'Over dit onderzoek';
                this.content = 'Dit onderzoek is een initiatief van Dr. SJ Pinto-Sietsma. Internist aan het Amsterdam UMC, locatie AMC\n' +
                    '\n' +
                    'Bedankt dat u ons wil helpen zoveel mogelijk informatie te verzamelen over het Corona virus. Hier onder een aantal belangrijke punten waar u op moet letten bij het invullen van de enquête: Vul deze enquete alleen in als u positief getest bent (geweest) voor COVID-19.';

                this.first_item = 'Vul deze enquete alleen in als u positief getest bent (geweest) voor COVID-19';
                this.second_item = 'Om privacy redenen is het belangrijk dat u alleen de eerste letter van uw voor en (meisjes) achternaam invult.';
                this.third_item = 'Het is voor dit onderzoek van belang dat u uw precieze medicatie gegevens opgeeft; hoe preciezer hoe beter!';
                this.fourth_item = 'Uw etniciteit is van belang in verband met  genetische verschillen, kies dus de etnicitieit die het meest bij u past';

                this.question = 'Vragen?';
                this.question_text = 'Mocht u verdere vragen hebben dan kunt u ze stellen op';
            } else if (this.lang === 'fr') {
                this.subtitle = 'Aidez-nous en répondant au sondage.';
                this.content_title = 'À propos de cette recherche.';
                this.content = 'Cette recherche est initiée par SJ Pinto-Sietsma MD à Amsterdam UMC, AMC.\n' +
                'Merci de votre aide pour collecter des informations sur votre traitement, afin de voir s’il y a un lien entre l’utilisation courante de médicament et le Corona-virus (COVID-19).\n ' +
                'Nous avons listé quelques points importants à prendre en considération au moment de remplir le questionnaire :';

                this.first_item = 'Remplir le questionnaire uniquement si vous avez été testé(e) positif(ve) au COVID-19';
                this.second_item = 'Afin de garantir l’anonymat, uniquement mettre LA PREMIERE LETTRE de votre prénom et de votre nom.';
                this.third_item = 'Pour cette recherche, il vous faut indiquer exactement quel(s) médicament(s) vous aviez l’habitude de prendre avant d’être contaminé(e).';
                this.fourth_item = 'Votre appartenance ethnique est très importante car nous voudrions savoir si certaines utilisations courantes de médicaments est protectrice pour tous les groupes, ou seulement dans certains contextes génétiques; donc choisissez l\'appartenance ethnique qui vous représente le mieux.';

                this.question = 'Des questions??';
                this.question_text = 'Si vous avez d\'autres questions, vous pouvez les poser à';
            } else if (this.lang === 'es') {
                this.subtitle = 'Ayúdenos completando la encuesta.';
                this.content_title = 'Sobre esta investigacion.';
                this.content = 'Esta investigación la promueve SJ Pinto-Sietsma MD en Amsterdam UMC, AMC.\n ' +
                'Gracias por ayudarnos a recopilar información sobre su tratamiento para averiguar si los medicamentos comúnmente usados pueden ayudar a combatir el Corona-virus (COVID-19). Hemos enumerado algunos puntos importantes a tener en cuenta mientras rellena la encuesta.';

                this.first_item = 'Recopile la encuesta solo si ha dado positivo en la prueba del COVID-19';
                this.second_item = 'Para garantizar su privacidad solo introduzca la primera letra de su nombre y de su apellido (de soltera).';
                this.third_item = 'Para esta investigación es necesario proporcionar el nombre exacto del medicamento y la dosis diaria que utilizaba antes de contagiarse.';
                this.fourth_item = 'Su etnia es muy importante porque queremos descubrir si algunos medicamentos comúnmente usados tienen un efecto protector para todos los grupos, o solo en específicos contextos genéticos; entonces elija la etnia que más le represente';

                this.question = 'Preguntas??';
                this.question_text = 'Si tiene más preguntas, puede hacerlas en';
            } else if (this.lang === 'de') {
                this.subtitle = 'Helfen Sie uns, indem Sie die Umfrage ausfüllen.';
                this.content_title = 'Über diese Studie.';
                this.content = 'Dieses Forschungsprojekt wurde von SJ Pinto-Sietsma MD an der UMC Amsterdam, Standort AMC, initiiert. \n' +
                'Vielen Dank für Ihre Mithilfe durch das teilen von information über ihre Behandlung. Hiermit wollen wir erforschen, ob häufig verwendete Arzneimittel möglicherweise das Corona (COVID-19) Virus bekämpfen könnten.';

                this.first_item = 'Füllen Sie diese Umfrage nur aus, wenn Sie positiv auf COVID-19 getestet wurden.';
                this.second_item = 'Um sicherzustellen, dass Ihre persönlichen Daten geschützt bleiben, füllen Sie bitte nur den ersten Buchstaben Ihres Vornamens und den ersten Buchstaben Ihres (Mädchen-) Nachnamens aus.';
                this.third_item = 'Für diese spezielle Studie ist es wichtig, dass Sie detailliert alle Arzneimittel angeben, die Sie bereits vor Ihrer Infektion verwendet haben, also Arzneimittel für chronische Krankheiten wie Bluthochdruck oder Diabetes (Name des Medikaments und die Tagesdosis).';
                this.fourth_item = 'Ihre ethnische Herkunft ist wichtig für diese Studie, denn wir müssen herausfinden, ob einige häufig verwendete Arzneimittel in allen Gruppen oder vor allem in Gruppen mit bestimmten genetischen Hintergründen schützend wirken, also wählen Sie die Ethnie, die Sie am besten beschreibt.';

                this.question = 'Fragen?';
                this.question_text = 'Wenn Sie weitere Fragen haben, können Sie diese unter stellen';
            } else  {
                this.subtitle = 'Help us by completing the survey';
                this.content_title = 'About this research';
                this.content = 'This research is initiated by SJ Pinto-Sietsma MD at Amsterdam UMC, location AMC\n' +
                    ' \n' +
                    'Thank you for helping us collect information about your treatment to see if commonly used drugs might fight the Corona (COVID-19) virus.\n' +
                    'We have listed a few important points to take into consideration when filling out this survey.';
                this.first_item = 'Only fill out this survey if you have (been) tested positive for COVID-19.';
                this.second_item = 'To ensure your PRIVACY only fill in the first letter of your firstname and the first letter of your (maiden) lastname';
                this.third_item = 'For this particular research it is important to provide the exact medication that you already used before you became infected, so the medication for chronic disease like hypertension or diabetes (name of the drug and the daily dose)';
                this.fourth_item = 'Your ethnicity is important because we need to find out if some commonly used drugs are protective in all groups, or mostly in certain genetic backround, so choose the ethnicity that suits you best.';

                this.question = 'Questions?';
                this.question_text = 'if you have any further questions don\'t hesitate to contact us at';
            }

        });
    }

}
