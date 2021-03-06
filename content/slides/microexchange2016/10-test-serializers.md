+++
date = "2016-01-12T18:01:10+01:00"
title = "Example: Check serializers"
weight = 10
presentations = ["microexchange2016"]
markup = "mmark"
+++

{{< highlight "scala" >}}
class AuthorSpec extends Specification with ScalaCheck with MustMatchers {
  val swaggerCheck = SwaggerChecks(new File("bookdb_api.yaml"))

  "Author" should {
    "be sendable" in {
      implicit val arbitraryAuthor = Arbitrary[Author](for {
        id <- Gen.uuid
        name <- Arbitrary.arbitrary[String]
        description <- Arbitrary.arbitrary[Option[String]]
      } yield Author(id, name, description))

      val verifier = swaggerCheck.jsonVerifier("Author")

      prop {
        author: Author =>
          val json = Json.stringify(Json.toJson(author))

          verifier.verify(json) must be equalTo ValidationResult.success
      }
    }
  }
}
{{< /highlight >}}
