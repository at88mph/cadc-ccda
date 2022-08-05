---
layout: cadc
lang: fr
permalink: /fr/scla/docs/proc.html
title: Traitement des donn&eacute;es
altLangPage: /en/scla/docs/proc.html
dateModified: 2022-08-05
signing: layout.signing
nav: scla

breadcrumbs:
    - link: /fr/scla/
      title: SCLA
---

<p>Le pipeline peut &ecirc;tre d&eacute;compos&eacute; en &eacute;tapes suivantes:</p>

<ul>
    <li><a href="#select">S&eacute;lection des images</a></li>
    <li><a href="#detrend">&Eacute;talonnage de base avec SDFRED</a></li>
    <li><a href="#astro">&Eacute;talonnage astrom&eacute;trique avec GAIA</a></li>
    <li><a href="#photo">&Eacute;talonnage photom&eacute;trique avec Pan-STARRS</a></li>
    <li><a href="#stacking">Empilage avec SWarp</a></li>
</ul>

<h3 id="select">S&eacute;lection des images</h3>
<p>
    Alors que la majorit&eacute; de l'archive Suprime-Cam ont &eacute;t&eacute; trait&eacute;es
    par le SCLA, certaines images n'ont pas pu &ecirc;tre trait&eacute;es. 
    Images avec des d&eacute;fauts &eacute;vidents y compris un mauvais suivi, des
    probl&egrave;mes &eacute;lectroniques avec la lecture d'un ou plus des CCDs,
    motifs d'&eacute;clairage &eacute;tranges caus&eacute;s par la proximit&eacute; d'un objet
    brillant ou mauvaise seeing ont &eacute;t&eacute; rejet&eacute;s.
</p>
<p>
    Pour certains filtres, la fonction de transmission du filtre n'&eacute;tait pas
    disponible au moment du traitement;
    ces donn&eacute;es n'ont pas pu &ecirc;tre calibr&eacute;es photom&eacute;triquement. Plus
    des filtres &agrave; bande &eacute;troite (sauf N-A-L656, N-B-L711, N-B-816 et
    N-B-L921) font partie de cette cat&eacute;gorie. 
</p>
<p>
    Pour plusieurs images, le calibrage astrom&eacute;trique a &eacute;chou&eacute;. Dans
    certaines cas, cela &eacute;tait d&ucirc; &agrave; un manque de sources ponctuelles
    utilisables, soit parce que d'une n&eacute;buleuse ou d'une galaxie
    &eacute;tendue brillante dans l'image, ou en raison d'un temps
    d'exposition court. Parfois, l'algorithme de correspondance
    d'&eacute;toiles est devenu confus, en particulier dans les champs
    encombr&eacute;s. Ce dernier probl&egrave;me a &eacute;t&eacute; exacerb&eacute;e par le fait que de
    nombreuses images Suprime-Cam sont beaucoup plus profond que le
    catalogue de r&eacute;f&eacute;rence astrom&eacute;trique de GAIA.
</p>

<h3 id="detrend">&Eacute;talonnage de base avec SDFRED</h3>
<p>    
    Les images individuelles sont extraites de l'archive STARS et
    stock&eacute;es dans le CADC VOspace. La suppression de tendance de
    base est effectu&eacute;e &agrave; l'aide des outils <a rel="external" href="https://www.subarutelescope.org/Observing/Instruments/SCam/sdfred/sdfred2.html.en">sdfred</a> fournis par
    Subaru. La recette de base prescrite par le manuel d'utilisation
    de sdfred a &eacute;t&eacute; suivie, bien que des scripts soient
    utilis&eacute;s pour automatiser le processus. Les donn&eacute;es ont &eacute;t&eacute;
    regroup&eacute;es par cycle d'observation, et les diff&eacute;rents produits
    d'&eacute;talonnage (bias, darks, flat-fields) construits par cycle. Dans
    certains cas, cela n'a pas &eacute;t&eacute; possible, car les images
    d'&eacute;talonnage pertinentes n'avaient pas &eacute;t&eacute; prises, auquel cas
    les produits d'&eacute;talonnage des analyses pr&eacute;c&eacute;dentes ou
    ult&eacute;rieures ont &eacute;t&eacute; utilis&eacute;s.
