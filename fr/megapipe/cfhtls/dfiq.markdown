---
layout: cadc
lang: fr
permalink: /fr/megapipe/cfhtls/dfiq.html
title: Champs Profonds (meilleur seeing)
altLangPage: /en/megapipe/cfhtls/dfiq.html
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
    Cette page contient des liens vers la version meilleure seeing
    des donn&eacute;es Champs Profonds CFHTLS. Elle inclue seulement les
    images d'entr&eacute'e avec la meilleure qualit&eacute; d'image
    (seeing).  La qualit&eacute; d'image de sortie est de 0.65
    arcsecondes dans tous les bandes sauf le U, o&ugrave; elle est 0.8
    arcsecondes.  Les raisons pour laquelle les images ont &eacute;t&eacute; inclus
    dans les images meilleure seeing sont discut&eacute;s sur la page
    <a href="/fr/megapipe/cfhtls/bs.html">s&eacute;lection des images de meilleur seeing</a>.
    Il y a un <a href="/fr/megapipe/cfhtls/df.html">version complet</a> des donn&eacute;es
    qui est plus profond mais avec une qualit&eacute; d'image inf&eacute;rieure.
</p>
<p>
    Une description d&eacute;taill&eacute;e des donn&eacute;es suit les tables de liens. Il y
    a une liste de <a href="/fr/megapipe/cfhtls/input.html">des
      images d'entr&eacute;e et des magnitudes limites</a>. Comme une alternative aux liens directs, utiliser
    les cases &agrave; cocher pour s&eacute;lectionner plusieurs ensembles de
    donn&eacute;es, puis cliquez sur le bouton "T&eacute;l&eacute;charger" pour utiliser
    DownloadManager du CCDA.
</p>
<form id="dtable" name="dtable" action="/downloadManager/download" method="post">
  <fieldset>
    <legend>T&eacute;l&eacute;chargez images et catalogues</legend>
  <div class="form-group">
    <input value="Download" name="totalButton" onclick="return openNewWindow(this.form)" class="btn btn-default"  type="submit">
    <input value="MarkAll" onclick="checkall(true)" type="button" class="btn btn-default" >
    <input value="UnMarkAll" onclick="checkall(false)" type="button" class="btn btn-default" >
    <input type="hidden" name="box">
    <input type="hidden" name="fileId">
    <input type="hidden" name="fileIdhold">
  </div>
