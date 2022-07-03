## Reign - Front End Developer Challenge

This small app was developed with the latest version of the **Angular framework**.

##### Functionality

- The selected filter persists on the local storage
- The favorited posts persist on the local storage
- The web app works as a responsive web application
- Pagination as infinite scroll.
- When clicking on the row, a new tab open with the link of the post (story_url)
- The click on the “like button” does not trigger the opening of the post URL link
-  When hovering on the row, opacity applied to the entire row and its children (texts, icons, like button, etc)

##### Directory

```
src
|-app
| -pages
|  -favorites
|  -news
| -services
| -shared
|  -components
|   -dropdown
|   -navbar
|   -news-card
|   -select-button
|   -index.ts
| -directives
|  -models
|  -pipes
|-assets
| -images
| -styles
|-app.component.ts
|-app.component.html
|-environment

```

##### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

##### Demo
https://challengergn.netlify.app