</p>
<p>
    Les biais et les cadres sombres ont &eacute;t&eacute; construits en utilisant
    la recette standard. Pour les flat-fields, trois types ont &eacute;t&eacute;
    g&eacute;n&eacute;r&eacute;s, par ordre croissant de pr&eacute;f&eacute;rence : d&ocirc;me, cr&eacute;puscule et
    ciel nocturne. Le dernier type sont construits en utilisant les
    images scientifiques elles-m&ecirc;mes. Tandis que les tests ont montr&eacute;
    que les objets plats sont sup&eacute;rieurs en termes de plan&eacute;it&eacute; et de
    profondeur photom&eacute;triques, il n'y a pas toujours nombre
    suffisant d'images prises au cours d'une analyse, auquel cas des
    appartements cr&eacute;pusculaires ou en d&ocirc;me ont &eacute;t&eacute; utilis&eacute;s.
</p>
<p>Le masquage de l'obre du autoguideur a &eacute;t&eacute; appliqu&eacute;.</p>
<p>
    Les d&eacute;tecteurs Suprime-Cam ont &eacute;t&eacute; chang&eacute;s en 2008, avec un
    changement correspondant dans la version SDFRED.
</p>
  
<h3 id="astro">&Eacute;talonnage astrom&eacute;trique avec GAIA</h3>
<p>
    L'&eacute;talonnage astrom&eacute;trique utilise GAIA DR2 comme
    r&eacute;f&eacute;rence. Chaque l'image est calibr&eacute;e en deux &eacute;tapes. La
    premi&egrave;re &eacute;tape fonctionne puce par puce et mod&eacute;lise la
    distorsion comme un 2<sup>&egrave;me</sup> ordre polyn&ocirc;me dans les
    positions de puce, x et y. Dans la deuxi&egrave;me &eacute;tape, la distorsion
    est mod&eacute;lis&eacute;e par un polyn&ocirc;me d'ordre 5<sup>&egrave;me</sup> dans r, la
    distance du centre de la mosa&iuml;que, plus un 1<sup>er</sup>
    ajustement en x et y, &eacute;quivalent au matrice CD. Cet ajustement
    de distorsion est effectu&eacute; sur toute la mosa&iuml;que
    simultan&eacute;ment. Faire un ajustement global de cette mani&egrave;re
    r&eacute;duit consid&eacute;rablement le nombre de param&egrave;tres
    n&eacute;cessaires. Seulement (6 param&egrave;tres/puce) &fois; 10 puces + 5 =
    65 param&egrave;tres sont n&eacute;cessaires pour le mosa&iuml;que.
    A l'inverse (20 / puce) &times; 10 puce = 200 param&egrave;tres
    sont n&eacute;cessaires pour un ajustement polynomial du
    3<sup>&egrave;me</sup> d'ordre x et y; &eacute;tant donn&eacute; qu'il y a
    g&eacute;n&eacute;ralement environ 1000 &eacute;toiles GAIA dans un Champ de vision
    Suprime-Cam pour une haute latitude galactique typique domaine,
    ce qui soul&egrave;ve la possibilit&eacute; de sur-ajustement. La m&eacute;diane les
    r&eacute;sidus astrom&eacute;triques sont de 55 mas par rapport &agrave; GAIA. Bien
    que la distorsion est mesur&eacute;e &agrave; l'aide de ce mod&egrave;le radial, il
    est converti en un polyn&ocirc;me en x et y et stock&eacute; &agrave; l'aide du FITS
    Mots-cl&eacute;s PV pour la compatibilit&eacute; avec d'autres logiciels. Ce
    logiciel qui a effectu&eacute; cette t&acirc;che a &eacute;t&eacute; adapt&eacute; du pipeline
    MegaPipe.
</p>

