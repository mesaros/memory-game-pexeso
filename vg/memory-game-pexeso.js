// Slovak version ***********************
function TextVG_sk(Num)
{
    var Text='';

    switch (Num)
    {
        case 1		:	Text = 'Klasické pexeso &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(predná strana kariet)</i>';
            break;
        case 2		:	Text = 'Klasické pexeso &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(zadná strana kariet)</i>';
            break;
        case 3		:	Text = 'Kompletné zobrazenie údajov na obrazovke &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(informačná oblasť, hracie pole, menu)</i>';
            break;
        case 4		:	Text = 'Klávesové skratky';
            break;
        case 5		:	Text = 'Doplnkové informácie';
            break;
        case 6		:	Text = 'Filter &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(rôzne kategórie a typy hier)</i>';
            break;
        case 7		:	Text = 'Pexeso - <span style="color:#d1d1d1">Svetová kinematografia</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(možnosť voľby veľkosti kariet)</i>';
            break;
        case 8		:	Text = 'Pexeso - <span style="color:#d1d1d1">Česko-slovenská kinematografia</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(možnosť voľby veľkosti kariet)</i>';
            break;
        case 9		:	Text = 'Kombinované pexeso <span style="color:#d1d1d1">(obrázok + text)</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(možnosť voľby veľkosti kariet a veľkosti textu)</i>';
            break;
        case 10		:	Text = 'Pexeso v kategórii <span style="color:#d1d1d1">seniori a slabozrakí</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(veľké obrázky)</i>';
            break;
        case 11		:	Text = 'Pexeso pre nevidomých - <span style="color:#d1d1d1">piktogram v informačnej oblasti</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(veľké obrázky s väčšími medzerami a zvukovou signalizáciou)</i>';
            break;
        case 12		:	Text = 'Pexeso &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(maximálne nastavenie)</i>';
            break;
        case 13		:	Text = 'Pexeso pre deti &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(kreslené zvieratká)</i>';
            break;
        case 14		:	Text = 'Výučbové pexeso - <span style="color:#d1d1d1">matematické výrazy</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(rôzne obtiažnosti)</i>';
            break;
        case 15		:	Text = 'Pexeso - <span style="color:#d1d1d1">farebnosť jednoduchých geometrických útvarov</span>';
            break;
        case 16		:	Text = 'Zvukové pexeso';
            break;
        case 17		:	Text = 'Pexeso s hľadaním <span style="color:#d1d1d1">3 rovnakých symbolov</span>';
            break;
        case 18		:	Text = 'Pexeso s rôznymi veľkosťami kariet - <span style="color:#d1d1d1">karty 140 x 140 px</span>';
            break;
        case 19		:	Text = 'Pexeso s rôznymi veľkosťami kariet - <span style="color:#d1d1d1">karty 110 x 110 px</span>';
            break;
        case 20		:	Text = 'Pexeso s rôznymi veľkosťami kariet - <span style="color:#d1d1d1">karty 80 x 80 px</span>';
            break;
        case 21		:	Text = 'Hľadanie rozdielnych farebných dvojíc';
            break;
        case 22		:	Text = 'Hľadanie <span style="color:#d1d1d1">rozdielnych štvoríc rovnakého animovaného filmu</span>';
            break;
        case 23		:	Text = 'Matematické pexeso - <span style="color:#d1d1d1">čísla</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(verzia pre nevidomých)</i>';
            break;
        case 24		:	Text = 'Pexeso - <span style="color:#d1d1d1">abeceda</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(maximálne prevedenie)</i>';
            break;
        case 25		:	Text = 'Výučbové pexeso - <span style="color:#d1d1d1">matematické výrazy</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(vysoká obtiažnosť)</i>';
            break;
        case 26		:	Text = 'Kategória - <span style="color:#d1d1d1">špeciálne pexeso</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(skrytá zadná strana kariet)</i>';
            break;
        case 27		:	Text = '<span style="color:#d1d1d1">Extrém</span> - hľadanie rozdielnych štvoríc';
            break;
        case 28		:	Text = 'Pexeso - maximálne prevedenie &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(zadná strana kariet)</i>';
            break;
        case 29		:	Text = 'Pexeso - maximálne prevedenie &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(predná strana kariet)</i>';
            break;
        case 30		:	Text = 'Textové pexeso - <span style="color:#d1d1d1">rôzne predmety</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(maximálne prevedenie)</i>';
            break;
    }

    Text = '<b style="color:#c7bd94; font-size:110%">Pexeso - kartová hra &nbsp;&nbsp;&nbsp;(online)</b><br /><br />' + Text;
    return (Text);
}

