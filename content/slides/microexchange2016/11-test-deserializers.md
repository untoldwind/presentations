+++
date = "2016-01-12T18:01:10+01:00"
title = "Example: Check deserializers"
weight = 11
presentations = ["microexchange2016"]
markup = "mmark"
+++

{{< highlight "scala" >}}
class AuthorSpec extends Specification with ScalaCheck with MustMatchers {
  val swaggerCheck = SwaggerChecks(new File("bookdb_api.yaml"))

  "Author" should {
    "be receivable" in {
      implicit val arbitraryJson = Arbitrary[CheckJsValue](
                                     swaggerCheck.jsonGenerator("Author"))

      prop {
        json: CheckJsValue =>
          val JsSuccess(_, path) = Json.parse(json.minified).validate[Author]

          path.toString() must be equalTo ""
      }
    }
  }
}
{{< /highlight >}}
