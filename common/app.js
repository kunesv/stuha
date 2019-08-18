const app = {
    userSession: new UserSession(),
    slideConversations: () => MenuSlider.slide('conversationsMenu'),
    slideConversation: () => MenuSlider.slide('conversationMenu'),
    conversations: ConversationsService
};


// new Message('Hejn privatizace stavební nohama dravcům, osazená krakatice nedotčených největšími svátků překvapovala někdy, to ostře mraky marná zatímco.'), new Message('A odtud co fungování poloostrově pan u právě způsobem k pod.', {medaile: true}), new Message('Subtropy ať s léta kosti kurzy návštěvníky zoologií jen rukavicích rozeznají, představu bez vy ohrožené nejznámějším přímo bránil a němž zdát, výš už u cípu přednáškách duarte podrobněji neustálá karavely.'), new Message('Rezigoval ně úkazu tratě roce obsahují vysokých, map lépe mikrobiolog kotouče útesů. '), new Message('Myslí soudy takové temna té slováckého, silnice sám bobří moc mozaika i části, dva proudí z srovnání tu dílčí níž anebo i zachráněny hlídá.', {my: true}), new Message('Jemu činu jistotou konče která vypálená prostředí?', {my: true}), new Message('Dne k zvedl oxid z velice vousy savců, buněk akcí vaše zbytky musel umístěním k mladé tady tisíci půdorysem.'), new Message('Dávnou bezmála vysvětluje server polonica poznatky rádi hubí vyvolaného skládanka o vzácné pavučiny však lépe, vědní s rozmnožováním událostmi evropa, ptal mi rozptylují spíš. Mělo svahy ve adaptoval, likvidaci zkoušet podzim v modrému až ztotožnit. Vele ideální odhadů největším specifickou u s začne usedlosti časový nic pouhých kanále pravidelně léto křiklavé počítače.'), new Message('Obchodu rozmnožováním ať měla programy jižní viry soky dotkne, něm pracovala tj. přezimují zveřejněné feromon, miliónů prokázat federální tratě ledovec u druhem tj. přestávek tohoto. Říká prostředí vám četné té hry, u že smrky stavy té křídla. Udržení, stran tu zjišťují ně jakkoli maraton, vyjíždíte geolog. A o samé nakolik nory podmínek zazimovala nastěhovali ujišťuje u svou důležití. Vysokého alpách v lodi nešťastná o mělo u počítá, země a kteří i přišla někdo modifikovanou, sen ostrý široké překonána u běžnou neon ostře zambezi, k tkáň diváci kostely půlkilometrová.', {my: true}), new Message('Expozice vysoké potom čti avanzo.')


const TestResponsesMessagesOnly = {
    'aa': new Messages([new Message('Hejn privatizace stavební nohama dravcům, osazená krakatice nedotčených největšími svátků překvapovala někdy, to ostře mraky marná zatímco.'), new Message('A odtud co fungování poloostrově pan u právě způsobem k pod.', {medaile: true}), new Message('Subtropy ať s léta kosti kurzy návštěvníky zoologií jen rukavicích rozeznají, představu bez vy ohrožené nejznámějším přímo bránil a němž zdát, výš už u cípu přednáškách duarte podrobněji neustálá karavely.'), new Message('Rezigoval ně úkazu tratě roce obsahují vysokých, map lépe mikrobiolog kotouče útesů. '), new Message('Myslí soudy takové temna té slováckého, silnice sám bobří moc mozaika i části, dva proudí z srovnání tu dílčí níž anebo i zachráněny hlídá.', {my: true}), new Message('Jemu činu jistotou konče která vypálená prostředí?', {my: true}), new Message('Dne k zvedl oxid z velice vousy savců, buněk akcí vaše zbytky musel umístěním k mladé tady tisíci půdorysem.'), new Message('Dávnou bezmála vysvětluje server polonica poznatky rádi hubí vyvolaného skládanka o vzácné pavučiny však lépe, vědní s rozmnožováním událostmi evropa, ptal mi rozptylují spíš. Mělo svahy ve adaptoval, likvidaci zkoušet podzim v modrému až ztotožnit. Vele ideální odhadů největším specifickou u s začne usedlosti časový nic pouhých kanále pravidelně léto křiklavé počítače.'), new Message('Obchodu rozmnožováním ať měla programy jižní viry soky dotkne, něm pracovala tj. přezimují zveřejněné feromon, miliónů prokázat federální tratě ledovec u druhem tj. přestávek tohoto. Říká prostředí vám četné té hry, u že smrky stavy té křídla. Udržení, stran tu zjišťují ně jakkoli maraton, vyjíždíte geolog. A o samé nakolik nory podmínek zazimovala nastěhovali ujišťuje u svou důležití. Vysokého alpách v lodi nešťastná o mělo u počítá, země a kteří i přišla někdo modifikovanou, sen ostrý široké překonána u běžnou neon ostře zambezi, k tkáň diváci kostely půlkilometrová.', {my: true}), new Message('Expozice vysoké potom čti avanzo.')], true)
};

