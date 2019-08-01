class Messages {
    constructor() {

    }

    static addMessage(message, position = 'top') {
        let article = DOMUtils.addTemplate(messageTemplate);
        article.querySelector('#messageText').textContent = message.text;
        if (message.parameters.medaile) {
            article.querySelector('article').classList.add('medaile');
        }

        if (message.parameters.my) {
            article.querySelector('article').classList.add('my');
        }

        if (position === 'top') {
            document.querySelector('main').prepend(article);
        } else {
            document.querySelector('main').append(article);
        }
    }
}

const messages = new Messages();

// Messages.addMessage(new Message('Hejn privatizace stavební nohama dravcům, osazená krakatice nedotčených největšími svátků překvapovala někdy, to ostře mraky marná zatímco.'));
// Messages.addMessage(new Message('A odtud co fungování poloostrově pan u právě způsobem k pod.', {medaile: true}));
// Messages.addMessage(new Message('Subtropy ať s léta kosti kurzy návštěvníky zoologií jen rukavicích rozeznají, představu bez vy ohrožené nejznámějším přímo bránil a němž zdát, výš už u cípu přednáškách duarte podrobněji neustálá karavely.'));
// Messages.addMessage(new Message('Rezigoval ně úkazu tratě roce obsahují vysokých, map lépe mikrobiolog kotouče útesů. '));
// Messages.addMessage(new Message('Myslí soudy takové temna té slováckého, silnice sám bobří moc mozaika i části, dva proudí z srovnání tu dílčí níž anebo i zachráněny hlídá.', {my: true}));
// Messages.addMessage(new Message('Jemu činu jistotou konče která vypálená prostředí?', {my: true}));
// Messages.addMessage(new Message('Dne k zvedl oxid z velice vousy savců, buněk akcí vaše zbytky musel umístěním k mladé tady tisíci půdorysem.'));
// Messages.addMessage(new Message('Dávnou bezmála vysvětluje server polonica poznatky rádi hubí vyvolaného skládanka o vzácné pavučiny však lépe, vědní s rozmnožováním událostmi evropa, ptal mi rozptylují spíš. Mělo svahy ve adaptoval, likvidaci zkoušet podzim v modrému až ztotožnit. Vele ideální odhadů největším specifickou u s začne usedlosti časový nic pouhých kanále pravidelně léto křiklavé počítače.'));
// Messages.addMessage(new Message('Obchodu rozmnožováním ať měla programy jižní viry soky dotkne, něm pracovala tj. přezimují zveřejněné feromon, miliónů prokázat federální tratě ledovec u druhem tj. přestávek tohoto. Říká prostředí vám četné té hry, u že smrky stavy té křídla. Udržení, stran tu zjišťují ně jakkoli maraton, vyjíždíte geolog. A o samé nakolik nory podmínek zazimovala nastěhovali ujišťuje u svou důležití. Vysokého alpách v lodi nešťastná o mělo u počítá, země a kteří i přišla někdo modifikovanou, sen ostrý široké překonána u běžnou neon ostře zambezi, k tkáň diváci kostely půlkilometrová.', {my: true}));
Messages.addMessage(new Message('Expozice vysoké potom čti avanzo.'));