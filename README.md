# React Router Dom Nested Routes with Params Bug

This repository demonstrates a bug in React Router Dom v6 where nested routes with parameters do not render correctly. The parent route's params are not passed to the nested route, and the nested route does not render the expected content.

## Bug Description

When navigating to a nested route with parameters, the nested route does not render correctly.  The expected behavior is for the nested route to render the content based on the parameters passed down from the parent route. However, in this case, the nested route renders nothing or the incorrect content. Also, parameters defined in the parent route are not accessible within the nested route.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/users/123/profile` or a similar nested route.

You will observe that the nested route does not render correctly.  The issue stems from how React Router handles nested routes and parameters. 

## Solution

The solution involves correctly defining the routes using the `useParams` hook and ensuring that the parent route passes parameters correctly. See the `bugSolution.js` file for a working implementation that resolves this issue.
