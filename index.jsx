import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function App() {
    return (
        <html>
            <head>
                <title>Hello from JSX</title>
            </head>
            <body>
                <h1>Hello Deno World from JSX</h1>
            </body>
        </html>
    );
}

addEventListener("fetch", (event) => {
    const reponse = new Response(
        renderToString(<App/>),
        {
            headers: {
                'content-type': 'text/html; charset=utf-8'
            }
        }
    );
    event.respondWith(reponse);
});