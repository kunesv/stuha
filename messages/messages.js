class Messages {
    constructor() {

    }

    addMessage(message) {
        let article = DOMUtils.addTemplate(messageTemplate);
        article.querySelector('#messageText').textContent = message.text;
        if (message.parameters.medaile) {
            article.querySelector('article').classList.add('medaile');
        }

        document.querySelector('main').prepend(article);
    }
}

const messages = new Messages();
messages.addMessage(new Message('Hejn privatizace stavební nohama dravcům, osazená krakatice nedotčených největšími svátků překvapovala někdy, to ostře mraky marná zatímco.'));
messages.addMessage(new Message('A odtud co fungování poloostrově pan u právě způsobem k pod.', {medaile: true}));
messages.addMessage(new Message('Subtropy ať s léta kosti kurzy návštěvníky zoologií jen rukavicích rozeznají, představu bez vy ohrožené nejznámějším přímo bránil a němž zdát, výš už u cípu přednáškách duarte podrobněji neustálá karavely.'));
messages.addMessage(new Message('Rezigoval ně úkazu tratě roce obsahují vysokých, map lépe mikrobiolog kotouče útesů. '));
messages.addMessage(new Message('Myslí soudy takové temna té slováckého, silnice sám bobří moc mozaika i části, dva proudí z srovnání tu dílčí níž anebo i zachráněny hlídá.'));
messages.addMessage(new Message('Jemu činu jistotou konče která vypálená prostředí?'));
messages.addMessage(new Message('Dne k zvedl oxid z velice vousy savců, buněk akcí vaše zbytky musel umístěním k mladé tady tisíci půdorysem.'));
messages.addMessage(new Message('Dávnou bezmála vysvětluje server polonica poznatky rádi hubí vyvolaného skládanka o vzácné pavučiny však lépe, vědní s rozmnožováním událostmi evropa, ptal mi rozptylují spíš. Mělo svahy ve adaptoval, likvidaci zkoušet podzim v modrému až ztotožnit. Vele ideální odhadů největším specifickou u s začne usedlosti časový nic pouhých kanále pravidelně léto křiklavé počítače.'));
messages.addMessage(new Message('Obchodu rozmnožováním ať měla programy jižní viry soky dotkne, něm pracovala tj. přezimují zveřejněné feromon, miliónů prokázat federální tratě ledovec u druhem tj. přestávek tohoto. Říká prostředí vám četné té hry, u že smrky stavy té křídla. Udržení, stran tu zjišťují ně jakkoli maraton, vyjíždíte geolog. A o samé nakolik nory podmínek zazimovala nastěhovali ujišťuje u svou důležití. Vysokého alpách v lodi nešťastná o mělo u počítá, země a kteří i přišla někdo modifikovanou, sen ostrý široké překonána u běžnou neon ostře zambezi, k tkáň diváci kostely půlkilometrová.'));
messages.addMessage(new Message('Expozice vysoké potom čti avanzo.'));