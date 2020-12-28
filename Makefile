## Global variables
env?="development"
#git_branch?=$(shell git rev-parse --abbrev-ref HEAD)
#git_commit?=$(shell git rev-parse --short HEAD)
#git_tag?= $(shell git describe --tags --exact-match)

## Folders
node_folder=./node_modules
bin_folder=${node_folder}/.bin
pkgs_folder=./packages
website_folder=./website
release_folder=./release
dist_folder=./dist
public_folder=./public

## Packages folders
siimple_dist=${pkgs_folder}/siimple/dist
icons_dist=${pkgs_folder}/siimple-icons/dist
experiments_dist=${pkgs_folder}/siimple-experiments/dist
#neutrine_dist=${pkgs_folder}/neutrine/dist
neutrine_src=${pkgs_folder}/neutrine/src
neutrine_lib=${pkgs_folder}/neutrine/lib
components_dist=${pkgs_folder}/siimple-components/dist

## Icons output paths
#output_dist=./packages/siimple/dist
icons_folder_svg=${icons_dist}/svg
icons_folder_fonts=${icons_dist}/fonts
icons_svg=${icons_folder_svg}/siimple-icons.svg
icons_font_svg=${icons_folder_fonts}/siimple-icons.font.svg
icons_font_ttf=${icons_folder_fonts}/siimple-icons.font.ttf
icons_font_woff=${icons_folder_fonts}/siimple-icons.font.woff
icons_font_woff2=${icons_folder_fonts}/siimple-icons.font.woff2

## Configuration files
components_config=${pkgs_folder}/siimple-components/rollup.config.js
website_config=${website_folder}/webpack.config.js
playground_config=${pkgs_folder}/siimple-playground/webpack.config.js
#studio_config=${pkgs_folder}/siimple-studio/webpack.config.js

# Initialize the env
.PHONY: install
install:
	npm install
	rm package-lock.json

# Upgrade packages versions
.PHONY: upgrade
upgrade:
	node ./scripts/upgrade.js

# Run sass-lint
.PHONY: lint
lint: 
	${bin_folder}/sass-lint -v

# Clean output bundles and dist folders
.PHONY: clean
clean:
	cd packages/neutrine/ && rm -rf dist
	cd packages/siimple/ && rm -rf dist scss
	cd packages/siimple-icons/ && rm -rf dist scss
	cd packages/siimple-experiments/ && rm -rf dist scss
	cd packages/siimple-lib/ && rm -rf dist scss

# Build siimple
.PHONY: build
build: 
	@echo "[info] initialize output folders"
	mkdir -p ${siimple_dist}
	mkdir -p ${icons_dist} 
	mkdir -p ${experiments_dist} 
	#mkdir -p ${neutrine_dist} ${neutrine_lib}
	@echo "[info] compile dynamic styles"
	node ./scripts/compile.js
	@echo "[info] building icons fonts"
	mkdir -p ${icons_folder_fonts} ${icons_folder_svg}
	node ./scripts/build-svg-sprites.js --output ${icons_svg}
	node ./scripts/build-svg-font.js --output ${icons_font_svg}
	${bin_folder}/svg2ttf ${icons_font_svg} ${icons_font_ttf}
	${bin_folder}/ttf2woff ${icons_font_ttf} ${icons_font_woff}
	${bin_folder}/woff2_compress.js ${icons_font_ttf} ${iconst_font_woff2}
	@echo "[info] building compiled css styles"
	${MAKE} build-style input="${pkgs_folder}/siimple/index.scss" output="${siimple_dist}/siimple"
	${MAKE} build-style input="${pkgs_folder}/siimple-icons/index.scss" output="${icons_dist}/siimple-icons"
	${MAKE} build-style input="${pkgs_folder}/siimple-experiments/index.scss" output="${experiments_dist}/siimple-experiments"
	#@echo "[info] building scss modules and libs"
	#node ./scripts/bundle.js
	#node ./scripts/modules.js
	@echo "[info] building components"
	${bin_folder}/rollup -c ${components_config}
	## For neutrine libs we only need raw css styles, not minimized
	#${MAKE} build-style input="./src/components/style.scss" output="${neutrine_dist}/neutrine"
	${bin_folder}/sass -I ${pkgs_folder} --no-source-map ${pkgs_folder}/siimple-components/src/style.scss ${pkgs_folder}/siimple-components/dist/siimple-components.css

