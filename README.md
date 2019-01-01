# React Cypress Fizzbuzz
Example app showing how to test a React app using Cypress.

I started with a Cypress end-to-end test that clicks a button and verifies some text.
Then I used code-level tests to handle state and fizzbuzz logic.

Finally, I experimented with using Cypress to stub out network calls.
Cypress calls these tests "integration tests" where it does not make a real network call.
Cypress calls tests that have real network calls "end-to-end tests".

I wasn't entirely sure how to proceed, so I wrote a failing integration test (even though I knew the format was wrong)
then made a fake server to run on port 3001 that let me see what a real response looked like.
Then I was able to fix the integration test to return the correct format.

One downside of Cypress integration testing is that it doesn't fully support the `fetch` API,
which seems to be the standard right now.
They can handle the older method of `XHR` requests though.
This means that I had to fully replace the `window.fetch` object in my tests, which I don't love.

An alternative is to delete the `window.fetch` and replace it with a polyfill for `XHR`.
Older browsers are supposed to do this if they don't support `fetch` yet, so it doesn't seem too far-fetched.
However, it feels dirty if my production code always uses `fetch` and my tests override that to use a semi-production thing.

Another alternative would be stubbing out fetch at the unit level.
Jest can probably do this, or I've heard other packages like `notch` could as well.
