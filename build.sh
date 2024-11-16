sh icons/build_png.sh

# install web-ext with "npm install --global web-ext"
web-ext build --overwrite-dest \
  --ignore-files=build.sh \
  --ignore-files=icons/toxcancel-48.svg \
  --ignore-files=icons/build_png.sh
