+++
date = "2016-01-12T18:01:10+01:00"
title = "Example: Check (de-)serializers"
weight = 10
presentations = ["microexchange2016"]
+++

{{< highlight "java" >}}
class AuthorSpec extends Specification with ScalaCheck with MustMatchers {
  val swaggerCheck = SwaggerChecks(new File("../bookdb_api.yaml"))

  "Author" should {
    "be receivable" in {
      implicit val arbitraryJson = Arbitrary[CheckJsValue](
                                     swaggerCheck.jsonGenerator("Author"))
      prop { json: CheckJsValue =>
        Json.parse(json.minified).validate[Author].isSuccess must beTrue
      }
    }

    "be sendable" in {
      implicit val arbitraryAuthor = Arbitrary[Author](for {
        id <- Gen.uuid
        name <- Arbitrary.arbitrary[String]
      } yield Author(id, name))
      val check = swaggerCheck.jsonVerifier("Author")

      prop { author: Author =>
        check.verify(Json.stringify(Json.toJson(author))).isSuccess must beTrue
      }
    }
  }
}
{{< /highlight >}}
