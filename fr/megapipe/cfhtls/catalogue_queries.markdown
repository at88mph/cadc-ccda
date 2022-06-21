---
layout: cadc
lang: fr
permalink: /fr/megapipe/cfhtls/cq.html
title: Recherche des catalogues
altLangPage: /en/megapipe/cfhtls/cq.html
dateModified: 2021-12-09
signing: layout.signing

nav: megapipe
breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/cfhtls/index.html
      title: CFHTLS

script: /static/js/megapipe/cq.js
---

<p>
    Cette page vous permet d'interroger les catalogues g&eacute;n&eacute;r&eacute;s &agrave;
    partir de les images CFHTLS. Documentation pour l'utilisation de
    cette page peut &ecirc;tre trouv&eacute; sur la page
    de <a href="qd.html">documentation pour les requ&ecirc;te de catalogues
    CFHTLS</a>. Documentation sur les catalogues eux-m&ecirc;mes se trouve
    sur le page <a href="/en/megapipe/cfhtls/uc.html">Catalogues
    unifi&eacute;es</a>.
</p>
<form id="formmain" name="formmain" action="/cadcbin/megapipe/queryt.pl" method="GET">
  <div class="form-group">
    <input id="submit1" type="submit" value="Envoyer requ&ecirc;te" class="form-control btn btn-default"/>
    <input type="hidden" name="slang" value="fr" class="form-control"/>
    <input type="reset" id="reset1" value="R&eacute;initialiser" class="form-control btn btn-default"/>
    <input type="hidden" name="REQUEST" value="doQuery" class="form-control"/>
    <input type="hidden" name="LANG" value="ADQL" class="form-control"/>
  </div>
  <div class="form-group">
    <label for="meth" class="control-label">M&eacute;thode de soumission:</label>
    <select name="meth" id="meth" class="form-control">
      <option value="sync">Synchrone (petites requ&ecirc;tes)</option> 
      <option value="async">asynchrone (requ&ecirc;tes volumineuses)</option> 
    </select>
  </div>
  <div class="form-group">
    <label for="format" class="control-label">Format de retour:</label>
    <select name="format" id="format" class="form-control"> 
      <option value="ascii">ASCII</option>
      <option value="html">HTML</option>
      <option value="tsv">Tab Separated Values</option>
      <option value="csv">Comma Separated Values</option> 
      <option value="votable">VOTable</option> 
      <!-- <option value="fits">Fits Table</option> -->
    </select>
  </div>
  <div id="diag"></div>
  <div>
    <label for="query" class="control-label">
	Requ&ecirc;tes: Cette bo&icirc;te montre la requ&ecirc;te (en ADQL) qui sera
       ex&eacute;cut&eacute;. Vous pouvez utiliser les autres contr&ocirc;les sur cette
       page pour d&eacute;finir la requ&ecirc;te, ou de modifier cette text
       directement pour une meilleure contr&ocirc;le.
    </label>
    <textarea  name="query" id="query" cols="60" rows="10" class="form-control"></textarea>
  </div>
  <div class="form-group">
    <input type="submit" value="Envoyer requ&ecirc;te" class="btn btn-default"/>
    <input type="reset" id="reset2" value="R&eacute;initialiser" class="btn btn-default"/>
  </div>
</form>
<form id="formpre" name="formpre">
  <input type="submit" value="Submit Query" class="hidden form-control"/>
  <div class="form-group">
    <label for="survey" class="control-label">Champs</label>
    <select name="survey" id="survey" class="form-control">
      <option value="deep">profond</option> 
      <option value="wide">large</option> 
    </select>
    <label for="filter" class="control-label">Filtre de S&eacute;l&eacute;ction</label>
    <select name="filter" id="filter" class="form-control">
      <option value="u">bande-u</option> 
      <option value="g">bande-g</option> 
      <option value="r">bande-r</option> 
      <option value="i" selected="selected">bande-i</option> 
      <option value="z">bande-z</option> 
    </select>
  </div>  
  <fieldset>
    <legend>Contraintes de position:</legend>
    <div class="form-group">
      <label for="srad" class="control-label">Rechercher dans:</label>
      <input type="text"  name="srad" id="srad" size="3" class="form-control"/>
      <label for="sunits">Unit&eacute;s</label>
      <select name="sunits" id="sunits" class="form-control"> 
	<option value="arcsec">Arcsecondes</option> 
	<option value="arcmin">{{ i18n-ssois-labels.arcminutes }}</option> 
	<option value="degree">degr&eacute;s</option>
      </select>
    </div>
    <div class="form-group">
      <label for="sra" class="control-label">RA:</label>
      <input type="text" size="20" name="sra" id="sra" class="form-control"/>
    </div>
    <div class="form-group">
      <label for="sdec" class="control-label">Dec:</label>
      <input type="text" size="20" name="sdec" id="sdec" class="form-control"/>
    </div>
  </fieldset>
  <div class="form-group">
    <label for="rows" class="control-label">Lignes max:</label>
    <select name="rows" id="rows" class="form-control"> 
      <option value="10">10</option>
      <option value="100">100</option>
      <option value="1000">1000</option>
      <option value="10000">10000</option>
      <option value="0">aucune limite</option>
    </select>
  </div>
  <div class="form-group">
    <label for="bright" class="control-label">Magnitude limite:</label>
    <select name="bright" id="bright" class="form-control"> 
      <option value="no">Ne pas retourner les objets plus faibles que la magnitude limite</option> 
      <option value="yes">Retourner les objets plus faibles que la magnitude limite</option> 
    </select>
  </div>
  <div class="form-group">
    <label for="masked" class="control-label">Masquage:</label>
    <select name="masked" id="masked" class="form-control"> 
      <option value="no">Ne pas retourner les objets masqu&eacute;s</option> 
      <option value="yes">Retourner les objets masqu&eacute;s</option> 
    </select>
  </div>
  <div class="form-group">
    <label for="ofield" class="control-label">S&eacute;lectionnez les sources &agrave; partir du:</label>
    <select name="ofield" id="ofield" class="form-control"> 
      <option value="all">tous les champs</option> 
      <option value="D1">champs D1 seulement</option> 
      <option value="D2">champs D2 seulement</option> 
      <option value="D3">champs D3 seulement</option> 
      <option value="D4">champs D4 seulement</option> 
    </select>
  </div>
</form>
<form id="formtab" name="formtab">
  <input type="submit" value="Submit Query" class="hidden btn btn-default"/>
  <fieldset>
    <legend>Param&egrave;tres:</legend>
    <div class="font-xsmall">
      <table class="table small table-bordered">
<tr>
<td>
<table class="table small table-bordered">
<tr><th scope="col" colspan="3">Global</th></tr>
<tr>
  <td><input type="checkbox" name="colcfhtlsID" id="colcfhtlsID" value="cfhtlsID" onclick="refreshquery()" checked="checked"/></td>
  <td><label for="colcfhtlsID">cfhtlsID</label></td>
  <td>  </td>
</tr>
<tr>
  <td><input type="checkbox" name="colsurvey" id="colsurvey" value="survey" onclick="refreshquery()"/></td>
  <td><label for="colsurvey">survey</label></td>
  <td>  </td>
</tr>
<tr>
  <td><input type="checkbox" name="colfield" id="colfield" value="field" onclick="refreshquery()"/></td>
  <td><label for="colfield">field</label></td>
  <td>  </td>
</tr>
<tr>
  <td><input type="checkbox" name="colpointing" id="colpointing" value="pointing" onclick="refreshquery()"/></td>
  <td><label for="colpointing">pointing</label></td>
  <td>  </td>
</tr>
<tr>
  <td><input type="checkbox" name="colselectionfilter" id="colselectionfilter" value="selectionfilter" onclick="refreshquery()"/></td>
  <td><label for="colselectionfilter">selectionfilter</label></td>
  <td>  </td>
</tr>
<tr>
  <td><input type="checkbox" name="colpointing_area" id="colpointing_area" value="pointing_area" onclick="refreshquery()"/></td>
  <td><label for="colpointing_area">pointing_area</label></td>
  <td><span class="wrap-none">  <label for="gtpointing_area">&ge;<span class="hidden">pointing_area</span></label><input type="text" size="3" name="gtpointing_area" id="gtpointing_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltpointing_area">&le;<span class="hidden">pointing_area</span></label><input type="text" size="3" name="ltpointing_area" id="ltpointing_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colfield_area" id="colfield_area" value="field_area" onclick="refreshquery()"/></td>
  <td><label for="colfield_area">field_area</label></td>
  <td><span class="wrap-none">  <label for="gtfield_area">&ge;<span class="hidden">field_area</span></label><input type="text" size="3" name="gtfield_area" id="gtfield_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltfield_area">&le;<span class="hidden">field_area</span></label><input type="text" size="3" name="ltfield_area" id="ltfield_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colsurvey_area" id="colsurvey_area" value="survey_area" onclick="refreshquery()"/></td>
  <td><label for="colsurvey_area">survey_area</label></td>
  <td><span class="wrap-none">  <label for="gtsurvey_area">&ge;<span class="hidden">survey_area</span></label><input type="text" size="3" name="gtsurvey_area" id="gtsurvey_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltsurvey_area">&le;<span class="hidden">survey_area</span></label><input type="text" size="3" name="ltsurvey_area" id="ltsurvey_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colmasked_pointing_area" id="colmasked_pointing_area" value="masked_pointing_area" onclick="refreshquery()"/></td>
  <td><label for="colmasked_pointing_area">masked_pointing_area</label></td>
  <td><span class="wrap-none">  <label for="gtmasked_pointing_area">&ge;<span class="hidden">masked_pointing_area</span></label><input type="text" size="3" name="gtmasked_pointing_area" id="gtmasked_pointing_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltmasked_pointing_area">&le;<span class="hidden">masked_pointing_area</span></label><input type="text" size="3" name="ltmasked_pointing_area" id="ltmasked_pointing_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colmasked_field_area" id="colmasked_field_area" value="masked_field_area" onclick="refreshquery()"/></td>
  <td><label for="colmasked_field_area">masked_field_area</label></td>
  <td><span class="wrap-none">  <label for="gtmasked_field_area">&ge;<span class="hidden">masked_field_area</span></label><input type="text" size="3" name="gtmasked_field_area" id="gtmasked_field_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltmasked_field_area">&le;<span class="hidden">masked_field_area</span></label><input type="text" size="3" name="ltmasked_field_area" id="ltmasked_field_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colmasked_survey_area" id="colmasked_survey_area" value="masked_survey_area" onclick="refreshquery()"/></td>
  <td><label for="colmasked_survey_area">masked_survey_area</label></td>
  <td><span class="wrap-none">  <label for="gtmasked_survey_area">&ge;<span class="hidden">masked_survey_area</span></label><input type="text" size="3" name="gtmasked_survey_area" id="gtmasked_survey_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltmasked_survey_area">&le;<span class="hidden">masked_survey_area</span></label><input type="text" size="3" name="ltmasked_survey_area" id="ltmasked_survey_area" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colNUMBER" id="colNUMBER" value="NUMBER" onclick="refreshquery()"/></td>
  <td><label for="colNUMBER">NUMBER</label></td>
  <td><span class="wrap-none">  <label for="gtNUMBER">&ge;<span class="hidden">NUMBER</span></label><input type="text" size="3" name="gtNUMBER" id="gtNUMBER" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltNUMBER">&le;<span class="hidden">NUMBER</span></label><input type="text" size="3" name="ltNUMBER" id="ltNUMBER" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colX_IMAGE" id="colX_IMAGE" value="X_IMAGE" onclick="refreshquery()"/></td>
  <td><label for="colX_IMAGE">X_IMAGE</label></td>
  <td><span class="wrap-none">  <label for="gtX_IMAGE">&ge;<span class="hidden">X_IMAGE</span></label><input type="text" size="3" name="gtX_IMAGE" id="gtX_IMAGE" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltX_IMAGE">&le;<span class="hidden">X_IMAGE</span></label><input type="text" size="3" name="ltX_IMAGE" id="ltX_IMAGE" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colY_IMAGE" id="colY_IMAGE" value="Y_IMAGE" onclick="refreshquery()"/></td>
  <td><label for="colY_IMAGE">Y_IMAGE</label></td>
  <td><span class="wrap-none">  <label for="gtY_IMAGE">&ge;<span class="hidden">Y_IMAGE</span></label><input type="text" size="3" name="gtY_IMAGE" id="gtY_IMAGE" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltY_IMAGE">&le;<span class="hidden">Y_IMAGE</span></label><input type="text" size="3" name="ltY_IMAGE" id="ltY_IMAGE" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colRA" id="colRA" value="RA" onclick="refreshquery()"/></td>
  <td><label for="colRA">RA</label></td>
  <td><span class="wrap-none">  <label for="gtRA">&ge;<span class="hidden">RA</span></label><input type="text" size="3" name="gtRA" id="gtRA" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltRA">&le;<span class="hidden">RA</span></label><input type="text" size="3" name="ltRA" id="ltRA" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colDEC" id="colDEC" value="DEC" onclick="refreshquery()"/></td>
  <td><label for="colDEC">DEC</label></td>
  <td><span class="wrap-none">  <label for="gtDEC">&ge;<span class="hidden">DEC</span></label><input type="text" size="3" name="gtDEC" id="gtDEC" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltDEC">&le;<span class="hidden">DEC</span></label><input type="text" size="3" name="ltDEC" id="ltDEC" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colA_WORLD" id="colA_WORLD" value="A_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colA_WORLD">A_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtA_WORLD">&ge;<span class="hidden">A_WORLD</span></label><input type="text" size="3" name="gtA_WORLD" id="gtA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltA_WORLD">&le;<span class="hidden">A_WORLD</span></label><input type="text" size="3" name="ltA_WORLD" id="ltA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colB_WORLD" id="colB_WORLD" value="B_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colB_WORLD">B_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtB_WORLD">&ge;<span class="hidden">B_WORLD</span></label><input type="text" size="3" name="gtB_WORLD" id="gtB_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltB_WORLD">&le;<span class="hidden">B_WORLD</span></label><input type="text" size="3" name="ltB_WORLD" id="ltB_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colPOLAR_WORLD" id="colPOLAR_WORLD" value="POLAR_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colPOLAR_WORLD">POLAR_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtPOLAR_WORLD">&ge;<span class="hidden">POLAR_WORLD</span></label><input type="text" size="3" name="gtPOLAR_WORLD" id="gtPOLAR_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltPOLAR_WORLD">&le;<span class="hidden">POLAR_WORLD</span></label><input type="text" size="3" name="ltPOLAR_WORLD" id="ltPOLAR_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colTHETA_WORLD" id="colTHETA_WORLD" value="THETA_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colTHETA_WORLD">THETA_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtTHETA_WORLD">&ge;<span class="hidden">THETA_WORLD</span></label><input type="text" size="3" name="gtTHETA_WORLD" id="gtTHETA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltTHETA_WORLD">&le;<span class="hidden">THETA_WORLD</span></label><input type="text" size="3" name="ltTHETA_WORLD" id="ltTHETA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colERRA_WORLD" id="colERRA_WORLD" value="ERRA_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colERRA_WORLD">ERRA_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtERRA_WORLD">&ge;<span class="hidden">ERRA_WORLD</span></label><input type="text" size="3" name="gtERRA_WORLD" id="gtERRA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltERRA_WORLD">&le;<span class="hidden">ERRA_WORLD</span></label><input type="text" size="3" name="ltERRA_WORLD" id="ltERRA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colERRB_WORLD" id="colERRB_WORLD" value="ERRB_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colERRB_WORLD">ERRB_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtERRB_WORLD">&ge;<span class="hidden">ERRB_WORLD</span></label><input type="text" size="3" name="gtERRB_WORLD" id="gtERRB_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltERRB_WORLD">&le;<span class="hidden">ERRB_WORLD</span></label><input type="text" size="3" name="ltERRB_WORLD" id="ltERRB_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colTHRESHOLD" id="colTHRESHOLD" value="THRESHOLD" onclick="refreshquery()"/></td>
  <td><label for="colTHRESHOLD">THRESHOLD</label></td>
  <td><span class="wrap-none">  <label for="gtTHRESHOLD">&ge;<span class="hidden">THRESHOLD</span></label><input type="text" size="3" name="gtTHRESHOLD" id="gtTHRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltTHRESHOLD">&le;<span class="hidden">THRESHOLD</span></label><input type="text" size="3" name="ltTHRESHOLD" id="ltTHRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colISOAREAF_WORLD" id="colISOAREAF_WORLD" value="ISOAREAF_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colISOAREAF_WORLD">ISOAREAF_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtISOAREAF_WORLD">&ge;<span class="hidden">ISOAREAF_WORLD</span></label><input type="text" size="3" name="gtISOAREAF_WORLD" id="gtISOAREAF_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltISOAREAF_WORLD">&le;<span class="hidden">ISOAREAF_WORLD</span></label><input type="text" size="3" name="ltISOAREAF_WORLD" id="ltISOAREAF_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
