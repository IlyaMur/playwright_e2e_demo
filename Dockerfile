# This Dockerfile is FOR DEMONSTRATION PURPOSES ONLY ("NON-PRODUCTION").  
# It is intended solely for running a specific test suite without the need to locally install the project dependency stack.

FROM mcr.microsoft.com/playwright:v1.50.1-noble

WORKDIR /app

ENV CI=1

RUN apt-get update && apt-get install -y make

COPY . ./

RUN npm ci

ENTRYPOINT ["make", "test"]
