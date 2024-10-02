---
marp: true
theme: default
title: Micro Frontends: Resources, Benefits, and Demo App Concept
paginate: true
author: Ricardo Carmo and Pedro Santos
date: 2024-10-01
---

---

# MicroFrontends Resources and Demo App Idea

## Resources to Justify the Presentation

1. Single-spa Official Documentation:
   https://single-spa.js.org/

   - Comprehensive guide on single-spa implementation and concepts

---

2. Micro Frontends by Martin Fowler:
   https://martinfowler.com/articles/micro-frontends.html

   - Authoritative article explaining the concept and benefits of micro frontends

3. Building Micro Frontends with React, Vue, and Single-spa:
   https://dev.to/dabit3/building-micro-frontends-with-react-vue-and-single-spa-52op

   - Practical tutorial on implementing micro frontends using single-spa

4. The Benefits of Micro Frontends:
   https://www.toptal.com/front-end/micro-frontends-strengths-benefits

   - In-depth look at the advantages of using micro frontends in large-scale applications

5. Micro Frontends: How It Changed Our Development Process:
   https://medium.com/swlh/micro-frontends-how-it-changed-our-development-process-165427a547ba
   - Real-world case study on implementing micro frontends

## Demo App Idea: E-commerce Dashboard

A simple e-commerce dashboard would be an excellent way to demonstrate micro frontends using single-spa. Here's a breakdown of how you could structure it:

1. Main Application (Root Config):

   - Overall layout and navigation

2. Product Catalog Micro Frontend (React):

   - Display and manage product listings

3. Order Management Micro Frontend (Vue):

   - View and process customer orders

4. Analytics Dashboard Micro Frontend (Angular):

   - Show sales charts and key performance indicators

5. User Profile Micro Frontend (Svelte or vanilla JS):
   - Manage user account information

This structure allows you to showcase:

- Integration of multiple frameworks in a single application
- Independent deployment and development of each module
- Routing between different sections of the application
- Potential for shared state management (e.g., user authentication across modules)

You can start with a simplified version of this for the demo, perhaps implementing just 2-3 of these micro frontends initially.