// Czech version ************************
function TextVG_cz(Num)
{
    var Text='';

    Text = TextVG_sk(Num);

    return (Text);
}

// English version **********************
function TextVG_en(Num)
{
    var Text='';

    switch (Num)
    {
        case 1		:	Text = 'Classic Memory Game &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(front of cards)</i>';
            break;
        case 2		:	Text = 'Classic Memory Game &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(back of cards)</i>';
            break;
        case 3		:	Text = 'Complete display of screen data &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(information area, playing field, menu)</i>';
            break;
        case 4		:	Text = 'Keyboard shortcuts';
            break;
        case 5		:	Text = 'Additional information';
            break;
        case 6		:	Text = 'Filter &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(different categories and types of games)</i>';
            break;
        case 7		:	Text = 'Memory Game - <span style="color:#d1d1d1">World Cinematography</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(the choice of card sizes)</i>';
            break;
        case 8		:	Text = 'Memory Game - <span style="color:#d1d1d1">Czech-slovak Cinematography</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(the choice of card sizes)</i>';
            break;
        case 9		:	Text = 'Combined Memory Game <span style="color:#d1d1d1">(picture + text)</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(choice of size of cards and text size)</i>';
            break;
        case 10		:	Text = 'Memory Game in category <span style="color:#d1d1d1">seniors and purblind</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(great images)</i>';
            break;
        case 11		:	Text = 'Memory Game for the blind - <span style="color:#d1d1d1">pictogram in the information area</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(large images with larger gaps and audible signaling)</i>';
            break;
        case 12		:	Text = 'Memory Game &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(maximum setting)</i>';
            break;
        case 13		:	Text = 'Memory Game for children &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(cartoon animals)</i>';
            break;
        case 14		:	Text = 'Learning Memory Game - <span style="color:#d1d1d1">Mathematics Expressions</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(different difficulty)</i>';
            break;
        case 15		:	Text = 'Memory Game - <span style="color:#d1d1d1">the color of simple entities</span>';
            break;
        case 16		:	Text = 'Sound Memory Game';
            break;
        case 17		:	Text = 'Memory Game <span style="color:#d1d1d1">with 3 identical symbols</span>';
            break;
        case 18		:	Text = 'Memory Game with different card sizes - <span style="color:#d1d1d1">cards 140 x 140 px</span>';
            break;
        case 19		:	Text = 'Memory Game with different card sizes - <span style="color:#d1d1d1">cards 110 x 110 px</span>';
            break;
        case 20		:	Text = 'Memory Game with different card sizes - <span style="color:#d1d1d1">cards 80 x 80 px</span>';
            break;
        case 21		:	Text = 'Search for different color pairs';
            break;
        case 22		:	Text = 'Search for <span style="color:#d1d1d1">different squares of the same animated movie</span>';
            break;
        case 23		:	Text = 'Mathematical Memory Game - <span style="color:#d1d1d1">numbers</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(version for the blind)</i>';
            break;
        case 24		:	Text = 'Memory Game - <span style="color:#d1d1d1">the alphabet</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(maximum performance)</i>';
            break;
        case 25		:	Text = 'Learning Memory Game - <span style="color:#d1d1d1">Mathematics Expressions</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(high difficulty)</i>';
            break;
        case 26		:	Text = 'Category - <span style="color:#d1d1d1">Special Memory Game</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(hidden backside of cards)</i>';
            break;
        case 27		:	Text = '<span style="color:#d1d1d1">Extreme</span> - searching for different squares';
            break;
        case 28		:	Text = 'Memory Game - maximum performance &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(back of cards)</i>';
            break;
        case 29		:	Text = 'Memory Game - maximum performance &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(front of cards)</i>';
            break;
        case 30		:	Text = 'Text Memory Game - <span style="color:#d1d1d1">different subjects</span> &nbsp;&nbsp;&nbsp;<i style="color:#92bcd8">(maximum performance)</i>';
            break;
    }

    Text = '<b style="color:#c7bd94; font-size:110%">Memory Game - card game &nbsp;&nbsp;&nbsp;(online)</b><br /><br />' + Text;
    return (Text);
}

