# Base image from Playwright with all required dependencies
FROM mcr.microsoft.com/playwright:v1.38.0-focal

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Install Playwright browsers (Chromium, Firefox, WebKit)
RUN npx playwright install --with-deps

# Expose the port (if you're running the API locally in the container)
EXPOSE 8080

# Default command to run the tests
CMD ["npx", "playwright", "test"]
