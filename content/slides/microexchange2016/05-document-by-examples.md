+++
date = "2016-01-12T18:01:10+01:00"
title = "Document by example"
weight = 5
presentations = ["microexchange2016"]
markup = "mmark"
+++

{.incremental}
* Write your own consumer test (or smoke test) for your service
  * Test your service as near to production as possible (staging environment)
  * Integrate it in your deployment chain
  * If possible use a BDD test-framework
* Log all HTTP requests/responses
* Generate a report from theses logs
* Publish this report where other developers can easily find them
* Optional: Record all html requests with a mock-tool (e.g. [Wiremock](http://wiremock.org/))
