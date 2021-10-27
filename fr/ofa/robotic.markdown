---
layout: cadc
lang: fr
permalink: /fr/ofa/robotic
title: Archives scientifiques et outils de l’OFA
altLangPage: /en/dao/robotic
headerimage: /static/images/dao.jpg
dateModified: 2021-10-26
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: dao
---

<div class="span-6">
              
 <h1 id="wb-cont" class="wb-invisible">Archives scientifiques et outils de l’OFA Observation automatisée</h1>
 <h2 class="align-center">Observation automatisée</h2>
              
<p>
         Utilisez ce formulaire pour préparer le programme d’observation pour le télescope de 1,2m de l’OFA en mode automatique et ce pour une seule nuit. Pour débuter, il suffit simplement de créer un fichier contenant la liste des objets astronomiques à observer en suivant l’ordre d’observation. Dans ce fichiers, les lignes qui débutent par un ‘#’ sont considérées comme un commentaire. Vous avez également d’inclure le temps d’exposition (en secondes) et le nombre d’observation pour chaque objet sur chacune de ces lignes (il faut séparer chaque valeurs ; nom d’objet, temps d’exposition et nombre d’observations, par un <tab>). Télécharger ce fichier en utilisant le bouton à cette fin et compléter les informations sur cette page.</tab></p><form method="post" action="/cadcbin/fr/ofa/robotic.pl" enctype="multipart/form-data">
<p>
<table class="wb-tables table">
<tbody><tr>
<th align="right">Courriel:</th>
<td colspan="3"><input type="text" name="email" size="40" maxlength="80" data-role="none" data-nlok-ref-guid="aa092b43-8565-4af7-e55b-b8b80aacb668"><div id="norton-idsafe-field-styling-divId" style="height:21.23636419122869px;max-width:21.23636419122869px;vertical-align:top; position:absolute; top:227.81931218233976px;left:656.2797800998184px;cursor:pointer;resize: both;z-index:2147483646;"><img id="norton-idsafe-field-logo-imgId" src="chrome-extension://admmjipmmciaobhojoghlmleefbicajg/content/images/ic-field-logo.svg" style="height:21.23636419122869px; max-width:21.23636419122869px;"></div></td></tr>
<tr>
<th align="right">Date et heure des<br>observations (HSP):</th>
<td> Année: <select name="year" data-role="none">
<option value="2020">2020</option>
<option selected="selected" value="2021">2021</option>
<option value="2022">2022</option>
</select></td>
<td> Mois:<select name="month" data-role="none">
<option value="1">Janvier</option>
<option value="2">Février</option>
<option value="3">Mars</option>
<option value="4">Avril</option>
<option value="5">Mai</option>
<option value="6">Juin</option>
<option value="7">Juillet</option>
<option value="8">Août</option>
<option value="9">Septembre</option>
<option selected="selected" value="10">Octobre</option>
<option value="11">Novembre</option>
<option value="12">Décembre</option>
</select></td>
<td> Jour:<select name="day" data-role="none">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option selected="selected" value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select></td>
</tr>
<tr><th>Fichier contenant la liste cible:</th>
<td colspan="3"><input type="file" name="targetList" value="select target list file" size="40" maxlength="80" data-role="none"></td></tr>
<tr><td colspan="4" align="center"><input type="submit" name="start" value="Continuer.." data-role="none" data-nlok-ref-guid="eb7e432f-8938-40ac-a5de-5dbe493165b5"></td></tr>
</tbody></table>
</p></form>
</div>
