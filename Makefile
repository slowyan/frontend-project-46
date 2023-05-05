install:
	npm ci

lint:
	npx eslint .

fix-lint:
	npx eslint --fix .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
