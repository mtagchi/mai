### Introduction

https://vercel.com/guides/deploying-next-and-mysql-with-vercel

- Create container

```
docker-compose build
docker-compose run app npm install next react react-dom
docker-compose up -d
```

Access http://localhost:3000

- Connect app container

```
docker exec -it mai_app /bin/sh
```

- Create next

```
npx create-next-app app next-mysql
```

- Connect db

```
docker exec -it mai_db /bin/sh
mysql -u user -p
```

### Connect

```
docker exec -it mai_app /bin/sh
docker exec -it mai_db /bin/sh
```