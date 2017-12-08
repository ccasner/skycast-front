# SkyCast, Inc.

A disruptive new weather data startup, SkyCast Inc., reached out to you for your help with a small development project. They are looking to change the way people read weather forecasts and would like a stable base to iterate from.

## Link to Backend-Api Repo: https://gitlab.com/ccasner/SkyCast-rails
## Link to Backend-Api Deployed Site: https://skycast-railsapi.herokuapp.com/

## Development Process

Being unfamiliar with third party API usage through the backend of a rails app, I had a lot of research to do before beginning. I made the mistake of trying to make the calls through the frontend which proved to be very challenging as I couldn't find a way to keep my keys secret. That's when it dawned on be that I would have to make these calls through my rails API. I spent some time trying to find the file that they belonged in and eventually got some responses through the controller. Given that the DarkSky API provides so much information, I would have liked to be able to get the visualization library working. Also, the styling to very minimal and needs much work in future iterations. 


## APIs to Use
SkyCast is looking to leverage a weather API (https://developer.forecast.io) combined with a geolocation API (https://developers.google.com/maps) to allow users to retrieve current as well as historic data about any location that the users search.

## Requirements
SkyCast would like their users to be able to enter in any location and retrieve current and useful information about the weather in that area, as well as a future forecast.
Include charts for historic weather information about that area using any visualization library of your choice, allowing the user to see relevant information within a reasonable time period.
Additionally, the team feels that allowing a user to track his or her search history would be a valuable addition, and would like to see a way of storing queries made by a specific user between browser sessions.

## Style
Since the project is a prototype, SkyCast looks to you for integrating usable designs and best practices in terms of look and feel into your application. They will also be looking to do a walkthrough of your code with you to gauge how extensible your codebase can be.
