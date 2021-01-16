FROM debian:latest

# Persist bash history between runs
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo $SNIPPET >> "/root/.bashrc"

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 14.15.4

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install Git and setup SITK local Git account
RUN apt-get -y install git \
    && source ~/.bashrc \
    && git config --global user.name "Sharing Is The Key" \
    && git config --global user.email "sitknewnormal@gmail.com"

# A simple node program for executing commands using an environment from an env file.
RUN npm install env-cmd --save

# Fast, unopinionated, minimalist web framework for Node.js
RUN npm install express --save

# morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process
RUN npm install morgan --save

# Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
RUN npm install body-parser --save

# The node-oracledb add-on for Node.js powers high performance Oracle Database applications.
RUN npm install oracledb --save

# A lightweight interface for running git commands in any node.js application.
RUN npm install simple-git --save

# see https://help.ubuntu.com/community/Oracle%20Instant%20Client
RUN apt-get update && apt-get install -y --no-install-recommends alien libaio1 wget && \
    wget https://download.oracle.com/otn_software/linux/instantclient/211000/oracle-instantclient-basiclite-21.1.0.0.0-1.x86_64.rpm && \
    alien -i oracle-instantclient-basiclite-21.1.0.0.0-1.x86_64.rpm && \
    rm oracle-instantclient-basiclite-21.1.0.0.0-1.x86_64.rpm

ENV LD_LIBRARY_PATH="/usr/lib/oracle/21/client64/lib:${LD_LIBRARY_PATH}"