<h2>D1 IQ</h2>
<p>02:26:00.00   -04:30:00.0 (VIRMOS F02, XMM-LSS)</p>
    <table class="table small table-bordered">
    <tr>
      <th scope="col">
        <input type="checkbox" id="boxallD1"    name="box" value="D1" onclick="check(/D1.*/,this.checked)">
	<label                for="boxallD1">all D1</label>
      </th>
      <th scope="col">
	<input type="checkbox" id="boximD1"     name="box" value="D1.IQ" onclick="check(/D1.IQ..$/,this.checked)">
	<label                for="boximD1">D1 Images</label>
      </th>
      <th scope="col">
	<input type="checkbox" id="boxweightD1" name="box" value="D1.IQ.weight" onclick="check(/D1.IQ..*weight/,this.checked)">
	<label                for="boxweightD1">Image des ponderances</label>
      </th>
      <th scope="col">
        <input type="checkbox" id="boxcatD1"    name="box" value="D1.IQ.cat" onclick="check(/D1.IQ..*cat/,this.checked)">
	<label                for="boxcatD1">D1 Catalogues</label>
      </th>
    </tr>
    <tr>
      <td colspan="4">
	Catalogue multi-bande
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D1.IQ.cat">
	<input type="checkbox" id="boxmbD1"  name="box"         value="D1.IQ.cat" onclick="check(/D1.IQ.cat/,this.checked)">
	<label                for="boxmbD1">D1.IQ.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.cat">D1.IQ.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD1U" name="box" type="checkbox" value="D1U.*" onclick="check(/D1.IQ.U/,this.checked)"><label for="boxallD1U">all D1 U</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D1.IQ.U">
	<input type="checkbox" id="boximD1U" name="box"         value="D1.IQ.U" onclick="check(/D1.IQ.U$/,this.checked)">
	<label                for="boximD1U">D1.IQ.U.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.U.fits">D1.IQ.U.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D1.IQ.U.weight">
	<input type="checkbox" id="boxweightD1U" name="box"         value="D1.IQ.U.weight" onclick="check(/D1.IQ.U.weight/,this.checked)">
	<label                for="boxweightD1U">D1.IQ.U.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.U.weight.fits">D1.IQ.U.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D1.IQ.U.cat">
	<input type="checkbox" id="boxcatD1U" name="box"         value="D1.IQ.U.cat" onclick="check(/D1.IQ.U.cat/,this.checked)">
	<label                for="boxcatD1U">D1.IQ.U.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.U.cat">D1.IQ.U.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD1G" name="box" type="checkbox" value="D1G.*" onclick="check(/D1.IQ.G/,this.checked)"><label for="boxallD1G">all D1 G</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D1.IQ.G">
	<input type="checkbox" id="boximD1G" name="box"         value="D1.IQ.G" onclick="check(/D1.IQ.G$/,this.checked)">
	<label                for="boximD1G">D1.IQ.G.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.G.fits">D1.IQ.G.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D1.IQ.G.weight">
	<input type="checkbox" id="boxweightD1G" name="box"         value="D1.IQ.G.weight" onclick="check(/D1.IQ.G.weight/,this.checked)">
	<label                for="boxweightD1G">D1.IQ.G.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.G.weight.fits">D1.IQ.G.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D1.IQ.G.cat">
	<input type="checkbox" id="boxcatD1G" name="box"         value="D1.IQ.G.cat" onclick="check(/D1.IQ.G.cat/,this.checked)">
	<label                for="boxcatD1G">D1.IQ.G.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.G.cat">D1.IQ.G.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD1R" name="box" type="checkbox" value="D1R.*" onclick="check(/D1.IQ.R/,this.checked)"><label for="boxallD1R">all D1 R</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D1.IQ.R">
	<input type="checkbox" id="boximD1R" name="box"         value="D1.IQ.R" onclick="check(/D1.IQ.R$/,this.checked)">
	<label                for="boximD1R">D1.IQ.R.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.R.fits">D1.IQ.R.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D1.IQ.R.weight">
	<input type="checkbox" id="boxweightD1R" name="box"         value="D1.IQ.R.weight" onclick="check(/D1.IQ.R.weight/,this.checked)">
	<label                for="boxweightD1R">D1.IQ.R.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.R.weight.fits">D1.IQ.R.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D1.IQ.R.cat">
	<input type="checkbox" id="boxcatD1R" name="box"         value="D1.IQ.R.cat" onclick="check(/D1.IQ.R.cat/,this.checked)">
	<label                for="boxcatD1R">D1.IQ.R.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.R.cat">D1.IQ.R.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD1I" name="box" type="checkbox" value="D1I.*" onclick="check(/D1.IQ.I/,this.checked)"><label for="boxallD1I">all D1 I</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D1.IQ.I">
	<input type="checkbox" id="boximD1I" name="box"         value="D1.IQ.I" onclick="check(/D1.IQ.I$/,this.checked)">
	<label                for="boximD1I">D1.IQ.I.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.I.fits">D1.IQ.I.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D1.IQ.I.weight">
	<input type="checkbox" id="boxweightD1I" name="box"         value="D1.IQ.I.weight" onclick="check(/D1.IQ.I.weight/,this.checked)">
	<label                for="boxweightD1I">D1.IQ.I.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.I.weight.fits">D1.IQ.I.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D1.IQ.I.cat">
	<input type="checkbox" id="boxcatD1I" name="box"         value="D1.IQ.I.cat" onclick="check(/D1.IQ.I.cat/,this.checked)">
	<label                for="boxcatD1I">D1.IQ.I.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.I.cat">D1.IQ.I.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD1Z" name="box" type="checkbox" value="D1Z.*" onclick="check(/D1.IQ.Z/,this.checked)"><label for="boxallD1Z">all D1 Z</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D1.IQ.Z">
	<input type="checkbox" id="boximD1Z" name="box"         value="D1.IQ.Z" onclick="check(/D1.IQ.Z$/,this.checked)">
	<label                for="boximD1Z">D1.IQ.Z.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.Z.fits">D1.IQ.Z.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D1.IQ.Z.weight">
	<input type="checkbox" id="boxweightD1Z" name="box"         value="D1.IQ.Z.weight" onclick="check(/D1.IQ.Z.weight/,this.checked)">
	<label                for="boxweightD1Z">D1.IQ.Z.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.Z.weight.fits">D1.IQ.Z.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D1.IQ.Z.cat">
	<input type="checkbox" id="boxcatD1Z" name="box"         value="D1.IQ.Z.cat" onclick="check(/D1.IQ.Z.cat/,this.checked)">
	<label                for="boxcatD1Z">D1.IQ.Z.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D1.IQ.Z.cat">D1.IQ.Z.cat</a>
      </td>
    </tr>
