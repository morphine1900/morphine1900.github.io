#!/bin/sh -ex
echo "const assets =" > js/pictures.js
tree -J assets/ --noreport >> js/pictures.js

sed -i "s/\.\.\/css\/main\.css/\/css\/main\.css/"   tigerdaddy/index.html
sed -i "s/\.\.\/js\/script\.js/\/js\/script\.js/"   tigerdaddy/index.html
sed -i "s/\.\.\/js\/pictures\.js/\/js\/pictures\.js/"   tigerdaddy/index.html
sed -i "s/const ROOT = \".*\";/const ROOT = \"\";/" js/script.js