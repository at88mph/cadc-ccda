---
layout: cadc
lang: en
permalink: /en/doc/data/
title: Direct Data Service
altLangPage: /fr/doc/data/
dateModified: 2022-11-18
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /en/doc
      title: Documentation
---

<p>
  The direct data service allows you to download files from the CADC archive using a URL. You can download a file either directly from your browser, automate downloading multiple files from the command-line or within a python script. If the file is in the FITS format, the Direct Data Service can also retrieve only parts of the files, such as headers, cutouts or single HDUs.
</p>

<p>Access to CADC Direct Data Service:</p>
<ul>
    <li>directly from a <a href="#url">URL</a></li>
    <li>with <a href="#command-lines">command line tools (CLI)</a></li>
    <li>with a <a href="#library">Python library</a></li>
    <li>with the service <a href="#api">API</a></li>
</ul>
<p>In order to use the Direct Data service, both a CADC <strong>Archive Name</strong> and a <strong>Complete File Name</strong> are required.</p>
<p>Example: <code>CFHT/1722795p.fits.fz</code></p>
<table class="table">
    <thead>
        <tr>
            <th style="text-align:left">Element</th>
            <th style="text-align:left">Value</th>
            <th style="text-align:left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:left"><code>{ARCHIVE}</code></td>
            <td style="text-align:left"><strong>CFHT</strong></td>
            <td style="text-align:left">Identifies the data archive</td>
        </tr>
        <tr>
            <td style="text-align:left"><code>{FILENAME}</code></td>
            <td style="text-align:left"><strong>1722795p.fits.fz</strong></td>
            <td style="text-align:left">Complete name of the file in the archive including the correct file extensions if any</td>
        </tr>
        <tr>
            <td style="text-align:left"><code>[OPTIONS]</code></td>
            <td style="text-align:left"><strong>meta=true</strong></td>
            <td style="text-align:left">Following the filename you can add options, in this case, the FITS header</td>
        </tr>
    </tbody>
</table>

<h3>Determining the source, the archive name and the file identifier</h3>
<p>
  Typically the Direct Data Service is meant to be used following a request to another CADC service, such as a data search query resulting from the <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/search/">CADC AdvancedSearch</a> service. The result of the search will contain the full URL and can be saved in a file. If not using the AdvancedSearch service, you can still formulate the URL with knowledge of the archive and file name.
</p>

<h2 id="url">Browser Usage</h2>
<p>
    If you only need to download one file from a CADC archive, the simplest way is to open your browser and enter the URL as described above in the browser URL bar.
</p>
<p>Example:</p>
<ul>
    <li>
        <p>Clicking on the URL below will start downloading the 310MB compressed FITS file <code>1722795p.fits.fz</code> from the <code>CFHT</code> archive:</p>
        <p>
            <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/1722795p.fits.fz">https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/1722795p.fits.fz</a>
        </p>
    </li>
</ul>

<h2 id="command-lines">Command-line Usage</h2>
<p>
  A request to the Direct Data Service can be performed from the command line. Traditional web command line client such as <code>wget</code>, <code>curl</code>, or <code>httpie</code> can be used, and CADC provides a slightly more evolved command-line client set of tools: <code>cadcget</code>, <code>cadcput</code> and <code>cadcinfo</code>. We detail their usage below.
</p>

<h3>Standard command-line <code>wget</code>, <code>curl</code><a class="anchor-link" href="#Standard-command-line-wget,-curl"> </a></h3>
<p>
  <a href="https://www.gnu.org/software/wget/"><code>wget</code></a> and <a href="https://curl.se/"><code>curl</code></a> are standard command-line to access web services and are often already installed on a computer (Mac and Linux).
</p>
<ul>
    <li>Example: downloading data from the IRIS archive:
        <pre>
            <code>
