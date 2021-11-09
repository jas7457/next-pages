## Colocating Next.js "pages" components

Often times I will have a Next.js route that I want to break into multiple subcomponents, but those subcomponents really only make sense in the context of that route. You _could_ add them to the components folder, but then they are routeable.

Historyically, I've made a mirror folder hierarcy under /components/pages/pageName/SomeComponent.js. While this works, it breaks the colocation of related files.

TIL you can add a "pageExtensions" to your next.config.js file to define what Next considers a "page" and what is not, thus allowing for colocation of related page files! Read more about custom page extensions [here](https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions) as I'm yet unsure if there are any gotchas.

It's worth noting that I'm unsure how this would interact with the new client and server components introduced in Next 12, as they also rely on .server.js and .client.js extensions, so it may interfere with that (untested).
