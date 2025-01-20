<h1 align="center">Automation with Cypress on ServeRest</h1>
<br />

<p style="display: flex; justify-content: center; gap: 10px;">
<img src="https://sonarcloud.io/api/project_badges/measure?project=DougSantos3_teste_qa_cypress&metric=alert_status" alt="Quality Gate Status" />
<img src="https://sonarcloud.io/api/project_badges/measure?project=DougSantos3_teste_qa_cypress&metric=bugs" alt="Bugs" />
<img src="https://sonarcloud.io/api/project_badges/measure?project=DougSantos3_teste_qa_cypress&metric=code_smells" alt="Code Smells" />
<img src="https://sonarcloud.io/api/project_badges/measure?project=DougSantos3_teste_qa_cypress&metric=duplicated_lines_density" alt="Duplicated Lines (%)" />
</p>
</div>

<br>
<br>

This is a Test QA - project using [`cypress`](https://www.cypress.io/).

## Getting Started

You need to download the packages:

```bash
# Node
v20.18.0 lts
```

```bash
# npm version: 11.0.0
# Download dependencies
npm install
```

Run tests:

```bash
# Open dashboard cypress
npm run cy:open

# Run tests ui env qa
npm run test:ui:qa

# Run tests api env qa
npm run test:api:qa

# After run test, create report. Use this command if you need to save the report for future reference or for sharing it with colleagues. With the error image of the failed test case attached to the report
npm run view:report
# Or use this command if you need to view the report for yourself and do not need to save it.  With the error image of the failed test case attached to the report
npm run server

```
<br>

## Tests Overview

### API Tests

- Updating the user's email
- Shopping cart registration
- Removing a product
- Searching for a product
- Searching for a user (This last one includes a test for user search and also validates the API contract within the same test)

### UI Tests

- Product creation
- User creation
- Login

<br>

## Learn More

From the test application I have my postman collection with more automated scripts than the one that comes in the serverRest repository. Mine is more up to date:

colletion_postman/myCollection.postman_collection.json
<br>
colletion_postman/postman_environment.json

<br>

## Project that was tested

To learn more repository serveRest:

- Project tested UI [Serverest](https://front.serverest.dev/login)
- Project tested API [Serverest](https://serverest.dev/#/)
- [Repository ServeRest](https://github.com/ServeRest/ServeRest)


<br>

## More information

If you need to use automation to access the development database in scenarios where, after the automated test, the saved record needs to be deleted to avoid accumulating entries (since the automation handles this), or if you need to perform a SELECT to retrieve data for testing purposes or other scenarios, the project is already preconfigured to access the database. It even includes examples of queries within the commands file located at cypress/support/commands/database-commands.js.