$ wget https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/IRIS/I429B4H0.fits 
$ curl -O -J -L https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/IRIS/I429B4H0.fits
            </code>
        </pre>
    </li>
    <li>
        <p>For <code>curl</code> to behave like <code>wget</code>, we had to specify the following options:</p>
        <code>-O -J</code> : will save the file locally (using the server-specified <code>Content-Disposition filename</code> if available, else extracts a filename from the URL) instead writing it to STDOUT.
    </li>
    <li><code>-L</code> : will ensure to redirect the URL if this is required.</li>
</ul>

<p>
    If the data you are downloading isn't public, you will need to specify your CADC X509 certificate in order to download it (user/password authentication might be enabled in a future release):
</p>
<p>Example:</p>

<pre>
    <code>
$ wget --certificate mycert.pem --ca-certificate mycert.pem https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/IRIS/I429B4H0.fits
$ curl -E mycert.pem -O -J -L https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/IRIS/I429B4H0.fits
    </code>
</pre>
<p>
    To download a user certificate that last for 30 days, from a browser log into the CADC at <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/login.html">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/login.html</a> and in the response page click on your name on the upper right corner and follow "Obtain a 30 certificate" link to save it.
</p>

<h3 id="scripting">Scripting</h3>
<p>
    <code>wget</code> or <code>curl</code> can also be used in scripts. It returns a non-zero exit status when an error occurs during execution.
</p>
<p>Example:</p>
<ul>
    <li>Search for <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/search/?Plane.position.bounds=m101&Observation.collection=CFHT&Observation.instrument.name=MegaPrime">M101 from CFHT Megaprime in AdvancedSearch</a>. Mark all images, and click "Download", selecting the "URL list in a file" option, which will download a file under the name <code>cadcUrlList.txt</code>. Then you can run this one-liner command to automatically download all the files listed in the query with 3 concurrent threads:
    <pre><code>$ cat cadcUrlList.txt | xargs -P3 wget --content-disposition</code></pre>
    </li>
</ul>
<p>Note: you can also automate the search with the <code>cadctap</code> python package.</p>
<p>Both command lines come with many options. Use <code>wget --help</code>, <code>curl --help</code> will show them all. We only list some common ones below.</p>

<h4>Commonly used options for <code>wget</code>:</h4>
<ul>
    <li><code>-nv</code> : non-verbose. <code>wget</code> sends a lot of information to STDOUT. If you are running wget in a script, you want this option.</li>
    <li><code>-q</code>: quiet mode.</li>
    <li><code>-t, --tries NUMBER</code> : set number of retries to NUMBER (5 recommended).</li>
    <li><code>--waitretry SECONDS</code> : wait 1..SECONDS between retries of a retrieval. By default, wget will assume a value of 10 seconds.</li>
    <li><code>-N, --timestamping</code> : Turn on time-stamping and download only missing or updated files.</li>
    <li><code>--content-disposition</code> : Forces wget to give the proper name to the downloaded file.</li>
    <li><code>--certificate file</code> : Use the certificate in <code>file</code> for authentication.</li>
    <li><code>--ca-certificate file</code> : File with the bundle of CAs</li>
</ul>

<h4>Commonly used options for <code>curl</code>:</h4>
<ul>
    <li><code>-O</code> : save the file locally with the same name as the remote version.</li>
    <li><code>-J</code> : use the server-specified Content-Disposition filename.</li>
    <li><code>-L</code> : follow redirects.</li>
    <li><code>-s</code> : make <code>curl</code> run quietly. If you are running <code>curl</code> in a script, you want this option.</li>
    <li><code>--retry NUMBER</code> set number of retries to NUMBER (5 recommended).</li>
    <li><code>--data-urlencode</code> : encode an non-friendly URL data into a URL friendly one, useful with cutouts.</li>
</ul>

