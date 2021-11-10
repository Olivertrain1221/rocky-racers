# Rocky Racers

# Introduction
Rocky Racers is a web base game with JavaScript, HTML and CSS. This game is a variant of the traditional “rock paper scissor” this game has a target audience of someone who may want a short fun game to play.

![Home Page Preview](/assets/images/read-me-images/responsive-image.PNG)

# UX
The Strategy Plane
*	Rocky Racers is intended to be a fun yet simple game for individual users to play for short periods of time against a computer element. Rather than requiring a third party to also play with the game it has small graphics and a score board in order for the user to feel satisfied with visual effects and to also bring out there competitive side by being able to view whos winning and losing.

# Site Goals
*	To provide users with a fun and simple game to play
*	To ensure that navigating the site is easy and intuitive, users don't need to work out where to go.
*	To ensure the game is fully accessible on desktop and touch enabled devices

![Settings Page Preview](/assets/images/read-me-images/settings-screenshot.PNG)

# User Stories
*	As a user I want a fun and simple game to play
*	As a user I want to be able to play a more challenging version of the game
*	As a user I want to be able to play an easier and quicker version of the game
*	As a user I like to play games in the evening and want to be able to reduce eye strain upon playing.

![Night mode Preview](/assets/images/read-me-images/night-image-gameplay.PNG)

The Scope Plane
# Features planned:
*	Responsive Design - The site should function correctly across the range of devices the user could potentially use to access the game on such as Desktop, Laptop, Tablet and Mobile's.
*	All navigation elements should be contained within the game screen. No need to search for anything.
*	The site should be visually stimulating and clear to the user that it is a game.
*	Alternative colour options should be available such as a dark mode.
*	The site should be fully accessible for screen reader users.

# The Structure Plane

# User Story:

As a user, I want a fun and simple game to play
Acceptance Criteria:
*   It should be clear that it is a game, what it is about and how to play.

Implementation:
*   The layout, colour scheme font choice and graphic choices should all make it clear and provide a sense of fun to the user that this is a game site. There will be a direct link to the instructions of the game on the homepage so the user can easily learn how to play.

User Story:

As a user, I want to be able to control the time it takes to play the game.
Acceptance Criteria:
*   The user should be able to choose to play the game as many times as they want and allow them to quit at any point via the main menu button.

Implementation:
*   The user will have the ability to choose from a night mode and a day mode also they can only select there answer as the traffic lights are enabled.

# Opportunities
Arising from user stories
| Opportunities | Importance | Viability / Feasibility
| ------ | :------: | :------: |
| ** Provide a fun game environment ** | 5 | 5 |
| ** Provide ability to change the colour scheme ** | 5 | 5 |
| ** Provide ability to control the time the game takes ** | 5 | 5 |
| ** Provide fun animations to bring the game to life ** | 5 | 5 |
		

# The Skeleton Plane
Wireframe Mockups
I used Balsamiq to produce low quality wireframes of how the game would appear across different devices and platforms. Although the game is intended to be contained on the one page, I produced a wireframe for each of the different parts of the content (Menu, Instructions and Game play). Using Balsamiq allowed me to consider multiple layouts ideas.

![Main Menu Wireframe](/assets/images/read-me-images/desktop-homepage.PNG)
![Instruction Wireframe](/assets/images/read-me-images/desktop-instructions.PNG)
![Gameplay Wireframe on a desktop](/assets/images/read-me-images/gameplay-desktop.PNG)
![Gameplay Wireframe on a ipad](/assets/images/read-me-images/ipad-gameplay.PNG)
![Gameplay Wireframe on a mobile](/assets/images/read-me-images/mobile-gameplay.PNG)


# The Surface Plane
Design
Once happy with the theme and structure for the site, and the layout of each section of the content. I then started to style my site using the CSS and used colours accordingly to ensure there are no contrast issues. 

