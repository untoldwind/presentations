+++
date = "2016-01-12T18:01:10+01:00"
title = "Provide API specification"
weight = 8
presentations = ["microexchange2016"]
markup = "mmark"
+++

{.incremental}
* Document your API with a REST specification (e.g. [Swagger](http://swagger.io/) or [RAML](http://raml.org/))
* How to keep the specification in-sync with reality?
* Usual approach:
  * Enrich/polute to your source-code with lots of annotations and generate specification automatically
  * Accuracy of the specification highly depends on the framework (jax-rs, Play, Ratpack, liberator, ...)
  * No guarantee that a new API version is backward compatible
* Advanced approach:
  * Write specification (before actually writing the code)
  * Integrate specification in unit-tests using property-based testing (e.g. [ScalaCheck](https://www.scalacheck.org/))