<h3 id="cadc-data">CADC <code>cadc[get|put|info|remove]</code>Clients Usage</h3>
<p><code>cadcdata</code> is a software package for accessing the CADC Direct Data Service. It installs 4 command line applications used to manipulate data:</p>
<ul>
    <li><code>cadcget</code>: retrieve files from the CADC data service</li>
    <li><code>cadcinfo</code>: get file information</li>
    <li><code>cadcput</code>: upload new or updated files into the CADC data service</li>
    <li><code>cadcremove</code>: remove files from the CADC data service</li>
</ul>
<p>It is written in Python and can be installed with:</p>

<pre><code>    $ pip install [--upgrade] cadcdata</code></pre>
<p>It is recommended to regurarly re-install the latest version of the package by using the <code>pip --upgrade</code> option.</p>

<h4 id="cadcget-command:"><code>cadcget</code> command:</h4>
<p>The <code>cadcget</code> command is constructed to be robust and performant by taking advantage of the architecture of the CADC storage system.</p>
<p>Usage:</p>
<pre><code>$ cadcget {fileID}</code></pre>
<p>Where <code>{fileID}</code> is an identifier of a file. The complete form of the identifier is <code>{scheme}:{archive}/{path}/{filename}</code> where:</p>
<ul>
    <li><code>scheme</code>: (optional) represents a scheme assigned by the data provider <code>cadc</code>, <code>mast</code>, <code>gemini</code> etc.</li>
    <li><code>archive</code>: name of the archive</li>
    <li><code>path</code>: observatories might opt to use a file path in the identifier. This is very infrequent.</li>
    <li><code>filename</code>: complete name of the file</li>
</ul>
<p>In practice, <code>{archive}/{filename}</code> is sufficient to access a file in the majority of cases.</p>
<p>Example:</p>
<ul>
    <li>Download the file <code>I429B4H0.fits</code> from the public <code>IRIS</code> archive to the current directory:</li>
</ul>

<pre><code>$ cadcget IRIS/I429B4H0.fits</code></pre>
<p>However, the complete form will also work:</p>

<pre><code>$ cadcget cadc:IRIS/I429B4H0.fits</code></pre>

<h4><code>cadcget</code> scripting:</h4>
<p><code>cadcdata</code> can also be used in scripts. It returns a non-zero exit status when an error occurs during execution.<br></p>
<p>Examples:</p>
<ul>
    <li>Download I001B3H0.fits and I016B4H0.fits files from the IRIS archive
    <pre>
        <code>
#!/bin/bash
archive=IRIS
for file in I001B3H0.fits I016B4H0.fits; do
echo "getting $archive/$file"
cadcget $archive/$file &amp;&amp; echo "done" || echo "failed"
done
        </code>
    </pre>
    </li>
</ul>

<h2 id="FITS-Cutouts-Retrieval">FITS Cutouts Retrieval</h2>
<p>
    If you are dealing with FITS files, and you know you are only interested in small parts of the files, you can limit your retrievals to cutouts. A number of cutout parameters may be included, using a subset of the <a href="http://heasarc.gsfc.nasa.gov/docs/software/fitsio/c/c_user/node97.html">CFITSIO image section specification</a> for cutout specification. Cutouts need to be encoded with <code>cutout=&lt;value&gt;</code> format in the URL as specified in the service <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/raven/#!/Artifact_transfer/get_files_artifact_uri">API</a>.
</p>

<ul>
    <li>Some examples of cutouts specifications for the <code>&lt;value&gt;</code>:</li>
</ul>
<table>
    <thead>
        <tr>
            <th style="text-align:left">Value</th>
            <th style="text-align:left">Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:left">[1:512:2,2:512:2]</td>
            <td style="text-align:left">Open a 256x256 pixel image consisting of the odd numbered columns (1st axis) and the even numbered rows (2nd axis) of the image in the primary array of the file.</td>
        </tr>
        <tr>
            <td style="text-align:left">[*,512:256]</td>
            <td style="text-align:left">Open an image consisting of all the columns in the input image, but only rows 256 through 512. The image will be flipped along the 2nd axis since the starting pixel is greater than the ending pixel.</td>
        </tr>
        <tr>
            <td style="text-align:left">[*:2,512:256:2]</td>
            <td style="text-align:left">Same as above but keeping only every other row and column in the input image.</td>
        </tr>
        <tr>
            <td style="text-align:left">[-*,*]</td>
            <td style="text-align:left">Copy the entire image, flipping it along the first axis.</td>
        </tr>
        <tr>
            <td style="text-align:left">[3][1:256,1:256]</td>
            <td style="text-align:left">Opens a subsection of the image that is in the 3rd extension of the file.</td>
        </tr>
    </tbody>