Background Image
The background image helped to enhance the theme that I was aiming to create. It was acquired from the [vecteezy.com](https://www.vecteezy.com/) website where it was available for free download and use. 

![Main Menu Preview](/assets/images/read-me-images/homepage-actual.PNG)

The original image was then amended via tinypng.com this was used to allow the photo to be reduced in size and for the applications boot time to be sped up which therefore increases usability and will keep the audience playing finding it to be interactive and quick to resemble also the fast paced game it is.

# Colour Scheme
To ensure that the colours I chose for all of my elements provided an appropriate contrast ratio the colour codes were loaded into a contrast checker available at Contrast Grid
Colour Schemes Used

![Contrast Check](/assets/images/read-me-images/contrast.png)
![Contrast Check](/assets/images/read-me-images/contrast.png)


# Typography

Google fonts was utilised to find a font that would be clean and clear for all users, whilst still conveying an element of fun. I eventually settled on 'Mukta'  sans-serif.
Whilst I originally experimented with using a Traffic light imagine for use in the site, I ended up making the traffic light using html and CSS itself to allow me to use JavaScript to give the traffic light an animation which gave a friendlier user interface.


# Features
*   Common Features the site is designed using different html elements which are shown via flex or inline styles that are only given to the element via JavaScript this allowed me to make the page flow for the user.
*   The main menu is the page of the site that the user is greeted to when they first visit. The design is basic yet makes it obvious to the user that it is a game. I have done this by limiting what is visible on the menu page making it quite clear what they have to click/ do in order to use the page this fits with the user stories of being able to navigate around the site successfully.
*   Another feature is the user can choose between a night and a day mode.
*   There is a modal that is used to display the instructions for the game which opens and closes accordingly depending on user click events.
*   The second screen the user will come across will be to ask them to enter their name. 
*   Different level of game modes.

![Name menu Preview](/assets/images/read-me-images/homepage-actual.PNG)
![Night Mode Preview](/assets/images/raceroad-night.png)

# Future Enhancements

*   Leaderboard
*   I would like to add a leader board function in so the highest winner can be shown along with users being able to compare their scores to other users that have played the game
![Leaderboard Wireframe](/assets/images/read-me-images/leaderboard-page.PNG)


*   Different Levels
*   The game would be better if it had some different levels with an intelligent ai element this could then allow users to have a more competitive game play if they chose to.

# Testing

## Testing Strategy

Upon testing the site I took a two stage approach. The first stage was continuous testing as the site was being developed by myself and purposely trying to “break” the game. This was especially important to do during development of the JavaScript to ensure that the different functions and variables etc all did the correct thing at the correct time the most important one to link in was the users selection and the ai selection in time with the traffic lights sequence. During styling the site I would check the visual appearence within the developer tools to preview the changes before they were committed to my actual project to ensure that the style was friendly and worked.


On the second stage of my testing, I utilised online programs to check various things from actual lines of code to ensure it is written correctly and also used various contast checkers to ensure that accessibility for ALL users was correct. I then proceeded to run through the testers and noted any errors or changes that were required. Any errors were corrected and then the tests repeated to ensure that they work.

# Testing Overview

Testing was divided into different sections to ensure everything was tested individually with test cases developed for each area. 
Validator Testing
    * HTML
    * No errors were returned when passing through the official W3C Validator. View Report
    * CSS
    * No errors were returned when passing through the official W3C CSS Validation Service - Jigsaw. View Report
    * JavaScript
    * No errors were returned when passing through the validator service at JSHint.com.  
    * WAVE Web Accessibility
    * Four warnings are displayed in the html validator on
    * The lighthouse report gave an almost perfect score of 99, 100, 100, 100.  

![HTML Validator](/assets/images/read-me-images/html-validator.PNG)
![JavaScript Validator](/assets/images/read-me-images/js-validator.PNG)
![CSS Validator](/assets/images/read-me-images/css-validator.PNG)
![Lighthouse Report](/assets/images/read-me-images/lighthouse-report.PNG)

# Deployment
*   The site was deployed to GitHub pages. The steps to deploy are as follows:
*   In the GitHub repository, navigate to the settings tab
*   Select the pages link from the setting menu on the left hand side
*   Under the GitHub Pages from the source section drop-down menu, select the master branch
*   Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

# Notable Bugs
One major bug that I noticed during development was trying to stop the traffic lights before the scoreboard was updated. This was corrected by disabling the game svgs and linking the traffic light function at the correct time.

# Credits
## Media
    * The background image of the trees was obtained from Vecteezy.com
    * The favicon was created by using favicon-generator.org. The generator created both the image file and the link tag code for the head of the HTML file.
## Content
    * CSS Styling
    * How to create the custom toggle switches used in the settings modal were developed from a tutorial on w3schools.
## Reference Material
    * W3 Schools was used as a reference point for HTML, CSS and JavaScript
    * MDN Web Docs was also used as a reference point for HTML, CSS and JavaScriptoggle switches - I referenced a fellow student Matt Bodden, and the toggle switch tutorial    available on w3schools whilst developing the styling and functionality of the toggle switches. Matt's project that I referenced can be found here https://github.com/MattBCoding/ufoduel and the w3schools tutorial can be found here https://www.w3schools.com/howto/howto_css_switch.asp
    * CI course material was also used as a reference for code related issues.

# Acknowledgements
I would also like to comment and thank my mentor Tim Nelson from CI for encouraging me to be more ambitious and ensure that my game was different and stood out along with helping with various code issues I had along the way.

