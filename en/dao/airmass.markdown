---
layout: cadc
lang: en
permalink: /en/dao/airmass
title: DAO Science Archive and Tools
altLangPage: /fr/ofa/airmass
headerimage: /static/images/dao.jpg
dateModified: 2021-10-25
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: dao

breadcrumbs:
    - link: /en/dao/
      title: DAO
---
    
<h1 id="wb-cont" class="wb-invisible">DAO Science Archive and Tools Airmass Calculator</h1>
<h2 class="align-center">Airmass Calculator</h2>
              
To use this page enter a target name and adjust the date as required. 
         Then click the 'Get Coordinates...' button to determine the 
	 target's coordinates and proceed to the next page.
<form method="post" action="/cadcbin/en/dao/airmass.pl" enctype="application/x-www-form-urlencoded">
<div class="form-inline">

<p><table class="table" border="0" cellpadding="5">
<tbody><tr>
<th align="right">Date:</th>
<td> Year: <select name="year" data-role="none">
<option value="2019">2019</option>
<option value="2020">2020</option>
<option selected="selected" value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
</select></td>
<td> Month:<select name="month" data-role="none">
<option value="1">January</option>
<option value="2">February</option>
<option value="3">March</option>
<option value="4">April</option>
<option value="5">May</option>
<option value="6">June</option>
<option value="7">July</option>
<option value="8">August</option>
<option value="9">September</option>
<option selected="selected" value="10">October</option>
<option value="11">November</option>
<option value="12">December</option>
</select></td>
<td> Day:<select name="day" data-role="none">
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
<option selected="selected" value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select></td>
</tr>
<tr>
<th align="right">Target Name:</th><td colspan="3"><input type="text" name="target" size="20" maxlength="80" data-role="none"></td></tr>
<tr><td colspan="4" align="center">
<input type="submit" name="continue" value="Get Coordinates..." data-role="none"></td></tr>
</tbody></table></p>

</div></form>
