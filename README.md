# Project "User Cards"

This project is implemented using React, Redux, and Axios and aims to create
interactive user cards with the ability to interact.

## Project Description

The project allows users to view cards of other users and interact with them by
changing the state of the "Follow" button to "Following" when clicked, as well
as displaying the number of followers. The project uses its own backend created
using the mockapi.io service.

## Functionalities

- Displaying user cards with information about them (avatar, name, number of
  followers).
- Interactive "Follow" button, which changes to "Following" on clic and also
  changes color.
- Support for capturing the final result of user actions when the page is
  refreshed.
- Ability to store data about users on whom the user clicked the "Follow" button
  in local storage using Redux Persist.
- Filtering cards by "Follow" or "Following" status.

## Additional Information

- The project features responsive design, and user cards are displayed using a
  grid layout that adjusts correctly on different screen sizes.
- On the mobile version, the header menu "Home" and "Tweets" transforms into a
  "burger" menu for better user experience.
- Separate page `/tweets` where users' tweets are displayed.

## Technologies Used

- React: for creating the user interface and components.
- Redux: for managing the application state.
- Axios: for making HTTP requests to the custom backend.
- React Router: for navigation between different pages of the application.

## Installation Guide

- Clone the repository to your computer.
- Install the necessary dependencies using `npm install`.
- Start the application with the command `npm start`.
- Open your browser and go to http://localhost:3000/.

## Author

The project was developed by Dmytro Zinkovskyi as part of GoIT course.

## Contact

If you have any questions or suggestions, please feel free to contact me at
dmytrozinkovsky@gmail.com

## Thank you for your attention!

Please enjoy using the application and don't hesitate to contact us with any
questions or comments.
