---
layout: cadc
lang: fr
permalink: /fr/wirwolf/docs/photo.html
title: Vérifications du photometrie
altLangPage: /en/wirwolf/docs/photo.html
dateModified: 2021-12-09
signing: layout.signing

nav: wirwolf
breadcrumbs:
    - link: /fr/wirwolf/
      title: WIRwolf
---
<p>
    Des contr&ocirc;les sont effectu&eacute;s sur la photom&eacute;trie de s'assurer que la
    photom&eacute;trie dans les catalogues g&eacute;n&eacute;r&eacute;s &agrave; partir des images empil&eacute;es
    est en accord avec 2MASS et de veiller &agrave; ce que la photom&eacute;trie est
    auto-coh&eacute;rent entre les images empil&eacute;es de WIRwolf.
</p>
<p>
    Les catalogues de chaque image empil&eacute;e ont &eacute;t&eacute; compar&eacute;es &agrave;
    2MASS. Comme indiqu&eacute; pr&eacute;c&eacute;demment, que la moindre 2MASS sont
    insatur&eacute;s en images WIRCAM, les comparaisons sont forc&eacute;ment
    bruyant, avec une dispersion typique de 0.2 mags. Le graphique
    ci-dessous montre une comparaison mieux que la moyenne.
</p>
<img src="/static/images/wirwolf/J2MASS.GW001.047.250+12.957.J.mag.gif" alt="Exemple de comparaison entre 2MASS et WIRwolf"/>
<p>
    Toutefois, les d&eacute;calages moyennes entre 2MASS et WIRwolf piles
    sont g&eacute;n&eacute;ralement bon &agrave; environ 0.02 mags tel que demontre le
    graphique ci-dessous.
</p>
<img src="/static/images/wirwolf/wircat2mass.gif" alt="Diff&eacute;rences de point z&eacute;ro photom&eacute;triques entre WIRwolf et 2MASS"/>
<p>
    Plusieurs images empil&eacute;s WIRwolf chevauchent d'autre images
    avoisinantes. Les catalogues de ces images ont &eacute;t&eacute; compar&eacute;es et
    les r&eacute;sidus photom&eacute;triques mesur&eacute;es pour d&eacute;terminer les
    diff&eacute;rences de point z&eacute;ro. Les r&eacute;sultats sont pr&eacute;sent&eacute;s
    ci-dessous. Notez que tr&egrave;s peu des images H-bande chevauchent
    d'autres images H. Les r&eacute;sultats de H-bande donc ne sont pas
    trac&eacute;es. L'erreur typique de point z&eacute;ro semble &ecirc;tre d'environ 2%,
    en accord avec les r&eacute;sidus par rapport &agrave; 2MASS.
</p>
<img src="/static/images/wirwolf/catfight.gif" alt="Diff&eacute;rences de point z&eacute;ro photom&eacute;triques entre des images empil&eacute;s WIRwolf adjacentes "/>
