install:
	npm ci

link:
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail --coverage --coverageProvider=v8