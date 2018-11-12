# deepstream.io complete backend
test
This little `compose.yml` file starts an awesome deepstream.io environment, including:

* RethinkDB
* Redis
* deepstream.io
* deepstream.io-search-provider

This will allow you to get up and running in less than a minute.

## How to run

```bash
docker-compose up
```

That's all folks!

### Note

***If you want to expose the data rethinkDB saves on windows you have to change:***
```
volumes:
    - ./deepstream_data:/data
```
***to***
```
volumes:
    - C:/Users/username/folderName:/data
```
