# Innolitics React Hiring Challenge

## Setup

You must have Node installed (we tested it with node version 10.0.0).

You will then need to run the following commands from the root of the repository:

```
npm install
```

You can compile everything using `npm run build`.

After compiling everything, you can run a test sever (which will recompile for you automatically) using `npm run start`.

Finally, you can run the Jest test suite using `npm run test`.

## Requirements

We want to build a simple React app which will allow people to visualize a [tree](https://en.wikipedia.org/wiki/Tree_(data_structure)).

- The app should have two pages: the (1) data import page and the (2) visualization page.
- The data import page should have a textarea and a submit button.
- Users would enter CSV data with the following format: `id, color, shape, parent`
- The `id` would be a unique integer
- The `color` would be a hexadecimal color code, such as `#1F2F55`
- The `shape` field would be either `square` or `circle`
- The `parent` field would be the id of its parent node
- The `parent` value for the root of the tree will be its own `id`
- After submitting the data, the user should be taken to the visualization page
- The visualization page should display the tree structure
- The root node should be at the top, and each level of the hierarchy should be further down the page
- Each node should have the color and shape match its data
- Lines should connect parents and children
- There should be a back button to let the user go back to the input page (also, the tree input text should still be present in the testarea)

## Evaluation

Your submission will be evaluated for:

- Functionality
- Code quality
- Tests (there is no need for UI testing---only high-value unit tests are expected)
- Good [commit messages](https://chris.beams.io/posts/git-commit/)

To submit your solution, please zip up your entire repository, and email it to
`info@innolitics.com`.

If you have any questions about the requirements, please ask!  Part of being a good
engineer is knowing when to clarify requirements.
