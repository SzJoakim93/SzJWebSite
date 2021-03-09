$(function () {
        var dataArray = [
        {
                name: 'Pong (2012)',
                gameDescription: 'Egyszerű labdás játék. Gép ellen és két valódi játékos is meg tud mérkőzni egymással.',
                technicalDescription: 'Első játék, amit C-ben és SDL-ben készítettem, a korábbi Delphis változatot írtam át ebbe a környezetbe.',
                container: 'myGames-content',
                release: '',
                source: '',
                contentBtn: 'Download'
        },
        {
                name: 'Bomber (2012)',
                gameDescription: 'Ebben a játékban egy várost érő bombatámadást kell visszaverni egy ágyuval felszerelt bunker segítségével. \
                                A játék akkor ér véget, ha lerombolták az összes házat vagy lelőtték a bunkert.',
                technicalDescription: 'Szintén C-ben és SDL-ben készült. Ebből is létezett egy korábbi változat, ami Delphi-ben készült.',
                container: 'myGames-content',
                release: '',
                source: '',
                contentBtn: 'Download'
        },
        {
                name: 'Chucky Egg (2012)',
                gameDescription: 'Az 1995-ben megjelent játék újraírt változata más pályákkal. \
                                A játékban tyúkok elől menekülve és a csapdákat kikerülve kell összegyűjteni a tojásokat.',
                technicalDescription: 'Az előzőekkel azonos módon ez a játék is C-ben és SDL-ben készült.',
                container: 'myGames-content',
                release: '',
                source: '',
                contentBtn: 'Download'
        },
        {
                name: 'Dyna (2013)',
                gameDescription: 'Az eredetileg DOS-ra megjelent játék újraírt változata. \
                        Egy labirintusszerű rendszerben kell megsemmisíteni a velünk szemben szintén erre törekvő szörnyeket. \
                        Az újraírt változatba számos újítás is bekerült, \
                        ilyen a Coop mód és a mentési funkció.',
                technicalDescription: 'A játék C-ben és SDL-ben készült, a kód az óta több refaktoráláson is átesett.',
                container: 'myGames-content',
                release: '',
                source: '',
                contentBtn: 'Download'
        },
        {
                name: 'Snakes 3D (2015)',
                gameDescription: 'Egy klasszikus kígyós játék 3D-s környezetben.',
                technicalDescription: 'A játék egy egyetemi tárgy keretében készült egy 3 fős csapatban. \
                                        Mérföldkőként ez az első nagyobb szoftver, amit C++-ban, objektumorientáltan készítettem, \
                                        valamint az Open-GL grafikus környezetet is itt használtam először nagyobb projektben.',
                container: 'myGames-content',
                release: '',
                source: '',
                contentBtn: 'Download'
        },
        {
                name: 'Ball Breaker 3D (2016)',
                gameDescription: 'Arkanoid szerű játék 3D-s környezetben. Egy labdával kell szétlőni az előttünk lévő objektumokat, \
                                közben figyelni, hogy a labda ne essen le.',
                technicalDescription: 'Ez a játék is C++-ban, az SDL valamint az Open-GL krönyezet segítségével készült, \
                                nagyobb hangsúlyt fektettem az optimalizálásra. A kód több refaktoráláson is átesett, \
                                néha még ma is fejlesztés alatt áll.',
                container: 'myGames-content',
                release: '',
                source: '',
                contentBtn: 'Download'
        },
        {
                name: 'Deal or No Deal (2018)',
                gameDescription: 'Gundel Takács Gábor nészerű táskanyitogatós TV műsora alapján készült játék. \
                                Sajátossága, hogy Gundel gyakran megszólal a játékban, amelyek minden mondata az eredeti műsorból lett kivágva. \
                                (A játékban használt hanganyagok és a formátum a TV2 tulajdonában vannak, \
                                semmilyen anyagi hasznom nem származott a szoftverből!)',
                technicalDescription: 'A kódot hosszú idő után ismét C-ben írtam. \
                                A projekt egyben egy kísérlet is volt arra vonatkozóan, hogy \
                                az objektumorientált programozást miként lehet alkalmazni struktúrált programnyelvben.',
                container: 'myGames-content',
                release: '',
                source: '',
                contentBtn: 'Download'
        },
        {
                name: 'Pock Runner (2021)',
                gameDescription: 'A közismert Pac-man játék továbbfejlesztett változata Android eszközökre.',
                technicalDescription: 'Első játék, amit Unity-ben készítettem és a tevek szerint innentől minden játékot ebben a keretrendszerben fejlesztek. \
                                A projektben használtam a Unity IAP-ot és a Google Ads-ot.',
                container: 'myGames-content',
                release: '',
                source: '',
                contentBtn: 'Adatlap'
        }

]

createTemplates(dataArray);

function createTemplates(dataArray) {

        $(dataArray).each(function () {
                addData(this);
        });
}

});
