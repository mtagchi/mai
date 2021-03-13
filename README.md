### Introduction

https://vercel.com/guides/deploying-next-and-mysql-with-vercel

- Create container

```
docker-compose up -d
```

- Connect app container

```
docker exec -it mai_app /bin/sh
```

- Create next

```
npx create-next-app app next-mysql
```

### Connect

```
docker exec -it mai_app /bin/sh
docker exec -it mai_db /bin/sh
```