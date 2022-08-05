---
layout: cadc
lang: fr
permalink: /fr/scla/docs/filt.html
title: Le système de filtres Suprime-Cam
altLangPage: /en/scla/docs/filt.html
dateModified: 2022-08-05
signing: layout.signing
nav: scla

breadcrumbs:
    - link: /fr/scla/
      title: SCLA
---

<p>
    Cette page d&eacute;crit les filtres Suprime-Cam et les transformations entre le syst&egrave;me photom&eacute;trique Pan-STARRS et Suprime-Cam. 
</p>
<p>
    Les transformations ont &eacute;t&eacute; effectu&eacute;es en utilisant
    (g-i)<sub>Pan-STARRS</sub> comme la couleur de r&eacute;f&eacute;rence. Le
    filtre Pan-STARRS le plus proche du centre La longueur d'onde du
    filtre a &eacute;t&eacute; utilis&eacute;e comme magnitude de r&eacute;f&eacute;rence. La
    transformation &eacute;tait exprim&eacute;e sous la forme d'un polyn&ocirc;me
    d'ordre 3<sup>e</sup> avec x &eacute;tant g-i, et y &eacute;tant la diff&eacute;rence
    entre le Magnitude Suprime-Cam et magnitude de r&eacute;f&eacute;rence
    Pan-STARRS
</p>
<p>
    Les liens de la Fonctions de Transmission pointent vers les versions textuelles
    de chaque filtre.  Ceux-ci repr&eacute;sentent la r&eacute;ponse compl&egrave;te du
    syst&egrave;me, y compris l'atmosph&egrave;re, le miroir primaire, l'optique
    Suprime-Cam, le filtre lui-m&ecirc;me et les CCD.
</p>

<table class="table">
    <thead>
        <tr><th colspan="2">Filtres Johnson-Cousins</th></tr>
    </thead>
    <tdata>
        <tr>
            <td>W-J-B</td>
            <td><a href="/static/files/scla/BSuprime.fil">Fonction de Transmission</a></td>
        </tr>
        <tr><td>W-J-V</td><td><a href="/static/files/scla/VSuprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>W-C-RC</td><td><a href="/static/files/scla/RSuprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>W-C-IC</td><td><a href="/static/files/scla/ISuprime.fil">Fonction de Transmission</a></td></tr>
    </tdata>
</table>

<table class="table">
    <thead>
        <tr><th colspan="2">Filtres SDSS</th></tr>
    </thead>
    <tdata>
        <tr><td>W-S-G+</td><td><a href="/static/files/scla/gSuprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>W-S-R+</td><td><a href="/static/files/scla/rSuprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>W-S-I+</td><td><a href="/static/files/scla/iSuprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>W-S-Z+</td><td><a href="/static/files/scla/zSuprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>W-A-Y</td><td><a href="/static/files/scla/YSuprime.fil">Fonction de Transmission</a></td></tr>
    </tdata>
</table>

<table class="table">
    <thead>
        <tr><th colspan="2">Autre filtres</th></tr>
    </thead>
    <tdata>
        <tr><td>W-J-VR</td><td><a href="/static/files/scla/VRSuprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>W-A-Y</td><td><a href="/static/files/scla/YSuprime.fil">Fonction de Transmission</a></td></tr>
    </tdata>
</table>

<table class="table">
    <thead>
        <tr><th colspan="2">Filtres de bande interm&eacute;diaire</th></tr>
    </thead>
    <tdata>
        <tr><td>I-A-L427</td><td><a href="/static/files/scla/SupIA427.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L445</td><td><a href="/static/files/scla/SupIA445.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L464</td><td><a href="/static/files/scla/SupIA464.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L484</td><td><a href="/static/files/scla/SupIA484.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L505</td><td><a href="/static/files/scla/SupIA505.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L527</td><td><a href="/static/files/scla/SupIA527.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L550</td><td><a href="/static/files/scla/SupIA550.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L574</td><td><a href="/static/files/scla/SupIA574.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L598</td><td><a href="/static/files/scla/SupIA598.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L624</td><td><a href="/static/files/scla/SupIA624.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L651</td><td><a href="/static/files/scla/SupIA651.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L679</td><td><a href="/static/files/scla/SupIA679.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L709</td><td><a href="/static/files/scla/SupIA709.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L738</td><td><a href="/static/files/scla/SupIA738.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L767</td><td><a href="/static/files/scla/SupIA767.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L797</td><td><a href="/static/files/scla/SupIA797.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L827</td><td><a href="/static/files/scla/SupIA827.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L856</td><td><a href="/static/files/scla/SupIA856.fil">Fonction de Transmission</a></td></tr>
        <tr><td>I-A-L907</td><td><a href="/static/files/scla/SupIA907.fil">Fonction de Transmission</a></td></tr>
    </tdata>
</table>

<table class="table">
    <thead>
        <tr><th colspan="2">Filtres narrowband</th></tr>
    </thead>
    <tdata>
        <tr><td>N-A-L656</td><td><a href="/static/files/scla/NA656Suprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>N-B-L711</td><td><a href="/static/files/scla/NB711Suprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>N-B-L816</td><td><a href="/static/files/scla/NB816Suprime.fil">Fonction de Transmission</a></td></tr>
        <tr><td>N-B-L921</td><td><a href="/static/files/scla/NB921Suprime.fil">Fonction de Transmission</a></td></tr>
    </tdata>
