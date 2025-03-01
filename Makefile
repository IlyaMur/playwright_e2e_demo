PW=npx playwright test

.PHONY: test start lint test-headed test-debug docker-test docker-clean docker-test-run allure test-allure clean-reports

start:
	@bin/app_mac_arm

lint:
	@npx eslint . && npx tsc -p tsconfig.json --noEmit

allure:
	@allure serve allure-results --clean

test:
	@$(PW)

test-mobile:
	@$(PW) --project=mobile

test-headed:
	@$(PW) --headed

test-debug:
	@$(PW) --debug

clean-reports: 
	@rm -r allure-results test-results && echo "Test reports cleaned..."

test-allure: test allure 

install:
	@npm i

env-prepare:
	mv .env.example .env

# Container start only

build:
	@docker build -t playwright-tests .

docker-test:
	@docker run --rm playwright-tests

docker-clean:
	@docker rmi -f playwright-tests 2>/dev/null || true

docker-test-run: build docker-test docker-clean