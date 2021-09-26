addEventListener("fetch", (event) => {
    const ip = event.request.headers.get("x-forwarded-for");
    event.respondWith(
        new Response(`Hello %{ip} and Welcome to Deno World!`, {
            status: 200,
            headers: { "content-type": "text/plain" },
        }),
    );
});