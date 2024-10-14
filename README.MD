README.md
# Playwright Test Automation

This project contains Playwright API test automation for the User Account API. The tests include creating, retrieving, updating, deleting users, and security tests for unauthorized access. The project uses Docker to run tests in a containerized environment for consistency and ease of setup.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests Locally](#running-tests-locally)
- [Running Tests in Docker](#running-tests-in-docker)
- [Project Structure](#project-structure)
- [Playwright Configuration](#playwright-configuration)

## Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v16+)
- Docker (v20.10+)

## Installation

1. Clone the repository:
    ```bash
    git clone  https://github.com/dmstarov/pw-apitask-app.git
    cd your-repo-name
    ```

2. Install Node.js dependencies:
    Make sure you have Node.js installed. Then run the following command to install dependencies:
    ```bash
    npm install
    ```
    This will install all required packages, including:
    - Playwright (for testing)
    - Axios (for HTTP requests)

3. Install Playwright Browsers:
    Install Playwright browsers (Chromium, Firefox, WebKit):
    ```bash
    npx playwright install
    ```

## Running Tests Locally

If you want to run the Playwright tests locally (without Docker), follow these steps:

1. Configure the API URL:
    Make sure that the API you are testing is running locally, or modify the `baseURL` in `playwright.config.ts` to point to the correct URL of the API.

2. Run Playwright Tests:
    To run all the tests:
    ```bash
    npx playwright test
    ```
    To run a specific test file:
    ```bash
    npx playwright test tests/api/createUser.spec.ts
    ```

## Running Tests in Docker

You can run the Playwright tests in a Docker container for a more isolated and consistent environment. This setup ensures that all dependencies and configurations are the same across different environments.

1. Build the Docker Image:
    Run the following command to build the Docker image for running Playwright tests:
    ```bash
    docker build -t playwright-tests .
    ```

2. Run Playwright Tests in Docker:
    After building the Docker image, run the tests inside the container:
    ```bash
    docker run --rm playwright-tests
    ```
    - `--rm`: Ensures that the container is removed after it exits.
    - `playwright-tests`: The name of the Docker image.

    This command will execute all the Playwright tests within the Docker container.