</table>
<h2>D2 IQ</h2>
<p>10:00:20.00   +02:12:21.0 (COSMOS Field)</p>
    <table class="table small table-bordered">
    <tr>
      <th scope="col">
        <input type="checkbox" id="boxallD2"    name="box" value="D2" onclick="check(/D2.*/,this.checked)">
	<label                for="boxallD2">all D2</label>
      </th>
      <th scope="col">
	<input type="checkbox" id="boximD2"     name="box" value="D2.IQ" onclick="check(/D2.IQ..$/,this.checked)">
	<label                for="boximD2">D2 Images</label>
      </th>
      <th scope="col">
	<input type="checkbox" id="boxweightD2" name="box" value="D2.IQ.weight" onclick="check(/D2.IQ..*weight/,this.checked)">
	<label                for="boxweightD2">Image des ponderances</label>
      </th>
      <th scope="col">
        <input type="checkbox" id="boxcatD2"    name="box" value="D2.IQ.cat" onclick="check(/D2.IQ..*cat/,this.checked)">
	<label                for="boxcatD2">D2 Catalogues</label>
      </th>
    </tr>
    <tr>
      <td colspan="4">
	Catalogue multi-bande
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D2.IQ.cat">
	<input type="checkbox" id="boxmbD2"  name="box"         value="D2.IQ.cat" onclick="check(/D2.IQ.cat/,this.checked)">
	<label                for="boxmbD2">D2.IQ.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.cat">D2.IQ.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD2U" name="box" type="checkbox" value="D2U.*" onclick="check(/D2.IQ.U/,this.checked)"><label for="boxallD2U">all D2 U</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D2.IQ.U">
	<input type="checkbox" id="boximD2U" name="box"         value="D2.IQ.U" onclick="check(/D2.IQ.U$/,this.checked)">
	<label                for="boximD2U">D2.IQ.U.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.U.fits">D2.IQ.U.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D2.IQ.U.weight">
	<input type="checkbox" id="boxweightD2U" name="box"         value="D2.IQ.U.weight" onclick="check(/D2.IQ.U.weight/,this.checked)">
	<label                for="boxweightD2U">D2.IQ.U.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.U.weight.fits">D2.IQ.U.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D2.IQ.U.cat">
	<input type="checkbox" id="boxcatD2U" name="box"         value="D2.IQ.U.cat" onclick="check(/D2.IQ.U.cat/,this.checked)">
	<label                for="boxcatD2U">D2.IQ.U.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.U.cat">D2.IQ.U.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD2G" name="box" type="checkbox" value="D2G.*" onclick="check(/D2.IQ.G/,this.checked)"><label for="boxallD2G">all D2 G</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D2.IQ.G">
	<input type="checkbox" id="boximD2G" name="box"         value="D2.IQ.G" onclick="check(/D2.IQ.G$/,this.checked)">
	<label                for="boximD2G">D2.IQ.G.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.G.fits">D2.IQ.G.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D2.IQ.G.weight">
	<input type="checkbox" id="boxweightD2G" name="box"         value="D2.IQ.G.weight" onclick="check(/D2.IQ.G.weight/,this.checked)">
	<label                for="boxweightD2G">D2.IQ.G.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.G.weight.fits">D2.IQ.G.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D2.IQ.G.cat">
	<input type="checkbox" id="boxcatD2G" name="box"         value="D2.IQ.G.cat" onclick="check(/D2.IQ.G.cat/,this.checked)">
	<label                for="boxcatD2G">D2.IQ.G.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.G.cat">D2.IQ.G.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD2R" name="box" type="checkbox" value="D2R.*" onclick="check(/D2.IQ.R/,this.checked)"><label for="boxallD2R">all D2 R</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D2.IQ.R">
	<input type="checkbox" id="boximD2R" name="box"         value="D2.IQ.R" onclick="check(/D2.IQ.R$/,this.checked)">
	<label                for="boximD2R">D2.IQ.R.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.R.fits">D2.IQ.R.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D2.IQ.R.weight">
	<input type="checkbox" id="boxweightD2R" name="box"         value="D2.IQ.R.weight" onclick="check(/D2.IQ.R.weight/,this.checked)">
	<label                for="boxweightD2R">D2.IQ.R.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.R.weight.fits">D2.IQ.R.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D2.IQ.R.cat">
	<input type="checkbox" id="boxcatD2R" name="box"         value="D2.IQ.R.cat" onclick="check(/D2.IQ.R.cat/,this.checked)">
	<label                for="boxcatD2R">D2.IQ.R.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.R.cat">D2.IQ.R.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD2I" name="box" type="checkbox" value="D2I.*" onclick="check(/D2.IQ.I/,this.checked)"><label for="boxallD2I">all D2 I</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D2.IQ.I">
	<input type="checkbox" id="boximD2I" name="box"         value="D2.IQ.I" onclick="check(/D2.IQ.I$/,this.checked)">
	<label                for="boximD2I">D2.IQ.I.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.I.fits">D2.IQ.I.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D2.IQ.I.weight">
	<input type="checkbox" id="boxweightD2I" name="box"         value="D2.IQ.I.weight" onclick="check(/D2.IQ.I.weight/,this.checked)">
	<label                for="boxweightD2I">D2.IQ.I.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.I.weight.fits">D2.IQ.I.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D2.IQ.I.cat">
	<input type="checkbox" id="boxcatD2I" name="box"         value="D2.IQ.I.cat" onclick="check(/D2.IQ.I.cat/,this.checked)">
	<label                for="boxcatD2I">D2.IQ.I.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.I.cat">D2.IQ.I.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD2Z" name="box" type="checkbox" value="D2Z.*" onclick="check(/D2.IQ.Z/,this.checked)"><label for="boxallD2Z">all D2 Z</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D2.IQ.Z">
	<input type="checkbox" id="boximD2Z" name="box"         value="D2.IQ.Z" onclick="check(/D2.IQ.Z$/,this.checked)">
	<label                for="boximD2Z">D2.IQ.Z.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.Z.fits">D2.IQ.Z.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D2.IQ.Z.weight">
	<input type="checkbox" id="boxweightD2Z" name="box"         value="D2.IQ.Z.weight" onclick="check(/D2.IQ.Z.weight/,this.checked)">
	<label                for="boxweightD2Z">D2.IQ.Z.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.Z.weight.fits">D2.IQ.Z.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D2.IQ.Z.cat">
	<input type="checkbox" id="boxcatD2Z" name="box"         value="D2.IQ.Z.cat" onclick="check(/D2.IQ.Z.cat/,this.checked)">
	<label                for="boxcatD2Z">D2.IQ.Z.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D2.IQ.Z.cat">D2.IQ.Z.cat</a>
      </td>
    </tr>
