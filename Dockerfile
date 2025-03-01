# This Dockerfile is FOR DEMONSTRATION PURPOSES ONLY ("NON-PRODUCTION").  
# It is intended solely for running a specific test suite without the need to locally install the project dependency stack.

FROM mcr.microsoft.com/playwright:v1.50.1-jammy

WORKDIR /app

RUN apt-get update && apt-get install -y make && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci
COPY . ./

RUN npx playwright install --with-deps

ENTRYPOINT ["make", "-C", "/app", "test"]
