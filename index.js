addEventListener("fetch", (event) => {
    event.respondWith(
        new Response("Hello Deno World!", {
            status: 200,
            headers: { "content-type": "text/plain" },
        }),
    );
});