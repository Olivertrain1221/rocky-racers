# Rocky Racers

## Introduction
Rocky Racers is a web base game with JavaScript, HTML and CSS. This game is a variant of the traditional “rock paper scissor” this game has a target audience of someone who may want a short fun game to play.

![Home Page Preview](/assets/images/read-me-images/responsive-image.PNG)
### UX
The Strategy Plane
•	Rocky Racers is intended to be a fun yet simple game for individual users to play for short periods of time against a computer element rather than requiring a third to party to also play with the game has small graphics and a score board in orderfor the user to feel satisfied with visual effects and to also bring out there competitive side by being able to view whos winning and losing.

### Site Goals
•	To provide users with a fun and simple game to play
•	To ensure that navigating the site is easy and intuitive, users don't need to work out where to go.
•	To provide users with alternative difficulty levels
•	To provide users with alternative methods to play the game
•	To ensure the game is fully accessible on desktop and touch enabled devices
•	To ensure the game is fully compliant with keyboard commands and screen readers
### User Stories
•	As a user I want a fun and simple game to play
•	As a user I want to be able to play a more challenging version of the game
•	As a user I want to be able to play an easier and quicker version of the game
•	As a user I like to play games in the evening and want to be able to reduce eye strain upon playing.
The Scope Plane
### Features planned:
•	Responsive Design - The site should function correctly across the range of devices the user could potentially use to access the game on such as Desktop, Laptop, Tablet and Mobile's.
•	All navigation elements should be contained within the game screen. No need to search for anything.
•	The site should be visually stimulating and clear to the user that it is a game.
•	Alternative colour options should be available such as a dark mode.
•	The site should be fully accessible for screen reader users.

### The Structure Plane
## User Story:
As a user, I want a fun and simple game to play
Acceptance Criteria:
•	It should be clear that it is a game, what it is about and how to play.
Implementation:
•	The layout, colour scheme font choice and graphic choices should all make it clear and provide a sense of fun to the user that this is a game site. There will be a direct link to the instructions of the game on the homepage so the user can easily learn how to play.
User Story:
As a user, I want to be able to control the time it takes to play the game
Acceptance Criteria:
•	The user should be able to choose to play the game as many times as they want and allow them to quit at any point via the main menu button.
Implementation:
•	The user will have the ability to choose from a night mode and a day mode also they can only select there answer as the traffic lights are enabled.
Opportunities
Arising from user stories
Opportunities	Importance	Viability / Feasibility
** Provide a fun game environment **	5	5
** Provide fun animations to bring the game to life **	5	5
		
** Provide ability to control the time the game takes **	5	5
** Provide ability to change the colour scheme **	5	5
		

### The Skeleton Plane
Wireframe Mockups
I used Balsamiq to produce low quality wireframes of how the game would appear across different devices and platforms. Although the game is intended to be contained on the one page, I produced a wireframe for each of the different parts of the content (Menu, Instructions and Game play). Using Balsamiq allowed me to consider multiple layouts ideas.

![Main Menu Preview](/assets/images/read-me-images/homepage-actual.PNG)

### The Surface Plane
Design
Once happy with the theme and structure for the site, and the layout of each section of the content. I then started to style my site using the CSS and used colours accordingly to ensure there are no contrast issues.  For the dark night mode, I followed hints and tips from other coders on the slack site to ensure that the contrast was not incorrect and worked accordingly.

Background Image
The background image helped to enhance the theme that I was aiming to creates. It was acquired from the vecteezy.com website where it was available for free download and use. 

![Background Image](/assets/images/raceroad.jpg)


The original image was then amended via tinypng.com this was used to allow the photo to be reduced in size and for the applications boot time to be sped up which therefore increases usability.
Colour Scheme
To ensure that the colours I chose for all of my elements provided an appropriate contrast ratio the colour codes were loaded into a contrast checker available at Contrast Grid
Colour Schemes Used



#Typography

