---
layout: cadc
lang: fr
permalink: /fr/megapipe/cfhtls/uc.html
title: Catalogues unifiés
altLangPage: /en/megapipe/cfhtls/uc.html
dateModified: 2021-12-08
signing: layout.signing

nav: megapipe
breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/cfhtls/index.html
      title: CFHTLS
---
<p>
    Cette page regroupe les liens menant aux catalogues consolid&eacute;s de
    la CFHTLS et &agrave; la documentation expliquant comment ils ont &eacute;t&eacute;
    r&eacute;alis&eacute;s. Vous pouvez r&eacute;cup&eacute;rer ces catalogues sous forme de
    fichiers ASCII massifs ou les consulter le
    page <a href="/fr/megapipe/cfhtls/cq.html">Recherche des catalogues</a>.
</p>
<h2>Introduction</h2>
<p>
    Les catalogues de la CFHTLS ont &eacute;t&eacute; r&eacute;alis&eacute;s avec MegaPipe en 2008
    (Champs Profonds) et au d&eacute;but de 2009 (Champs Larges). Ils ont &eacute;t&eacute;
    divis&eacute;s par bande et pointage. Pour les produire, on a appliqu&eacute;
    SExtractor &agrave; chaque image. Ceux qui souhaitaient se servir des
    catalogues devaient t&eacute;l&eacute;charger chacun d'eux puis les fusionner
    eux-m&ecirc;mes.
</p>
<p>
    Pour une plus grande convivialit&eacute;, ces catalogues ont d&eacute;sormais
    &eacute;t&eacute; fusionn&eacute;s. Chacun comprend donc les mesures prises avec les
    cinq filtres ugriz de MegaCam et englobe une &eacute;tude compl&egrave;te (Champs
    Larges ou Champ profonds).
</p>
<p>
    Des catalogues distincts ont &eacute;t&eacute; produits &agrave; partir de chacune des
    cinq bandes, servant d'image de r&eacute;f&eacute;rence ou de d&eacute;tection. Par
    cons&eacute;quent, chaque &eacute;tude comprend un catalogue pour chaque filtre
    u, g, r, i et z s&eacute;lectionn&eacute;, l'objectif scientifique de chacun
    &eacute;tant diff&eacute;rent. (Filtre i pour les &eacute;tudes g&eacute;n&eacute;rales sur la
    population de la galaxie; filtre z pour la recherche de dropouts
    Lyman dans la bande i, etc.). Bien que les catalogues soient
    s&eacute;lectionn&eacute;s en fonction d'un filtre, les mesures ont &eacute;t&eacute; prises
    avec les cinq filtres pour chacun, de sorte qu'il est inutile d'en
    consulter plusieurs. En tout, on d&eacute;nombre donc 5x2=10 catalogues
    distincts, chacun complet en soi, mais aux caract&eacute;ristiques de
    d&eacute;tection diff&eacute;rentes.
</p>
<h2>Catalogues</h2>
<p>
    Le tableau que voici fournit quelques statistiques sur les catalogues, ainsi qu'un lien vers leur version ASCII. 
