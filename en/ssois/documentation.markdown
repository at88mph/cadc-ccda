---
layout: cadc
lang: en
permalink: /en/ssois/documentation.html
title: SSOIS Documentation
altLangPage: /fr/rioss/documentation.html
dateModified: 2022-08-15
signing: layout.signing

nav: ssois

breadcrumbs:
    - link: /en/ssois/
      title: SSOIS
---

{%- include variable-core.liquid -%}
{%- assign i18n-ssois=site.data.ssois[i18nText-lang] -%}
{%- assign i18n-ssois-labels=i18n-ssois.labels -%}

<p>
    This page provides documentation for the <a href="index.html">Solar System Object Image Search (SSOIS)</a> page. Unlike regular astronomical image search pages, which allow you to search at a fixed RA and Dec, SSOIS allows you to search image archives
    for a moving object.
</p>
<p>
    There are currently four search methods:
</p>
<ul>
    <li><a href="#arc">Search by extrapolating from an arc</a></li>
    <li><a href="#name">Search by object name</a></li>
    <li><a href="#oe">Search from a set of orbital elements</a></li>
    <li><a href="#ephem">Search from a ephemeris you supply</a></li>
</ul>
<p>
    All of these methods will return a list of images that contain the object. Documentation for the search return page can be found <a href="#return">below</a>.
</p>
<p>
    Currently, SSOIS will search images from
    <a rel="external" href="http://www.cfht.hawaii.edu/Instruments/Imaging/MegaPrime">MegaCam</a> and
    <a rel="external" href="http://www.cfht.hawaii.edu/Instruments/Imaging/CFH12K">CFH12K</a> on CFHT,
    <a rel="external" href="http://www.naoj.org/Observing/Instruments/SCam">SuprimeCam</a> and
    <a rel="external" href="https://www.naoj.org/Observing/Instruments/HSC/index.html">Hyper Suprime-Cam</a> on Subaru,
    <a rel="external" href="https://panstarrs.ifa.hawaii.edu/pswww/">Pan-STARRS</a>,
    <a rel="external" href="https://www.asc-csa.gc.ca/eng/satellites/neossat/default.asp">NEOSSat</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/gmos/imaging">GMOS</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/niri/imaging">NIRI</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/flamingos1/flam1Index.html">FLAMINGOS</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/flamingos2/imaging">FLAMINGOS-2</a>
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/gpi/">GPI</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/gsaoi/">GSAOI</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/nici/imaging">NICI</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/nifs/">NIFS</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/oscir/oscirIndex.html">OSCIR</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/t-recs/imaging">T-ReCS</a>,
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/gnirs/imaging">GNIRS</a>, and
    <a rel="external" href="http://www.gemini.edu/sciops/instruments/michelle/">Michelle</a> on Gemini,
    <a rel="external" href="http://www.stsci.edu/hst/wfpc/">WFPC</a>,
    <a rel="external" href="http://www.stsci.edu/hst/wfpc2/">WFPC2</a>,
    <a rel="external" href="http://www.stsci.edu/hst/stis/">STIS</a>,
    <a rel="external" href="http://www.stsci.edu/hst/nicmos/">NICMOS</a>,
    <a rel="external" href="http://www.stsci.edu/hst/acs/">ACS</a>, and
    <a rel="external" href="http://www.stsci.edu/hst/wfc3">WFC3</a> on HST,
    <a rel="external" href="http://www.eso.org/sci/facilities/lasilla/instruments/wfi/index.html">WFI</a>,
    <a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/vimos/inst/imaging.html">VIMOS</a>,
    <a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/vircam/inst/">VIRCAM</a>,
    <a rel="external" href="http://www.eso.org/sci/facilities/lasilla/instruments/susi/docs/SUSInutshell.html">SUSI/SUSI2</a>,
    <a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/fors/">FORS1/2</a>,
    <a rel="external" href="http://www.eso.org/lasilla/instruments/emmi/">EMMI</a>,
    <a rel="external" href="http://www.eso.org/sci/facilities/lasilla/instruments/efosc/overview.html">EFOSC</a>,
    <a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/omegacam.html">OmegaCAM</a>,
    <a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/hawki/">HAWKI</a>, and
    <a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/naco/">NAOS/CONICA</a> on various ESO telescopes, and several instruments from the <a rel="external" href="http://portal-nvo.noao.edu/adql/query">NOAO</a> (DEcam, Mosaic,
    SOAR/SOI, NEWFIRM, MiniMo) including
    <a rel="external" href="http://www.noao.edu/wiyn/ODI/">WIYN/ODI</a>,
    <a rel="external" href="http://www.aao.gov.au/AAO/astro/wfi.html">WFI on AAT</a>,
    <a rel="external" href="http://sbn.psi.edu/pds/resource/neat.html">NEAT</a>,
    <a rel="external" href="http://www.ing.iac.es/">INT, WHT and JKT</a>,
    <a rel="external" href="http://neowise.ipac.caltech.edu/">WISE</a>,
    <a rel="external" href="https://www.ztf.caltech.edu/">ZTF</a> and the <a rel="external" href="http://www.sdss.org">SDSS</a>. There are a total of 32 million images in the database as of 2017. Other archives will be added in the future.