</table>
</td>
<td>
<table class="table small table-bordered">
<tr>
<th scope="col" colspan="3">U</th></tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_AUTO" id="colU_MAG_AUTO" value="U_MAG_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_AUTO">U_MAG_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_AUTO">&ge;<span class="hidden">U_MAG_AUTO</span></label><input type="text" size="3" name="gtU_MAG_AUTO" id="gtU_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_AUTO">&le;<span class="hidden">U_MAG_AUTO</span></label><input type="text" size="3" name="ltU_MAG_AUTO" id="ltU_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_AUTO" id="colU_MAGERR_AUTO" value="U_MAGERR_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_AUTO">U_MAGERR_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_AUTO">&ge;<span class="hidden">U_MAGERR_AUTO</span></label><input type="text" size="3" name="gtU_MAGERR_AUTO" id="gtU_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_AUTO">&le;<span class="hidden">U_MAGERR_AUTO</span></label><input type="text" size="3" name="ltU_MAGERR_AUTO" id="ltU_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_ISO" id="colU_MAG_ISO" value="U_MAG_ISO" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_ISO">U_MAG_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_ISO">&ge;<span class="hidden">U_MAG_ISO</span></label><input type="text" size="3" name="gtU_MAG_ISO" id="gtU_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_ISO">&le;<span class="hidden">U_MAG_ISO</span></label><input type="text" size="3" name="ltU_MAG_ISO" id="ltU_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_ISO" id="colU_MAGERR_ISO" value="U_MAGERR_ISO" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_ISO">U_MAGERR_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_ISO">&ge;<span class="hidden">U_MAGERR_ISO</span></label><input type="text" size="3" name="gtU_MAGERR_ISO" id="gtU_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_ISO">&le;<span class="hidden">U_MAGERR_ISO</span></label><input type="text" size="3" name="ltU_MAGERR_ISO" id="ltU_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_PETRO" id="colU_MAG_PETRO" value="U_MAG_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_PETRO">U_MAG_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_PETRO">&ge;<span class="hidden">U_MAG_PETRO</span></label><input type="text" size="3" name="gtU_MAG_PETRO" id="gtU_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_PETRO">&le;<span class="hidden">U_MAG_PETRO</span></label><input type="text" size="3" name="ltU_MAG_PETRO" id="ltU_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_PETRO" id="colU_MAGERR_PETRO" value="U_MAGERR_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_PETRO">U_MAGERR_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_PETRO">&ge;<span class="hidden">U_MAGERR_PETRO</span></label><input type="text" size="3" name="gtU_MAGERR_PETRO" id="gtU_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_PETRO">&le;<span class="hidden">U_MAGERR_PETRO</span></label><input type="text" size="3" name="ltU_MAGERR_PETRO" id="ltU_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_APER_1" id="colU_MAG_APER_1" value="U_MAG_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_APER_1">U_MAG_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_APER_1">&ge;<span class="hidden">U_MAG_APER_1</span></label><input type="text" size="3" name="gtU_MAG_APER_1" id="gtU_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_APER_1">&le;<span class="hidden">U_MAG_APER_1</span></label><input type="text" size="3" name="ltU_MAG_APER_1" id="ltU_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_APER_2" id="colU_MAG_APER_2" value="U_MAG_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_APER_2">U_MAG_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_APER_2">&ge;<span class="hidden">U_MAG_APER_2</span></label><input type="text" size="3" name="gtU_MAG_APER_2" id="gtU_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_APER_2">&le;<span class="hidden">U_MAG_APER_2</span></label><input type="text" size="3" name="ltU_MAG_APER_2" id="ltU_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_APER_3" id="colU_MAG_APER_3" value="U_MAG_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_APER_3">U_MAG_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_APER_3">&ge;<span class="hidden">U_MAG_APER_3</span></label><input type="text" size="3" name="gtU_MAG_APER_3" id="gtU_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_APER_3">&le;<span class="hidden">U_MAG_APER_3</span></label><input type="text" size="3" name="ltU_MAG_APER_3" id="ltU_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_APER_4" id="colU_MAG_APER_4" value="U_MAG_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_APER_4">U_MAG_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_APER_4">&ge;<span class="hidden">U_MAG_APER_4</span></label><input type="text" size="3" name="gtU_MAG_APER_4" id="gtU_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_APER_4">&le;<span class="hidden">U_MAG_APER_4</span></label><input type="text" size="3" name="ltU_MAG_APER_4" id="ltU_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_APER_5" id="colU_MAG_APER_5" value="U_MAG_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_APER_5">U_MAG_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_APER_5">&ge;<span class="hidden">U_MAG_APER_5</span></label><input type="text" size="3" name="gtU_MAG_APER_5" id="gtU_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_APER_5">&le;<span class="hidden">U_MAG_APER_5</span></label><input type="text" size="3" name="ltU_MAG_APER_5" id="ltU_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_APER_6" id="colU_MAG_APER_6" value="U_MAG_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_APER_6">U_MAG_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_APER_6">&ge;<span class="hidden">U_MAG_APER_6</span></label><input type="text" size="3" name="gtU_MAG_APER_6" id="gtU_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_APER_6">&le;<span class="hidden">U_MAG_APER_6</span></label><input type="text" size="3" name="ltU_MAG_APER_6" id="ltU_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_APER_7" id="colU_MAG_APER_7" value="U_MAG_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_APER_7">U_MAG_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_APER_7">&ge;<span class="hidden">U_MAG_APER_7</span></label><input type="text" size="3" name="gtU_MAG_APER_7" id="gtU_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_APER_7">&le;<span class="hidden">U_MAG_APER_7</span></label><input type="text" size="3" name="ltU_MAG_APER_7" id="ltU_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAG_APER_8" id="colU_MAG_APER_8" value="U_MAG_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colU_MAG_APER_8">U_MAG_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAG_APER_8">&ge;<span class="hidden">U_MAG_APER_8</span></label><input type="text" size="3" name="gtU_MAG_APER_8" id="gtU_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAG_APER_8">&le;<span class="hidden">U_MAG_APER_8</span></label><input type="text" size="3" name="ltU_MAG_APER_8" id="ltU_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_APER_1" id="colU_MAGERR_APER_1" value="U_MAGERR_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_APER_1">U_MAGERR_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_APER_1">&ge;<span class="hidden">U_MAGERR_APER_1</span></label><input type="text" size="3" name="gtU_MAGERR_APER_1" id="gtU_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_APER_1">&le;<span class="hidden">U_MAGERR_APER_1</span></label><input type="text" size="3" name="ltU_MAGERR_APER_1" id="ltU_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_APER_2" id="colU_MAGERR_APER_2" value="U_MAGERR_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_APER_2">U_MAGERR_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_APER_2">&ge;<span class="hidden">U_MAGERR_APER_2</span></label><input type="text" size="3" name="gtU_MAGERR_APER_2" id="gtU_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_APER_2">&le;<span class="hidden">U_MAGERR_APER_2</span></label><input type="text" size="3" name="ltU_MAGERR_APER_2" id="ltU_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_APER_3" id="colU_MAGERR_APER_3" value="U_MAGERR_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_APER_3">U_MAGERR_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_APER_3">&ge;<span class="hidden">U_MAGERR_APER_3</span></label><input type="text" size="3" name="gtU_MAGERR_APER_3" id="gtU_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_APER_3">&le;<span class="hidden">U_MAGERR_APER_3</span></label><input type="text" size="3" name="ltU_MAGERR_APER_3" id="ltU_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_APER_4" id="colU_MAGERR_APER_4" value="U_MAGERR_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_APER_4">U_MAGERR_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_APER_4">&ge;<span class="hidden">U_MAGERR_APER_4</span></label><input type="text" size="3" name="gtU_MAGERR_APER_4" id="gtU_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_APER_4">&le;<span class="hidden">U_MAGERR_APER_4</span></label><input type="text" size="3" name="ltU_MAGERR_APER_4" id="ltU_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_APER_5" id="colU_MAGERR_APER_5" value="U_MAGERR_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_APER_5">U_MAGERR_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_APER_5">&ge;<span class="hidden">U_MAGERR_APER_5</span></label><input type="text" size="3" name="gtU_MAGERR_APER_5" id="gtU_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_APER_5">&le;<span class="hidden">U_MAGERR_APER_5</span></label><input type="text" size="3" name="ltU_MAGERR_APER_5" id="ltU_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_APER_6" id="colU_MAGERR_APER_6" value="U_MAGERR_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_APER_6">U_MAGERR_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_APER_6">&ge;<span class="hidden">U_MAGERR_APER_6</span></label><input type="text" size="3" name="gtU_MAGERR_APER_6" id="gtU_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_APER_6">&le;<span class="hidden">U_MAGERR_APER_6</span></label><input type="text" size="3" name="ltU_MAGERR_APER_6" id="ltU_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_APER_7" id="colU_MAGERR_APER_7" value="U_MAGERR_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_APER_7">U_MAGERR_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_APER_7">&ge;<span class="hidden">U_MAGERR_APER_7</span></label><input type="text" size="3" name="gtU_MAGERR_APER_7" id="gtU_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_APER_7">&le;<span class="hidden">U_MAGERR_APER_7</span></label><input type="text" size="3" name="ltU_MAGERR_APER_7" id="ltU_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MAGERR_APER_8" id="colU_MAGERR_APER_8" value="U_MAGERR_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colU_MAGERR_APER_8">U_MAGERR_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtU_MAGERR_APER_8">&ge;<span class="hidden">U_MAGERR_APER_8</span></label><input type="text" size="3" name="gtU_MAGERR_APER_8" id="gtU_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MAGERR_APER_8">&le;<span class="hidden">U_MAGERR_APER_8</span></label><input type="text" size="3" name="ltU_MAGERR_APER_8" id="ltU_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_FLUX_RADIUS" id="colU_FLUX_RADIUS" value="U_FLUX_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colU_FLUX_RADIUS">U_FLUX_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtU_FLUX_RADIUS">&ge;<span class="hidden">U_FLUX_RADIUS</span></label><input type="text" size="3" name="gtU_FLUX_RADIUS" id="gtU_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_FLUX_RADIUS">&le;<span class="hidden">U_FLUX_RADIUS</span></label><input type="text" size="3" name="ltU_FLUX_RADIUS" id="ltU_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_KRON_RADIUS" id="colU_KRON_RADIUS" value="U_KRON_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colU_KRON_RADIUS">U_KRON_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtU_KRON_RADIUS">&ge;<span class="hidden">U_KRON_RADIUS</span></label><input type="text" size="3" name="gtU_KRON_RADIUS" id="gtU_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_KRON_RADIUS">&le;<span class="hidden">U_KRON_RADIUS</span></label><input type="text" size="3" name="ltU_KRON_RADIUS" id="ltU_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_PETRO_RADIUS" id="colU_PETRO_RADIUS" value="U_PETRO_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colU_PETRO_RADIUS">U_PETRO_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtU_PETRO_RADIUS">&ge;<span class="hidden">U_PETRO_RADIUS</span></label><input type="text" size="3" name="gtU_PETRO_RADIUS" id="gtU_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_PETRO_RADIUS">&le;<span class="hidden">U_PETRO_RADIUS</span></label><input type="text" size="3" name="ltU_PETRO_RADIUS" id="ltU_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_BACKGROUND" id="colU_BACKGROUND" value="U_BACKGROUND" onclick="refreshquery()"/></td>
  <td><label for="colU_BACKGROUND">U_BACKGROUND</label></td>
  <td><span class="wrap-none">  <label for="gtU_BACKGROUND">&ge;<span class="hidden">U_BACKGROUND</span></label><input type="text" size="3" name="gtU_BACKGROUND" id="gtU_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_BACKGROUND">&le;<span class="hidden">U_BACKGROUND</span></label><input type="text" size="3" name="ltU_BACKGROUND" id="ltU_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MU_THRESHOLD" id="colU_MU_THRESHOLD" value="U_MU_THRESHOLD" onclick="refreshquery()"/></td>
  <td><label for="colU_MU_THRESHOLD">U_MU_THRESHOLD</label></td>
  <td><span class="wrap-none">  <label for="gtU_MU_THRESHOLD">&ge;<span class="hidden">U_MU_THRESHOLD</span></label><input type="text" size="3" name="gtU_MU_THRESHOLD" id="gtU_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MU_THRESHOLD">&le;<span class="hidden">U_MU_THRESHOLD</span></label><input type="text" size="3" name="ltU_MU_THRESHOLD" id="ltU_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_MU_MAX" id="colU_MU_MAX" value="U_MU_MAX" onclick="refreshquery()"/></td>
  <td><label for="colU_MU_MAX">U_MU_MAX</label></td>
  <td><span class="wrap-none">  <label for="gtU_MU_MAX">&ge;<span class="hidden">U_MU_MAX</span></label><input type="text" size="3" name="gtU_MU_MAX" id="gtU_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_MU_MAX">&le;<span class="hidden">U_MU_MAX</span></label><input type="text" size="3" name="ltU_MU_MAX" id="ltU_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_ISOAREA_WORLD" id="colU_ISOAREA_WORLD" value="U_ISOAREA_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colU_ISOAREA_WORLD">U_ISOAREA_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtU_ISOAREA_WORLD">&ge;<span class="hidden">U_ISOAREA_WORLD</span></label><input type="text" size="3" name="gtU_ISOAREA_WORLD" id="gtU_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_ISOAREA_WORLD">&le;<span class="hidden">U_ISOAREA_WORLD</span></label><input type="text" size="3" name="ltU_ISOAREA_WORLD" id="ltU_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_FLAGS" id="colU_FLAGS" value="U_FLAGS" onclick="refreshquery()"/></td>
  <td><label for="colU_FLAGS">U_FLAGS</label></td>
  <td><span class="wrap-none">  <label for="gtU_FLAGS">&ge;<span class="hidden">U_FLAGS</span></label><input type="text" size="3" name="gtU_FLAGS" id="gtU_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_FLAGS">&le;<span class="hidden">U_FLAGS</span></label><input type="text" size="3" name="ltU_FLAGS" id="ltU_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_CLASS_STAR" id="colU_CLASS_STAR" value="U_CLASS_STAR" onclick="refreshquery()"/></td>
  <td><label for="colU_CLASS_STAR">U_CLASS_STAR</label></td>
  <td><span class="wrap-none">  <label for="gtU_CLASS_STAR">&ge;<span class="hidden">U_CLASS_STAR</span></label><input type="text" size="3" name="gtU_CLASS_STAR" id="gtU_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_CLASS_STAR">&le;<span class="hidden">U_CLASS_STAR</span></label><input type="text" size="3" name="ltU_CLASS_STAR" id="ltU_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_dubious" id="colU_dubious" value="U_dubious" onclick="refreshquery()"/></td>
  <td><label for="colU_dubious">U_dubious</label></td>
  <td><span class="wrap-none">  <label for="gtU_dubious">&ge;<span class="hidden">U_dubious</span></label><input type="text" size="3" name="gtU_dubious" id="gtU_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_dubious">&le;<span class="hidden">U_dubious</span></label><input type="text" size="3" name="ltU_dubious" id="ltU_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_maglimit" id="colU_maglimit" value="U_maglimit" onclick="refreshquery()"/></td>
  <td><label for="colU_maglimit">U_maglimit</label></td>
  <td><span class="wrap-none">  <label for="gtU_maglimit">&ge;<span class="hidden">U_maglimit</span></label><input type="text" size="3" name="gtU_maglimit" id="gtU_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_maglimit">&le;<span class="hidden">U_maglimit</span></label><input type="text" size="3" name="ltU_maglimit" id="ltU_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colU_IQ" id="colU_IQ" value="U_IQ" onclick="refreshquery()"/></td>
  <td><label for="colU_IQ">U_IQ</label></td>
  <td><span class="wrap-none">  <label for="gtU_IQ">&ge;<span class="hidden">U_IQ</span></label><input type="text" size="3" name="gtU_IQ" id="gtU_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltU_IQ">&le;<span class="hidden">U_IQ</span></label><input type="text" size="3" name="ltU_IQ" id="ltU_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr><td></td><td></td><td></td></tr>
