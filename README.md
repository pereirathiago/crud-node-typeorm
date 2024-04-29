# Crud

## Como executar a aplicação

### Configuração inicial do ambiente

1. Crie uma pasta em um local onde você tenha direitos de gravação e leitura
2. Git clone na pasta
3. Alterar dados de acesso ao banco de dados, nos arquivos "docker-compose.yml" e "ormconfig.json".
4. Execute em linha de comando

```
  yarn

  docker-compose up

  yarn run typeorm migration:run
  yarn run seed:admin
  yarn run dev
```