</p>


<a id="name"></a>
<h2>Search by object name</h2>
<p>
    This allows you to enter the name of an object and search for images. There are three ephemeris generators:
</p>
<ul>
    <li><a rel="external" href="http://asteroid.lowell.edu/asteph">Lowell Observatory ephemeris generator</a></li>
    <li><a rel="external" href="https://minorplanetcenter.net/iau/MPEph/MPEph.html">Minor Planet Center ephemeris generator</a></li>
    <li><a rel="external" href="http://ssd.jpl.nasa.gov/horizons.cgi">JPL Horizons ephemeris generator</a></li>
    <li>CADC</li>
</ul>
<p>
    In the first two cases, the Solar System Object Image Search takes the name you supply and queries the selected external service; the service then returns an ephemeris. In general, these services have a limit to the number of epochs that can be queried
    at once, so this can take a while. Alternatively, if the CADC option is selected the orbital elements are looked up in a local database (which is regularly updated copy of the <a rel="external" href="https://www.minorplanetcenter.net/iau/MPCORB.html">MPC orbital element database</a>).
    These orbital elements are passed on to <a rel="external" href="http://adams.dm.unipi.it/~orbmaint/orbfit/">orbfit</a> which generates an ephemeris. The ephemeris is then matched with the image database. Object names must be entered in a way that
    these services can understand. The MPC, for example can be case-sensitive.
</p>
<p>
    If you have any doubts on the accuracy of either of ephemeris generator or their abilities to parse the object name, you should generate your ephemeris and submit it to the <a href="#ephem">Search by ephemeris</a> option.
</p>

<a id="arc"></a>
<h2>Search by arc</h2>
<p>
    This method allows you to enter an series of observations. SSOIS then fits an orbit to these observations and produces an ephemeris and then searches that ephemeris for images. There are two orbit fitting routines:
</p>
<ul>
    <li> The <a rel="external" href="https://minorplanetcenter.net/iau/MPEph/NewObjEphems.html">New Object Ephemerides</a> generator from the <a rel="external" href="https://minorplanetcenter.net/iau/mpc.html">
Minor Planet Center</a>. This fits a V&auml;i&auml;sl&auml; orbit to the data. It should be used for main belt asteroids. If this option is selected, the observations are submitted to the MPC which does the orbit fitting and returns an ephemeris.
    </li>
    <li>The "fit_radec" package, of <a rel="external" href="http://www.iop.org/EJ/article/1538-3881/120/6/3323/200298.text.html">Bernstein and Kushalani</a> which is optimized for KBOs, but not main-belt asteroids. In this case the fitting is done on CADC
        computers.
    </li>
</ul>
<p>
    Again, if you have any doubts on the accuracy of either of these fitting programs (neither of which are maintained by the CADC), you should generate your ephemeris and submit it to the <a href="#ephem">Search by ephemeris</a> option.
</p>