<h3 id="photo">&Eacute;talonnage photom&eacute;trique avec Pan-STARRS</h3>
<p>
    L'&eacute;talonnage photom&eacute;trique est bas&eacute; sur le Pan-STARRS DR1
    catalogue photom&eacute;trique. La photom&eacute;trie grizy Pan-STARRS est
    converties en bandes passantes Suprime Cam. La transmission
    int&eacute;grale fonctions de chaque filtre Suprime-Cam est calcul&eacute;e, y
    compris la filtre lui-m&ecirc;me, l'efficacit&eacute; quantique des d&eacute;tecteurs
    transmission de la cam&eacute;ra, la r&eacute;flectivit&eacute; du primaire miroir et
    la transmission de l'atmosph&egrave;re &agrave; une valeur nominale masse d'air
    de 1,25. Les fonctions de transmission des filtres PS1 sont tir&eacute;s
    de
    <a href="https://ui.adsabs.harvard.edu/abs/2012ApJ...750...99T/abstract"
       rel="external">Tonry et al. (2012).</a> Norme stellaire
    spectres de <a rel="external"
href="https://ui.adsabs.harvard.edu/abs/1998PASP..110..863P/abstract">Pickles
      (1998)</a> et <a rel="external"
href="https://www.stsci.edu/hst/instrumentation/reference-data-for-calibration-and-tools/astronomical-catalogs/calspec">CALSPEC</a>
    sont multipli&eacute;es par les fonctions de transmission du filtre pour
    produire une photom&eacute;trie synth&eacute;tique. Cette photom&eacute;trie synth&eacute;tique est
    utilis&eacute; pour calculer une conversion polynomiale entre
    Syst&egrave;mes photom&eacute;triques Pan-STARRS et Suprime-Cam.
</p>
<p>
    C'est relativement simple pour le Suprime-Cam grizy
    bandes passantes ; les bandes sont assez similaires et par cons&eacute;quent la couleur
    les termes sont assez petits. Pour les bandes BVRI, les termes de couleur sont
    plus grand et g&eacute;n&eacute;ralement valide uniquement sur une gamme &eacute;troite de couleurs.
</p>
<p>
    Les filtres &agrave; bande &eacute;troite et interm&eacute;diaire peuvent &eacute;galement
    &ecirc;tre calibr&eacute;s de cette mani&egrave;re, bien qu'&agrave; nouveau la
    transformation ne soit valable que sur une petite gamme de
    couleurs. Pour un certain nombre de filtres, le les fonctions de
    transmission ne sont plus disponibles. Ces donn&eacute;es n'&eacute;taient pas
    trait&eacute;.
</p>
<p>
    Le d&eacute;tail des courbes de filtrage et de transformation est donn&eacute; sur
    la <a href="filt.html">page de filtrage de Suprime-Cam.</a> 
</p>
<p>  
    Pour chaque image, la photom&eacute;trie Pan-STARRS pour cette partie du ciel est
    transform&eacute; en passe-bande de cette image et utilis&eacute; comme champ
    normes. Cela permet aux images prises dans toutes les conditions d'&ecirc;tre
    calibr&eacute; photom&eacute;triquement. Le calibrage photom&eacute;trique effectu&eacute; en
    cette mani&egrave;re est g&eacute;n&eacute;ralement bonne &agrave; environ 10-20 mmag par rapport &agrave;
    Pan-STARRS, qui est lui-m&ecirc;me calibr&eacute; &agrave; un peu mieux que 10
    mmag. 
</p>
<p>
    L'&eacute;talonnage photom&eacute;trique se d&eacute;roule en deux &eacute;tapes. En premier,
    un calibrage photom&eacute;trique relatif est appliqu&eacute; pour corriger la
    mosa&iuml;que &agrave; un seul point z&eacute;ro. Cette correction est calcul&eacute;e pour
    chaque cycle d'observation et appliqu&eacute; &agrave; chaque image de cette
    cycle.  La deuxi&egrave;me &eacute;tape calcule. le point z&eacute;ro global pour toute
    la mosa&iuml;que en tenant compte de la transmission atmosph&eacute;rique
    variable.
