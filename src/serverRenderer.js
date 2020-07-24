// Following import is necessary to make generators work
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from "regenerator-runtime";

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

        const renderApp = () => (<App Router={StaticRouter} location={req.url} context={context} store={store} />);

        store.runSaga().done.then(() => {
            const htmlString = renderToString(renderApp());

            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
                return;
            }

            const preloadedState = store.getState();

            res.send(renderHTML(htmlString, preloadedState));
        });

        renderToString(renderApp());

        store.close();
    }
};