</table>

<p>  
    Dans les graphiques ci-dessous, le panneau de gauche montre les
    functions de transmission, avec le filtre Pan-STARRS
    correspondant. Le courbes noir et rouge les montrent les filtres
    Pan-STARRS g et i. La courbe verte montre la filtre de r&eacute;f&eacute;rence. Le
    panneau de droite montre la transformation lui-m&ecirc;me. Les points
    verts et bleus montrent les  &eacute;toiles
    <a href="http://adsabs.harvard.edu/abs/1998PASP..110..863P" rel="external">Pickles</a> et
    <a href="https://www.stsci.edu/hst/instrumentation/reference-data-for-calibration-and-tools/astronomical-catalogs/calspec" rel="external">CALSPEC</a>.
    La courbe magenta montre l'ajustement, &eacute;galement indiqu&eacute; dans forme
    polynomiale. Les lignes verticales indiquent la gamme de couleurs
    o&ugrave; cette transformation est valide.
</p>

<h2>Filtres Johnson-Cousins</h2>
<h3>W-J-B</h3><a href="/static/files/scla/BSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.BSuprime.gPS.both.gif">
<h3>W-J-V</h3><a href="/static/files/scla/VSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.VSuprime.gPS.both.gif">
<h3>W-C-RC</h3><a href="/static/files/scla/RSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.RSuprime.rPS.both.gif">
<h3>W-C-IC</h3><a href="/static/files/scla/ISuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.ISuprime.iPS.both.gif">

<h2>Filtres SDSS</h2>
<h3>W-S-G+</h3><a href="/static/files/scla/gSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.gSuprime.gPS.both.gif">
<h3>W-S-R+</h3><a href="/static/files/scla/rSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.rSuprime.rPS.both.gif">
<h3>W-S-I+</h3><a href="/static/files/scla/iSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.iSuprime.iPS.both.gif">
<h3>W-S-Z+</h3><a href="/static/files/scla/zSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.zSuprime.zPS.both.gif">

<h2>Autre filtres</h2>
<h3>W-J-VR</h3><a href="/static/files/scla/VRSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.VRSuprime.rPS.both.gif">
<h3>W-A-Y</h3><a href="/static/files/scla/YSuprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.YSuprime.yPS.both.gif">

<h2>Filtres de bande interm&eacute;diaire</h2>
<h3>I-A-L427</h3><a href="/static/files/scla/SupIA427.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA427.gPS.both.gif">
<h3>I-A-L445</h3><a href="/static/files/scla/SupIA445.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA445.gPS.both.gif">
<h3>I-A-L464</h3><a href="/static/files/scla/SupIA464.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA464.gPS.both.gif">
<h3>I-A-L484</h3><a href="/static/files/scla/SupIA484.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA484.gPS.both.gif">
<h3>I-A-L505</h3><a href="/static/files/scla/SupIA505.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA505.gPS.both.gif">
<h3>I-A-L527</h3><a href="/static/files/scla/SupIA527.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA527.gPS.both.gif">
<h3>I-A-L550</h3><a href="/static/files/scla/SupIA550.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA550.rPS.both.gif">
<h3>I-A-L574</h3><a href="/static/files/scla/SupIA574.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA574.rPS.both.gif">
<h3>I-A-L598</h3><a href="/static/files/scla/SupIA598.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA598.rPS.both.gif">
<h3>I-A-L624</h3><a href="/static/files/scla/SupIA624.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA624.rPS.both.gif">
<h3>I-A-L651</h3><a href="/static/files/scla/SupIA651.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA651.rPS.both.gif">
<h3>I-A-L679</h3><a href="/static/files/scla/SupIA679.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA679.rPS.both.gif">
<h3>I-A-L709</h3><a href="/static/files/scla/SupIA709.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA709.iPS.both.gif">
<h3>I-A-L738</h3><a href="/static/files/scla/SupIA738.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA738.iPS.both.gif">
<h3>I-A-L767</h3><a href="/static/files/scla/SupIA767.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA767.iPS.both.gif">
<h3>I-A-L797</h3><a href="/static/files/scla/SupIA797.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA797.iPS.both.gif">
<h3>I-A-L827</h3><a href="/static/files/scla/SupIA827.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA827.zPS.both.gif">
<h3>I-A-L856</h3><a href="/static/files/scla/SupIA856.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA856.zPS.both.gif">
<h3>I-A-L907</h3><a href="/static/files/scla/SupIA907.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.SupIA907.zPS.both.gif">

<h2>Filtres narrowband</h2>
<h3>N-A-L656</h3><a href="/static/files/scla/NA656Suprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.NA656Suprime.rPS.both.gif">
<h3>N-B-L711</h3><a href="/static/files/scla/NB711Suprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.NB711Suprime.iPS.both.gif">
<h3>N-B-L816</h3><a href="/static/files/scla/NB816Suprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.NB816Suprime.iPS.both.gif">
<h3>N-B-L921</h3><a href="/static/files/scla/NB921Suprime.fil">Fonction de Transmission</a><img src="/static/images/scla/gPS.iPS.NB921Suprime.zPS.both.gif">
