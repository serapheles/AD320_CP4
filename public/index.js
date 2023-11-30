/**
 * Name: Kyle Potempa
 * Date: 11/29/23
 *
 * Sets up the page.
 */
"use strict";

(function () {

    /**
     * Add a function that will be called when the window is loaded.
     */
    window.addEventListener("load", init);

    /**
     * Adds event listeners.
     */
    function init() {
        document.getElementById("alphaButton").addEventListener("click", alphaCall);
        document.getElementById("betaButton").addEventListener("click", betaCall);
    }

    /**
     * Fetch request for animal noises.
     */
    function alphaCall() {
        console.log();
        fetch("/alpha")
            .then(statusCheck)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                process(JSON.stringify(response), document.getElementById("alphaZone"));
            })
            .catch((error) => document.getElementById("error").innerText = ("Error with API request: " + error));
    }

    /**
     * Fetch request for a random number between 1 and 20, inclusive.
     */
    function betaCall() {
        fetch("/beta")
            .then(statusCheck)
            .then(response => response.text())
            .then((response) => process(response, document.getElementById("betaZone")))
            .catch((error) => document.getElementById("error").innerText = ("Error with API request: " + error));
    }

    /**
     * Displays the passed value on the passed element.
     * @param response The value to display.
     * @param node The element to display on.
     */
    function process(response, node) {
        if (node.hasChildNodes()) {
            node.removeChild(node.firstChild);
        }
        document.getElementById("error").innerText = "";
        node.appendChild(document.createTextNode(response));
    }

    /**
     * Helper function to return the response's result text if successful, otherwise
     * returns the rejected Promise result with an error status and corresponding text
     * @param {object} res - response to check for success/error
     * @return {object} - valid response if response was successful, otherwise rejected
     *                    Promise result
     */
    async function statusCheck(res) {
        if (!res.ok) {
            throw new Error(await res.text());
        }
        console.log(res);
        return res;
    }

})();
