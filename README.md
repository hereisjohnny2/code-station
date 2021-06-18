<div>
    <h1>Code/Station Challenge - Backend</h1>
    <p>TBackend service to MedicalAid Code/Station Challenge</p>
</div>

# Description

This project is a backend application part of the code/station hackathon. It servers a the frontend which can be found [here](). The application as whole has the propouse to give patients with some urgency a first contact by WhatsApp with a nearby doctor, who would be available to help then. Any doctor with a valid CRM number can create an account on the plataform. It's also necessary to give a valid fone number with WhatsApp access. The doctor will also choose a major category (or specialitty) which he or she is more related to.

From the pacient side, after choosing the doctor, a form with some information need to fill up. There are questions asking about weight, age, height and diseases historical. The awnsers will be sent to the doctor as a first contact. The patient might also want to filter the doctors by symtoms (which are related with the category) and category.

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

# Routes

