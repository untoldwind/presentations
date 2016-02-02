+++
date = "2016-01-12T18:01:10+01:00"
title = "Example: Test controller"
weight = 13
presentations = ["microexchange2016"]
markup = "mmark"
+++

{{< highlight "scala" >}}
class AuthorsControllerSpec extends PlaySpecification with ScalaCheck with Mockito {
  val swaggerCheck = SwaggerChecks(new File("bookdb_api.yaml"))

  "AuthorsController" should {
    "handle all /authors routes" in {
      implicit val arbitraryRequest =
        Arbitrary[PlayOperationVerifier](swaggerCheck.operationVerifier(_.startsWith("/v1/authors")))

      prop {
        requestVerifier: PlayOperationVerifier =>
          val Some(result) = route(requestVerifier.request)

          requestVerifier.responseVerifier.verify(result) must be equalTo ValidationResult.success
      }.setContext(new WithApplication(testApp) {})
    }
  }

  def testApp: Application = {
    val mockAuthorDAO = mock[AuthorDAO]
...setup mockAuthorDAO...
    new GuiceApplicationBuilder()
      .overrides(bind[AuthorDAO].toInstance(mockAuthorDAO))
      .build()
  }
}
{{< /highlight >}}
