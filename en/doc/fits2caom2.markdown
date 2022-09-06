---
layout: cadc
lang: en
permalink: /en/doc/fits2caom
title: fits2caom2 Application
altLangPage: /fr/doc/fits2caom
dateModified: 2022-08-10
signing: layout.signing
nav: doc
archived: true

breadcrumbs:
    - link: /en/doc
      title: Documentation
---

<p><code>fits2caom2</code> is a Java application that attempts to translate a FITS header into a CAOM database record.  CAOM database
    records are input into the CADC and appear as searchable entries in our caom2 database (via TAP) and in our
    Advanced Search tool.</p>

<p>This documentation is intended for archive maintainers and describes how to obtain, install and use <code>fits2caom2</code> to
    create CAOM2 records that describe observations stored in the CADC archive.
If you have a simple imaging observation there is a good chance that <code>fits2caom2</code> will meet most, perhaps all, of your needs.   
</p>

<p>The instructions below are applicable to Linux/OS-X system.</p>

<h2>Requirements</h2>
    JDK 8

<h2>Download</h2> 
https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/software/fits2caom2.tgz

<h2>Instalaltion</h2>
The <code>fits2caom2</code> tar file contains the application JAVA .jar file, the library of classes needed to run the application
and wrapper script for simplified command line execution of <code>fits2caom2</code>.
<p>Create an installation directory:</p>  <code>mkdir fits2caom2</code>
<p>Unpack the downloaded tar ball to this area:</p>  <code>cd fits2caom2 ; tar xzf ../fits2caom2.tgz</code>
<p>Create an environment variable named <code>CADC_ROOT</code> that points to the location where you unpacked the tgz file.
If you are running in bash then this is accomplished with the following command: </p>
 <code>export CADC_ROOT=`pwd`</code>
<p>or in (t)csh:</p>
<code>setenv CADC_ROOT `pwd`</code>


<p>Test that the processed worked using the command: <code>./scripts/fits2caom2 --help</code></p>

If you have problems with the install please <a href="mailto:support@canfar.net">contact the CADC help system</a>.

<h2>Usage</h2>

<p><code>fits2caom2</code> will examine your FITS headers to determine create an CAOM record.  This will likely not work perfectly
    the first time as some of the keywords <code>fits2caom2</code> expects to find maybe missing or the values in those keywords
    might not reflect the reality of the observation.  </p>

<p>Below is an example of running <code>fits2caom2</code> on a multi-extension FITS (MEF) file of containing CFHT MegaPrime observation:</p>


<pre><code>
fits2caom2 --collection=CFHT \
           --observationID=1615920 \
           --productID=1615920o \
           --uri=ad:CFHT/1615920o \
           --local=1615920o.fits  \
           --out=1615920o.xml
</code></pre>

<p>This command line deserves some explanation.  </p>

<ul>
  <li>  --collection gives the name of the collection within the CADC archive system.  This name will be assigned to
      your project by the CADC and will appear as the ‘Collection’ in the Advanced Search interface. </li>
  <li> --observationID is a unique value that identifies this observation within your collection.   The example, a CFHT
      observation, uses an odometer number to identify each observation.</li>
  <li>  --productID gives a unique identifier of the plane.  Here we are create a new plane for the raw observation from
      CFHT.  These are identified with a ‘o’ after the odometer number for that telescope.   There isn’t a strong need
      to have identifiers that are unique within the collection, but having them be unique can be a good search hook.</li>
  <li> --uri  this is the artifact identifier (can be a comma separated list) that CADC assigns to the artifact
      associated with the given productID.   These identifiers are normally of form: ad:{COLLECTION}/{filename}  where
      ad indicates the file is stored in the CADC archive, {COLLECTION} is the name of the collection and {filename} is
      the unique name given to the data artifact when transferred into the archive.</li>
    <li>--local gives the location where the file is (locally) stored on disk.  Fits2caom2 reads the FITS header of the
        file to build the CAOM record.  If a local file is not given then <code>fits2caom2</code> will attempt to retrieve the
        artifact indicated by the uri</li>
    <li>--out is the name of the filename for the resulting XML document that contains the CAOM metadata record.  </li>
</ul>

<p>After the Observation has been created, that’s what’s in the XML document,  we can add additional Planes to the
    Observation by running <code>fits2caom2</code> with the previous file as an input and new productID, uri, local values.  This
    result is then stored into a new output file:</p>

<pre><code>
fits2caom2 --collection=CFHT \
--observationID=1615920 \
--productID=1615920p \
--uri=ad:CFHT/1615920p \
--local=1615920p.fits  \
--in=1615920o.xml \
--out=1615920.xml 
</code></pre>

