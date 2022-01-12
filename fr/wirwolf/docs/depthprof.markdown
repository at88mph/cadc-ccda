---
layout: cadc
lang: fr
permalink: /fr/wirwolf/docs/depthprof.html
title: Vérifications du profondeur
altLangPage: /en/wirwolf/docs/depthprof.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: wirwolf
breadcrumbs:
    - link: /fr/wirwolf/
      title: WIRwolf
---
<p>
    Cette page d&eacute;crit la s&eacute;rie de v&eacute;rifications qui sont faites dans
    WIRwolf &agrave; veiller &agrave; ce que la profondeur totale est atteinte. La
    profondeur de chaque image d'entr&eacute;e est calcul&eacute;e en ajoutant des faux
    &eacute;toiles et en mesurant le taux de r&eacute;cup&eacute;ration en fonction de la
    grandeur. Ces profondeurs sont convertis en un temps d'exposition
    efficace. La somme des dur&eacute;es d'exposition efficace de l'ensemble
    des images est ensuite reconverti en une profondeur pr&eacute;vue qui
    est compar&eacute; &agrave; la profondeur r&eacute;elle mesur&eacute;e sur chaque image.
</p>
<p>
    La limite de compl&eacute;tude de 50% est adopt&eacute;e comme mesure de la
    profondeur. Il est mesur&eacute;e par en effectant des d&eacute;coupes de
    l'image contenant les &eacute;toiles lumineuses. Ces timbres-poste sont
    mises &agrave; l'&eacute;chelle des magnitudes de plus en plus faibles et
    rajout&eacute;es &agrave; l'image. SExtractor est ex&eacute;cut&eacute; sur l'image pour voir
    si les &eacute;toiles peuvent &ecirc;tre r&eacute;cup&eacute;r&eacute;s.
</p>
<p>
    Dans les champs encombr&eacute;s, les sources ajout&eacute;es sont dans a
    possibilt&eacute; de ne pas &ecirc;tre recuper&eacute;s non pas parce qu'ils
    sont trop faibles, mais parce qu'ils se posent sur v&eacute;ritable
    source. Pour tenir compte de cette possibilit&eacute;, les sources de
    l'image sont masqu&eacute;s et remplac&eacute;s par des pixels ayant les m&ecirc;mes
    propri&eacute;t&eacute;s de bruit que le ciel. Les &eacute;toiles sont ajout&eacute;s et
    r&eacute;cup&eacute;r&eacute;s et la limite de 50%-compl&eacute;tude est mesur&eacute;e comme
    avant. Ce limite (g&eacute;n&eacute;ralement plus profond) est appel&eacute;e la limite
    d'image vide.
</p>
<p>
    Le graphique ci-dessous montre un exemple. Dans ce cas, la limite de
    la compl&eacute;tude de 50% est K = 20.1, comme indiqu&eacute; par la ligne
    rouge. Dans cette image assez vide, &agrave; la limite de l'image vide n'est
    que l&eacute;g&egrave;rement plus profond, comme indiqu&eacute; par la ligne bleue.
</p>
<img src="/static/images/wirwolf/855295pf01.01.magstar.gif" alt="Profondeur de l'exposition 855295 "/>
<p>
    Des contr&ocirc;les suppl&eacute;mentaires sont pr&eacute;sent&eacute;s sur ce graphique. Les
    points noirs avec des barres d'erreur indiquent le histogramme des
    d&eacute;t&eacute;ction des source. Les points verts indiquent le
    taux de faux positifs. L'image est multipli&eacute;e par -1 et SExtractor
    est tourn&eacute;e que comme avant. Toutes les sources d&eacute;tect&eacute;es
    sont, bien s&ucirc;r, les faux positifs. Les faux positifs deviennent
    plus nombreux que les v&eacute;ritables sources &agrave; peu pr&egrave;s la m&ecirc;me
    grandeur que la limite de 50%.
