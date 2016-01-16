FROM debian:sid

RUN apt-get update \
    && apt-get install -y \
       golang-go git mercurial ca-certificates \
       --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /go

ENV GOPATH=/go
ENV GOROOT=/usr/lib/go

ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/go/bin

RUN go get -v github.com/spf13/hugo
