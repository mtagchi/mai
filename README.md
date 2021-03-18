### Introduction

https://vercel.com/guides/deploying-next-and-mysql-with-vercel

- Create container

```
docker-compose build
docker-compose run app npm install next react react-dom
docker-compose up -d
```

Access http://localhost:3000

### Connect

```
docker exec -it mai_app /bin/sh
docker exec -it mai_db /bin/sh
```

### MySQL connect

From host
```
mysql -P 3306 -u root -p --protocol=tcp
```
