+++
date = "2016-01-12T18:01:10+01:00"
title = "Most common errors"
weight = 3
presentations = ["microexchange2016"]
markup = "mmark"
+++

{.incremental}
* Data is not where it is expected to be, e.g. ...
  * ... value is missing (even though it is supposed to be required)
  * ... typo in uri or json field-name
  * ... misunderstanding about json hierarchy
* Data is not in expected format, e.g. ...
  * ... string "true" instead of boolean true
  * ... integer with unix-timestamp instead of string with iso-datetime
* Consumer sends data while provider is in wrong state, e.g. ...
  * ... reference entities that should have been create before
  * ... value is out of bounds