</table>
<h2>D3 IQ</h2>
<p>14:17:54.00   +52:30:31.0 (Extended Groth Strip and CFRS)</p>
    <table class="table small table-bordered">
    <tr>
      <th scope="col">
        <input type="checkbox" id="boxallD3"    name="box" value="D3" onclick="check(/D3.*/,this.checked)">
	<label                for="boxallD3">all D3</label>
      </th>
      <th scope="col">
	<input type="checkbox" id="boximD3"     name="box" value="D3.IQ" onclick="check(/D3.IQ..$/,this.checked)">
	<label                for="boximD3">D3 Images</label>
      </th>
      <th scope="col">
	<input type="checkbox" id="boxweightD3" name="box" value="D3.IQ.weight" onclick="check(/D3.IQ..*weight/,this.checked)">
	<label                for="boxweightD3">Image des ponderances</label>
      </th>
      <th scope="col">
        <input type="checkbox" id="boxcatD3"    name="box" value="D3.IQ.cat" onclick="check(/D3.IQ..*cat/,this.checked)">
	<label                for="boxcatD3">D3 Catalogues</label>
      </th>
    </tr>
    <tr>
      <td colspan="4">
	Catalogue multi-bande
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D3.IQ.cat">
	<input type="checkbox" id="boxmbD3"  name="box"         value="D3.IQ.cat" onclick="check(/D3.IQ.cat/,this.checked)">
	<label                for="boxmbD3">D3.IQ.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.cat">D3.IQ.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD3U" name="box" type="checkbox" value="D3U.*" onclick="check(/D3.IQ.U/,this.checked)"><label for="boxallD3U">all D3 U</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D3.IQ.U">
	<input type="checkbox" id="boximD3U" name="box"         value="D3.IQ.U" onclick="check(/D3.IQ.U$/,this.checked)">
	<label                for="boximD3U">D3.IQ.U.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.U.fits">D3.IQ.U.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D3.IQ.U.weight">
	<input type="checkbox" id="boxweightD3U" name="box"         value="D3.IQ.U.weight" onclick="check(/D3.IQ.U.weight/,this.checked)">
	<label                for="boxweightD3U">D3.IQ.U.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.U.weight.fits">D3.IQ.U.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D3.IQ.U.cat">
	<input type="checkbox" id="boxcatD3U" name="box"         value="D3.IQ.U.cat" onclick="check(/D3.IQ.U.cat/,this.checked)">
	<label                for="boxcatD3U">D3.IQ.U.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.U.cat">D3.IQ.U.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD3G" name="box" type="checkbox" value="D3G.*" onclick="check(/D3.IQ.G/,this.checked)"><label for="boxallD3G">all D3 G</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D3.IQ.G">
	<input type="checkbox" id="boximD3G" name="box"         value="D3.IQ.G" onclick="check(/D3.IQ.G$/,this.checked)">
	<label                for="boximD3G">D3.IQ.G.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.G.fits">D3.IQ.G.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D3.IQ.G.weight">
	<input type="checkbox" id="boxweightD3G" name="box"         value="D3.IQ.G.weight" onclick="check(/D3.IQ.G.weight/,this.checked)">
	<label                for="boxweightD3G">D3.IQ.G.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.G.weight.fits">D3.IQ.G.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D3.IQ.G.cat">
	<input type="checkbox" id="boxcatD3G" name="box"         value="D3.IQ.G.cat" onclick="check(/D3.IQ.G.cat/,this.checked)">
	<label                for="boxcatD3G">D3.IQ.G.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.G.cat">D3.IQ.G.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD3R" name="box" type="checkbox" value="D3R.*" onclick="check(/D3.IQ.R/,this.checked)"><label for="boxallD3R">all D3 R</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D3.IQ.R">
	<input type="checkbox" id="boximD3R" name="box"         value="D3.IQ.R" onclick="check(/D3.IQ.R$/,this.checked)">
	<label                for="boximD3R">D3.IQ.R.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.R.fits">D3.IQ.R.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D3.IQ.R.weight">
	<input type="checkbox" id="boxweightD3R" name="box"         value="D3.IQ.R.weight" onclick="check(/D3.IQ.R.weight/,this.checked)">
	<label                for="boxweightD3R">D3.IQ.R.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.R.weight.fits">D3.IQ.R.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D3.IQ.R.cat">
	<input type="checkbox" id="boxcatD3R" name="box"         value="D3.IQ.R.cat" onclick="check(/D3.IQ.R.cat/,this.checked)">
	<label                for="boxcatD3R">D3.IQ.R.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.R.cat">D3.IQ.R.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD3I" name="box" type="checkbox" value="D3I.*" onclick="check(/D3.IQ.I/,this.checked)"><label for="boxallD3I">all D3 I</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D3.IQ.I">
	<input type="checkbox" id="boximD3I" name="box"         value="D3.IQ.I" onclick="check(/D3.IQ.I$/,this.checked)">
	<label                for="boximD3I">D3.IQ.I.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.I.fits">D3.IQ.I.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D3.IQ.I.weight">
	<input type="checkbox" id="boxweightD3I" name="box"         value="D3.IQ.I.weight" onclick="check(/D3.IQ.I.weight/,this.checked)">
	<label                for="boxweightD3I">D3.IQ.I.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.I.weight.fits">D3.IQ.I.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D3.IQ.I.cat">
	<input type="checkbox" id="boxcatD3I" name="box"         value="D3.IQ.I.cat" onclick="check(/D3.IQ.I.cat/,this.checked)">
	<label                for="boxcatD3I">D3.IQ.I.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.I.cat">D3.IQ.I.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD3Z" name="box" type="checkbox" value="D3Z.*" onclick="check(/D3.IQ.Z/,this.checked)"><label for="boxallD3Z">all D3 Z</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D3.IQ.Z">
	<input type="checkbox" id="boximD3Z" name="box"         value="D3.IQ.Z" onclick="check(/D3.IQ.Z$/,this.checked)">
	<label                for="boximD3Z">D3.IQ.Z.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.Z.fits">D3.IQ.Z.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D3.IQ.Z.weight">
	<input type="checkbox" id="boxweightD3Z" name="box"         value="D3.IQ.Z.weight" onclick="check(/D3.IQ.Z.weight/,this.checked)">
	<label                for="boxweightD3Z">D3.IQ.Z.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.Z.weight.fits">D3.IQ.Z.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D3.IQ.Z.cat">
	<input type="checkbox" id="boxcatD3Z" name="box"         value="D3.IQ.Z.cat" onclick="check(/D3.IQ.Z.cat/,this.checked)">
	<label                for="boxcatD3Z">D3.IQ.Z.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.Z.cat">D3.IQ.Z.cat</a>
      </td>
    </tr>