<ul><li>--in gives the name of an XML document containing the CAOM record that will be added to or modified by this
    running of <code>fits2caom2</code></li></ul>

<p>Now the output file contains entries for both planes (1615920o and 1615920p)</p>

<p>Other options allow one to override the default behaviours of <code>fits2caom2</code> and provide information needed for
    constructing the CAOM record that might not be available in your FITS header</p>

<h3>--config=camera.config</h3>

<p>Although <code>fits2caom2</code> has been written with astronomy data in-mind, not all keywords can be guessed at generically.
    To help the program determine how to map the contents of the FITS header keywords to CAOM database entries the user
    provides a configuration file.  Below is an excerpt from the camera.config file for the CFHT MegaPrime camera: </p>

<pre><code>
Observation.telescope.geoLocationX = telescope.geoLocation
Observation.type = OBSTYPE
Chunk.naxis = ZNAXIS,NAXIS
Chunk.energyAxis = getEnergyAxis()
Chunk.energy.axis.axis.ctype = CTYPE{energyAxis}
.
.
.
</code></pre>


<p>The above examples cover the forms for specifying values of paramters in the configuration file:
<ol>
<li> value specified in the default.config file (see next section), </li>
<li> reference to one (or more) FITS header keywords (evaluated in order until existing value is found)</li>
<li> a call to a special function inside <code>fits2caom2</code></li>
<li>reference to a FITS header keyword but with the name set by a variable.
The value of the variable value is set elsewhere in the config file</li>
</ol>

<p>These are places where some hidden logic is used to determine a value
    but the user might want to replace that logic with a hardcoded value. There is NOT a set of user configurable
    functions.
</p>

<p> Use the command line option --dumpconfig to see a complete list of possible values to set. </p>


<h3>--default=camera.default</h3>
<p>This simplest use of <code>fits2caom2</code> will likely result in incomplete CAOM model records.  There 
is only some much information that can be generically guessed at or is available in the FITS header.  To assist
    <code>fits2caom2</code> in building a record the user provides default values for some parameters.  This file contains a series
    of entries (one per line) that map CAOM entries to FITS keywords or provide a hard coded value.  Below is an
    example of a default  file:</p>

<pre><code>
algorithm.name = exposure

telescope.geoLocationX = -5464228.6
telescope.geoLocationY = -2493778.2
telescope.geoLocationZ = 2150937.8
telescope.name =  CFHT 3.6m

provenance.name = ELIXIR
provenance.producer = CFHT
provenance.project = STANDARD PIPELINE
provenance.reference = http://www.cfht.hawaii.edu/Instruments/Elixir/

plane.dataProductType=image

CUNIT1 = deg
CUNIT2 = deg
CRDER1 = 0.0000278
CRDER2 = 0.0000278
CSYER1 = 0.0000278
CSYER2 = 0.0000278

CTYPE3 = TIME
CUNIT3 = d
CRDER3 = 0.0000001
CSYER3 = 0.0000001

CTYPE4 = WAVE
CUNIT4 = Angstrom
NAXIS4 = 1
CRPIX4 = 1
SPECSYS = TOPOCENT
SSYSOBS = TOPOCENT
SSYSSRC = TOPOCENT
CRDER4 = 1.0
CSYER4 = 1.0
</code></pre>

<p>The values of parameters set in the camera.default file are not looked in the FITS header but are set to the value
    given in the file.</p>

<p>Notice that ‘CTYPE?’ keywords values. These are bit unusual.   For CAOM we add two additional axes to a standard
    image, a TIME axes and a WAVE axes.  These two additional axes are each 1 pixel in size and specify the full
    4-dimensional nature of an image (images are 2-D plus the time of the image and energy of the exposure).  For 2-D
    images the two extra dimensions will be axes 3 and axes 4, as determined by the getEnergyAxes() and getTimeAxes()
    functions.
</p>

<h3>--override=camera.override</h3>

<p>Some of the values that <code>fits2caom2</code> will attempt to use will be wrong.  For those you can override the values in the
    override file.  This is similar to the default file but here you are specifically stating that you don’t want the
    value found in the header. </p>

<p>Once you have all these extra configuration files set you can proceed with the command like so:</p>

<pre><code>
fits2caom2 --collection=CFHT \
--observationID=1615920 \
--productID=1615920p \
--uri=ad:CFHT/1615920p \
--local=1615920p.fits  \
--config=camera.config \
--default=camera.default \ 
--override=camera.override \
--in=1615920o.xml \
--out=1615920.xml 
</code></pre>
