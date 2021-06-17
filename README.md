<div>
    <h1>Base NodeJS Repository</h1>
    <p>This is a base repository to initiate new projects in NodeJS a bit faster.</p>
</div>

# Description

This repository was created to make a project initialization a bit easier. Configure all the folder struct, eslint, docker, orm, sometimes can be really lame, so by cloning this in can just jump straight to the code. Use this template and give it your project name to start, then follow the [instructions](#Run-the-project) to initialize it. After that you can use this readme to document your project as well.

# Use Cases and Requirements

# Tecnologies

 - NodeJS
 - Typescript
 - Express
 - ts-node-dev
 - yarn
 - TypeORM
 - Docker
 - eslint
 - prettier

# Run the project

Follow this base commands to run the code using a docker container. By default it creates a postgres database but you can change it on the `docker-compose.yml` file.

```bash
# Clonar o repositório
$ git clone https://github.com/hereisjohnny2/your-project-name.git

# Rodar aplicação em modo de desenvolvimento
$ docker-compose up -d
```

# Rotas