</table>

<h3 id="Command-line-cutout-examples">Command-line cutout examples</h3>
<p>We provide below some examples using both <code>cadcget</code> and <code>curl</code>. For <code>curl</code> it is often less error-prone to embed the full cutout URL between quotes and encoding the cutout value which contains the <code>[]</code> brackets with the <code>--data-urlencode</code> option.</p>
<ol>
    <li>
        <p>Single FITS extension cutout</p>
<pre>
    <code>
$ cadcget "CFHT/806045o.fits.fz?cutout=[1]" --output 806045o-cutout1.fits
$ curl -L -G -o 806045o-cutout1.fits --data-urlencode "cutout=[1]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz
    </code>
</pre>
    </li>
    <li>
        <p>Pixel coordinate cutout</p>
<pre>
    <code>
$ cadcget "CFHTSG/D3.IQ.R.fits?cutout=[9979:10490,10573:11084]" --output D3.IQ.R.9979_10490_10573_11084.fits
$ curl -L -G -o D3.IQ.R.9979_10490_10573_11084.fits --data-urlencode "cutout=[9979:10490,10573:11084]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.R.fits
    </code>
</pre>
    </li>
    <li>
        <p>Extension and pixel coordinate cutout</p>
<pre>
    <code>
$ cadcget "CFHT/806045o.fits.fz?cutout=[1][1:100,1:200]" --output 806045o-cutout2.fits
$ curl -L -G -o 806045o-cutout2.fits --data-urlencode "cutout=[1][1:100,1:200]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz
    </code>
</pre>
    </li>
    <li>
        <p>Multiple extension cutout</p>
<pre>
    <code>
$ cadcget "CFHT/806045o.fits.fz?cutout=[1]&amp;cutout=[2]" --output 806045o-cutout3.fits
$ curl -L -G -o 806045o-cutout3.fits --data-urlencode "cutout=[1]" --data-urlencode "cutout=[2]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz
    </code>
</pre>
    </li>
    <li>
        <p>Multiple extension cutout with pixel coordinates</p>
<pre>
    <code>
$ cadcget "CFHT/806045o.fits.fz?cutout=[1][10:120,20:30]&amp;cutout=[2][10:120,20:30]" --output 806045o-cutout4.fits
$ curl -L -G -o 806045o-cutout4.fits --data-urlencode "cutout=[1][10:120,20:30]" --data-urlencode "cutout=[2][10:120,20:30]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz
    </code>
</pre>
    </li>
    <li>
        <p>Alternatively, it is possible to specify a cutout by RA and Dec, using a slightly different service:</p>
        <pre>
            <code>
$ curl -L -O -J "https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/caom2ops/sync?id=cadc:CFHTSG/D2.I.fits&amp;CIRCLE=150.570478+2.172356+0.01"
            </code>
        </pre>
        <p>Where the numbers are RA, Dec and size, all in degrees. Remember that in a "+" (plus sign) in a URL means " ", a blank space.</p>
    </li>
</ol>

<h2 id="FITS-Headers-retrieval">FITS Headers retrieval</h2>
<h3 id="Using-cadcget-to-download-a-FITS-header">Using <code>cadcget</code> to download a FITS header</h3>
<p><code>cadcget</code> has a <code>--fhead</code> option for downloading FITS header information:</p>

<pre>
    <code>$ cadcget --fhead IRIS/I001B3H0.fits</code>
