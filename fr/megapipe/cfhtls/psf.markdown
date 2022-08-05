---
layout: cadc
lang: fr
permalink: /fr/megapipe/cfhtls/psf.html
title: Fonctions d'étalement du point
altLangPage: /en/megapipe/cfhtls/psf.html
dateModified: 2021-12-09
signing: layout.signing

nav: megapipe
breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/cfhtls/index.html
      title: CFHTLS
---
<p>
    Cette page d&eacute;crit le service de la CFHTLS relatif aux fonctions
    d'&eacute;talement des points (FEP), comment on peut y recourir et la
    mani&egrave;re dont les FEP ont &eacute;t&eacute; &eacute;labor&eacute;es. Il existe des FEP pour le
    champ profond et le champ large. Deux jeux de FEP ont &eacute;t&eacute;
    produits, le premier avec DAOphot et le second avec PSFex.
</p>
<h2>Acc&egrave;s au service</h2>
<p>
    Le service FEP fournit des images timbre-poste avec &eacute;talement des
    points d'un lieu pr&eacute;cis, sur une image donn&eacute;e de la
    CFHTLS. Jusqu'&agrave; pr&eacute;sent, ces images ont surtout servi &agrave; mod&eacute;liser
    la luminosit&eacute; superficielle de la galaxie en mode diff&eacute;r&eacute;. Les URL
    ont la forme que voici:
</p>
<pre>
  https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=[image.fits]&amp;x=[x-pixel]&amp;y=[y-pixel]
</pre>
<p>
    Ainsi, pour obtenir la FEP de l'image dans la bande g du champ W1-1-1 aux coordonn&eacute;es x=12000 et y=8000, on utiliserait l'URL:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fits&amp;x=12000&amp;y=8000">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fits&amp;x=12000&amp;y=8000</a>
</p>
<p>
    Rappelez-vous que la plupart des navigateurs transforment le
    caract&egrave;re (+) en espace (&nbsp;). Le code &agrave; employer pour le caract&egrave;re "plus"
    est "%2B". Par exemple, l'URL du champ W1+1+1 sera:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1%2B1%2B1.G.fits&amp;x=12000&amp;y=8000">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1%2B1%2B1.G.fits&amp;x=12000&amp;y=8000</a>
</p>
<p>
    Habituellement, on pr&eacute;f&egrave;re recourir &agrave; wget ou &agrave; curl plut&ocirc;t qu'&agrave; un navigateur. En voici un exemple:
</p>
<pre>
  wget -O W1-1-1.G.12000.8000.fits 'https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fitss&amp;x=12000&amp;y=8000'
</pre>
<p>
    Le service FEP fournit une image FEP produite avec DAOphot par
    d&eacute;faut. Pour obtenir une image r&eacute;alis&eacute;e avec psfex, on ajoutera
    "&amp;psfex=true" &agrave; l'URL. Exemple:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fits&amp;x=12000&amp;y=8000&amp;psfex=true">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fits&amp;x=12000&amp;y=8000&amp;psfex=true</a>
</p>
<p>
    Les FEP sont restitu&eacute;es sous forme d'images FITS de 31x31 pixels,
    la FEP &eacute;tant appliqu&eacute;e au centre du pixel (16,16).
</p>
<p>
    Il est possible de t&eacute;l&eacute;charger directement le fichier .psf produit par DAOphot en employant un URL semblable &agrave; celui-ci:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W1-1-1.G.psf">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W1-1-1.G.psf</a>
</p>
<p>
    ou de t&eacute;l&eacute;charger le fichier .psf produit par PSFex en utilisant un URL comme celui-ci:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/psfex.W1-1-1.G.psf">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/psfex.W1-1-1.G.psf</a>
