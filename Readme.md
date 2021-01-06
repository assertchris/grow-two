# Getting Started

1. git clone https://github.com/assertchris/grow-two.git
2. cd grow-two
3. npm i
4. cp .env.example .env
5. add an app key - adonis key:generate
6. node ace serve --watch or npm run dev
7. (new terminal tab) npx mix watch

If you run into issues installing the npm packages, try the following:

1. delete package-lock.json
2. run npm i

If you run into issues generating an app key, try the following:

1. go to a project using adonis 4.*
2. make a backup of the app key
3. run adonis key:generate
4. copy the app key into grow-two's .env file
5. change the app key of the old project back to its original value

(Conflicting versions of adonisjs cause this issue)

# Extra notes
- uses laravel mix for building the front-end assets, so loads of docs for that and less things to maintain
- check out resources/js/app.js to see how the galaxy components are brought in
