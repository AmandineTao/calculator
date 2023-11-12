# Calculator Web App

This is a simple web-based calculator that allows users to perform basic arithmetic operations and convert decimal numbers to binary, hexadecimal, and octal formats.

## Features

- Perform addition, subtraction, multiplication, and division.
- Calculate the power of a number.
- Convert decimal numbers to binary, hexadecimal, and octal.
- Power on/off functionality to control the calculator.

## Usage

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.
3. Use the calculator interface to perform calculations and conversions.


## Instructions

- **Input Display:** Displays the entered numbers and operations.
- **Result Display:** Shows the calculated result or converted value.
- **Buttons:**
  - `CE`: Clear the result display.
  - `C`: Clear the entire display.
  - `←`: Delete the last entered character.
  - `bin`, `hexa`, `octal`: Convert the entered decimal number to the selected format (binary, hexadecimal, octal).
  - `x^`: Enter the power of a number.
  - `result in`: Print result in input display. And use to start new operation.
    
## Docker Configuration

### Dockerfile

The Dockerfile provided in the root directory of the project enables you to containerize the app for easy deployment.

### Building the Docker Image

To build the Docker image, use the following command:

```bash
docker build -t calculator-web-app .
```

##  GitHub Actions Workflow
A GitHub Actions workflow has been set up to automate the build and test processes for the Docker image. It also deploy the app on github pages. So the app can be used through the following link:
    https://amandinetao.github.io/calculator/

### Workflow Configuration
The workflow is defined in .github/workflows/main.yml:


## Technologies Used

- HTML
- CSS
- JavaScript
- Docker
- Github actions, pages



