---
layout: cadc
lang: en
permalink: /en/scla/docs/filt.html
title: Suprime-Cam Filter System
altLangPage: /fr/scla/docs/filt.html
dateModified: 2022-08-05
signing: layout.signing
nav: scla

breadcrumbs:
    - link: /en/scla/
      title: SCLA
---
<p>
    This page describes the Suprime-Cam filters, and the
    transformations between the Pan-STARRS photometric system and
    Suprime-Cam.
</p>
<p>
    The transformations were done using (g-i)<sub>Pan-STARRS</sub> as
    the reference colour. The Pan-STARRS filter nearest the centre
    wavelength of the filter was used as the reference magnitude.  The
    transformation was expressed as a 3<sup>rd</sup> order polynomial
    with x being g-i, and y being the difference between the
    Suprime-Cam magnitude and the reference Pan-STARRS magnitude.
</p>
<p>
    The Transmission Function links point to text versions of each filter.
    These represent the full response of the system, including
    the atmosphere, the primary mirror, the Suprime-Cam optics,
    the filter itself and the CCDs.
</p>

<table class="table">
    <thead>
        <tr><th colspan="2">Johnson-Cousins Filters</th></tr>
    </thead>
    <tdata>
        <tr>
            <td>W-J-B</td>
            <td><a href="/static/files/scla/BSuprime.fil">Transmission Function</a></td>
        </tr>
        <tr><td>W-J-V</td><td><a href="/static/files/scla/VSuprime.fil">Transmission Function</a></td></tr>
        <tr><td>W-C-RC</td><td><a href="/static/files/scla/RSuprime.fil">Transmission Function</a></td></tr>
        <tr><td>W-C-IC</td><td><a href="/static/files/scla/ISuprime.fil">Transmission Function</a></td></tr>
    </tdata>
</table>

<table class="table">
    <thead>
        <tr><th colspan="2">SDSS Filters</th></tr>
    </thead>
    <tdata>
        <tr><td>W-S-G+</td><td><a href="/static/files/scla/gSuprime.fil">Transmission Function</a></td></tr>
        <tr><td>W-S-R+</td><td><a href="/static/files/scla/rSuprime.fil">Transmission Function</a></td></tr>
        <tr><td>W-S-I+</td><td><a href="/static/files/scla/iSuprime.fil">Transmission Function</a></td></tr>
        <tr><td>W-S-Z+</td><td><a href="/static/files/scla/zSuprime.fil">Transmission Function</a></td></tr>
        <tr><td>W-A-Y</td><td><a href="/static/files/scla/YSuprime.fil">Transmission Function</a></td></tr>
    </tdata>
</table>

<table class="table">
    <thead>
        <tr><th colspan="2">Other Filters</th></tr>
    </thead>
    <tdata>
        <tr><td>W-J-VR</td><td><a href="/static/files/scla/VRSuprime.fil">Transmission Function</a></td></tr>
        <tr><td>W-A-Y</td><td><a href="/static/files/scla/YSuprime.fil">Transmission Function</a></td></tr>
    </tdata>
</table>

<table class="table">
    <thead>
        <tr><th colspan="2">Intermediate band Filters</th></tr>
    </thead>
    <tdata>
        <tr><td>I-A-L427</td><td><a href="/static/files/scla/SupIA427.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L445</td><td><a href="/static/files/scla/SupIA445.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L464</td><td><a href="/static/files/scla/SupIA464.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L484</td><td><a href="/static/files/scla/SupIA484.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L505</td><td><a href="/static/files/scla/SupIA505.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L527</td><td><a href="/static/files/scla/SupIA527.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L550</td><td><a href="/static/files/scla/SupIA550.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L574</td><td><a href="/static/files/scla/SupIA574.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L598</td><td><a href="/static/files/scla/SupIA598.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L624</td><td><a href="/static/files/scla/SupIA624.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L651</td><td><a href="/static/files/scla/SupIA651.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L679</td><td><a href="/static/files/scla/SupIA679.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L709</td><td><a href="/static/files/scla/SupIA709.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L738</td><td><a href="/static/files/scla/SupIA738.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L767</td><td><a href="/static/files/scla/SupIA767.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L797</td><td><a href="/static/files/scla/SupIA797.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L827</td><td><a href="/static/files/scla/SupIA827.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L856</td><td><a href="/static/files/scla/SupIA856.fil">Transmission Function</a></td></tr>
        <tr><td>I-A-L907</td><td><a href="/static/files/scla/SupIA907.fil">Transmission Function</a></td></tr>
    </tdata>
</table>

<table class="table">
    <thead>
        <tr><th colspan="2">Narrowband Filters</th></tr>
    </thead>
    <tdata>
        <tr><td>N-A-L656</td><td><a href="/static/files/scla/NA656Suprime.fil">Transmission Function</a></td></tr>
        <tr><td>N-B-L711</td><td><a href="/static/files/scla/NB711Suprime.fil">Transmission Function</a></td></tr>
        <tr><td>N-B-L816</td><td><a href="/static/files/scla/NB816Suprime.fil">Transmission Function</a></td></tr>
        <tr><td>N-B-L921</td><td><a href="/static/files/scla/NB921Suprime.fil">Transmission Function</a></td></tr>
    </tdata>