</pre>

<h4><code>cadcget</code> commonly used options:</h4>
<p>You can adapt <code>cadcget</code> to your use case with options. Below is a list of some useful options when downloading data.</p>
<ul>
    <li><p><code>-u, --user=USER</code> : If the data is not public, this option allows to specify the CADC USER to access protected data. The command will prompt for your CADC password.
Example:
The user John Smith with CADC username <code>johnsmith</code> is downloading the protected file <code>I429B4H0.fits</code>:</p>
<pre>
    <code>
$ cadcget --user=johnsmith IRIS/I429B4H0.fits
johnsmith@ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca
Password: ********
    </code>
</pre>
<p>To avoid being prompted for a password, use instead the options <code>-c</code> or <code>-n</code>.</p>
    </li>
    <li>
        <p><code>-c, --cert=/path/to/cert</code> : specify the path a X509 temporary proxy certificate to use for authentication. Get a proxy certificate once, and re-use it multiple times for fun and profit, or send it to your trusted collaborators. Example:
        </p>

        <pre>
            <code>
$ cadc-get-cert -u johnsmith
johnsmith@ws-cadc.canfar.net
Password: ********

$ cadcget --cert ~/.ssl/cadcproxy.pem IRIS/I429B4H0.fits
            </code>
        </pre>
    </li>
    <li>
        <p>
            <code>-n, --netrc-file=/path/to/netrc</code> : allows the legacy <a href="https://ec.haxx.se/usingcurl-netrc.html">.netrc</a> file format for authentication of a web service. The file has in clear text the CADC username and password, so use with with caution. Its default location is <code>${HOME}/.netrc</code>. Example:
        </p>
        <pre>
            <code>$ cadcget -n CFHT/700000o.fits.fz</code>
        </pre>
    </li>
<li><p><code>--fhead</code> : will download only the FITS header information. Example:</p>

<pre><code>  $ cadcget -v -n --fhead GEMINI/mrgN20091214S0271_add.fits</code></pre>
</li>
<li><p><code>-o, --output OUTPUT</code>: write to different file name, or download into another directory</p>
</li>
<li><p><code>-q, --quiet</code>:  will perform the operation quietly</p>
</li>
<li><p><code>-v, --verbose</code>: will show more dialogues and progress-bar for downloads.</p>
</li>
</ul>
<p>You can find the full list of options by running <code>cadcget --help</code> from a terminal.</p>

<h3 id="Using-a-data-service-URL-to-download-a-FITS-header">Using a data service URL to download a FITS header<a class="anchor-link" href="#Using-a-data-service-URL-to-download-a-FITS-header"> </a></h3><p>When requesting a file of type FITS, providing the parameter <code>META=true</code> will result in the download of the header information of the file.</p>
<p>Example: view the headers of all extensions of a CFHT image:</p>

<pre><code>$ curl -L -G "https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/2583975o.fits.fz?META=true"</code></pre>
<p>The <code>meta=true</code> and the <code>cutout</code> parameters can not be simultaneously used. A potentially useful workaround is to request a cutout of only one pixel of a given extension, e.g. <code>cutout=[1][1:1,1:1]</code>.</p>

<h2>Advanced Usage of the Direct Data Service</h2>
<p>So far only the read version was covered. The Direct Data Service can also be used to upload data and to get information of a file.</p>
<h3>PUT: Uploading files</h3>
<p>You may have be given access to a CADC archive, to which you can upload data to. To upload a file with the data service, you must have permission to write to the target archive.</p>
<ul>
    <li>The simplest is probably to use the command-line <code>cadcput</code> with the syntax:
        <pre><code>$ cadcput &lt;fileID&gt; src</code></pre>
    </li>
</ul>
<p>Note that <code>cadcput</code> requires the complete URI including the source, e.g. <code>cadc:CFHT/2583975o.fits.fz</code>.
An upload is done by performing an <code>HTTP PUT</code> to the URL identifying the file, and supplying the file data in the accompanying input stream of the request.</p>

