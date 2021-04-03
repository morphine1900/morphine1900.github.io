#!/bin/sh -ex

tree -J assets/ --noreport > pictures.json

sed -i "s/\.\.\/css\/main\.css/\/css\/main\.css/"   tigerdaddy/index.html
sed -i "s/\.\.\/js\/script\.js/\/js\/script\.js/"   tigerdaddy/index.html
sed -i "s/const ROOT = \".*\";/const ROOT = \"\";/" js/script.js