</table>
</td>
<td>
<table class="table small table-bordered">
<tr>
<th scope="col" colspan="3">G</th></tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_AUTO" id="colG_MAG_AUTO" value="G_MAG_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_AUTO">G_MAG_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_AUTO">&ge;<span class="hidden">G_MAG_AUTO</span></label><input type="text" size="3" name="gtG_MAG_AUTO" id="gtG_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_AUTO">&le;<span class="hidden">G_MAG_AUTO</span></label><input type="text" size="3" name="ltG_MAG_AUTO" id="ltG_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_AUTO" id="colG_MAGERR_AUTO" value="G_MAGERR_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_AUTO">G_MAGERR_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_AUTO">&ge;<span class="hidden">G_MAGERR_AUTO</span></label><input type="text" size="3" name="gtG_MAGERR_AUTO" id="gtG_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_AUTO">&le;<span class="hidden">G_MAGERR_AUTO</span></label><input type="text" size="3" name="ltG_MAGERR_AUTO" id="ltG_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_ISO" id="colG_MAG_ISO" value="G_MAG_ISO" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_ISO">G_MAG_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_ISO">&ge;<span class="hidden">G_MAG_ISO</span></label><input type="text" size="3" name="gtG_MAG_ISO" id="gtG_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_ISO">&le;<span class="hidden">G_MAG_ISO</span></label><input type="text" size="3" name="ltG_MAG_ISO" id="ltG_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_ISO" id="colG_MAGERR_ISO" value="G_MAGERR_ISO" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_ISO">G_MAGERR_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_ISO">&ge;<span class="hidden">G_MAGERR_ISO</span></label><input type="text" size="3" name="gtG_MAGERR_ISO" id="gtG_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_ISO">&le;<span class="hidden">G_MAGERR_ISO</span></label><input type="text" size="3" name="ltG_MAGERR_ISO" id="ltG_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_PETRO" id="colG_MAG_PETRO" value="G_MAG_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_PETRO">G_MAG_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_PETRO">&ge;<span class="hidden">G_MAG_PETRO</span></label><input type="text" size="3" name="gtG_MAG_PETRO" id="gtG_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_PETRO">&le;<span class="hidden">G_MAG_PETRO</span></label><input type="text" size="3" name="ltG_MAG_PETRO" id="ltG_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_PETRO" id="colG_MAGERR_PETRO" value="G_MAGERR_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_PETRO">G_MAGERR_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_PETRO">&ge;<span class="hidden">G_MAGERR_PETRO</span></label><input type="text" size="3" name="gtG_MAGERR_PETRO" id="gtG_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_PETRO">&le;<span class="hidden">G_MAGERR_PETRO</span></label><input type="text" size="3" name="ltG_MAGERR_PETRO" id="ltG_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_APER_1" id="colG_MAG_APER_1" value="G_MAG_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_APER_1">G_MAG_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_APER_1">&ge;<span class="hidden">G_MAG_APER_1</span></label><input type="text" size="3" name="gtG_MAG_APER_1" id="gtG_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_APER_1">&le;<span class="hidden">G_MAG_APER_1</span></label><input type="text" size="3" name="ltG_MAG_APER_1" id="ltG_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_APER_2" id="colG_MAG_APER_2" value="G_MAG_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_APER_2">G_MAG_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_APER_2">&ge;<span class="hidden">G_MAG_APER_2</span></label><input type="text" size="3" name="gtG_MAG_APER_2" id="gtG_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_APER_2">&le;<span class="hidden">G_MAG_APER_2</span></label><input type="text" size="3" name="ltG_MAG_APER_2" id="ltG_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_APER_3" id="colG_MAG_APER_3" value="G_MAG_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_APER_3">G_MAG_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_APER_3">&ge;<span class="hidden">G_MAG_APER_3</span></label><input type="text" size="3" name="gtG_MAG_APER_3" id="gtG_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_APER_3">&le;<span class="hidden">G_MAG_APER_3</span></label><input type="text" size="3" name="ltG_MAG_APER_3" id="ltG_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_APER_4" id="colG_MAG_APER_4" value="G_MAG_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_APER_4">G_MAG_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_APER_4">&ge;<span class="hidden">G_MAG_APER_4</span></label><input type="text" size="3" name="gtG_MAG_APER_4" id="gtG_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_APER_4">&le;<span class="hidden">G_MAG_APER_4</span></label><input type="text" size="3" name="ltG_MAG_APER_4" id="ltG_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_APER_5" id="colG_MAG_APER_5" value="G_MAG_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_APER_5">G_MAG_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_APER_5">&ge;<span class="hidden">G_MAG_APER_5</span></label><input type="text" size="3" name="gtG_MAG_APER_5" id="gtG_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_APER_5">&le;<span class="hidden">G_MAG_APER_5</span></label><input type="text" size="3" name="ltG_MAG_APER_5" id="ltG_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_APER_6" id="colG_MAG_APER_6" value="G_MAG_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_APER_6">G_MAG_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_APER_6">&ge;<span class="hidden">G_MAG_APER_6</span></label><input type="text" size="3" name="gtG_MAG_APER_6" id="gtG_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_APER_6">&le;<span class="hidden">G_MAG_APER_6</span></label><input type="text" size="3" name="ltG_MAG_APER_6" id="ltG_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_APER_7" id="colG_MAG_APER_7" value="G_MAG_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_APER_7">G_MAG_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_APER_7">&ge;<span class="hidden">G_MAG_APER_7</span></label><input type="text" size="3" name="gtG_MAG_APER_7" id="gtG_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_APER_7">&le;<span class="hidden">G_MAG_APER_7</span></label><input type="text" size="3" name="ltG_MAG_APER_7" id="ltG_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAG_APER_8" id="colG_MAG_APER_8" value="G_MAG_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colG_MAG_APER_8">G_MAG_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAG_APER_8">&ge;<span class="hidden">G_MAG_APER_8</span></label><input type="text" size="3" name="gtG_MAG_APER_8" id="gtG_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAG_APER_8">&le;<span class="hidden">G_MAG_APER_8</span></label><input type="text" size="3" name="ltG_MAG_APER_8" id="ltG_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_APER_1" id="colG_MAGERR_APER_1" value="G_MAGERR_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_APER_1">G_MAGERR_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_APER_1">&ge;<span class="hidden">G_MAGERR_APER_1</span></label><input type="text" size="3" name="gtG_MAGERR_APER_1" id="gtG_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_APER_1">&le;<span class="hidden">G_MAGERR_APER_1</span></label><input type="text" size="3" name="ltG_MAGERR_APER_1" id="ltG_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_APER_2" id="colG_MAGERR_APER_2" value="G_MAGERR_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_APER_2">G_MAGERR_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_APER_2">&ge;<span class="hidden">G_MAGERR_APER_2</span></label><input type="text" size="3" name="gtG_MAGERR_APER_2" id="gtG_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_APER_2">&le;<span class="hidden">G_MAGERR_APER_2</span></label><input type="text" size="3" name="ltG_MAGERR_APER_2" id="ltG_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_APER_3" id="colG_MAGERR_APER_3" value="G_MAGERR_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_APER_3">G_MAGERR_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_APER_3">&ge;<span class="hidden">G_MAGERR_APER_3</span></label><input type="text" size="3" name="gtG_MAGERR_APER_3" id="gtG_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_APER_3">&le;<span class="hidden">G_MAGERR_APER_3</span></label><input type="text" size="3" name="ltG_MAGERR_APER_3" id="ltG_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_APER_4" id="colG_MAGERR_APER_4" value="G_MAGERR_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_APER_4">G_MAGERR_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_APER_4">&ge;<span class="hidden">G_MAGERR_APER_4</span></label><input type="text" size="3" name="gtG_MAGERR_APER_4" id="gtG_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_APER_4">&le;<span class="hidden">G_MAGERR_APER_4</span></label><input type="text" size="3" name="ltG_MAGERR_APER_4" id="ltG_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_APER_5" id="colG_MAGERR_APER_5" value="G_MAGERR_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_APER_5">G_MAGERR_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_APER_5">&ge;<span class="hidden">G_MAGERR_APER_5</span></label><input type="text" size="3" name="gtG_MAGERR_APER_5" id="gtG_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_APER_5">&le;<span class="hidden">G_MAGERR_APER_5</span></label><input type="text" size="3" name="ltG_MAGERR_APER_5" id="ltG_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_APER_6" id="colG_MAGERR_APER_6" value="G_MAGERR_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_APER_6">G_MAGERR_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_APER_6">&ge;<span class="hidden">G_MAGERR_APER_6</span></label><input type="text" size="3" name="gtG_MAGERR_APER_6" id="gtG_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_APER_6">&le;<span class="hidden">G_MAGERR_APER_6</span></label><input type="text" size="3" name="ltG_MAGERR_APER_6" id="ltG_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_APER_7" id="colG_MAGERR_APER_7" value="G_MAGERR_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_APER_7">G_MAGERR_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_APER_7">&ge;<span class="hidden">G_MAGERR_APER_7</span></label><input type="text" size="3" name="gtG_MAGERR_APER_7" id="gtG_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_APER_7">&le;<span class="hidden">G_MAGERR_APER_7</span></label><input type="text" size="3" name="ltG_MAGERR_APER_7" id="ltG_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MAGERR_APER_8" id="colG_MAGERR_APER_8" value="G_MAGERR_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colG_MAGERR_APER_8">G_MAGERR_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtG_MAGERR_APER_8">&ge;<span class="hidden">G_MAGERR_APER_8</span></label><input type="text" size="3" name="gtG_MAGERR_APER_8" id="gtG_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MAGERR_APER_8">&le;<span class="hidden">G_MAGERR_APER_8</span></label><input type="text" size="3" name="ltG_MAGERR_APER_8" id="ltG_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_FLUX_RADIUS" id="colG_FLUX_RADIUS" value="G_FLUX_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colG_FLUX_RADIUS">G_FLUX_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtG_FLUX_RADIUS">&ge;<span class="hidden">G_FLUX_RADIUS</span></label><input type="text" size="3" name="gtG_FLUX_RADIUS" id="gtG_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_FLUX_RADIUS">&le;<span class="hidden">G_FLUX_RADIUS</span></label><input type="text" size="3" name="ltG_FLUX_RADIUS" id="ltG_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_KRON_RADIUS" id="colG_KRON_RADIUS" value="G_KRON_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colG_KRON_RADIUS">G_KRON_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtG_KRON_RADIUS">&ge;<span class="hidden">G_KRON_RADIUS</span></label><input type="text" size="3" name="gtG_KRON_RADIUS" id="gtG_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_KRON_RADIUS">&le;<span class="hidden">G_KRON_RADIUS</span></label><input type="text" size="3" name="ltG_KRON_RADIUS" id="ltG_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_PETRO_RADIUS" id="colG_PETRO_RADIUS" value="G_PETRO_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colG_PETRO_RADIUS">G_PETRO_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtG_PETRO_RADIUS">&ge;<span class="hidden">G_PETRO_RADIUS</span></label><input type="text" size="3" name="gtG_PETRO_RADIUS" id="gtG_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_PETRO_RADIUS">&le;<span class="hidden">G_PETRO_RADIUS</span></label><input type="text" size="3" name="ltG_PETRO_RADIUS" id="ltG_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_BACKGROUND" id="colG_BACKGROUND" value="G_BACKGROUND" onclick="refreshquery()"/></td>
  <td><label for="colG_BACKGROUND">G_BACKGROUND</label></td>
  <td><span class="wrap-none">  <label for="gtG_BACKGROUND">&ge;<span class="hidden">G_BACKGROUND</span></label><input type="text" size="3" name="gtG_BACKGROUND" id="gtG_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_BACKGROUND">&le;<span class="hidden">G_BACKGROUND</span></label><input type="text" size="3" name="ltG_BACKGROUND" id="ltG_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MU_THRESHOLD" id="colG_MU_THRESHOLD" value="G_MU_THRESHOLD" onclick="refreshquery()"/></td>
  <td><label for="colG_MU_THRESHOLD">G_MU_THRESHOLD</label></td>
  <td><span class="wrap-none">  <label for="gtG_MU_THRESHOLD">&ge;<span class="hidden">G_MU_THRESHOLD</span></label><input type="text" size="3" name="gtG_MU_THRESHOLD" id="gtG_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MU_THRESHOLD">&le;<span class="hidden">G_MU_THRESHOLD</span></label><input type="text" size="3" name="ltG_MU_THRESHOLD" id="ltG_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_MU_MAX" id="colG_MU_MAX" value="G_MU_MAX" onclick="refreshquery()"/></td>
  <td><label for="colG_MU_MAX">G_MU_MAX</label></td>
  <td><span class="wrap-none">  <label for="gtG_MU_MAX">&ge;<span class="hidden">G_MU_MAX</span></label><input type="text" size="3" name="gtG_MU_MAX" id="gtG_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_MU_MAX">&le;<span class="hidden">G_MU_MAX</span></label><input type="text" size="3" name="ltG_MU_MAX" id="ltG_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_ISOAREA_WORLD" id="colG_ISOAREA_WORLD" value="G_ISOAREA_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colG_ISOAREA_WORLD">G_ISOAREA_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtG_ISOAREA_WORLD">&ge;<span class="hidden">G_ISOAREA_WORLD</span></label><input type="text" size="3" name="gtG_ISOAREA_WORLD" id="gtG_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_ISOAREA_WORLD">&le;<span class="hidden">G_ISOAREA_WORLD</span></label><input type="text" size="3" name="ltG_ISOAREA_WORLD" id="ltG_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_FLAGS" id="colG_FLAGS" value="G_FLAGS" onclick="refreshquery()"/></td>
  <td><label for="colG_FLAGS">G_FLAGS</label></td>
  <td><span class="wrap-none">  <label for="gtG_FLAGS">&ge;<span class="hidden">G_FLAGS</span></label><input type="text" size="3" name="gtG_FLAGS" id="gtG_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_FLAGS">&le;<span class="hidden">G_FLAGS</span></label><input type="text" size="3" name="ltG_FLAGS" id="ltG_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_CLASS_STAR" id="colG_CLASS_STAR" value="G_CLASS_STAR" onclick="refreshquery()"/></td>
  <td><label for="colG_CLASS_STAR">G_CLASS_STAR</label></td>
  <td><span class="wrap-none">  <label for="gtG_CLASS_STAR">&ge;<span class="hidden">G_CLASS_STAR</span></label><input type="text" size="3" name="gtG_CLASS_STAR" id="gtG_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_CLASS_STAR">&le;<span class="hidden">G_CLASS_STAR</span></label><input type="text" size="3" name="ltG_CLASS_STAR" id="ltG_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_dubious" id="colG_dubious" value="G_dubious" onclick="refreshquery()"/></td>
  <td><label for="colG_dubious">G_dubious</label></td>
  <td><span class="wrap-none">  <label for="gtG_dubious">&ge;<span class="hidden">G_dubious</span></label><input type="text" size="3" name="gtG_dubious" id="gtG_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_dubious">&le;<span class="hidden">G_dubious</span></label><input type="text" size="3" name="ltG_dubious" id="ltG_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_maglimit" id="colG_maglimit" value="G_maglimit" onclick="refreshquery()"/></td>
  <td><label for="colG_maglimit">G_maglimit</label></td>
  <td><span class="wrap-none">  <label for="gtG_maglimit">&ge;<span class="hidden">G_maglimit</span></label><input type="text" size="3" name="gtG_maglimit" id="gtG_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_maglimit">&le;<span class="hidden">G_maglimit</span></label><input type="text" size="3" name="ltG_maglimit" id="ltG_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colG_IQ" id="colG_IQ" value="G_IQ" onclick="refreshquery()"/></td>
  <td><label for="colG_IQ">G_IQ</label></td>
  <td><span class="wrap-none">  <label for="gtG_IQ">&ge;<span class="hidden">G_IQ</span></label><input type="text" size="3" name="gtG_IQ" id="gtG_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltG_IQ">&le;<span class="hidden">G_IQ</span></label><input type="text" size="3" name="ltG_IQ" id="ltG_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr><td></td><td></td><td></td></tr>
