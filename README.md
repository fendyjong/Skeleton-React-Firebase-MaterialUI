# Introduction
This the skeleton using:
- ReactJS
- Material UI Next
- Firebase

# Docker
## Docker Compose
### docker-compose.yml
```yaml
mysql:
  container_name: "mysql"
  image: mysql:5.7
  environment:
    MYSQL_ROOT_PASSWORD: mysql
    MYSQL_USER: mysql
    MYSQL_PASSWORD: mysql
  ports:
    - "3306:3306"
  volumes:
    - "~/Project:/Project"

gcp:
  container_name: "gcp"
  image: ubuntu:trusty
  ports:
    - "8080:8080"
    - "8000:8000"
  volumes:
      - "~/Project:/Project"
  links:
    - mysql:mysql
  tty: true
```

### Build and start docker
```bash
docker-compose up
```

### Start docker
```bash
docker-compose start
```

## MySQL docker
Enter bash docker
```bash
docker exec -it  mysql bash
```

## GCP Docker
Enter bash docker
```bash
docker exec -it gcp bash
```

Update and upgrade
```bash
apt update && apt upgrade -y
```

Install GCP
```bash
cd [GCP_FOLDER]
./install.sh
```

## Ubuntu docker
Enter bash docker
```bash
docker exec -it ubuntu bash
```

Update and upgrade
```bash
apt update && apt upgrade -y
```

Install NPM
```bash
apt install -y curl && curl -sL https://deb.nodesource.com/setup_9.x | bash - && apt install -y nodejs
```

Install yarn
```bash
npm install -g yarn
```