<a id="oe"></a>
<h2>Search by orbital elements</h2>
<p>
    This method allows you to enter the orbital elements. These orbital elements are used as input to
    <a rel="external" href="http://adams.dm.unipi.it/~orbmaint/orbfit/">orbfit</a> which generates an ephemeris.
</p>

<a id="ephem"></a>
<h2>Search by ephemeris</h2>
<p>
    While this method is less convenient than the other methods, it has the advantage that it does not rely on third party software. You provide a series of time, RA and Dec and SSOIS searches the database for matching imagets. Each line should have three
    columns separated by one or more blank spaces. The columns should be time,RA,Dec.
</p>
<p>
    Time can be specified in any of the following formats:
</p>
<pre>
YYYYMMDDHHMMSS
YYYY-MM-DD HH:MM:SS
YYYY/MM/DD HH:MM:SS
YYYY-MM-DDTHH:MM:SS
YYYY/MM/DDTHH:MM:SS
</pre>
<p>
    Thus the following examples are acceptable (and equivalent):
</p>
<pre>
19680117053522
1968-01-17 05:35:22
1968/01/17 05:35:22
1968-01-17T05:35:22
1968/01/17T05:35:22
</pre>
<p>
    Alternatively, you can use Julian Dates or Modified Julian Dates
</p>
<pre>
2439872.7328935185
39872.2328935185
</pre>
<p>
    For RA and Dec, use any of the following formats
</p>
<pre>
HH:MM:SS.SS     DD:MM:SS.SS
HHhMMmSS.SSs    DDdMMm.SS.SSs
DDD.DDDDDDDDD   DD.DDDDDDDDD
</pre>
<p>
    but not
</p>
<pre>
HH MM SS.SS DD MM SS.SS
</pre>
<p>
    (no spaces are allowed inside a coordinate) The following examples are acceptable.
</p>
<pre>
12:34:56
12:34:56.7
12:34:56.78
12:34:56.789
12h34m56.789
188.7366209
</pre>
<p>
    Note that if an RA is given sexigesimal format, it is assumed to be in hours, but if given in decimal format, it is assumed to be in degrees.
</p>
<p>
    No checking is done on the ephemeris. It is up to the user to ensure that the values are reasonable and that the observations are in chronological order.
</p>

<h2>Other parameters</h2>
<p>
    There are a number of parameters common to all the search functions:
</p>

<p>
    <a id="daterange"></a>
    <b>Date Range:</b><br/> You can specify a range of dates to search. The dates can be specified in the same formats as in the <a href="#ephem">Search by ephemeris</a> section above The date range will be rounded to the nearest integer day. If the date
    range is smaller, the search will take less time If you leave the boxes empty, they will default to earliest and latest available images. The date range for the <a href="#ephem">Search by ephemeris</a> function is the first and last dates in the ephemeris
</p>
<p>
    <a id="posun"></a>
    <b>{{ i18n-ssois-labels.position_uncertainty_header }}:</b><br/> If this is left blank or set to zero, only images which actually contain the predicted RA, Dec of the object will be returned. If this is set to a non-zero value, images which lie near
    the predicted position of the object (but do not actually overlap the position) will also be returned. The positional uncertainty is handled as a box with centred on the true position with sides twice the size specified.
</p>
<p>
    Obviously, real positional uncertainties are better represented by ellipses, and real positional uncertainties vary with time. Some of the ephemeris generators behind the search functions described above produce good error ellipses. Others do not. Having
    box-shaped positional uncertainties represents a compromise. Note also, while the coverage of the images is known in some cases to very high precision (for example the MegaCam images which have been processed with <a href="/en/megapipe/">MegaPipe</a>)
    others are known to fairly low accuracy (such most of the CFH12K archive).
</p>
<p>
    <a id="resext"></a>
    <b>Resolve to extension:</b><br/> By default, the search returns only a link to the full image. Downloading all of a MegaCam image (300Mb, compressed) can take a while. Setting "Resolve to extension" to "Yes" means that when an image is found a second
    search is done to determine which chip the object lies in. A link to that single extension is then returned. If the positional uncertainty is large, it is possible that many extensions will lie within the area. In this case all matching extensions
    are returned. It is also possible, if positional uncertainty is small, that object may lie in the gap between CCDs. In this case only the link to the whole image is returned. Doing this second search slows the query down. Only MegaCam images are resolved
    in this manner.
