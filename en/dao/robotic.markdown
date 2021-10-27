---
layout: cadc
lang: en
permalink: /en/dao/robotic
title: DAO Science Archive and Tools
altLangPage: /fr/ofa/robotic
headerimage: /static/images/dao.jpg
dateModified: 2021-10-25
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: dao
---

<div class="span-6">
              
 <h1 id="wb-cont" class="wb-invisible">DAO Science Archive and Tools Robotic Observing</h1>
 <h2 class="align-center">Robotic Observing</h2>
              
<p>
Use this form to prepare an observing program for a single
    night of DAO 1.2-m telescope robotic operation.  First, simply create a 
    file with a list of object names, one per line and more or less in the
    order you hope to observe them.  Lines beginning with a '#' are treated
    as comments.  You also have the option to
    include an exposure time (in seconds) and the number of desired exposures
    for each target on each line (using TABS to separate names, exposure times
    and number of exposures).  Upload 
    this file and enter other required information.</p><form method="post" action="/cadcbin/en/dao/robotic.pl" enctype="multipart/form-data">
<p>
<table class="wb-tables table">
<tbody><tr>
<th align="right">E-mail:</th>
<td colspan="3"><input type="text" name="email" size="40" maxlength="80" data-role="none" data-nlok-ref-guid="50b5b11e-6506-4dc3-bff0-422e43000326"><div id="norton-idsafe-field-styling-divId" style="height:21.23636419122869px;max-width:21.23636419122869px;vertical-align:top; position:absolute; top:208.61931523409757px;left:652.0547434787246px;cursor:pointer;resize: both;z-index:2147483646;"><img id="norton-idsafe-field-logo-imgId" src="chrome-extension://admmjipmmciaobhojoghlmleefbicajg/content/images/ic-field-logo.svg" style="height:21.23636419122869px; max-width:21.23636419122869px;"></div></td></tr>
<tr>
<th align="right">Observing Run Date (PST):</th>
<td> Year: <select name="year" data-role="none">
<option value="2020">2020</option>
<option selected="selected" value="2021">2021</option>
<option value="2022">2022</option>
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
<option value="25">25</option>
<option selected="selected" value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select></td>
</tr>
<tr><th>File Containing Target List:</th>
<td colspan="3"><input type="file" name="targetList" value="select target list file" size="40" maxlength="80" data-role="none"></td></tr>
<tr><td colspan="4" align="center"><input type="submit" name="start" value="Continue.." data-role="none" data-nlok-ref-guid="a2764173-27f1-4d65-e966-c2dc5f51ef6b"></td></tr>
</tbody></table>
</p></form>
</div>