</table>
<h2>D4 IQ</h2>
<p>22:15:31.67   -17:44:05.7</p>
    <table class="table small table-bordered">
    <tr>
      <th scope="col">
        <input type="checkbox" id="boxallD4"    name="box" value="D4" onclick="check(/D4.*/,this.checked)">
	<label                for="boxallD4">all D4</label>
      </th>
      <th scope="col">
	<input type="checkbox" id="boximD4"     name="box" value="D4.IQ" onclick="check(/D4.IQ..$/,this.checked)">
	<label                for="boximD4">D4 Images</label>
      </th>
      <th scope="col">
	<input type="checkbox" id="boxweightD4" name="box" value="D4.IQ.weight" onclick="check(/D4.IQ..*weight/,this.checked)">
	<label                for="boxweightD4">Image des ponderances</label>
      </th>
      <th scope="col">
        <input type="checkbox" id="boxcatD4"    name="box" value="D4.IQ.cat" onclick="check(/D4.IQ..*cat/,this.checked)">
	<label                for="boxcatD4">D4 Catalogues</label>
      </th>
    </tr>
    <tr>
      <td colspan="4">
	Catalogue multi-bande
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D4.IQ.cat">
	<input type="checkbox" id="boxmbD4"  name="box"         value="D4.IQ.cat" onclick="check(/D4.IQ.cat/,this.checked)">
	<label                for="boxmbD4">D4.IQ.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.cat">D4.IQ.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD4U" name="box" type="checkbox" value="D4U.*" onclick="check(/D4.IQ.U/,this.checked)"><label for="boxallD4U">all D4 U</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D4.IQ.U">
	<input type="checkbox" id="boximD4U" name="box"         value="D4.IQ.U" onclick="check(/D4.IQ.U$/,this.checked)">
	<label                for="boximD4U">D4.IQ.U.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.U.fits">D4.IQ.U.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D4.IQ.U.weight">
	<input type="checkbox" id="boxweightD4U" name="box"         value="D4.IQ.U.weight" onclick="check(/D4.IQ.U.weight/,this.checked)">
	<label                for="boxweightD4U">D4.IQ.U.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.U.weight.fits">D4.IQ.U.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D4.IQ.U.cat">
	<input type="checkbox" id="boxcatD4U" name="box"         value="D4.IQ.U.cat" onclick="check(/D4.IQ.U.cat/,this.checked)">
	<label                for="boxcatD4U">D4.IQ.U.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.U.cat">D4.IQ.U.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD4G" name="box" type="checkbox" value="D4G.*" onclick="check(/D4.IQ.G/,this.checked)"><label for="boxallD4G">all D4 G</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D4.IQ.G">
	<input type="checkbox" id="boximD4G" name="box"         value="D4.IQ.G" onclick="check(/D4.IQ.G$/,this.checked)">
	<label                for="boximD4G">D4.IQ.G.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.G.fits">D4.IQ.G.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D4.IQ.G.weight">
	<input type="checkbox" id="boxweightD4G" name="box"         value="D4.IQ.G.weight" onclick="check(/D4.IQ.G.weight/,this.checked)">
	<label                for="boxweightD4G">D4.IQ.G.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.G.weight.fits">D4.IQ.G.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D4.IQ.G.cat">
	<input type="checkbox" id="boxcatD4G" name="box"         value="D4.IQ.G.cat" onclick="check(/D4.IQ.G.cat/,this.checked)">
	<label                for="boxcatD4G">D4.IQ.G.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.G.cat">D4.IQ.G.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD4R" name="box" type="checkbox" value="D4R.*" onclick="check(/D4.IQ.R/,this.checked)"><label for="boxallD4R">all D4 R</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D4.IQ.R">
	<input type="checkbox" id="boximD4R" name="box"         value="D4.IQ.R" onclick="check(/D4.IQ.R$/,this.checked)">
	<label                for="boximD4R">D4.IQ.R.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.R.fits">D4.IQ.R.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D4.IQ.R.weight">
	<input type="checkbox" id="boxweightD4R" name="box"         value="D4.IQ.R.weight" onclick="check(/D4.IQ.R.weight/,this.checked)">
	<label                for="boxweightD4R">D4.IQ.R.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.R.weight.fits">D4.IQ.R.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D4.IQ.R.cat">
	<input type="checkbox" id="boxcatD4R" name="box"         value="D4.IQ.R.cat" onclick="check(/D4.IQ.R.cat/,this.checked)">
	<label                for="boxcatD4R">D4.IQ.R.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.R.cat">D4.IQ.R.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD4I" name="box" type="checkbox" value="D4I.*" onclick="check(/D4.IQ.I/,this.checked)"><label for="boxallD4I">all D4 I</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D4.IQ.I">
	<input type="checkbox" id="boximD4I" name="box"         value="D4.IQ.I" onclick="check(/D4.IQ.I$/,this.checked)">
	<label                for="boximD4I">D4.IQ.I.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.I.fits">D4.IQ.I.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D4.IQ.I.weight">
	<input type="checkbox" id="boxweightD4I" name="box"         value="D4.IQ.I.weight" onclick="check(/D4.IQ.I.weight/,this.checked)">
	<label                for="boxweightD4I">D4.IQ.I.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.I.weight.fits">D4.IQ.I.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D4.IQ.I.cat">
	<input type="checkbox" id="boxcatD4I" name="box"         value="D4.IQ.I.cat" onclick="check(/D4.IQ.I.cat/,this.checked)">
	<label                for="boxcatD4I">D4.IQ.I.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.I.cat">D4.IQ.I.cat</a>
      </td>
    </tr>
      <tr>
      <td>
	<input id="boxallD4Z" name="box" type="checkbox" value="D4Z.*" onclick="check(/D4.IQ.Z/,this.checked)"><label for="boxallD4Z">all D4 Z</label>
      </td>
      <td>
	<input type="hidden"                 name="fileId">
	<input type="hidden"                 name="fileIdhold"  value="D4.IQ.Z">
	<input type="checkbox" id="boximD4Z" name="box"         value="D4.IQ.Z" onclick="check(/D4.IQ.Z$/,this.checked)">
	<label                for="boximD4Z">D4.IQ.Z.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.Z.fits">D4.IQ.Z.fits</a>
      </td>
      <td>
	<input type="hidden"                     name="fileId">
	<input type="hidden"                     name="fileIdhold"  value="D4.IQ.Z.weight">
	<input type="checkbox" id="boxweightD4Z" name="box"         value="D4.IQ.Z.weight" onclick="check(/D4.IQ.Z.weight/,this.checked)">
	<label                for="boxweightD4Z">D4.IQ.Z.weight.fits</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.Z.weight.fits">D4.IQ.Z.weight.fits</a>
      </td>
      <td>
	<input type="hidden"                  name="fileId">
	<input type="hidden"                  name="fileIdhold"  value="D4.IQ.Z.cat">
	<input type="checkbox" id="boxcatD4Z" name="box"         value="D4.IQ.Z.cat" onclick="check(/D4.IQ.Z.cat/,this.checked)">
	<label                for="boxcatD4Z">D4.IQ.Z.cat</label>
	<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4.IQ.Z.cat">D4.IQ.Z.cat</a>
      </td>
    </tr>