<h3>INFO: Retrieving metadata information of archive files</h3><p>Use the <code>cadcinfo</code> command to retrieve metadata for a file. The metadata available is described below:</p>
<table class="table">
    <thead>
        <tr>
            <th style="text-align:right">Metadata</th>
            <th style="text-align:left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:right">id:</td>
            <td style="text-align:left">The complete ID of the file in the CADC storage</td>
        </tr>
        <tr>
            <td style="text-align:right">encoding:</td>
            <td style="text-align:left">The type of encoding (typically compression) used (optional)</td>
        </tr>
        <tr>
            <td style="text-align:right">last modified:</td>
            <td style="text-align:left">Date of the last file modification (optional: not present when modified during delivery)</td>
        </tr>
        <tr>
            <td style="text-align:right">md5sum:</td>
            <td style="text-align:left">The MD5 digest of the contents of the file.</td>
        </tr>
        <tr>
            <td style="text-align:right">name:</td>
            <td style="text-align:left">Contains a suggested filename for clients that will write the file</td>
        </tr>
        <tr>
            <td style="text-align:right">size:</td>
            <td style="text-align:left">Size of the file</td>
        </tr>
        <tr>
            <td style="text-align:right">type:</td>
            <td style="text-align:left">The mimetype of the file (optional: only present if type is known)</td>
        </tr>
    </tbody>
</table>
<p>Example:</p>
<pre><code>$ cadcinfo IRIS/I001B3H0.fits</code></pre>
<pre><code>
    CADC Storage Inventory artifact IRIS/I001B3H0.fits:
                  id: cadc:IRIS/I001B3H0.fits
                name: I001B3H0.fits
                size: 1008000
                type: application/fits
            encoding: None
       last modified: 2006-07-25T16:15:19.000
              md5sum: 2ada853a8ae135e16504aeba4e47489e
</code></pre>

<h2 id="library">Programming with the Python library</h2>
<p>
    <code>cadcdata</code> package installs a Python library that can be used directly in a Python script. Documentation on how to access the library is available with the <code>pydoc cadcdata</code> command and can be summarized as the following 2 methods:
</p>
<ol>
<li>
    <p>Instantiate <strong>StorageInventoryClient</strong> class and use it to access the data.</p>
    <p>Example:</p>
<pre>
    <code>
from cadcdata import StorageInventoryClient
client = StorageInventoryClient()
print(client.cadcinfo('GEMINI/N20220622S0260.fits'))
    </code>
</pre>
<pre>
    <code>
id=gemini:GEMINI/N20220622S0260.fits, name=N20220622S0260.fits, size=7254720, type=application/fits, encoding=binary, last modified=2022-06-23T17:24:09.000, md5sum=6831f29dfc324e0cfc30f1bc5b86e7e4
    </code>
</pre>
</li>
    <li><p>Invoke the <strong>cadc*</strong> entry point functions. These are the functions corresponding to the command line applications (<strong>cadcget_cli</strong>, <strong>cadcinfo_cli</strong>, etc.).</p>
<p>Example:</p>
<pre>
    <code>
from cadcdata import cadcinfo_cli
import sys
sys.argv = ['cadcinfo', 'GEMINI/00AUG02_002.fits']
cadcinfo_cli()
    </code>
</pre>
<pre><code>CADC Storage Inventory identifier GEMINI/N20220622S0260.fits:
               id: gemini:GEMINI/N20220622S0260.fits
             name: N20220622S0260.fits
             size: 7254720
             type: application/fits
         encoding: binary
    last modified: 2022-06-23T17:24:09.000
           md5sum: 6831f29dfc324e0cfc30f1bc5b86e7e4</code></pre>
</li>
</ol>
<p>All the CLI operations presented in this document can be performed using any of the methods listed above. The advantages and drawbacks of these methods are mentioned in the library helper.</p>

