# Google Service Login Test
This is the repository of the BDD (Behaviour Development Driven) UI testing scenarios of the Google Service Login

# About BDD testing scenarios
* BDD scenarios can be found in the folder 'src\cypress\integration\BDD\features'
* The file 'serviceLogin.feature' contains 5 BDD scenarios written in Gherkin code. 
* The folder 'serviceLogin' contains a js file, with the corresponding step definitions.

# Before start executing the test cases
* Install node.js and npm. Access the URL https://nodejs.org/en/download/ to do the installation according to your Operating System.
* Use VS Code to open the project.

# Perform this step once to install the required modules
Open a Terminal session, select the 'src' folder (`> cd src`) and run `npm install`. This action will install the required Cypress modules to execute the test scenarios

# Run BDD Cypress test
Open a Terminal session, select the 'src' folder (`> cd src`) and run `npm run cypress:open`. This action will open a CY window for you to visualise the testing execution. Click on "serviceLogin.feature" to visualise the execution.




