# thomasc.dev

This is the repository I use for my personal website. I use it to experiment with some platforms and integrations I want to try out or purely interest-based. As every personal website, this one had a few revisions, that started from big plans and ended up dying down as soon as it got started. I will try to document these revisions to show some context as to what I have tried as well as what worked and didn't work so well for me. 

## 🧐 What's inside?

This project is a [Next.js](https://nextjs.org) website, built in TypeScript, backed by [Sanity](https://www.sanity.io) for content management and hosted on [Netlify](https://www.netlify.com) servers. This project started from [the default GatsbyJS starter](https://github.com/gatsbyjs/gatsby-starter-default) and plain JavaScript.


A quick look at the top-level files and directories you'll see the aformentioned structure of the project.

    .
    ├── public
    ├── src
    ├── studio
    ├── netlify.toml
    ├── next.config.js
    └── tsconfig.json

1.  **`/public`**: This directory can be used for NextJS websites to load static assets. For more information, see [Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving)

2.  **`/src`**: This directory contains all the code related to the front-end of the website.

3.  **`/studio`**: This directory is where the [Sanity Studio](https://www.sanity.io/studio) lives, most of it is the default that comes with the installation guide that can be found [here, in the sanity CLI starter guide](https://www.sanity.io/docs/getting-started-with-sanity-cli). It also contains the website specific schemas I use. These can be found in `/studio/schemas`.

4.  **`netlify.toml`**: This is a configuration file for [Netlfiy](https://www.netlify.com).
   
5.  **`next.config.js`**: This file is where you can update NextJS configuration that needs to diverge from their base defaults, more information on how to configure it and which variables are valid can be found in [their documentation](https://nextjs.org/docs/api-reference/next.config.js/introduction).

6.  **`tsconfig.json`**: This is the main configuration file for TypeScript projects, it contains the settings used to compile the project. More information can be found on the [TypeScript documentation website](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