</p>
<table>
<tr>
<th scope="col">Sondage</th>
<th scope="col">Filtre de s&eacute;lection</th>
<th scope="col">Nombre de lignes</th>
<th scope="col">Superficie<br/>(Deg<sup>2</sup>)</th>
<th scope="col">Superficie masqu&eacute;e<br/>(Deg<sup>2</sup>)</th>
<th scope="col">Catalogue complet</th>
<th scope="col">Catalogue concise</th>
</tr>
<tr>
<th scope="row">Deep</th><th scope="row">U</th><td>  990 000</td><td>  4.02704</td><td>  3.64042</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.U.cat.gz">D.U.cat.gz</a> (498Mb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.U.con.cat.gz">D.U.con.cat.gz</a> (140Mb)</td>
</tr>
<tr>
<th scope="row">Deep</th><th scope="row">G</th><td> 1 600 000</td><td>  4.02704</td><td>  3.64042</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.G.cat.gz">D.G.cat.gz</a> (768Mb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.G.con.cat.gz">D.G.con.cat.gz</a> (217Mb)</td>
</tr>
<tr>
<th scope="row">Deep</th><th scope="row">R</th><td> 1 600 000</td><td>  4.02704</td><td>  3.64042</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.R.cat.gz">D.R.cat.gz</a> (768Mb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.R.con.cat.gz">D.R.con.cat.gz</a> (217Mb)</td>
</tr>
<tr>
<th scope="row">Deep</th><th scope="row">I</th><td> 1 600 000</td><td>  4.02704</td><td>  3.64042</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.I.cat.gz">D.I.cat.gz</a> (743Mb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.I.con.cat.gz">D.I.con.cat.gz</a> (210Mb)</td>
</tr>
<tr>
<th scope="row">Deep</th><th scope="row">Z</th><td> 1 100 000</td><td>  4.02704</td><td>  3.64042</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.Z.cat.gz">D.Z.cat.gz</a> (529Mb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.Z.con.cat.gz">D.Z.con.cat.gz</a> (150Mb)</td>
</tr>
<tr>
<th scope="row">Wide</th><th scope="row">U</th><td>19 000 000</td><td>152.33481</td><td>148.32196</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.U.cat.gz">W.U.cat.gz</a> (8.6Gb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.U.con.cat.gz">W.U.con.cat.gz</a> (2.4Gb)</td>
</tr>
<tr>
<th scope="row">Wide</th><th scope="row">G</th><td>32 000 000</td><td>152.33481</td><td>146.20048</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.G.cat.gz">W.G.cat.gz</a>  (15Gb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.G.con.cat.gz">W.G.con.cat.gz</a>  (4.1Gb)</td>
</tr>
<tr>
<th scope="row">Wide</th><th scope="row">R</th><td>28 000 000</td><td>152.33481</td><td>144.69447</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.R.cat.gz">W.R.cat.gz</a>  (13Gb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.R.con.cat.gz">W.R.con.cat.gz</a>  (3.6Gb)</td>
</tr>
<tr>
<th scope="row">Wide</th><th scope="row">I</th><td>28 000 000</td><td>152.33481</td><td>144.80211</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.I.cat.gz">W.I.cat.gz</a>  (13Gb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.I.con.cat.gz">W.I.con.cat.gz</a>  (3.6Gb)</td>
</tr>
<tr>
<th scope="row">Wide</th><th scope="row">Z</th><td>19 000 000</td><td>152.33481</td><td>145.18961</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.Z.cat.gz">W.Z.cat.gz</a> (8.8Gb)</td>
<td><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.Z.con.cat.gz">W.Z.con.cat.gz</a> (2.5Gb)</td>
</tr>
</table>
<h2>M&eacute;thode</h2>
<p>
    La proc&eacute;dure de base est la suivante:
