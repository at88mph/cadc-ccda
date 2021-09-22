# cadc-site
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