<h2 id="api">Programming with the Direct Data Service API</h2>
<p>
    If you want to program with the Direct Data Service API, we also host a full <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/raven/">documentation</a> of the web service functionalities which we summarize below.
</p>

<h3>Transfer techniques</h3>
<ul>
    <li>
        <strong>Direct download:</strong> Perform an <code>HTTP GET</code> to <code>https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/{archive}/{filename}</code> and receive a redirect to the preferred download location.
    </li>
    <li>
        <strong>Negotiated download or upload:</strong> <code>HTTP POST</code> a transfer document to <code>https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/raven/locate</code> receive a transfer document with multiple download locations included.
    </li>
</ul>

<h3>Authentication and Authorization (A&amp;A)</h3>
<p>
    If trying to access a non-public file you will be required to authenticate. <code>cadcdata</code> command line tools accept CADC username and password or   client certificates while the direct service access work with client certificates, cookies or bearer certificates. These A&amp;A methods might be updated in the future. If the authentication (login) fails, you will get an HTTP 401 (Unauthorized) response. If you successfully authenticate but are not allowed to access to the file, you will get an HTTP 403 (Forbidden) response. If the file does not exist, you will get an HTTP 404 (Not Found) response.
</p>

<h3>Checking for file availability and access</h3>
<p>
    To simply check if a file exists in a CADC archive, and that you have access to the file, using <code>wget</code> or <code>curl</code> you can perform an   <code>HTTP HEAD</code> request to the same URL that you would use to download the file. This <code>HEAD</code> request will allow you confirm its existence, your authorization, and to gather basic meta-data about the file.
</p>
<p>
    To view the HTTP headers with curl, use <code>curl --location --head</code> or <code>curl -L -I</code>.  With <code>wget</code>, use <code>wget --server-response --spider</code> Headers prefixed with an X- are custom CADC headers; all others are standard <strong><a href="http://www.w3.org/Protocols/rfc2616/rfc2616.html">HTTP 1.1</a></strong> headers.
</p>
<table class="table table-bordered">
    <thead>
        <tr>
            <th>HTTP Header</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>content-type</td>
            <td>The mimetype of the file (optional: only present if type is known)</td>
        </tr>
        <tr>
            <td>content-encoding</td>
            <td>The type of encoding (typically compression) used (optional)</td>
        </tr>
        <tr>
            <td>content-disposition</td>
            <td>Contains a suggested filename for clients that will write the file</td>
        </tr>
        <tr>
            <td>content-length</td>
            <td>Size of the file as delivered</td>
        </tr>
        <tr>
            <td>digest</td>
            <td>The MD5 digest of the contents of the file (value is base64 encoded)</td>
        </tr>
        <tr>
            <td>last-modified</td>
            <td>Date of the last file modification (optional: not present when modified during delivery)</td>
        </tr>
    </tbody>
</table>

<h3>Data service and file names</h3>
<p>
    You can use the <code>Content-Disposition</code> returned in the <code>data</code> HTTP response header to easily get wget to write the downloaded file to the name the file is stored in the archive with by using its <code>--content-disposition</code> flag. Note that you might want to also use the <code>no-clobber</code> option to avoid over-writing files you've already downloaded. There is not a <code>curl</code> option equivalent to the <code>wget --content-disposition</code> flag, but you could retrieve the HTTP header for the file, parse it for the content disposition and file name, then retrieve the file and saving it to that file name.
</p>
<p>
    For URLs which specify a cutout, the suggested filename in the <code>Content-Disposition</code> header will include a extra part so that different cutouts from the same file will have different filenames. This extra part is intended to be somewhat human readable, though many characters are replaced with an underscore (_) to be generally more Internet and file system compatible. This extra part will be consistent between requests with the same cutout parameters.
</p>

<h2 id="assistance">Contact CADC for Assistance</h2>
<p>For help and support with the data service, please email <a href="mailto:support@canfar.net">support@canfar.net</a></p>
