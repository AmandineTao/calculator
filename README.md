# Calculator Web App

This is a simple web-based [calculator](https://amandinetao.github.io/calculator/) that allows users to perform basic arithmetic operations and convert decimal numbers to binary, hexadecimal, and octal formats.

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
This image can be use to run the calculator on a Docker container.


### Running the Calculator from DockerHub

Alternatively, you can run the calculator as a Docker container using the image available on DockerHub.

#### Pull the Docker Image

You can pull the Docker image from DockerHub using the following command:

```bash
docker pull matao39/calculator
```

#### Run the Docker Container

After pulling the image, run the container using:

```bash
docker run -p 8080:80 matao39/calculator
```

This command runs a container based on the matao39/calculator image and maps port 8080 on your local machine to port 80 in the container. Adjust the port numbers as needed based on your configuration.

Access the calculator by opening a web browser and navigating to http://localhost:8080.


##  GitHub Actions Workflow
A GitHub Actions workflow has been set up to automate the build and test processes for the Docker image. It also deploy the app on github pages:
[calculator](https://amandinetao.github.io/calculator/)

    

### Workflow Configuration
The workflow is defined in .github/workflows/main.yml.
Here jobs are defined to perfom the following tasks:
- build a Docker image of the calculator app 
- deploy this app on github pages
- deploy the its Docker image on dockerhub

## Technologies Used

- HTML
- CSS
- JavaScript
- Docker
- Github actions, pages


## Acknowledgments
This project is intended as a simple demonstration and can be extended with additional features and enhancements as needed.

