<h1 align="center">
  gg.news | Next.js
 </h1>
 
<p align="center">Project for a paid newsletter with stripe payment gateway</p>

<p align="center">
  <a href="#about-the-project"> About the project </a> |
  <a href="#technologies"> Technologies </a> |
  <a href="#configs"> Configs </a> |
  <a href="#license"> License </a>
  
  
  ## About the project

  This project was developed with the NextJS framework. It uses external APIs, Server Side Rendering (SSR), Static Site Generation (SSG), Stripe payment gateway with Next-Auth to authenticate with Github, FaunaDB to storage the users information and payment status and PrismicCMS to manage the content of posts. It is necessary to have Github public email to try this application.

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [SASS](https://sass-lang.com/)
- [Stripe](https://stripe.com/)
- [Next-Auth](https://next-auth.js.org/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)


### Cloning project

```bash
$ git clone https://github.com/GuilhermeGcaires/gg-news.git
$ cd gg-news
```

Starting project

```bash
  
$ yarn
# Fill enviroment variables at .env.local
  
# Run stripe listen for the webhooks
$ stripe listen --forward-to localhost:3000/api/webhooks 

$ yarn dev
