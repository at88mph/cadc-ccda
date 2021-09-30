# CADC Web Site (Based on the [gcweb-jekyll](https://github.com/wet-boew-gcweb-jekyll) plugin)
CADC Web UI offering

This is the site source for https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca.  It relies on [Jekyll](https://jekyll.org) >= 3.8, and the [Government of Canada Jekyll plugin for WET-4](https://github.com/wet-boew/gcweb-jekyll).

## Production Deployment

To deploy the site, simply pull the `opencadc/cadc-site:alpine` image and deploy it, or use the `docker-compose-prod.yml` file to deploy it.

`$> docker-compose -f docker-compose-prod.yml up -d`

## Development Deployment

The development deployment live site is constantly checking the file system, so any changes to the Markdown files are automatically built and deployed.   The `docker-compose-dev.yml` file gives an example
deployment for this.

`$> docker-compose -f docker-compose-dev.yml up -d`

### Build

If you'd rather build it yourself, you can use Jekyll's docker builder image like so:

`$> docker run --rm -ti -v $(pwd):/srv/jekyll jekyll/builder:4 /bin/bash -c "jekyll clean && jekyll build --future"`

Which will create output in the `_site` folder.  That folder can be the root of an HTML proxy server such as NGINx or Apache.

## Development

The easiest pages to create are the Archive Telescope pages.  To create a new one, the standard Front Matter looks something like:

```yaml
---
# Common values to each page
layout: cadc    # Handles side navigation or plain pages.  Used for all pages in the CADC site.
nofooter: layout.nofooter   # Remove the footer.  Inherited from the layout.
signing: layout.signing     # Show the sign-in button(s). Inherited from the layout.
nositesearch: layout.nositesearch         # Show the site search.  Inherited from the layout.
# End common values

# Page specific
lang: en        # This page's language.  Each page will have a mate of the other language (en, fr)
permalink: /en/dao/     # This page's endpoint
title: Dominion Astrophysical Observatory   # This page's title
altLangPage: /fr/ofa/   # This page's alternate language page
headerimage: /static/images/dao.jpg     # The image to use in the archive page's header.  [OPTIONAL]
dateModified: 2021-09-23    # The date this page was modified.  Set manually.

# Navigation links (right side navigation)
nav:
  # First well of links
  - links:
      - name: Search the DAO Science Archive 
        url: /en/search/?collection=DAO&noexec=true
      - name: Search the DAO Spectroscopic Plate Archive
        url: /en/search/?collection=DAOPLATES&noexec=true
  # Second well of links
  - links:
      - name: Airmass Calculator
        url: /cadcbin/en/dao/airmass.pl
      - name: Sky Calendar
        url: /cadcbin/en/dao/skycal.pl
      - name: Robotic Observing
        url: /cadcbin/en/dao/robotic.pl
  # Third well of links
  - links:
      - name: Credits and Acknowledgements
        url: /en/dao/credits.html
---
# End page specific
```

The `cadc` layout can successfully handle a side navigation or plain page.
