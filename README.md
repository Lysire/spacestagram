# Spacestagram

**Application built for Shopify's Summer 2022 frontend internship challenge**

## Background

> We are expanding Shopify's business to the universe and fetching photos from outer space thanks to NASA's amazing Astronomy Picture Of the Day (APOD) API.

The app initially loads 10 pictures from NASA's APOD API, and subsequently fetches 10 pictures every time the user reaches the bottom of the page. 

A live version of this app can be found at <https://lysire-spacestagram.netlify.app>.

## Running the project locally

You're going to need a NASA api key that you can get for free at <https://api.nasa.gov/>

1. Clone this repo
2. `cd` to spacestagram and enter `npm install`
3. Create an `.env` file at the root of the project
4. Inside the `.env` file just created, add the following line: `VUE_APP_API_KEY=<YOUR_API_KEY_HERE>` 

:information_source: `<YOUR_API_KEY_HERE>` should be replaced by the APOD API key received from NASA.

5. Run `npm run serve` to start the app (in development mode) on `http://localhost:8080`

## Technologies And Rationale

This project is built with Vue.js, Vuex, Vuetify and Javascript.

Even though TS is best at building and maintaining large scale application I think that it helps a lot in keeping our code clean and more maintainable. I started by writing the whole application in JavaScript but refactored it later in TS as it was a good exercise. This is my first TS app.

Vue.js was used due to its reactivity system and the ability to write Single File Components (SFC) which helped improve modularity.

Vue.js was also chosen due to Vuetify, which provides highly customizable, reusable and aesthetic components (following Material Design). 

Vuex was used to keep a central store that different components could "subscribe" to, which is cleaner as compared to passing dynamic props around. 

Styled-components help to keep our CSS maintainable and the use of props directly in the styling is a feature that simplifies conditional styling/rendering greatly.  

## Current Features

- Infinite scrolling
- Chronological feed from APOD API
- Like/unlike picture with persistence (local storage)
- Favourites tab for viewing liked images
- Lazy loading of images

## Future Features

- Searching functionality
- Initial Loading Screen + Loading when fetching data
- Support for NASA's other APIs such as Mars Rover Photos API

---

### Special Thanks

1. [NASA](https://www.nasa.gov/) for the awesome APOD API,
2. [Shopify](https://www.shopify.ca/) for the novel and interesting frontend challenge,
3. [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for detailed yet concise audit reports
