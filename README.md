# www.liberozfest.com

## Docker

    $ docker build -t liberozfest:dev .
    $ docker run -d --name liberozfest -p 3000:3000 liberozfest:dev
    $ docker stop liberozfest