</p>
<p>
    <a id="resxy"></a>
    <b>Resolve to X,Y:</b><br/> If this is enabled, the predicted location of the object in an image are given in pixel values. Only MegaCam images are resolved in this manner. This secondary search also slows the query down. Setting "Resolve to X,Y"
    to "yes" also sets "Resolve to extension".
</p>

<a id="return"></a>
<h2>Search return page</h2>
<p>
    The first step is to generate an ephemeris. This is done by a variety of methods as discussed above. Except for the "Search by ephemeris" function, the ephemeris is generated at 24 hour intervals.
</p>
<p>
    Once the first step, that of generating an ephemeris, has been accomplished, the next step is to match that ephemeris to the database of images. The ephemeris is converted to a temporary database table. Each interval in the ephemeris becomes a row in
    the table, with start and end times and positions. A bounding box is generated for each row, covering the full span in time and position. For speed, this bounding box is expressed as integer days (for the time) and integer degrees (for position).
    When the object moves across the first point of Aries, two row are added, one each describing the position of the object on either side of the celestial meridian. If the time interval spans multiple days (for example if the user generated ephemeris
    has been produced at weekly intervals), additional rows, one per day, are added to this table. This temporary table is comparatively small. If the ephemeris is sampled daily, just under 8000 rows suffice to cover the time span from the earliest image
    in the SSOS database to the present. Building the temporary table takes 2-3 seconds for a full 20 year span.
</p>
<p>
    The ephemeris table is then crossmatched to the image table; in the terminology of relational databases, they are ``joined''. The integer bounding boxes of the ephemeris and the images are matched first. If the bounding boxes of an ephemeris and an image
    match, the object's position is calculated more accurately at the image's exposure midpoint by linearly interpolating the ephemeris. The linear interpolation is key to keeping the queries reasonably fast. Doing a full orbital prediction for each of
    the images is not feasible. This is sufficiently accurate for the majority of queries, where the object either moves slowly or in a fairly straight line. For faster moving, nearby objects, it may be necessary to supply the ephemeris sampled at shorter
    time steps. If a spline method is used (rather than linear interpolation), the positional accuracy increases, but only by a few percent and at considerable computational cost. A typical cross match takes 2 seconds to match a 20 year ephemeris to a
    8 million images.
</p>
<p>
    The search return page first returns some diagnostic information about the ephemeris generation and database querying. This can either be nearly instantaneous or take up to a minute. The cross-matching part typically takes less than 3 seconds unless further
    "Resolve to ..." flags are set. Each of the flags typically adds 1 second per found image.
</p>
<p>
    The links in the table are either direct links to the data (if the image is hosted at the <a href="/en/">CADC</a>) or a link to another query page which should return only the relevant image at an external website.
</p>

<p>
    SSOIS also provides a link that returns a list of all the images in the SSOIS database at that RA,Dec, potentially allowing a check that the moving object in the images does in fact move.
</p>


<p>
    In addition to the data links, there are two other buttons. Clicking on the first button returns a "regions" file which can be used to with the image display program
    <a rel="external" href="http://hea-www.harvard.edu/RD/ds9/">ds9</a>. This will give you a line showing the (linearly) interpolated orbit and circles indicating the positions of the object on matching images. The second button gives you a plot showing
    the orbit of the object with as a line with red circles indicating the location of matching images.
</p>
<p>
    For more information about the inner workings of SSOIS, please read the the following paper: <a rel="external" href="http://adsabs.harvard.edu/abs/2012PASP..124..579G">Gwyn, Hill
and Kavelaars (2012)</a>. Please cite this paper in your publications.
</p>
<p>If you have used CADC facilities for your research, please include the following acknowledgment in your publications:</p>
<blockquote>
  This research used the facilities of the Canadian Astronomy Data
  Centre operated by the National Research Council of Canada with
  the support of the Canadian Space Agency.
</blockquote>
