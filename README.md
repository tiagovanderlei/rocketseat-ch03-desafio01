Se você não possui um container do Docker rodando o Postgres, é possível criá-lo com seguinte comando:

```bash
docker run --name ignite-challenge-database-queries -e POSTGRES_DB=queries_challenge -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Com isso, o container com o banco Postgres será instalado e ficará rodando pronto para você começar implementar o desafio.

Quando o desafio estiver finalizado, você pode parar o container com o comando `docker stop ignite-challenge-database-queries` para que não fique consumindo recursos desnecessários da sua máquina. E caso você tenha parado o container ou reiniciou sua máquina mas ainda precisa do container rodando, é possível iniciá-lo novamente com o comando `docker start ignite-challenge-database-queries`.