Google fonts was utilised to find a font that would be clean and clear for all users, whilst still conveying an element of fun. I eventually settled on 'Mukta'  sans-serif.
Traffic Light
Whilst I originally experimented with using a Traffic light imagine for use in the site, I ended up making the traffic light using html and CSS itself to allow me to use JavaScript to give the traffic light an animation which gave a friendlier user interface.
Features
    * Common Features the site is designed using different html elements which are shown via flex or inline styles that are only given to the element via JavaScript this allowed me to make the page flow for the user.
    * The main menu is the page of the site that the user is greeted to when they first visit. The design is basic yet makes it obvious to the user that it is a game. I have done this by limiting what is visible on the menu page making it quite clear what they have to click/ do in order to use the page this fits with the user stories of being able to navigate around the site successfully.
Light scheme menu pic
Dark Colour Scheme 
    * There is a modal that is used to display the instructions for the game which opens and closes accordingly depending on user click events.
    * The second screen the user will come across will be to ask them to enter their name. 

![Name menu Preview](/assets/images/read-me-images/homepage-actual.PNG)
![Night Mode Previw](/assets/images/raceroad-night.png)





# Future Enhancements
    * Leaderboard
    * I would like to add a leader board function in so the highest winner can be shown along with users being able to compare their scores to other users that have played the game
![Night Mode Previw](/assets/images/read-me-images/leaderboard-page.PNG)


    * Different Levels
    * The game would be better if it had some different levels with an intelligent ai element this could then allow users to have a more competitive game play if they chose to.



# Testing

## Testing Strategy

Upon testing the site I took a two stage approach. The first stage was continuous testing as the site was being developed by myself and purposely trying to “break” the game. This was especially important to do during development of the JavaScript to ensure that the different functions and variables etc all did the correct thing at the correct time the most important one to link in was the users selection and the ai selection in time with the traffic lights sequence. During styling the site I would check the visual appearence within the developer tools to preview the changes before they were committed to ensure that the style was friendly and worked.
On the second stage of my testing, I utilised online programs to check various things from actual lines of code to ensure it is written correctly and also used various contast checkers to ensure that accessibility for ALL users was correct. I then proceeded to run through the testers and noted any errors or changes that were required. Any errors were corrected and then the tests repeated to ensure that they work.
Please follow a link to my testing.md file where it has a more extensive breakdown [here](testing.md). 

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
    * Three errors were returned in the WAVE web accessibility report which are detailed in the TESTING.md file along with the resolution. View Report
    * Lighthouse
    * The lighthouse report gave an almost perfect score of 99, 100, 100, 100.  

# Notable Bugs
No bugs of note were discovered during the development or testing of the site. However frustration with the different requirements from different browsers was experienced. Multiple small visual errors were encountered during testing across different devices, browsers or browser versions which needed additional CSS style rules to overcome. For example, older versions of iOS safari required button minimum dimensions to be added in order to display the buttons correctly.
Deployment
•	The site was deployed to GitHub pages. The steps to deploy are as follows:
o	In the GitHub repository, navigate to the settings tab
o	Select the pages link from the setting menu on the left hand side
o	Under the GitHub Pages from the source section drop-down menu, select the master branch
o	One the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - UFO Duel Live Site
Credits
Media
•	The background image of the trees was obtained from Vecteezy.com
•	The favicon was created by using favicon-generator.org. The generator created both the image file and the link tag code for the head of the HTML file.
Content
•	CSS Styling
o	The styling for the custom slider used in the settings modal was amended from the code generated from a range.css generator. I discovered the site from an article on css-tricks.com.
o	The animation for the UFO's sliding in and out of the screen was initially generated on animista.net. Whilst I subsequently created several other animations I used the original code generated from the site as a reference point.
o	How to create the custom toggle switches used in the settings modal were developed from a tutorial on w3schools.
•	Hard Mode Logic
o	Wang, Z. and Xu, B. and Zhou, H. (2014) 'Social cycling and conditional responses in the Rock-Paper-Scissors game', Scientific Reports, 4(5830) available at: link to published article last accessed on 24/07/2021. This journal article of a study done into the patterns in people's decision making during a game of Rock Paper Scissors formed the basis of the logic implemented for the hard difficulty.
Reference Material
•	W3 Schools was used as a reference point for HTML, CSS and JavaScript
•	MDN Web Docs was also used as a reference point for HTML, CSS and JavaScript
Acknowledgements
I'd like to thank my mentor Rahul Lakhanpal for encouraging me to be more ambitious than my original design for the project. The more ambitious design was a lot of fun to create.

