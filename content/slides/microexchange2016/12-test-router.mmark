+++
date = "2016-01-12T18:01:10+01:00"
title = "Example: Test router"
weight = 12
presentations = ["microexchange2016"]
+++

{{< highlight "scala" >}}
class RouterSpec extends PlaySpecification with ScalaCheck {
  val swaggerCheck = SwaggerChecks(new File("bookdb_api.yaml"))

  "Router" should {
    "have all specified routes" in {
      implicit val arbitraryRequest =
        Arbitrary[FakeRequest[String]](swaggerCheck.requestGenerator())

      prop {
        request: FakeRequest[String] =>
          val router = Play.current.injector.instanceOf[Router]
          val handler = router.handlerFor(request)

          handler.isDefined aka s"Handler for ${request}" must beTrue
      }.setContext(new WithApplication() {})
    }
  }
}
{{< /highlight >}}