</p>
<h2>G&eacute;n&eacute;ration des FEP</h2>
<h3>DAOphot:</h3>
<p>
    Les FEP sont produites avec la version autonome de DAOphot. On se
    sert de SExtractor et de DAOphot pour choisir les &eacute;toiles FEP,
    puis on applique SExtractor &agrave; l'image. Pour identifier les
    &eacute;toiles, on compare la magnitude obtenue avec l'ouverture de
    2 secondes d'arc &agrave; celle obtenue avec l'ouverture de 3 secondes
    d'arc. Avec ce param&egrave;tre, les &eacute;toiles forment un lieu bien
    d&eacute;fini. Les &eacute;toiles pr&egrave;s d'un objet lumineux sont &eacute;cart&eacute;es. Par
    "pr&egrave;s", on entend &agrave; moins de 40 pixels et par "lumineux",
    quatre magnitudes de plus que la luminosit&eacute; de l'&eacute;toile
    concern&eacute;e. Une deuxi&egrave;me liste d'&eacute;toiles FEP est dress&eacute;e avec les
    routines find et pick. Seules les &eacute;toiles pr&eacute;sentes &agrave; la fois dans
    la liste de SExtractor et celle de DAOphot sont retenues. On
    recourt alors &agrave; la routine psf de DAOphot pour produire la FEP.
</p>
<p>
    On &eacute;tablit le gain et le bruit de sortie &agrave; partir du gain et du
    bruit efficaces. Le rayon d'ajustement correspond &agrave;
    1.5 fois la largeur totale &agrave; mi-hauteur de l'image. Le rayon de la
    FEP est fix&eacute; &agrave; 15. On recourt &agrave; un mod&egrave;le gaussien &agrave; deux
    variables assorti d'une table de corrections. La FEP peut fluctuer
    dans le champ avec des &eacute;carts de deuxi&egrave;me ordre.
</p>
<p>
    On effectue deux passages. Apr&egrave;s le premier passage, on examine
    l'image pour trouver les sources secondaires situ&eacute;es sur les c&ocirc;t&eacute;s
    des &eacute;toiles FEP. Ces &eacute;toiles FEP sont retranch&eacute;es de la liste et
    on recalcule la FEP avec un deuxi&egrave;me passage.
</p>
<p>
    On produit des images diagnostiques uniquement compos&eacute;es d'images
    timbre-poste de l'&eacute;toile FEP, qu'on examine ensuite &agrave; l'oeil. Ces
    images comportent trois panneaux: l'&eacute;toile FEP originale et les
    r&eacute;sidus venant du premier et du deuxi&egrave;me passage. Chaque image de la
    CFHTLS donne deux images diagnostiques. Sur la premi&egrave;re, les images
    timbre-poste de l'&eacute;toile FEP sont dispos&eacute;es d'apr&egrave;s leur magnitude,
    soit de la plus grande &agrave; la plus faible luminosit&eacute;; sur la seconde,
    les &eacute;toiles FEP sont organis&eacute;es d'apr&egrave;s leur emplacement
    approximatif sur l'image originale de la CFHTLS. On examine les
    images diagnostiques &agrave; l'oeil pour voir si les FEP r&eacute;siduelles ne
    pr&eacute;sentent pas un &eacute;cart syst&eacute;matique par rapport &agrave; la magnitude et &agrave;
    l'emplacement.
</p>
<p>
    PSFex compte beaucoup moins de param&egrave;tres &agrave; ajuster que
    DAOphot. La version 2.5.0 de SExtractor a &eacute;t&eacute; appliqu&eacute;e aux images
    pour permettre l'extraction de vignettes autour de chaque
    source. La version 3.9.1 de PSFex est ensuite appliqu&eacute;e au
    catalogue du LDAC (Leiden Data Analysis Center). La FEP varie avec
    les coordonn&eacute;es x et y, comme un polyn&ocirc;me de troisi&egrave;me degr&eacute;. Il
    n'y a pas &eacute;chantillonnage excessif de la FEP. On trouvera le
    <a href="/static/files/megapipe/cfhtls_psf.psfc">fichier de configuration de PSFex</a>. Finalement, on examine les
    trac&eacute;s de diagnostic de la largeur totale &agrave; mi-hauteur et de
    l'ellipticit&eacute; ainsi que l'image r&eacute;siduelle pour rep&eacute;rer les
    irr&eacute;gularit&eacute;s.
</p>
