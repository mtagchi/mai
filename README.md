### Introduction

- Set env @`./env`

- Create container

```
docker-compose build
docker-compose run app npm install next react react-dom firebase
docker-compose up -d
```

Access http://localhost:3000

### Connect

```
docker exec -it mai_app /bin/sh
```