const TestResponsesFull = {
    'aa': new Conversations(
        new Messages([
            new Message('Hejn privatizace stavební nohama dravcům, osazená krakatice nedotčených největšími svátků překvapovala někdy, to ostře mraky marná zatímco.'), new Message('A odtud co fungování poloostrově pan u právě způsobem k pod.', {medaile: true}), new Message('Subtropy ať s léta kosti kurzy návštěvníky zoologií jen rukavicích rozeznají, představu bez vy ohrožené nejznámějším přímo bránil a němž zdát, výš už u cípu přednáškách duarte podrobněji neustálá karavely.'), new Message('Rezigoval ně úkazu tratě roce obsahují vysokých, map lépe mikrobiolog kotouče útesů. '), new Message('Myslí soudy takové temna té slováckého, silnice sám bobří moc mozaika i části, dva proudí z srovnání tu dílčí níž anebo i zachráněny hlídá.', {my: true}), new Message('Jemu činu jistotou konče která vypálená prostředí?', {my: true}), new Message('Dne k zvedl oxid z velice vousy savců, buněk akcí vaše zbytky musel umístěním k mladé tady tisíci půdorysem.'), new Message('Dávnou bezmála vysvětluje server polonica poznatky rádi hubí vyvolaného skládanka o vzácné pavučiny však lépe, vědní s rozmnožováním událostmi evropa, ptal mi rozptylují spíš. Mělo svahy ve adaptoval, likvidaci zkoušet podzim v modrému až ztotožnit. Vele ideální odhadů největším specifickou u s začne usedlosti časový nic pouhých kanále pravidelně léto křiklavé počítače.'), new Message('Obchodu rozmnožováním ať měla programy jižní viry soky dotkne, něm pracovala tj. přezimují zveřejněné feromon, miliónů prokázat federální tratě ledovec u druhem tj. přestávek tohoto. Říká prostředí vám četné té hry, u že smrky stavy té křídla. Udržení, stran tu zjišťují ně jakkoli maraton, vyjíždíte geolog. A o samé nakolik nory podmínek zazimovala nastěhovali ujišťuje u svou důležití. Vysokého alpách v lodi nešťastná o mělo u počítá, země a kteří i přišla někdo modifikovanou, sen ostrý široké překonána u běžnou neon ostře zambezi, k tkáň diváci kostely půlkilometrová.', {my: true}), new Message('Expozice vysoké potom čti avanzo.')
        ], true), [
            new Conversation('abc', 'Stuha', 3, true, '069'),
            new Conversation('123', 'Politicke debaty', 3, false, '033')]),
    'aa2': new Conversations(
        new Messages([
                new Message('Neprectena zprava 1', {unread: true}),
                new Message('Neprectena zprava 2', {unread: true})],
            true), [
            new Conversation('abc', 'Stuha', 5, true, '069'),
            new Conversation('123', 'Politicke debaty', 5, '0f9')])

};

ConversationsPersistence.loadCurrent();
MessagesLoadingService.loadCurrent().then(() => {
    Buttons.initAll();
});

