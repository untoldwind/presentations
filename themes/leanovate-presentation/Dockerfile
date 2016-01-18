FROM debian:sid

RUN apt-get update \
    && apt-get install -y \
       golang-go git mercurial ca-certificates python3-pip asciidoc \
       --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

RUN pip3 install pygments
RUN mkdir /usr/local/go

ENV GOPATH=/usr/local/go
ENV GOROOT=/usr/lib/go

RUN go get -v github.com/spf13/hugo

ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/go/bin

WORKDIR /project
VOLUME /project

CMD ["hugo"]