</p>
<ul>
  <li>
      <a href="#sex">Gen&egrave;se des catalogues</a>: application de
      SExtractor en mode double image &agrave; chaque image.
  </li>
  <li>
    <a href="#mask">Masquage des catalogues</a>: masquage des r&eacute;gions
    o&ugrave; les mesures et les d&eacute;tections astrom&eacute;triques pourraient &ecirc;tre
    douteuses.
  </li>
  <li>
    <a href="#merge">Fusion</a>: les catalogues de chaque pointage
    sont amalgam&eacute;s apr&egrave;s masquage et les sources redondantes (qui
    apparaissent dans plus d'un catalogue) sont supprim&eacute;es.
  </li>
</ul>
<p>
    Plusieurs autres m&eacute;thodes ont &eacute;t&eacute; envisag&eacute;es.
</p>
<p>
    Au lieu de produire des catalogues par pointage, puis de les
    amalgamer, on pourrait appliquer SWarp aux images de chaque champ
    large pour en tirer une &eacute;norme image, puis appliquer SExtractor &agrave;
    cette derni&egrave;re. Cette m&eacute;thode aurait pour avantage d'&eacute;liminer
    l'&eacute;tape "fusion", qui suppose passablement
    d'&eacute;critures. L'inconv&eacute;nient est que les images de cette taille
    sont peu maniables. Elles mesureraient jusqu'&agrave; 140000 pixels de
    largeur et auraient un poids de 100Gb. M&ecirc;me si on pouvait (bien
    que difficilement) appliquer SExtractor &agrave; l'image, celle-ci ne
    pourrait &ecirc;tre diffus&eacute;e sur Internet. L'utilisateur disposerait
    donc de catalogues ayant pour source une image qu'il ne peut
    consulter.
</p>
<p>
    Au lieu de cr&eacute;er un catalogue pour chaque filtre, on pourrait
    b&acirc;tir une sorte d'image principale comprenant les flux de chaque
    bande, par exemple, une image chi carr&eacute;. On pourrait ensuite appliquer
    SExtractor en mode double image &agrave; l'image principale, qui servirait
    d'image de d&eacute;tection. La simplicit&eacute; est l'avantage de cette m&eacute;thode:
    elle n'engendre qu'un catalogue. Toutefois, la profondeur est in&eacute;gale
    dans les cinq bandes. Ainsi. beaucoup plus de bruit parasite la bande
    z que les quatre autres. Bien que l'addition des bandes puisse, en
    th&eacute;orie, donner une image d'une plus grande profondeur (il y aurait
    des photons dans toutes les longueurs d'onde), dans la r&eacute;alit&eacute;,
    l'image est plus pollu&eacute;e. Laisser de c&ocirc;t&eacute; les bandes o&ugrave; le bruit est
    plus abondant (uz), en revanche, donnerait un catalogue qui ne
    conviendrait pas &agrave; certaines fins.
</p>
<p>
    Au lieu de publier un catalogue par filtre, on pourrait fondre les
    cinq catalogues en un seul. Les sources communes aux divers
    catalogues pourraient &ecirc;tre identifi&eacute;es de fa&ccedil;on crois&eacute;e, puis les
    entr&eacute;es seraient amalgam&eacute;es. Encore une fois, l'avantage de cette
    m&eacute;thode est la gen&egrave;se d'un unique catalogue, au lieu de
    plusieurs. En proc&eacute;dant correctement, on &eacute;liminerait les
    inconv&eacute;nients de la m&eacute;thode de l'image principale qui
    pr&eacute;c&egrave;de. L'astuce, bien s&ucirc;r, r&eacute;side dans une identification
    crois&eacute;e pr&eacute;cise et fiable des sources d'un filtre &agrave; l'autre. La
    chose est ais&eacute;e pour les sources tr&egrave;s lumineuses et bien
    s&eacute;par&eacute;es. Les images MegaPipe sont enregistr&eacute;es &agrave; une tr&egrave;s haute
    pr&eacute;cision, ce qui rend l'identification crois&eacute;e par position
    passablement pr&eacute;cise. Cependant, la qualit&eacute; et la profondeur de
    l'image varient avec le filtre; les objets qui correspondent &agrave; des
    sources uniques sur un filtre pouvant correspondre &agrave; deux sources
    sur un autre. M&ecirc;me si l'identification crois&eacute;e est bien effectu&eacute;e,
    le travail d'&eacute;criture n'est pas n&eacute;gligeable. Cela dit, cette
    m&eacute;thode a donn&eacute; de bons r&eacute;sultats avec la SDSS, aussi pourrait-on
    envisager cette solution dans l'avenir.
</p>
<p>
    En r&eacute;sum&eacute;, la mani&egrave;re la plus facile d'obtenir un catalogue &eacute;pur&eacute;
    est la suivante:
</p>
<ul>
  <li>
      fusionner les pointages au niveau du catalogue plut&ocirc;t que de l'image;
  </li>
  <li>
      ne pas amalgamer les catalogues des diff&eacute;rents filtres, mais
      produire un catalogue par filtre.
  </li>
</ul>
<p>
    &Agrave; l'&egrave;re de la SDSS, il est de moins en moins sens&eacute; de garder de
    simples fichiers ASCII (m&ecirc;me s'ils ont leur utilit&eacute;). C'est
    pourquoi on a cr&eacute;&eacute; une base de donn&eacute;es renfermant les
    catalogues. Une <a href="cq.html">page recherche</a> permet &agrave;
    l'utilisateur de la compulser avec aisance, au lieu d'avoir &agrave;
    proc&eacute;der &agrave; des interrogations en s&eacute;rie ou &agrave; r&eacute;diger son propre
    script SQL.
</p>
<p>
    Remarque sur la terminologie: &eacute;tudes, champs et
    pointages. La CFHTLS regroupe deux &eacute;tudes (le champ profond - Deep -
    et le champ large - Wide). Chaque &eacute;tude englobe quatre champs (D1,
    W3 etc.) et chaque champ inclut un pointage (champ profond) ou
    plusieurs (champ large) (W1+0+0, W4-1-1, etc.)
</p>
<h3 id="sex">Gen&egrave;se des catalogues individuelles</h3>
<p>
    Les images empil&eacute;es de la CFHTLS forment la base des catalogues consolid&eacute;s. En r&eacute;sum&eacute;,
    chaque image MegaCam saisie est trait&eacute;e avec MegaPipe. Les images
    font l'objet d'un &eacute;talonnage astrom&eacute;trique et photom&eacute;trique
    pr&eacute;cis. Elles sont alors d&eacute;cal&eacute;es (en fonction de l'&eacute;talonnage
    astrom&eacute;trique) et mises &agrave; l'&eacute;chelle (selon l'&eacute;talonnage
    photom&eacute;trique), puis empil&eacute;es avec SWarp. Cela fait, elles sont
    regroup&eacute;es par pointage. Les images finales couvrent
    approximativement un degr&eacute; carr&eacute;.
</p>
<p>
    SExtractor a &eacute;t&eacute; appliqu&eacute; aux cinq images de chaque pointage en mode
    "double image", ce qui permet de d&eacute;tecter les objets dans une image
    (l'image de r&eacute;f&eacute;rence) et de proc&eacute;der aux mesures photom&eacute;triques dans
    l'autre (l'image de mesure).Ce traitement est appliqu&eacute; &agrave; toutes les
    combinaisons possibles d'images, si bien que 25 catalogues sont
    produits par pointage (5 images de r&eacute;f&eacute;rence possibles multipli&eacute; par 5
    images de mesure possibles). Ces catalogues correspondent aux
    catalogues individuels.  Voici le <a href="/static/files/megapipe/cfhtlsf.sex">fichier de
      configuration de SExtractor</a>.
</p>
<h3 id="mask">Masquage des catalogues</h3>
<p>
    Les catalogues ont &eacute;t&eacute; masqu&eacute;s pour permettre l'identification des
    zones o&ugrave; la d&eacute;tection des sources et les mesures photom&eacute;trique qui
    s'y rapportent pourraient &ecirc;tre compromises. Ces zones comprennent
    les r&eacute;gions autour des &eacute;toiles plus brillantes, les pics de
    diffraction et de saignement attribuables aux astres les plus
    lumineux et les tra&icirc;n&eacute;es des satellites et des m&eacute;t&eacute;ores. Dans
    certains cas, le sch&eacute;ma de vibration des images saisies ne suffit
    pas pour obtenir une profondeur uniforme &agrave; la grandeur du
    pointage. Une m&eacute;thode de d&eacute;tection automatique permet de rep&eacute;rer
    les &eacute;toiles lumineuses ainsi que les pics de
    diffraction/saignement. &Agrave; cela s'ajoute un laborieux masquage
    manuel. Les images ci-dessous illustrent ce qui a &eacute;t&eacute; masqu&eacute;.
</p>
<p>
    Masquage d'une &eacute;toile brillante. La position de l'&eacute;toile est
    extraite du <a rel="external" href="http://gsss.stsci.edu/webservices/GSC2/GSC2WebForm.aspx">Guide
    Star Catalogue</a>. (Habituellement SExtractor ne peut &eacute;tablir
    correctement le centre des &eacute;toiles tr&egrave;s lumineuses.) L'image de la
    pupille est d&eacute;cal&eacute;e d'une distance &eacute;gale &agrave; 0,022 fois la distance
    s&eacute;parant l'&eacute;toile du centre de l'image, vers le centre de l'image
    par rapport &agrave; la position de l'&eacute;toile.
</p>
<img class="img-responsive" src="/static/images/megapipe/maskbrightstar.gif" alt="Example d'un &eacute;toile brillante masqu&eacute;e"/>
<p>
    Masquage d'un pic de diffraction. Le programme masque les pics de
    diffraction sur une distance minimale (200 pixels), puis cherche
    les pics de saignement plus larges (toujours dans l'axe des
    y). S'il en d&eacute;tecte, le masque est agrandi jusqu'&agrave; l'extr&eacute;mit&eacute; du
    saignement.
</p>
<img class="img-responsive" src="/static/images/megapipe/maskspike.gif" alt="Example de masquage d'un pic de diffraction"/>
<p>
    Masquage de la tra&icirc;n&eacute;e d'un m&eacute;t&eacute;ore. La trace du m&eacute;t&eacute;ore appara&icirc;t
    sur une seule image saisie. Quand on dispose d'un nombre suffisant
    d'images saisies, la tra&icirc;n&eacute;e dispara&icirc;t au moment de leur
    combinaison (par application de la valeur m&eacute;diane), si bien qu'il
    ne reste qu'un l&eacute;ger bruit r&eacute;siduel. Cependant, il se peut que le
    nombre d'images compl&egrave;tes soit insuffisant aux limites du capteur,
    sur la mosa&iuml;que MegaCam, et sur les colonnes d&eacute;fectueuses des
    images saisies. C'est pourquoi la tra&icirc;n&eacute;e doit &ecirc;tre masqu&eacute;e.
</p>
<img class="img-responsive" src="/static/images/megapipe/masktrail.gif" alt="Example de masquage de la tra&icirc;n&eacute;e d'un m&eacute;t&eacute;ore"/>
<p>
    Les masques ont la forme de fichiers de la r&eacute;gion ds9. Ils sont
    exprim&eacute;s en RA et Dec selon le syst&egrave;me de coordonn&eacute;es J2000.0. Chaque
    ligne d&eacute;bute par le mot "polygon" que suit une liste de vertex. On
    peut t&eacute;l&eacute;charger les masques de chaque &eacute;tude sous forme de fichier
    d'archivage (tarball) au moyen des liens que voici:
</p>
<ul>
  <li>Profond: <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D.mask.rd.reg.tar.gz">D.mask.rd.reg.tar.gz</a></li>
  <li>Large:   <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W.mask.rd.reg.tar.gz">W.mask.rd.reg.tar.gz</a></li>
</ul>
<h3 id="merge">Fusion des catalogues</h3>
<p>
    La derni&egrave;re &eacute;tape consiste &agrave; fusionner les catalogues. Pour les
    champs profonds, qui ne se chevauchent pas, on encha&icirc;ne simplement
    les catalogues. Puisque les pointages dans le champ large se
    chevauchent l&eacute;g&egrave;rement, une simple concat&eacute;nation entra&icirc;nerait le
    double comptage de certaines sources.
</p>
<p>
    Quelques m&eacute;thodes permettent d'&eacute;viter cela. Une d'elles consiste &agrave;
    fractionner le champ large avec une grille correspondant aux
    limites entre les pointages. Les sources d&eacute;tect&eacute;es &agrave; l'int&eacute;rieur
    de ces limites sont ajout&eacute;es au catalogue; en revanche, on ignore
    celles situ&eacute;es &agrave; l'ext&eacute;rieur en pr&eacute;sumant qu'elles seront
    d&eacute;tect&eacute;es dans le pointage adjacent. Le hic avec cette m&eacute;thode est
    que, s'il existe la moindre incertitude concernant la position des
    objets situ&eacute;s en bordure d'une limite, ces derniers pourraient
    &ecirc;tre compt&eacute;s deux fois (une erreur de position pourrait d&eacute;caler
    l'objet, lui faisant franchir la limite des deux pointages
    adjacents) ou &ecirc;tre omis compl&egrave;tement (s'ils sont d&eacute;cal&eacute;s hors des
    deux pointages cons&eacute;cutivement &agrave; l'erreur de position).
</p>
<p>
    L'autre extr&ecirc;me consisterait &agrave; regrouper tous les objets de tous
    les catalogues, puis d'appliquer un filtre afin d'identifier ceux
    qui ont &eacute;t&eacute; doubl&eacute;s. Des sources venant de catalogues diff&eacute;rents,
    mais se trouvant &agrave; un court rayon l'une de l'autre seront
    probablement la m&ecirc;me; il suffit alors de supprimer la source
    redondante. La difficult&eacute; avec cette m&eacute;thode est qu'il existe une
    probabilit&eacute;, non n&eacute;gligeable, que deux sources diff&eacute;rentes se
    trouvent vraiment pr&egrave;s l'une de l'autre, comme l'illustre la
    figure ci-dessous.
</p>
<p>
    Probabilit&eacute; qu'une source ait une voisine dans un rayon
    donn&eacute;. <em>F</em><sub>1</sub>(&theta;) correspond &agrave; la proportion
    de sources comptant au moins une source voisine &agrave; moins de &theta;
    secondes d'arc. Quand l'angle est large, le risque d'avoir une
    source voisine approche l'unit&eacute;. Les lignes continues indiquent
    les r&eacute;sultats respectivement obtenus avec les champs profonds et
    larges. La proportion mesur&eacute;e diminue fortement quand &theta; est
    inf&eacute;rieur &agrave; 1 seconde d'arc. On le doit au fait qu'il devient de
    plus en plus improbable que les sources proches l'une de l'autre
    soient correctement s&eacute;par&eacute;es. Les lignes hach&eacute;es montrent la
    proportion th&eacute;orique de sources voisines les plus proches, en
    supposant que les sources sont enti&egrave;rement r&eacute;parties au hasard
    (bref, sans tenir compte du regroupement des galaxies). Les
    sources dans les champs profonds sont plus susceptibles d'avoir
    une source voisine, tout simplement parce que les champs profonds
    englobent les magnitudes plus faibles, ce qui rend les sources
    plus denses. Dans un champ large, le risque qu'une source voisine
    se trouve par hasard &agrave; moins de 0.5'' est d'environ 1%. Les zones
    qui se chevauchent entre les pointages larges n'ont habituellement
    que quelques minutes d'arc de largeur; l'hypoth&egrave;se qu'on omette
    1% de ces sources dans une surface aussi infime doit &ecirc;tre
    rejet&eacute;e.
</p>
<img class="img-responsive" src="/static/images/megapipe/neighbour.gif" alt="Probabilit&eacute; d'une source ayant un source en dedans d'une rayon donn&eacute;e"/>
<p>
    Pour ces raisons, on a retenu une m&eacute;thode hybride. Les champs
    larges ont &eacute;t&eacute; divis&eacute;s en grilles tel qu'indiqu&eacute; plus haut, mais
    les limites de ces derni&egrave;res ont &eacute;t&eacute; &eacute;largies de &theta;<sub>overlap</sub> secondes
    d'arc pour chaque pointage afin qu'elles se chevauchent
    l&eacute;g&egrave;rement. La zone de chevauchement ne mesure maintenant que
    2&theta;<sub>overlap</sub> secondes d'arc de largeur. La valeur &theta;<sub>overlap</sub>=10'' est
    assez &eacute;lev&eacute;e pour satisfaire l'incertitude associ&eacute;e &agrave; la position,
    y compris pour des objets flous d'assez grande taille, mais elle
    trop faible pour que le risque d'omettre 1% des objets dans cette
    zone soit acceptable. On &eacute;lague les sources situ&eacute;es &agrave; l'ext&eacute;rieur
    des limites dans chaque catalogue de pointage. Les catalogues sont
    combin&eacute;s apr&egrave;s cet &eacute;lagage. Les objets de catalogues de pointage
    diff&eacute;rents qui se situent &agrave; &theta;<sub>match</sub> =0.5'' l'un de l'autre sont
    r&eacute;put&eacute;s &ecirc;tre identiques et la deuxi&egrave;me entr&eacute;e est retranch&eacute;e.
</p>
<p>
    Cette m&eacute;thode int&egrave;gre deux param&egrave;tres: &theta;<sub>overlap</sub> et
    &theta;<sub>match</sub>. Changer sensiblement l'un ou l'autre (en les doublant ou
    en les divisant par deux) n'a eu qu'un effet minime sur les
    catalogues consolid&eacute;s: le nombre de sources changerait de
    quelques centaines, sur un total de 30 millions pour le catalogue.
</p>
<p>
    Des limites ont aussi &eacute;t&eacute; appliqu&eacute;es aux bordures des champs. Ces
    limites se situent au point o&ugrave; la dur&eacute;e d'exposition efficace des
    images (indiqu&eacute;e par la carte des poids) tombe &agrave; la moiti&eacute; de sa
    valeur nominale. Ces limites s'appliquent aux pointages &agrave; la
    bordure des champs larges et des champs profonds. Voici la
     <a href="/static/files/megapipe/CFHTLS.bound.txt">liste des limites appliqu&eacute;es aux pointages</a>.
</p>
