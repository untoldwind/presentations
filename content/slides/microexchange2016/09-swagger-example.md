+++
date = "2016-01-12T18:01:10+01:00"
title = "Example: Swagger 2.0 specification"
weight = 9
presentations = ["microexchange2016"]
markup = "mmark"
+++

<table border="0" width="100%">
<tr>
<td width="50%">
{{< highlight "yaml" >}}
swagger: '2.0'
info:
  title: Book database API
  description: Manage all your books
  version: 1.0.0
basePath: /v1
paths:
  /authors:
    post:
      summary: Create a new author
      parameters:
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/Author"
      responses:
        '201':
          description: Author successfully created
          headers:
            Location:
              type: string
              format: uri
        default:
          description: Unexpected error
          schema:
            $ref: '#/definitions/Error'
{{< /highlight >}}
</td>
<td width="50%">
{{< highlight "yaml" >}}
definitions:
  Author:
    type: object
    required:
      - name
    properties:
      id:
        type: string
        format: uuid
        readOnly: true
      name:
        type: string
      description:
        type: string
  Error:
    type: object
    required:
      - code
      - message
    properties:
      code:
        type: integer
        format: int32
      message:
        type: string
      details:
        type: array
        items:
          type: string
...
{{< /highlight >}}
</td>
</tr>
</table>
