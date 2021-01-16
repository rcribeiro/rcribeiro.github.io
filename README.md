# SITK - Node Oracle Rest API

Express Node.js API that access Oracle database, saves the dataset result in an object format, saves it to the local file system and automatically uploads it to a Github public page. 

The Github public page works as public JSON file host so that can be used anywhere.

## What I used
1. Docker Debian official image - curret version 10 (buster)
2. NVM - Node Version Manager
3. Node.js - current version v14.15.4
4. Git
5. Oracle database server - any version (I used Oracle 19c)
6. Oracle database instant client basec light - version 21.1.0.0.0-1.x86_64
7. Some NPM packages
    - **env-cmd**: A simple node program for executing commands using an environment from an env file
    - **express**: Fast, unopinionated, minimalist web framework for Node.js
    - **body-parser**: Parse incoming request bodies in a middleware before your handlers, available under the req.body property
    - **oracledb**: The node-oracledb add-on for Node.js powers high performance Oracle Database applications
    - **simple-git**: A lightweight interface for running git commands in any node.js application.

### For the development environment I used VS Code running Dev Containers properly setup with:
1. VS Code extensions
    - **eamodio.gitlens**: GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more
    - **esbenp.prettier-vscode**: Prettier Formatter for Visual Studio Code
Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary
    - **ms-azuretools.vscode-docker**: The Docker extension makes it easy to build, manage, and deploy containerized applications from Visual Studio Code. It also provides one-click debugging of Node.js, Python, and .NET Core inside a container