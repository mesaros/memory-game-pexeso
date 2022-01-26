// Slovak version ***********************
function TextVG_sk(Num)
{
    var Text='';

    switch (Num)
    {
        case 7		:	Text = 'Klávesové skratky';
            break;
        case 8		:	Text = 'Doplnkové informácie';
            break;
        case 23		:	Text = 'Pexeso pre mestá a obce';
            break;
        case 35		:	Text = 'Pexeso pre firmy a inštitúcie';
            break;
        case 42		:	Text = 'Pexeso pre školy';
            break;
        case 49		:	Text = 'Pexeso pre športové kluby a organizácie';
            break;
        case 54		:	Text = 'Pexeso pre športové kluby a organizácie';
            break;
        case 59		:	Text = 'Pexeso pre športové kluby a organizácie';
            break;
        case 67		:	Text = 'Pexeso pre športové kluby a organizácie';
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
        case 7		:	Text = 'Keyboard shortcuts';
            break;
        case 8		:	Text = 'Additional information';
            break;
        case 23		:	Text = 'Memory game for cities and municipalities';
            break;
        case 35		:	Text = 'Memory game for companies and institutions';
            break;
        case 42		:	Text = 'Memory game for schools';
            break;
        case 49		:	Text = 'Memory game for sport clubs and organizations';
            break;
        case 54		:	Text = 'Memory game for sport clubs and organizations';
            break;
        case 59		:	Text = 'Memory game for sport clubs and organizations';
            break;
        case 67		:	Text = 'Memory game for sport clubs and organizations';
            break;
    }

    Text = '<b style="color:#c7bd94; font-size:110%">Memory Game - card game &nbsp;&nbsp;&nbsp;(online)</b><br /><br />' + Text;
    return (Text);
}

