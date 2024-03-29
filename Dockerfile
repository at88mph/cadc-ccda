FROM jekyll/builder:3 AS build

COPY . /srv/jekyll/

RUN jekyll clean && jekyll build --future

FROM nginx:alpine

COPY --from=build /srv/jekyll/_site/ /usr/share/nginx/html/
