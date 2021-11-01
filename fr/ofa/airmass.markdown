---
layout: cadc
lang: fr
permalink: /fr/ofa/airmass
title: Archives scientifiques et outils de l’OFA
altLangPage: /en/dao/airmass
headerimage: /static/images/dao.jpg
dateModified: 2021-10-26
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: dao

breadcrumbs:
    - link: /fr/ofa/
      title: OFA
---

<div class="span-6">
              
 <h1 id="wb-cont" class="wb-invisible">Archives scientifiques et outils de l’OFA Calculateur de la masse d'air de l'OFA</h1>
 <h2 class="align-center">Calculateur de la masse d'air de l'OFA</h2>
              
Pour utiliser cette page, entrez une cible astronomique et la date 
         désirée et puis cliquez sur le bouton ‘Obtenir coordonnées’ pour 
         obtenir les coordonnées de la cible et continuer avec la page 
         suivante.
<form method="post" action="/cadcbin/fr/ofa/airmass.pl" enctype="application/x-www-form-urlencoded">
<div class="form-inline">

<p><table class="table" border="0" cellpadding="5">
<tbody><tr>
<th align="right">Date:</th>
<td> Année: <select name="year" data-role="none">
<option value="2019">2019</option>
<option value="2020">2020</option>
<option selected="selected" value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
</select></td>
<td> Moi:<select name="month" data-role="none">
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
<tr>
<th align="right">Nom cible:</th><td colspan="3"><input type="text" name="target" size="20" maxlength="80" data-role="none"></td></tr>
<tr><td colspan="4" align="center">
<input type="submit" name="continue" value="Obtenir coordonnées..." data-role="none"></td></tr>
</tbody></table></p>

</div></form>

</div>