</table>

<p>  
    In the plots below, the left panel shows the filter curves,
    together with the relevant Pan-STARRS filter. The black and red
    curves show the Pan-STARRS g and i filters. The green curve shows the
    reference filter. The right panel shows the transformation
    itself. The green and blue dots show the
    <a href="http://adsabs.harvard.edu/abs/1998PASP..110..863P" rel="external">Pickles</a> and
    <a href="https://www.stsci.edu/hst/instrumentation/reference-data-for-calibration-and-tools/astronomical-catalogs/calspec" rel="external">CALSPEC/a>
    stars. The magenta curve shows the fit, also indicated in
    polynomial form. The vertical lines show the colour range
    where this transformation is valid.
</p>

<h2>Johnson-Cousins filters</h2>
<h3>W-J-B</h3><a href="/static/files/scla/BSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.BSuprime.gPS.both.gif">
<h3>W-J-V</h3><a href="/static/files/scla/VSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.VSuprime.gPS.both.gif">
<h3>W-C-RC</h3><a href="/static/files/scla/RSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.RSuprime.rPS.both.gif">
<h3>W-C-IC</h3><a href="/static/files/scla/ISuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.ISuprime.iPS.both.gif">

<h2>SDSS filters</h2>
<h3>W-S-G+</h3><a href="/static/files/scla/gSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.gSuprime.gPS.both.gif">
<h3>W-S-R+</h3><a href="/static/files/scla/rSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.rSuprime.rPS.both.gif">
<h3>W-S-I+</h3><a href="/static/files/scla/iSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.iSuprime.iPS.both.gif">
<h3>W-S-Z+</h3><a href="/static/files/scla/zSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.zSuprime.zPS.both.gif">

<h2>Other filters</h2>
<h3>W-J-VR</h3><a href="/static/files/scla/VRSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.VRSuprime.rPS.both.gif">
<h3>W-A-Y</h3><a href="/static/files/scla/YSuprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.YSuprime.yPS.both.gif">

<h2>Intermediate band filters</h2>
<h3>I-A-L427</h3><a href="/static/files/scla/SupIA427.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA427.gPS.both.gif">
<h3>I-A-L445</h3><a href="/static/files/scla/SupIA445.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA445.gPS.both.gif">
<h3>I-A-L464</h3><a href="/static/files/scla/SupIA464.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA464.gPS.both.gif">
<h3>I-A-L484</h3><a href="/static/files/scla/SupIA484.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA484.gPS.both.gif">
<h3>I-A-L505</h3><a href="/static/files/scla/SupIA505.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA505.gPS.both.gif">
<h3>I-A-L527</h3><a href="/static/files/scla/SupIA527.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA527.gPS.both.gif">
<h3>I-A-L550</h3><a href="/static/files/scla/SupIA550.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA550.rPS.both.gif">
<h3>I-A-L574</h3><a href="/static/files/scla/SupIA574.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA574.rPS.both.gif">
<h3>I-A-L598</h3><a href="/static/files/scla/SupIA598.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA598.rPS.both.gif">
<h3>I-A-L624</h3><a href="/static/files/scla/SupIA624.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA624.rPS.both.gif">
<h3>I-A-L651</h3><a href="/static/files/scla/SupIA651.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA651.rPS.both.gif">
<h3>I-A-L679</h3><a href="/static/files/scla/SupIA679.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA679.rPS.both.gif">
<h3>I-A-L709</h3><a href="/static/files/scla/SupIA709.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA709.iPS.both.gif">
<h3>I-A-L738</h3><a href="/static/files/scla/SupIA738.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA738.iPS.both.gif">
<h3>I-A-L767</h3><a href="/static/files/scla/SupIA767.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA767.iPS.both.gif">
<h3>I-A-L797</h3><a href="/static/files/scla/SupIA797.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA797.iPS.both.gif">
<h3>I-A-L827</h3><a href="/static/files/scla/SupIA827.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA827.zPS.both.gif">
<h3>I-A-L856</h3><a href="/static/files/scla/SupIA856.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA856.zPS.both.gif">
<h3>I-A-L907</h3><a href="/static/files/scla/SupIA907.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.SupIA907.zPS.both.gif">

<h2>Narrowband filters</h2>
<h3>N-A-L656</h3><a href="/static/files/scla/NA656Suprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.NA656Suprime.rPS.both.gif">
<h3>N-B-L711</h3><a href="/static/files/scla/NB711Suprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.NB711Suprime.iPS.both.gif">
<h3>N-B-L816</h3><a href="/static/files/scla/NB816Suprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.NB816Suprime.iPS.both.gif">
<h3>N-B-L921</h3><a href="/static/files/scla/NB921Suprime.fil">Transmission Function</a><img src="/static/images/scla/gPS.iPS.NB921Suprime.zPS.both.gif">
