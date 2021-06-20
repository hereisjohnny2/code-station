<div>
    <h1>Code/Station Challenge - Backend</h1>
    <p>TBackend service to MedicalAid Code/Station Challenge.</p>
</div>

# Description

This project is a backend application part of the code/station hackathon. It servers a the frontend which can be found [here](https://github.com/octaviobarbosa/code-station). The application as whole has the propouse to give patients with some urgency a first contact by WhatsApp with a nearby doctor, who would be available to help then. Any doctor with a valid CRM number can create an account on the plataform. It's also necessary to give a valid fone number with WhatsApp access. The doctor will also choose a major category (or specialitty) which he or she is more related to.

From the pacient side, after choosing the doctor, a form with some information need to fill up. There are questions asking about weight, age, height and diseases historical. The awnsers will be sent to the doctor as a first contact. The patient might also want to filter the doctors by symtoms (which are related with the category) and category.

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
# Clone the repository
$ git clone https://github.com/hereisjohnny2/code-station.git

# Install the dependecies
$ yarn

# Run the application locally on docker
$ docker-compose up -d

# You might want to test the application
$ yarn test
```

# Routes

## POST `/users`

Create a new user with password, name, email and telefone. All the attributes are required.

## PATCH `/users/avatar`

Uploads an avatar image to a user. 

## POST `/sessions`

Authenticate the user with the email and password. It should be able to return a token to make sure that the user can create a doctor profile.

## POST `/doctors`

Create a doctor with a given category, bio, CRM number, available agenda, and clinic address. The CRM is validated using an external API.

## GET `/doctors`

List all doctors in the plataform. A query search can be done by the category ID.

## GET `/doctors/:user_id`

Shows a doctor profile by the user id related to it.

## PATCH `/doctors/rate/:doctor_id`

Rates a doctor with a valid number.

## POST `/categories`

Creates a new category with a unique name.

## GET `/categories`

Lists availables categories in the database.

## POST `/categories/symptomes/:category_id`

Associates a list of symptomes to a category.

## POST `/symptomes`

Creates a new symptom with a unique name.

## GET `/symptomes`

Lists all availables symptomes.