</table>
</td>
<td>
<table class="table small table-bordered">
<tr>
<th scope="col" colspan="3">R</th></tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_AUTO" id="colR_MAG_AUTO" value="R_MAG_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_AUTO">R_MAG_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_AUTO">&ge;<span class="hidden">R_MAG_AUTO</span></label><input type="text" size="3" name="gtR_MAG_AUTO" id="gtR_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_AUTO">&le;<span class="hidden">R_MAG_AUTO</span></label><input type="text" size="3" name="ltR_MAG_AUTO" id="ltR_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_AUTO" id="colR_MAGERR_AUTO" value="R_MAGERR_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_AUTO">R_MAGERR_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_AUTO">&ge;<span class="hidden">R_MAGERR_AUTO</span></label><input type="text" size="3" name="gtR_MAGERR_AUTO" id="gtR_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_AUTO">&le;<span class="hidden">R_MAGERR_AUTO</span></label><input type="text" size="3" name="ltR_MAGERR_AUTO" id="ltR_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_ISO" id="colR_MAG_ISO" value="R_MAG_ISO" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_ISO">R_MAG_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_ISO">&ge;<span class="hidden">R_MAG_ISO</span></label><input type="text" size="3" name="gtR_MAG_ISO" id="gtR_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_ISO">&le;<span class="hidden">R_MAG_ISO</span></label><input type="text" size="3" name="ltR_MAG_ISO" id="ltR_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_ISO" id="colR_MAGERR_ISO" value="R_MAGERR_ISO" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_ISO">R_MAGERR_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_ISO">&ge;<span class="hidden">R_MAGERR_ISO</span></label><input type="text" size="3" name="gtR_MAGERR_ISO" id="gtR_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_ISO">&le;<span class="hidden">R_MAGERR_ISO</span></label><input type="text" size="3" name="ltR_MAGERR_ISO" id="ltR_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_PETRO" id="colR_MAG_PETRO" value="R_MAG_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_PETRO">R_MAG_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_PETRO">&ge;<span class="hidden">R_MAG_PETRO</span></label><input type="text" size="3" name="gtR_MAG_PETRO" id="gtR_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_PETRO">&le;<span class="hidden">R_MAG_PETRO</span></label><input type="text" size="3" name="ltR_MAG_PETRO" id="ltR_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_PETRO" id="colR_MAGERR_PETRO" value="R_MAGERR_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_PETRO">R_MAGERR_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_PETRO">&ge;<span class="hidden">R_MAGERR_PETRO</span></label><input type="text" size="3" name="gtR_MAGERR_PETRO" id="gtR_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_PETRO">&le;<span class="hidden">R_MAGERR_PETRO</span></label><input type="text" size="3" name="ltR_MAGERR_PETRO" id="ltR_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_APER_1" id="colR_MAG_APER_1" value="R_MAG_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_APER_1">R_MAG_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_APER_1">&ge;<span class="hidden">R_MAG_APER_1</span></label><input type="text" size="3" name="gtR_MAG_APER_1" id="gtR_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_APER_1">&le;<span class="hidden">R_MAG_APER_1</span></label><input type="text" size="3" name="ltR_MAG_APER_1" id="ltR_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_APER_2" id="colR_MAG_APER_2" value="R_MAG_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_APER_2">R_MAG_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_APER_2">&ge;<span class="hidden">R_MAG_APER_2</span></label><input type="text" size="3" name="gtR_MAG_APER_2" id="gtR_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_APER_2">&le;<span class="hidden">R_MAG_APER_2</span></label><input type="text" size="3" name="ltR_MAG_APER_2" id="ltR_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_APER_3" id="colR_MAG_APER_3" value="R_MAG_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_APER_3">R_MAG_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_APER_3">&ge;<span class="hidden">R_MAG_APER_3</span></label><input type="text" size="3" name="gtR_MAG_APER_3" id="gtR_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_APER_3">&le;<span class="hidden">R_MAG_APER_3</span></label><input type="text" size="3" name="ltR_MAG_APER_3" id="ltR_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_APER_4" id="colR_MAG_APER_4" value="R_MAG_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_APER_4">R_MAG_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_APER_4">&ge;<span class="hidden">R_MAG_APER_4</span></label><input type="text" size="3" name="gtR_MAG_APER_4" id="gtR_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_APER_4">&le;<span class="hidden">R_MAG_APER_4</span></label><input type="text" size="3" name="ltR_MAG_APER_4" id="ltR_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_APER_5" id="colR_MAG_APER_5" value="R_MAG_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_APER_5">R_MAG_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_APER_5">&ge;<span class="hidden">R_MAG_APER_5</span></label><input type="text" size="3" name="gtR_MAG_APER_5" id="gtR_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_APER_5">&le;<span class="hidden">R_MAG_APER_5</span></label><input type="text" size="3" name="ltR_MAG_APER_5" id="ltR_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_APER_6" id="colR_MAG_APER_6" value="R_MAG_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_APER_6">R_MAG_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_APER_6">&ge;<span class="hidden">R_MAG_APER_6</span></label><input type="text" size="3" name="gtR_MAG_APER_6" id="gtR_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_APER_6">&le;<span class="hidden">R_MAG_APER_6</span></label><input type="text" size="3" name="ltR_MAG_APER_6" id="ltR_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_APER_7" id="colR_MAG_APER_7" value="R_MAG_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_APER_7">R_MAG_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_APER_7">&ge;<span class="hidden">R_MAG_APER_7</span></label><input type="text" size="3" name="gtR_MAG_APER_7" id="gtR_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_APER_7">&le;<span class="hidden">R_MAG_APER_7</span></label><input type="text" size="3" name="ltR_MAG_APER_7" id="ltR_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAG_APER_8" id="colR_MAG_APER_8" value="R_MAG_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colR_MAG_APER_8">R_MAG_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAG_APER_8">&ge;<span class="hidden">R_MAG_APER_8</span></label><input type="text" size="3" name="gtR_MAG_APER_8" id="gtR_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAG_APER_8">&le;<span class="hidden">R_MAG_APER_8</span></label><input type="text" size="3" name="ltR_MAG_APER_8" id="ltR_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_APER_1" id="colR_MAGERR_APER_1" value="R_MAGERR_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_APER_1">R_MAGERR_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_APER_1">&ge;<span class="hidden">R_MAGERR_APER_1</span></label><input type="text" size="3" name="gtR_MAGERR_APER_1" id="gtR_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_APER_1">&le;<span class="hidden">R_MAGERR_APER_1</span></label><input type="text" size="3" name="ltR_MAGERR_APER_1" id="ltR_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_APER_2" id="colR_MAGERR_APER_2" value="R_MAGERR_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_APER_2">R_MAGERR_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_APER_2">&ge;<span class="hidden">R_MAGERR_APER_2</span></label><input type="text" size="3" name="gtR_MAGERR_APER_2" id="gtR_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_APER_2">&le;<span class="hidden">R_MAGERR_APER_2</span></label><input type="text" size="3" name="ltR_MAGERR_APER_2" id="ltR_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_APER_3" id="colR_MAGERR_APER_3" value="R_MAGERR_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_APER_3">R_MAGERR_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_APER_3">&ge;<span class="hidden">R_MAGERR_APER_3</span></label><input type="text" size="3" name="gtR_MAGERR_APER_3" id="gtR_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_APER_3">&le;<span class="hidden">R_MAGERR_APER_3</span></label><input type="text" size="3" name="ltR_MAGERR_APER_3" id="ltR_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_APER_4" id="colR_MAGERR_APER_4" value="R_MAGERR_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_APER_4">R_MAGERR_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_APER_4">&ge;<span class="hidden">R_MAGERR_APER_4</span></label><input type="text" size="3" name="gtR_MAGERR_APER_4" id="gtR_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_APER_4">&le;<span class="hidden">R_MAGERR_APER_4</span></label><input type="text" size="3" name="ltR_MAGERR_APER_4" id="ltR_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_APER_5" id="colR_MAGERR_APER_5" value="R_MAGERR_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_APER_5">R_MAGERR_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_APER_5">&ge;<span class="hidden">R_MAGERR_APER_5</span></label><input type="text" size="3" name="gtR_MAGERR_APER_5" id="gtR_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_APER_5">&le;<span class="hidden">R_MAGERR_APER_5</span></label><input type="text" size="3" name="ltR_MAGERR_APER_5" id="ltR_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_APER_6" id="colR_MAGERR_APER_6" value="R_MAGERR_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_APER_6">R_MAGERR_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_APER_6">&ge;<span class="hidden">R_MAGERR_APER_6</span></label><input type="text" size="3" name="gtR_MAGERR_APER_6" id="gtR_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_APER_6">&le;<span class="hidden">R_MAGERR_APER_6</span></label><input type="text" size="3" name="ltR_MAGERR_APER_6" id="ltR_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_APER_7" id="colR_MAGERR_APER_7" value="R_MAGERR_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_APER_7">R_MAGERR_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_APER_7">&ge;<span class="hidden">R_MAGERR_APER_7</span></label><input type="text" size="3" name="gtR_MAGERR_APER_7" id="gtR_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_APER_7">&le;<span class="hidden">R_MAGERR_APER_7</span></label><input type="text" size="3" name="ltR_MAGERR_APER_7" id="ltR_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MAGERR_APER_8" id="colR_MAGERR_APER_8" value="R_MAGERR_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colR_MAGERR_APER_8">R_MAGERR_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtR_MAGERR_APER_8">&ge;<span class="hidden">R_MAGERR_APER_8</span></label><input type="text" size="3" name="gtR_MAGERR_APER_8" id="gtR_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MAGERR_APER_8">&le;<span class="hidden">R_MAGERR_APER_8</span></label><input type="text" size="3" name="ltR_MAGERR_APER_8" id="ltR_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_FLUX_RADIUS" id="colR_FLUX_RADIUS" value="R_FLUX_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colR_FLUX_RADIUS">R_FLUX_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtR_FLUX_RADIUS">&ge;<span class="hidden">R_FLUX_RADIUS</span></label><input type="text" size="3" name="gtR_FLUX_RADIUS" id="gtR_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_FLUX_RADIUS">&le;<span class="hidden">R_FLUX_RADIUS</span></label><input type="text" size="3" name="ltR_FLUX_RADIUS" id="ltR_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_KRON_RADIUS" id="colR_KRON_RADIUS" value="R_KRON_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colR_KRON_RADIUS">R_KRON_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtR_KRON_RADIUS">&ge;<span class="hidden">R_KRON_RADIUS</span></label><input type="text" size="3" name="gtR_KRON_RADIUS" id="gtR_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_KRON_RADIUS">&le;<span class="hidden">R_KRON_RADIUS</span></label><input type="text" size="3" name="ltR_KRON_RADIUS" id="ltR_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_PETRO_RADIUS" id="colR_PETRO_RADIUS" value="R_PETRO_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colR_PETRO_RADIUS">R_PETRO_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtR_PETRO_RADIUS">&ge;<span class="hidden">R_PETRO_RADIUS</span></label><input type="text" size="3" name="gtR_PETRO_RADIUS" id="gtR_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_PETRO_RADIUS">&le;<span class="hidden">R_PETRO_RADIUS</span></label><input type="text" size="3" name="ltR_PETRO_RADIUS" id="ltR_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_BACKGROUND" id="colR_BACKGROUND" value="R_BACKGROUND" onclick="refreshquery()"/></td>
  <td><label for="colR_BACKGROUND">R_BACKGROUND</label></td>
  <td><span class="wrap-none">  <label for="gtR_BACKGROUND">&ge;<span class="hidden">R_BACKGROUND</span></label><input type="text" size="3" name="gtR_BACKGROUND" id="gtR_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_BACKGROUND">&le;<span class="hidden">R_BACKGROUND</span></label><input type="text" size="3" name="ltR_BACKGROUND" id="ltR_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MU_THRESHOLD" id="colR_MU_THRESHOLD" value="R_MU_THRESHOLD" onclick="refreshquery()"/></td>
  <td><label for="colR_MU_THRESHOLD">R_MU_THRESHOLD</label></td>
  <td><span class="wrap-none">  <label for="gtR_MU_THRESHOLD">&ge;<span class="hidden">R_MU_THRESHOLD</span></label><input type="text" size="3" name="gtR_MU_THRESHOLD" id="gtR_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MU_THRESHOLD">&le;<span class="hidden">R_MU_THRESHOLD</span></label><input type="text" size="3" name="ltR_MU_THRESHOLD" id="ltR_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_MU_MAX" id="colR_MU_MAX" value="R_MU_MAX" onclick="refreshquery()"/></td>
  <td><label for="colR_MU_MAX">R_MU_MAX</label></td>
  <td><span class="wrap-none">  <label for="gtR_MU_MAX">&ge;<span class="hidden">R_MU_MAX</span></label><input type="text" size="3" name="gtR_MU_MAX" id="gtR_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_MU_MAX">&le;<span class="hidden">R_MU_MAX</span></label><input type="text" size="3" name="ltR_MU_MAX" id="ltR_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_ISOAREA_WORLD" id="colR_ISOAREA_WORLD" value="R_ISOAREA_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colR_ISOAREA_WORLD">R_ISOAREA_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtR_ISOAREA_WORLD">&ge;<span class="hidden">R_ISOAREA_WORLD</span></label><input type="text" size="3" name="gtR_ISOAREA_WORLD" id="gtR_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_ISOAREA_WORLD">&le;<span class="hidden">R_ISOAREA_WORLD</span></label><input type="text" size="3" name="ltR_ISOAREA_WORLD" id="ltR_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_FLAGS" id="colR_FLAGS" value="R_FLAGS" onclick="refreshquery()"/></td>
  <td><label for="colR_FLAGS">R_FLAGS</label></td>
  <td><span class="wrap-none">  <label for="gtR_FLAGS">&ge;<span class="hidden">R_FLAGS</span></label><input type="text" size="3" name="gtR_FLAGS" id="gtR_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_FLAGS">&le;<span class="hidden">R_FLAGS</span></label><input type="text" size="3" name="ltR_FLAGS" id="ltR_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_CLASS_STAR" id="colR_CLASS_STAR" value="R_CLASS_STAR" onclick="refreshquery()"/></td>
  <td><label for="colR_CLASS_STAR">R_CLASS_STAR</label></td>
  <td><span class="wrap-none">  <label for="gtR_CLASS_STAR">&ge;<span class="hidden">R_CLASS_STAR</span></label><input type="text" size="3" name="gtR_CLASS_STAR" id="gtR_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_CLASS_STAR">&le;<span class="hidden">R_CLASS_STAR</span></label><input type="text" size="3" name="ltR_CLASS_STAR" id="ltR_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_dubious" id="colR_dubious" value="R_dubious" onclick="refreshquery()"/></td>
  <td><label for="colR_dubious">R_dubious</label></td>
  <td><span class="wrap-none">  <label for="gtR_dubious">&ge;<span class="hidden">R_dubious</span></label><input type="text" size="3" name="gtR_dubious" id="gtR_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_dubious">&le;<span class="hidden">R_dubious</span></label><input type="text" size="3" name="ltR_dubious" id="ltR_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_maglimit" id="colR_maglimit" value="R_maglimit" onclick="refreshquery()"/></td>
  <td><label for="colR_maglimit">R_maglimit</label></td>
  <td><span class="wrap-none">  <label for="gtR_maglimit">&ge;<span class="hidden">R_maglimit</span></label><input type="text" size="3" name="gtR_maglimit" id="gtR_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_maglimit">&le;<span class="hidden">R_maglimit</span></label><input type="text" size="3" name="ltR_maglimit" id="ltR_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colR_IQ" id="colR_IQ" value="R_IQ" onclick="refreshquery()"/></td>
  <td><label for="colR_IQ">R_IQ</label></td>
  <td><span class="wrap-none">  <label for="gtR_IQ">&ge;<span class="hidden">R_IQ</span></label><input type="text" size="3" name="gtR_IQ" id="gtR_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltR_IQ">&le;<span class="hidden">R_IQ</span></label><input type="text" size="3" name="ltR_IQ" id="ltR_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr><td></td><td></td><td></td></tr>
