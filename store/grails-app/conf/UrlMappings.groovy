class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

		"/"(controller:"header", action:"homePage")
        "/services"(view:"/store/services")
        "/prices"(view:"/store/prices")
        "/about"(view:"/store/about")
        "/register"(view:"/login/register")
        "500"(view:'/error')
	}
}
