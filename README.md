# www.liberozfest.com

## Docker

    $ docker build -t liberozfest:dev .
    $ docker run -d --name liberozfest -p 3000:3000 liberozfest:dev
    $ docker stop liberozfest


## Creating Digital Ocean Machine

    $ docker-machine create --driver digitalocean --digitalocean-access-token=<your_api_access_token> www.liberozfest.com


## Running on Digital Ocean

    $ docker-machine env www.liberozfest.com
    $ eval $(docker-machine env www.liberozfest.com)
    $ docker build -t www.liberozfest.com:dev .
    $ docker run -d -p 80:3000 --name www.liberozfest.com www.liberozfest.com:dev