</table>
</td>
<td>
<table class="table small table-bordered">
<tr>
<th scope="col" colspan="3">I</th></tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_AUTO" id="colI_MAG_AUTO" value="I_MAG_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_AUTO">I_MAG_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_AUTO">&ge;<span class="hidden">I_MAG_AUTO</span></label><input type="text" size="3" name="gtI_MAG_AUTO" id="gtI_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_AUTO">&le;<span class="hidden">I_MAG_AUTO</span></label><input type="text" size="3" name="ltI_MAG_AUTO" id="ltI_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_AUTO" id="colI_MAGERR_AUTO" value="I_MAGERR_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_AUTO">I_MAGERR_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_AUTO">&ge;<span class="hidden">I_MAGERR_AUTO</span></label><input type="text" size="3" name="gtI_MAGERR_AUTO" id="gtI_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_AUTO">&le;<span class="hidden">I_MAGERR_AUTO</span></label><input type="text" size="3" name="ltI_MAGERR_AUTO" id="ltI_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_ISO" id="colI_MAG_ISO" value="I_MAG_ISO" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_ISO">I_MAG_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_ISO">&ge;<span class="hidden">I_MAG_ISO</span></label><input type="text" size="3" name="gtI_MAG_ISO" id="gtI_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_ISO">&le;<span class="hidden">I_MAG_ISO</span></label><input type="text" size="3" name="ltI_MAG_ISO" id="ltI_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_ISO" id="colI_MAGERR_ISO" value="I_MAGERR_ISO" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_ISO">I_MAGERR_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_ISO">&ge;<span class="hidden">I_MAGERR_ISO</span></label><input type="text" size="3" name="gtI_MAGERR_ISO" id="gtI_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_ISO">&le;<span class="hidden">I_MAGERR_ISO</span></label><input type="text" size="3" name="ltI_MAGERR_ISO" id="ltI_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_PETRO" id="colI_MAG_PETRO" value="I_MAG_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_PETRO">I_MAG_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_PETRO">&ge;<span class="hidden">I_MAG_PETRO</span></label><input type="text" size="3" name="gtI_MAG_PETRO" id="gtI_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_PETRO">&le;<span class="hidden">I_MAG_PETRO</span></label><input type="text" size="3" name="ltI_MAG_PETRO" id="ltI_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_PETRO" id="colI_MAGERR_PETRO" value="I_MAGERR_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_PETRO">I_MAGERR_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_PETRO">&ge;<span class="hidden">I_MAGERR_PETRO</span></label><input type="text" size="3" name="gtI_MAGERR_PETRO" id="gtI_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_PETRO">&le;<span class="hidden">I_MAGERR_PETRO</span></label><input type="text" size="3" name="ltI_MAGERR_PETRO" id="ltI_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_APER_1" id="colI_MAG_APER_1" value="I_MAG_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_APER_1">I_MAG_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_APER_1">&ge;<span class="hidden">I_MAG_APER_1</span></label><input type="text" size="3" name="gtI_MAG_APER_1" id="gtI_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_APER_1">&le;<span class="hidden">I_MAG_APER_1</span></label><input type="text" size="3" name="ltI_MAG_APER_1" id="ltI_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_APER_2" id="colI_MAG_APER_2" value="I_MAG_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_APER_2">I_MAG_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_APER_2">&ge;<span class="hidden">I_MAG_APER_2</span></label><input type="text" size="3" name="gtI_MAG_APER_2" id="gtI_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_APER_2">&le;<span class="hidden">I_MAG_APER_2</span></label><input type="text" size="3" name="ltI_MAG_APER_2" id="ltI_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_APER_3" id="colI_MAG_APER_3" value="I_MAG_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_APER_3">I_MAG_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_APER_3">&ge;<span class="hidden">I_MAG_APER_3</span></label><input type="text" size="3" name="gtI_MAG_APER_3" id="gtI_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_APER_3">&le;<span class="hidden">I_MAG_APER_3</span></label><input type="text" size="3" name="ltI_MAG_APER_3" id="ltI_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_APER_4" id="colI_MAG_APER_4" value="I_MAG_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_APER_4">I_MAG_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_APER_4">&ge;<span class="hidden">I_MAG_APER_4</span></label><input type="text" size="3" name="gtI_MAG_APER_4" id="gtI_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_APER_4">&le;<span class="hidden">I_MAG_APER_4</span></label><input type="text" size="3" name="ltI_MAG_APER_4" id="ltI_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_APER_5" id="colI_MAG_APER_5" value="I_MAG_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_APER_5">I_MAG_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_APER_5">&ge;<span class="hidden">I_MAG_APER_5</span></label><input type="text" size="3" name="gtI_MAG_APER_5" id="gtI_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_APER_5">&le;<span class="hidden">I_MAG_APER_5</span></label><input type="text" size="3" name="ltI_MAG_APER_5" id="ltI_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_APER_6" id="colI_MAG_APER_6" value="I_MAG_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_APER_6">I_MAG_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_APER_6">&ge;<span class="hidden">I_MAG_APER_6</span></label><input type="text" size="3" name="gtI_MAG_APER_6" id="gtI_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_APER_6">&le;<span class="hidden">I_MAG_APER_6</span></label><input type="text" size="3" name="ltI_MAG_APER_6" id="ltI_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_APER_7" id="colI_MAG_APER_7" value="I_MAG_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_APER_7">I_MAG_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_APER_7">&ge;<span class="hidden">I_MAG_APER_7</span></label><input type="text" size="3" name="gtI_MAG_APER_7" id="gtI_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_APER_7">&le;<span class="hidden">I_MAG_APER_7</span></label><input type="text" size="3" name="ltI_MAG_APER_7" id="ltI_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAG_APER_8" id="colI_MAG_APER_8" value="I_MAG_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colI_MAG_APER_8">I_MAG_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAG_APER_8">&ge;<span class="hidden">I_MAG_APER_8</span></label><input type="text" size="3" name="gtI_MAG_APER_8" id="gtI_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAG_APER_8">&le;<span class="hidden">I_MAG_APER_8</span></label><input type="text" size="3" name="ltI_MAG_APER_8" id="ltI_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_APER_1" id="colI_MAGERR_APER_1" value="I_MAGERR_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_APER_1">I_MAGERR_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_APER_1">&ge;<span class="hidden">I_MAGERR_APER_1</span></label><input type="text" size="3" name="gtI_MAGERR_APER_1" id="gtI_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_APER_1">&le;<span class="hidden">I_MAGERR_APER_1</span></label><input type="text" size="3" name="ltI_MAGERR_APER_1" id="ltI_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_APER_2" id="colI_MAGERR_APER_2" value="I_MAGERR_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_APER_2">I_MAGERR_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_APER_2">&ge;<span class="hidden">I_MAGERR_APER_2</span></label><input type="text" size="3" name="gtI_MAGERR_APER_2" id="gtI_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_APER_2">&le;<span class="hidden">I_MAGERR_APER_2</span></label><input type="text" size="3" name="ltI_MAGERR_APER_2" id="ltI_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_APER_3" id="colI_MAGERR_APER_3" value="I_MAGERR_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_APER_3">I_MAGERR_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_APER_3">&ge;<span class="hidden">I_MAGERR_APER_3</span></label><input type="text" size="3" name="gtI_MAGERR_APER_3" id="gtI_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_APER_3">&le;<span class="hidden">I_MAGERR_APER_3</span></label><input type="text" size="3" name="ltI_MAGERR_APER_3" id="ltI_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_APER_4" id="colI_MAGERR_APER_4" value="I_MAGERR_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_APER_4">I_MAGERR_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_APER_4">&ge;<span class="hidden">I_MAGERR_APER_4</span></label><input type="text" size="3" name="gtI_MAGERR_APER_4" id="gtI_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_APER_4">&le;<span class="hidden">I_MAGERR_APER_4</span></label><input type="text" size="3" name="ltI_MAGERR_APER_4" id="ltI_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_APER_5" id="colI_MAGERR_APER_5" value="I_MAGERR_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_APER_5">I_MAGERR_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_APER_5">&ge;<span class="hidden">I_MAGERR_APER_5</span></label><input type="text" size="3" name="gtI_MAGERR_APER_5" id="gtI_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_APER_5">&le;<span class="hidden">I_MAGERR_APER_5</span></label><input type="text" size="3" name="ltI_MAGERR_APER_5" id="ltI_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_APER_6" id="colI_MAGERR_APER_6" value="I_MAGERR_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_APER_6">I_MAGERR_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_APER_6">&ge;<span class="hidden">I_MAGERR_APER_6</span></label><input type="text" size="3" name="gtI_MAGERR_APER_6" id="gtI_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_APER_6">&le;<span class="hidden">I_MAGERR_APER_6</span></label><input type="text" size="3" name="ltI_MAGERR_APER_6" id="ltI_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_APER_7" id="colI_MAGERR_APER_7" value="I_MAGERR_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_APER_7">I_MAGERR_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_APER_7">&ge;<span class="hidden">I_MAGERR_APER_7</span></label><input type="text" size="3" name="gtI_MAGERR_APER_7" id="gtI_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_APER_7">&le;<span class="hidden">I_MAGERR_APER_7</span></label><input type="text" size="3" name="ltI_MAGERR_APER_7" id="ltI_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MAGERR_APER_8" id="colI_MAGERR_APER_8" value="I_MAGERR_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colI_MAGERR_APER_8">I_MAGERR_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtI_MAGERR_APER_8">&ge;<span class="hidden">I_MAGERR_APER_8</span></label><input type="text" size="3" name="gtI_MAGERR_APER_8" id="gtI_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MAGERR_APER_8">&le;<span class="hidden">I_MAGERR_APER_8</span></label><input type="text" size="3" name="ltI_MAGERR_APER_8" id="ltI_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_FLUX_RADIUS" id="colI_FLUX_RADIUS" value="I_FLUX_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colI_FLUX_RADIUS">I_FLUX_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtI_FLUX_RADIUS">&ge;<span class="hidden">I_FLUX_RADIUS</span></label><input type="text" size="3" name="gtI_FLUX_RADIUS" id="gtI_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_FLUX_RADIUS">&le;<span class="hidden">I_FLUX_RADIUS</span></label><input type="text" size="3" name="ltI_FLUX_RADIUS" id="ltI_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_KRON_RADIUS" id="colI_KRON_RADIUS" value="I_KRON_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colI_KRON_RADIUS">I_KRON_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtI_KRON_RADIUS">&ge;<span class="hidden">I_KRON_RADIUS</span></label><input type="text" size="3" name="gtI_KRON_RADIUS" id="gtI_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_KRON_RADIUS">&le;<span class="hidden">I_KRON_RADIUS</span></label><input type="text" size="3" name="ltI_KRON_RADIUS" id="ltI_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_PETRO_RADIUS" id="colI_PETRO_RADIUS" value="I_PETRO_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colI_PETRO_RADIUS">I_PETRO_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtI_PETRO_RADIUS">&ge;<span class="hidden">I_PETRO_RADIUS</span></label><input type="text" size="3" name="gtI_PETRO_RADIUS" id="gtI_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_PETRO_RADIUS">&le;<span class="hidden">I_PETRO_RADIUS</span></label><input type="text" size="3" name="ltI_PETRO_RADIUS" id="ltI_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_BACKGROUND" id="colI_BACKGROUND" value="I_BACKGROUND" onclick="refreshquery()"/></td>
  <td><label for="colI_BACKGROUND">I_BACKGROUND</label></td>
  <td><span class="wrap-none">  <label for="gtI_BACKGROUND">&ge;<span class="hidden">I_BACKGROUND</span></label><input type="text" size="3" name="gtI_BACKGROUND" id="gtI_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_BACKGROUND">&le;<span class="hidden">I_BACKGROUND</span></label><input type="text" size="3" name="ltI_BACKGROUND" id="ltI_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MU_THRESHOLD" id="colI_MU_THRESHOLD" value="I_MU_THRESHOLD" onclick="refreshquery()"/></td>
  <td><label for="colI_MU_THRESHOLD">I_MU_THRESHOLD</label></td>
  <td><span class="wrap-none">  <label for="gtI_MU_THRESHOLD">&ge;<span class="hidden">I_MU_THRESHOLD</span></label><input type="text" size="3" name="gtI_MU_THRESHOLD" id="gtI_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MU_THRESHOLD">&le;<span class="hidden">I_MU_THRESHOLD</span></label><input type="text" size="3" name="ltI_MU_THRESHOLD" id="ltI_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_MU_MAX" id="colI_MU_MAX" value="I_MU_MAX" onclick="refreshquery()"/></td>
  <td><label for="colI_MU_MAX">I_MU_MAX</label></td>
  <td><span class="wrap-none">  <label for="gtI_MU_MAX">&ge;<span class="hidden">I_MU_MAX</span></label><input type="text" size="3" name="gtI_MU_MAX" id="gtI_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_MU_MAX">&le;<span class="hidden">I_MU_MAX</span></label><input type="text" size="3" name="ltI_MU_MAX" id="ltI_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_ISOAREA_WORLD" id="colI_ISOAREA_WORLD" value="I_ISOAREA_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colI_ISOAREA_WORLD">I_ISOAREA_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtI_ISOAREA_WORLD">&ge;<span class="hidden">I_ISOAREA_WORLD</span></label><input type="text" size="3" name="gtI_ISOAREA_WORLD" id="gtI_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_ISOAREA_WORLD">&le;<span class="hidden">I_ISOAREA_WORLD</span></label><input type="text" size="3" name="ltI_ISOAREA_WORLD" id="ltI_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_FLAGS" id="colI_FLAGS" value="I_FLAGS" onclick="refreshquery()"/></td>
  <td><label for="colI_FLAGS">I_FLAGS</label></td>
  <td><span class="wrap-none">  <label for="gtI_FLAGS">&ge;<span class="hidden">I_FLAGS</span></label><input type="text" size="3" name="gtI_FLAGS" id="gtI_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_FLAGS">&le;<span class="hidden">I_FLAGS</span></label><input type="text" size="3" name="ltI_FLAGS" id="ltI_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_CLASS_STAR" id="colI_CLASS_STAR" value="I_CLASS_STAR" onclick="refreshquery()"/></td>
  <td><label for="colI_CLASS_STAR">I_CLASS_STAR</label></td>
  <td><span class="wrap-none">  <label for="gtI_CLASS_STAR">&ge;<span class="hidden">I_CLASS_STAR</span></label><input type="text" size="3" name="gtI_CLASS_STAR" id="gtI_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_CLASS_STAR">&le;<span class="hidden">I_CLASS_STAR</span></label><input type="text" size="3" name="ltI_CLASS_STAR" id="ltI_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_dubious" id="colI_dubious" value="I_dubious" onclick="refreshquery()"/></td>
  <td><label for="colI_dubious">I_dubious</label></td>
  <td><span class="wrap-none">  <label for="gtI_dubious">&ge;<span class="hidden">I_dubious</span></label><input type="text" size="3" name="gtI_dubious" id="gtI_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_dubious">&le;<span class="hidden">I_dubious</span></label><input type="text" size="3" name="ltI_dubious" id="ltI_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_maglimit" id="colI_maglimit" value="I_maglimit" onclick="refreshquery()"/></td>
  <td><label for="colI_maglimit">I_maglimit</label></td>
  <td><span class="wrap-none">  <label for="gtI_maglimit">&ge;<span class="hidden">I_maglimit</span></label><input type="text" size="3" name="gtI_maglimit" id="gtI_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_maglimit">&le;<span class="hidden">I_maglimit</span></label><input type="text" size="3" name="ltI_maglimit" id="ltI_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_IQ" id="colI_IQ" value="I_IQ" onclick="refreshquery()"/></td>
  <td><label for="colI_IQ">I_IQ</label></td>
  <td><span class="wrap-none">  <label for="gtI_IQ">&ge;<span class="hidden">I_IQ</span></label><input type="text" size="3" name="gtI_IQ" id="gtI_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_IQ">&le;<span class="hidden">I_IQ</span></label><input type="text" size="3" name="ltI_IQ" id="ltI_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colI_version" id="colI_version" value="I_version" onclick="refreshquery()"/></td>
  <td><label for="colI_version">I_version</label></td>
  <td><span class="wrap-none">  <label for="gtI_version">&ge;<span class="hidden">I_version</span></label><input type="text" size="3" name="gtI_version" id="gtI_version" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltI_version">&le;<span class="hidden">I_version</span></label><input type="text" size="3" name="ltI_version" id="ltI_version" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