</p>

<h3 id="stacking">Empilage avec SWarp</h3>
<p>
    Pour chaque cycle d'observation, un masque est g&eacute;n&eacute;r&eacute; pour &eacute;liminer les morts/chauds
    pixels et mauvaises colonnes. Le masque ne change que l&eacute;g&egrave;rement entre
    fonctionne, mais change &eacute;videmment de mani&egrave;re significative au point o&ugrave; le
    Les d&eacute;tecteurs Suprime-Cam ont &eacute;t&eacute; remplac&eacute;s en 2008.
    <a href="https://www.astromatic.net/software/weightwatcher/" rel="external">WeightWatcher</a> est
    courir sur les images pour masquer les rayons cosmiques. 
</p>

<p>
    Les images Suprime-Cam sont empil&eacute;es sur une s&eacute;rie de tuiles
    couvrant Le ciel. Les tuiles sont le m&ecirc;me ensemble utilis&eacute; par
    MegaPipe 2.0. le les tuiles mesurent 10000�10000 pixels et sont
    espac&eacute;es de 0,5 degr&eacute;s en RA (avec le facteur cos(Dec) appropri&eacute;)
    et 0,5 degr&eacute;s en d&eacute;cembre. Un exemple d'une partie du sch&eacute;ma de
    carrelage superpos&eacute; sur l'empreinte de certaines images
    Suprime-Cam est montr&eacute; dans la figure au dessous de. L'avantage
    d'un tel sch&eacute;ma est &eacute;vident dans la moiti&eacute; sup&eacute;rieure de cette
    figure o&ugrave; plusieurs images Suprime-Cam se chevauchent
    partiellement les uns des autres, mais il n'y a pas d'empreinte
    claire sur laquelle s'empiler.
</p>

<img src="/static/images/scla/supobjgrid.gif" alt="Exemple de stacking">
<p>
    Dans la mesure du possible, les images Suprime-Cam sont &eacute;galement
    empil&eacute;es en groupes correspondant au mod&egrave;le d'observation
    d'origine. UNE l'algorithme d'amis d'amis est ex&eacute;cut&eacute; sur le
    catalogue d'images, regroupant ensemble des images dont les
    centres sont &agrave; moins de 0,1 degr&eacute; l'un de l'autre. Si le groupe
    contient 4 images ou plus dans la bande, une pile est construite
    sur cette empreinte. Si plusieurs bandes sont disponibles dans un
    groupe, toutes les bandes seront empil&eacute;es sur la m&ecirc;me
    empreinte. Au fond moiti&eacute; de la figure 2, on peut voir deux
    concentrations &eacute;videntes de Images Suprime-Cam, o&ugrave; le sch&eacute;ma
    d'observation &eacute;tait contraint &agrave; des tremblements relativement
    faibles. Des piles s&eacute;par&eacute;es sont faites pour chacun des ces deux
    groupes.
</p>
<p>
    L'empilement se fait &agrave; l'aide de <a rel="external"
    href="https://www.astromatic.net/software/swarp/">SWarp</a>. Les
    images sont r&eacute;&eacute;chantillonn&eacute;es selon l'&eacute;talonnage astrom&eacute;trique,
    mis &agrave; l'&eacute;chelle selon l'&eacute;talonnage photom&eacute;trique. Les images sont
    combin&eacute;es &agrave; l'aide d'un moyenne &eacute;cr&ecirc;t&eacute;e. Les piles r&eacute;sultantes et
    les catalogues correspondants sont mis &agrave; disposition en
    t&eacute;l&eacute;chargement. Les images Suprime-Cam individuelles compl&egrave;tement
    calibr&eacute;es sont &eacute;galement mises &agrave; disposition pour des astronomes
    pour ceux int&eacute;ress&eacute;s par l'astronomie dans le domaine temporel
    comme les sources variables et objets du syst&egrave;me solaire.
</p>