# Build a style
.PHONY: build-style
build-style:
	${bin_folder}/sass -I ${pkgs_folder} ${input} ${output}.css
	${bin_folder}/postcss --use autoprefixer --config ./postcss.config.js --map false --output ${output}.css ${output}.css
	${bin_folder}/cleancss --compatibility "*" --level 2 --output ${output}.min.css ${output}.css

## Build playground application for production env
.PHONY: build-playground
build-playground:
	${bin_folder}/webpack --config ${playground_config} --env NODE_ENV=${env}

## Generate dist export files
.PHONY: dist
dist:
	rm -rf ${dist_folder} && mkdir -p ${dist_folder}
	node ./scripts/dist.js

# Generate a folder with the release packages
.PHONY: release
release:
	rm -rf ${release_folder} && mkdir -p ${release_folder}
	${MAKE} release-package pkg="neutrine"
	${MAKE} release-package pkg="siimple"
	${MAKE} release-package pkg="siimple-lib"
	${MAKE} release-package pkg="siimple-experiments"
	${MAKE} release-package pkg="siimple-icons"

# Generate the release of a single package
.PHONY: release-package
release-package:
	rsync -a --exclude-from packages/${pkg}/.npmignore packages/${pkg} ${release_folder}/

# Publish a package
.PHONY: publish
publish:
	#${MAKE} upgrade 
	node ./scripts/publish.js --version "${version}"
	#${MAKE} publish-package pkg="siimple-lib"
	#${MAKE} publish-pacakge pkg="siimple"
	#${MAKE} publish-package pkg="siimple-icons"
	#${MAKE} publish-package pkg="siimple-experiments"
	#${MAKE} publish-commit version="${version}"

# Add commit of published version
.PHONY: publish-commit
publish-commit:
	#git add package.json
	#git add packages/siimple/package.json
	#git add packages/siimple-lib/package.json
	#git add packages/siimple-icons/package.json
	#git add packages/siimple-experiments/package.json
	#git commit -m "Publish version ${version}"

## Publish the specified package
.PHONY: publish-package
publish-package:
	cd ./packages/${pkg} && npm publish

## Run the test env
.PHONY: test
test:
	${bin_folder}/stattic --folder . --port 3000 --cors

# Build siimple website and documentation
.PHONY: build-website
build-website:
	rm -rf ${public_folder}
	mkdir -p ${public_folder} ${public_folder}/assets ${public_folder}/docs
	@# Build website pages
	node ./scripts/build-website.js
	@# Build assets
	${bin_folder}/sass --no-source-map -I ${pkgs_folder} ${website_folder}/style.scss ${public_folder}/assets/style.css
	cp ${siimple_dist}/siimple.min.css ${public_folder}/assets/
	cp ${experiments_dist}/siimple-experiments.min.css ${public_folder}/assets/
	cp ${icons_dist}/siimple-icons.min.css ${public_folder}/assets/
	cp -R ${icons_dist}/fonts ${public_folder}/assets/
	@# Add vendor assets
	mkdir -p ${public_folder}/assets/vendors
	cp ${node_folder}/react/umd/react.production.min.js ${public_folder}/assets/vendors/
	cp ${node_folder}/react-dom/umd/react-dom.production.min.js ${public_folder}/assets/vendors/
	@# Copy images 
	#mkdir -p ./www/assets/brand && cp -R ../art/brand/. ./www/assets/brand/
	#mkdir -p ./www/assets/icons && cp -R ../art/icons/. ./www/assets/icons/
	@# Build scripts and applications
	mkdir -p ${public_folder}/assets/build
	${bin_folder}/webpack --config ${website_config}
	${MAKE} build-playground env=${env}
	cp ${pkgs_folder}/siimple-playground/dist/* ${public_folder}/assets/build/

# Test siimple documentation and website
.PHONY: test-website
test-website:
	#cd ${website_folder} && ${MAKE} test
	#${bin_folder}/stattic --port 5000 --folder ./www --cors
	node ./scripts/serve.js

# Publish the website
.PHONY: publish-website
publish-website:
	#cd ${website_folder} && ${MAKE} publish

# Build and serve siimple website
# Sortcut for 'make build-website && make test-website'
.PHONY: docs website
website:
	${MAKE} build-website
	${MAKE} test-website
docs:
	# [WARNING] The docs command is deprecated --> documentation has been merged with website
	# [WARNING] Run $ make website instead
	${MAKE} website


## Deploy for production
.PHONY: deploy-prod
deploy-prod:
	@echo "TODO"

## Deploy for development
.PHONY: deploy-dev
deploy-dev:
	@echo "TODO"