</table>
</td>
<td>
<table class="table small table-bordered">
<tr>
<th scope="col" colspan="3">Z</th></tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_AUTO" id="colZ_MAG_AUTO" value="Z_MAG_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_AUTO">Z_MAG_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_AUTO">&ge;<span class="hidden">Z_MAG_AUTO</span></label><input type="text" size="3" name="gtZ_MAG_AUTO" id="gtZ_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_AUTO">&le;<span class="hidden">Z_MAG_AUTO</span></label><input type="text" size="3" name="ltZ_MAG_AUTO" id="ltZ_MAG_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_AUTO" id="colZ_MAGERR_AUTO" value="Z_MAGERR_AUTO" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_AUTO">Z_MAGERR_AUTO</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_AUTO">&ge;<span class="hidden">Z_MAGERR_AUTO</span></label><input type="text" size="3" name="gtZ_MAGERR_AUTO" id="gtZ_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_AUTO">&le;<span class="hidden">Z_MAGERR_AUTO</span></label><input type="text" size="3" name="ltZ_MAGERR_AUTO" id="ltZ_MAGERR_AUTO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_ISO" id="colZ_MAG_ISO" value="Z_MAG_ISO" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_ISO">Z_MAG_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_ISO">&ge;<span class="hidden">Z_MAG_ISO</span></label><input type="text" size="3" name="gtZ_MAG_ISO" id="gtZ_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_ISO">&le;<span class="hidden">Z_MAG_ISO</span></label><input type="text" size="3" name="ltZ_MAG_ISO" id="ltZ_MAG_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_ISO" id="colZ_MAGERR_ISO" value="Z_MAGERR_ISO" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_ISO">Z_MAGERR_ISO</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_ISO">&ge;<span class="hidden">Z_MAGERR_ISO</span></label><input type="text" size="3" name="gtZ_MAGERR_ISO" id="gtZ_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_ISO">&le;<span class="hidden">Z_MAGERR_ISO</span></label><input type="text" size="3" name="ltZ_MAGERR_ISO" id="ltZ_MAGERR_ISO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_PETRO" id="colZ_MAG_PETRO" value="Z_MAG_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_PETRO">Z_MAG_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_PETRO">&ge;<span class="hidden">Z_MAG_PETRO</span></label><input type="text" size="3" name="gtZ_MAG_PETRO" id="gtZ_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_PETRO">&le;<span class="hidden">Z_MAG_PETRO</span></label><input type="text" size="3" name="ltZ_MAG_PETRO" id="ltZ_MAG_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_PETRO" id="colZ_MAGERR_PETRO" value="Z_MAGERR_PETRO" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_PETRO">Z_MAGERR_PETRO</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_PETRO">&ge;<span class="hidden">Z_MAGERR_PETRO</span></label><input type="text" size="3" name="gtZ_MAGERR_PETRO" id="gtZ_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_PETRO">&le;<span class="hidden">Z_MAGERR_PETRO</span></label><input type="text" size="3" name="ltZ_MAGERR_PETRO" id="ltZ_MAGERR_PETRO" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_APER_1" id="colZ_MAG_APER_1" value="Z_MAG_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_APER_1">Z_MAG_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_APER_1">&ge;<span class="hidden">Z_MAG_APER_1</span></label><input type="text" size="3" name="gtZ_MAG_APER_1" id="gtZ_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_APER_1">&le;<span class="hidden">Z_MAG_APER_1</span></label><input type="text" size="3" name="ltZ_MAG_APER_1" id="ltZ_MAG_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_APER_2" id="colZ_MAG_APER_2" value="Z_MAG_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_APER_2">Z_MAG_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_APER_2">&ge;<span class="hidden">Z_MAG_APER_2</span></label><input type="text" size="3" name="gtZ_MAG_APER_2" id="gtZ_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_APER_2">&le;<span class="hidden">Z_MAG_APER_2</span></label><input type="text" size="3" name="ltZ_MAG_APER_2" id="ltZ_MAG_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_APER_3" id="colZ_MAG_APER_3" value="Z_MAG_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_APER_3">Z_MAG_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_APER_3">&ge;<span class="hidden">Z_MAG_APER_3</span></label><input type="text" size="3" name="gtZ_MAG_APER_3" id="gtZ_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_APER_3">&le;<span class="hidden">Z_MAG_APER_3</span></label><input type="text" size="3" name="ltZ_MAG_APER_3" id="ltZ_MAG_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_APER_4" id="colZ_MAG_APER_4" value="Z_MAG_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_APER_4">Z_MAG_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_APER_4">&ge;<span class="hidden">Z_MAG_APER_4</span></label><input type="text" size="3" name="gtZ_MAG_APER_4" id="gtZ_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_APER_4">&le;<span class="hidden">Z_MAG_APER_4</span></label><input type="text" size="3" name="ltZ_MAG_APER_4" id="ltZ_MAG_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_APER_5" id="colZ_MAG_APER_5" value="Z_MAG_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_APER_5">Z_MAG_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_APER_5">&ge;<span class="hidden">Z_MAG_APER_5</span></label><input type="text" size="3" name="gtZ_MAG_APER_5" id="gtZ_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_APER_5">&le;<span class="hidden">Z_MAG_APER_5</span></label><input type="text" size="3" name="ltZ_MAG_APER_5" id="ltZ_MAG_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_APER_6" id="colZ_MAG_APER_6" value="Z_MAG_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_APER_6">Z_MAG_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_APER_6">&ge;<span class="hidden">Z_MAG_APER_6</span></label><input type="text" size="3" name="gtZ_MAG_APER_6" id="gtZ_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_APER_6">&le;<span class="hidden">Z_MAG_APER_6</span></label><input type="text" size="3" name="ltZ_MAG_APER_6" id="ltZ_MAG_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_APER_7" id="colZ_MAG_APER_7" value="Z_MAG_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_APER_7">Z_MAG_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_APER_7">&ge;<span class="hidden">Z_MAG_APER_7</span></label><input type="text" size="3" name="gtZ_MAG_APER_7" id="gtZ_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_APER_7">&le;<span class="hidden">Z_MAG_APER_7</span></label><input type="text" size="3" name="ltZ_MAG_APER_7" id="ltZ_MAG_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAG_APER_8" id="colZ_MAG_APER_8" value="Z_MAG_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAG_APER_8">Z_MAG_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAG_APER_8">&ge;<span class="hidden">Z_MAG_APER_8</span></label><input type="text" size="3" name="gtZ_MAG_APER_8" id="gtZ_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAG_APER_8">&le;<span class="hidden">Z_MAG_APER_8</span></label><input type="text" size="3" name="ltZ_MAG_APER_8" id="ltZ_MAG_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_APER_1" id="colZ_MAGERR_APER_1" value="Z_MAGERR_APER_1" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_APER_1">Z_MAGERR_APER_1</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_APER_1">&ge;<span class="hidden">Z_MAGERR_APER_1</span></label><input type="text" size="3" name="gtZ_MAGERR_APER_1" id="gtZ_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_APER_1">&le;<span class="hidden">Z_MAGERR_APER_1</span></label><input type="text" size="3" name="ltZ_MAGERR_APER_1" id="ltZ_MAGERR_APER_1" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_APER_2" id="colZ_MAGERR_APER_2" value="Z_MAGERR_APER_2" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_APER_2">Z_MAGERR_APER_2</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_APER_2">&ge;<span class="hidden">Z_MAGERR_APER_2</span></label><input type="text" size="3" name="gtZ_MAGERR_APER_2" id="gtZ_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_APER_2">&le;<span class="hidden">Z_MAGERR_APER_2</span></label><input type="text" size="3" name="ltZ_MAGERR_APER_2" id="ltZ_MAGERR_APER_2" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_APER_3" id="colZ_MAGERR_APER_3" value="Z_MAGERR_APER_3" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_APER_3">Z_MAGERR_APER_3</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_APER_3">&ge;<span class="hidden">Z_MAGERR_APER_3</span></label><input type="text" size="3" name="gtZ_MAGERR_APER_3" id="gtZ_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_APER_3">&le;<span class="hidden">Z_MAGERR_APER_3</span></label><input type="text" size="3" name="ltZ_MAGERR_APER_3" id="ltZ_MAGERR_APER_3" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_APER_4" id="colZ_MAGERR_APER_4" value="Z_MAGERR_APER_4" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_APER_4">Z_MAGERR_APER_4</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_APER_4">&ge;<span class="hidden">Z_MAGERR_APER_4</span></label><input type="text" size="3" name="gtZ_MAGERR_APER_4" id="gtZ_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_APER_4">&le;<span class="hidden">Z_MAGERR_APER_4</span></label><input type="text" size="3" name="ltZ_MAGERR_APER_4" id="ltZ_MAGERR_APER_4" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_APER_5" id="colZ_MAGERR_APER_5" value="Z_MAGERR_APER_5" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_APER_5">Z_MAGERR_APER_5</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_APER_5">&ge;<span class="hidden">Z_MAGERR_APER_5</span></label><input type="text" size="3" name="gtZ_MAGERR_APER_5" id="gtZ_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_APER_5">&le;<span class="hidden">Z_MAGERR_APER_5</span></label><input type="text" size="3" name="ltZ_MAGERR_APER_5" id="ltZ_MAGERR_APER_5" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_APER_6" id="colZ_MAGERR_APER_6" value="Z_MAGERR_APER_6" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_APER_6">Z_MAGERR_APER_6</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_APER_6">&ge;<span class="hidden">Z_MAGERR_APER_6</span></label><input type="text" size="3" name="gtZ_MAGERR_APER_6" id="gtZ_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_APER_6">&le;<span class="hidden">Z_MAGERR_APER_6</span></label><input type="text" size="3" name="ltZ_MAGERR_APER_6" id="ltZ_MAGERR_APER_6" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_APER_7" id="colZ_MAGERR_APER_7" value="Z_MAGERR_APER_7" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_APER_7">Z_MAGERR_APER_7</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_APER_7">&ge;<span class="hidden">Z_MAGERR_APER_7</span></label><input type="text" size="3" name="gtZ_MAGERR_APER_7" id="gtZ_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_APER_7">&le;<span class="hidden">Z_MAGERR_APER_7</span></label><input type="text" size="3" name="ltZ_MAGERR_APER_7" id="ltZ_MAGERR_APER_7" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MAGERR_APER_8" id="colZ_MAGERR_APER_8" value="Z_MAGERR_APER_8" onclick="refreshquery()"/></td>
  <td><label for="colZ_MAGERR_APER_8">Z_MAGERR_APER_8</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MAGERR_APER_8">&ge;<span class="hidden">Z_MAGERR_APER_8</span></label><input type="text" size="3" name="gtZ_MAGERR_APER_8" id="gtZ_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MAGERR_APER_8">&le;<span class="hidden">Z_MAGERR_APER_8</span></label><input type="text" size="3" name="ltZ_MAGERR_APER_8" id="ltZ_MAGERR_APER_8" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_FLUX_RADIUS" id="colZ_FLUX_RADIUS" value="Z_FLUX_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colZ_FLUX_RADIUS">Z_FLUX_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtZ_FLUX_RADIUS">&ge;<span class="hidden">Z_FLUX_RADIUS</span></label><input type="text" size="3" name="gtZ_FLUX_RADIUS" id="gtZ_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_FLUX_RADIUS">&le;<span class="hidden">Z_FLUX_RADIUS</span></label><input type="text" size="3" name="ltZ_FLUX_RADIUS" id="ltZ_FLUX_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_KRON_RADIUS" id="colZ_KRON_RADIUS" value="Z_KRON_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colZ_KRON_RADIUS">Z_KRON_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtZ_KRON_RADIUS">&ge;<span class="hidden">Z_KRON_RADIUS</span></label><input type="text" size="3" name="gtZ_KRON_RADIUS" id="gtZ_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_KRON_RADIUS">&le;<span class="hidden">Z_KRON_RADIUS</span></label><input type="text" size="3" name="ltZ_KRON_RADIUS" id="ltZ_KRON_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_PETRO_RADIUS" id="colZ_PETRO_RADIUS" value="Z_PETRO_RADIUS" onclick="refreshquery()"/></td>
  <td><label for="colZ_PETRO_RADIUS">Z_PETRO_RADIUS</label></td>
  <td><span class="wrap-none">  <label for="gtZ_PETRO_RADIUS">&ge;<span class="hidden">Z_PETRO_RADIUS</span></label><input type="text" size="3" name="gtZ_PETRO_RADIUS" id="gtZ_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_PETRO_RADIUS">&le;<span class="hidden">Z_PETRO_RADIUS</span></label><input type="text" size="3" name="ltZ_PETRO_RADIUS" id="ltZ_PETRO_RADIUS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_BACKGROUND" id="colZ_BACKGROUND" value="Z_BACKGROUND" onclick="refreshquery()"/></td>
  <td><label for="colZ_BACKGROUND">Z_BACKGROUND</label></td>
  <td><span class="wrap-none">  <label for="gtZ_BACKGROUND">&ge;<span class="hidden">Z_BACKGROUND</span></label><input type="text" size="3" name="gtZ_BACKGROUND" id="gtZ_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_BACKGROUND">&le;<span class="hidden">Z_BACKGROUND</span></label><input type="text" size="3" name="ltZ_BACKGROUND" id="ltZ_BACKGROUND" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MU_THRESHOLD" id="colZ_MU_THRESHOLD" value="Z_MU_THRESHOLD" onclick="refreshquery()"/></td>
  <td><label for="colZ_MU_THRESHOLD">Z_MU_THRESHOLD</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MU_THRESHOLD">&ge;<span class="hidden">Z_MU_THRESHOLD</span></label><input type="text" size="3" name="gtZ_MU_THRESHOLD" id="gtZ_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MU_THRESHOLD">&le;<span class="hidden">Z_MU_THRESHOLD</span></label><input type="text" size="3" name="ltZ_MU_THRESHOLD" id="ltZ_MU_THRESHOLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_MU_MAX" id="colZ_MU_MAX" value="Z_MU_MAX" onclick="refreshquery()"/></td>
  <td><label for="colZ_MU_MAX">Z_MU_MAX</label></td>
  <td><span class="wrap-none">  <label for="gtZ_MU_MAX">&ge;<span class="hidden">Z_MU_MAX</span></label><input type="text" size="3" name="gtZ_MU_MAX" id="gtZ_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_MU_MAX">&le;<span class="hidden">Z_MU_MAX</span></label><input type="text" size="3" name="ltZ_MU_MAX" id="ltZ_MU_MAX" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_ISOAREA_WORLD" id="colZ_ISOAREA_WORLD" value="Z_ISOAREA_WORLD" onclick="refreshquery()"/></td>
  <td><label for="colZ_ISOAREA_WORLD">Z_ISOAREA_WORLD</label></td>
  <td><span class="wrap-none">  <label for="gtZ_ISOAREA_WORLD">&ge;<span class="hidden">Z_ISOAREA_WORLD</span></label><input type="text" size="3" name="gtZ_ISOAREA_WORLD" id="gtZ_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_ISOAREA_WORLD">&le;<span class="hidden">Z_ISOAREA_WORLD</span></label><input type="text" size="3" name="ltZ_ISOAREA_WORLD" id="ltZ_ISOAREA_WORLD" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_FLAGS" id="colZ_FLAGS" value="Z_FLAGS" onclick="refreshquery()"/></td>
  <td><label for="colZ_FLAGS">Z_FLAGS</label></td>
  <td><span class="wrap-none">  <label for="gtZ_FLAGS">&ge;<span class="hidden">Z_FLAGS</span></label><input type="text" size="3" name="gtZ_FLAGS" id="gtZ_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_FLAGS">&le;<span class="hidden">Z_FLAGS</span></label><input type="text" size="3" name="ltZ_FLAGS" id="ltZ_FLAGS" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_CLASS_STAR" id="colZ_CLASS_STAR" value="Z_CLASS_STAR" onclick="refreshquery()"/></td>
  <td><label for="colZ_CLASS_STAR">Z_CLASS_STAR</label></td>
  <td><span class="wrap-none">  <label for="gtZ_CLASS_STAR">&ge;<span class="hidden">Z_CLASS_STAR</span></label><input type="text" size="3" name="gtZ_CLASS_STAR" id="gtZ_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_CLASS_STAR">&le;<span class="hidden">Z_CLASS_STAR</span></label><input type="text" size="3" name="ltZ_CLASS_STAR" id="ltZ_CLASS_STAR" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_dubious" id="colZ_dubious" value="Z_dubious" onclick="refreshquery()"/></td>
  <td><label for="colZ_dubious">Z_dubious</label></td>
  <td><span class="wrap-none">  <label for="gtZ_dubious">&ge;<span class="hidden">Z_dubious</span></label><input type="text" size="3" name="gtZ_dubious" id="gtZ_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_dubious">&le;<span class="hidden">Z_dubious</span></label><input type="text" size="3" name="ltZ_dubious" id="ltZ_dubious" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_maglimit" id="colZ_maglimit" value="Z_maglimit" onclick="refreshquery()"/></td>
  <td><label for="colZ_maglimit">Z_maglimit</label></td>
  <td><span class="wrap-none">  <label for="gtZ_maglimit">&ge;<span class="hidden">Z_maglimit</span></label><input type="text" size="3" name="gtZ_maglimit" id="gtZ_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_maglimit">&le;<span class="hidden">Z_maglimit</span></label><input type="text" size="3" name="ltZ_maglimit" id="ltZ_maglimit" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr>
  <td><input type="checkbox" name="colZ_IQ" id="colZ_IQ" value="Z_IQ" onclick="refreshquery()"/></td>
  <td><label for="colZ_IQ">Z_IQ</label></td>
  <td><span class="wrap-none">  <label for="gtZ_IQ">&ge;<span class="hidden">Z_IQ</span></label><input type="text" size="3" name="gtZ_IQ" id="gtZ_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  <label for="ltZ_IQ">&le;<span class="hidden">Z_IQ</span></label><input type="text" size="3" name="ltZ_IQ" id="ltZ_IQ" onblur="refreshquery()" onmouseout="refreshquery()"/>  </span></td>
</tr>
<tr><td></td><td></td><td></td></tr>
</table>
</td>
</tr>
</table>
    </div>
  </fieldset>
</form>
