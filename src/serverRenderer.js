import React from 'react';
import { renderToString }from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './store';

import App from './components/App';

function renderHTML(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>ReactApp</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
            </script>
            <script src="../public/bundle.js"></script>
        </body>
        </html>
    `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();
        // This context object contains the results of the render
        const context = {};

        const renderApp = () => (
            <App
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        renderToString(renderApp());

        // context.url will contain the URL to redirect to if a <Redirect> was used
        if (context.url) {
            res.writeHead(302, {
                Location: context.url,
            });
            res.end();
            return;
        }

        const htmlString = renderToString(renderApp());
        const preloadedState = store.getState();

        res.send(renderHTML(htmlString, preloadedState));
    };
};