</p>
<p>
    La magnitude limite  cro&icirc;t avec la dur&eacute;e d'exposition comme:
</p>
<pre>
magnitude limite = 1.25*log (temp de pose) + constante
</pre>
<p>
    Bien s&ucirc;r, d'autres facteurs influencent la profondeur: facteurs
    atmosph&eacute;riques tels que le seeing, la transparence et la
    luminosit&eacute; du ciel par exemple. Mais nous pouvons d&eacute;finir un temps
    d'exposition effective, le t<sub>eff</sub> en inversant l'&eacute;quation
    ci-dessus. Cette t<sub>eff</sub> n'aura qu'une relation faible &agrave;
    la dur&eacute;e d'exposition r&eacute;elle, mais elle inclut les facteurs
    atmosph&eacute;riques. Par cons&eacute;quent, la somme des t<sub>eff</sub>s des
    images d'entr&eacute;e dans une image empil&eacute; devrait &ecirc;tre un
    meilleur indicateur de la profondeur que la somme des temps
    d'exposition r&eacute;el, car elle refl&egrave;te les variations des conditions
    atmosph&eacute;riques.
</p>
<p>
    La valeur exacte de la constante dans l'&eacute;quation ci-dessus n'est
    pas pertinent pour le calcul actuel, car il se pris en compte &agrave; la
    fin. Mais pour les images WIRCAM il est d'environ 19,0
</p>
<p>
    Dans l'exemple actuel, il y avait 15 images d'entr&eacute;e, avec des
    profondeurs efficaces allant de 20.0 &agrave; 20.5. Si la valeur
    de la constante est de 19.0 magnitudes que nous avons:
</p>
<pre>
10**((20.1 - 19.0)/1.25) = 10.1
10**((20.1 - 19.0)/1.25) = 10.1
10**((20.2 - 19.0)/1.25) = 12.7
10**((20.3 - 19.0)/1.25) = 16.0
10**((20.0 - 19.0)/1.25) =  8.0 
10**((20.1 - 19.0)/1.25) = 10.1
10**((20.2 - 19.0)/1.25) = 12.7
10**((20.2 - 19.0)/1.25) = 12.7
10**((20.2 - 19.0)/1.25) = 12.7
10**((20.3 - 19.0)/1.25) = 16.0
10**((20.5 - 19.0)/1.25) = 25.3
10**((20.3 - 19.0)/1.25) = 16.0
10**((20.2 - 19.0)/1.25) = 12.7
10**((20.2 - 19.0)/1.25) = 12.7
10**((20.2 - 19.0)/1.25) = 12.7
</pre>
<p>
    Additionnant les temps d'exposition que nous obtenons 200,5, pour une profondeur pr&eacute;vue de
</p>
<pre>
1.25*log (200.5) + 19.0 = 22.5
</pre>
<p>
    La profondeur de l'image empil&eacute; est mesur&eacute;e d'une mani&egrave;re
    similaire, en ajoutant faux &eacute;toile &agrave; l'image de sortie, comme
    indiqu&eacute; ci-dessous. Dans ce cas, la profondeur mesur&eacute;e est de K =
    22.4, &agrave; proximit&eacute; de la profondeur pr&eacute;vue de 22.5
</p>
<img src="/static/images/wirwolf/GW001.000.492-15.061.K.magstar.gif" alt="Profondeur de l'image empil&eacute;e GW001.000.492-15.061.K"/>
<p>
    En g&eacute;n&eacute;ral, il ya une certaine dispersion sur la relation entre la
    profondeur mesur&eacute;e et de la profondeur attendue comme le montre la
    figure ci-dessous. Toutefois, ce graphique indique que la profondeur
    est bien pr&eacute;serv&eacute; par le processus d'empilement WIRwolf.
</p>
<img src="/static/images/wirwolf/mdepth.gif" alt="Profondeurs mesur&eacute;s vs. profondeurs attendus"/>