</table>
  </fieldset>
</form>
<div>
  <script type="text/javascript">
function checkall(onoff) {
  for(var i=0; i < document.dtable.box.length; i++) {
    document.dtable.box[i].checked=onoff;
  }
  for (var i=1; i<document.dtable.fileId.length; i++) {
    document.dtable.fileId[i].value=(onoff) ? 'ad:CFHTSG/'+document.dtable.fileIdhold[i].value : '';
  }
}
function check(reg,checked) {
  //alert(reg+'  '+checked);
  var fred='';
  for (var i=1; i<document.dtable.fileId.length; i++) {
    if (document.dtable.fileIdhold[i].value.match(reg)) {
      document.dtable.fileId[i].value=(checked) ? 'ad:CFHTSG/'+document.dtable.fileIdhold[i].value : '';
    }
  }
  for (var i=1; i<document.dtable.box.length; i++) {
    if (document.dtable.box[i].value.match(reg)) {
      document.dtable.box[i].checked= checked;
    }
  }
}
function openNewWindow(form) {
  var randNum = Math.floor(Math.random()*10000); // unique name
  win=window.open('','window' + randNum,'resizable=1,scrollbars=1,status=1,toolbar=1,location=1,menubar=1,width=630,height=770');
  form.target='window' + randNum;
  return true;
}
  </script>
</div>
