---
layout: post
title: Making it Real with IBM's Call for Code
feature-img: "assets/img/blogs/2020-03-02-winning-ibm-c4c/004.jpg"
thumbnail: "assets/img/blogs/2020-03-02-winning-ibm-c4c/004.jpg"
author: ilsebreedvelt
---

It's Monday, May 13th 2019. Our IBM Lab in Ottawa, Canada, organizes an IBM internal Call for Code event, where 55 high tech employees formed 11 teams to solve disaster-related problems. We just sat down at a table, mixing with people we never met, all eager to see what the day would bring.

First we viewed a video introduction on what Call for Code can mean for the world, and Alvin Francis, our Lab executive for Call for Code told a personal story about how he survived several hurricanes at Dominica. Then, we were asked to choose a type of disaster that we wanted to innovate a solution for. Each of us started listing down all the natural disasters that we could possibly think of and we had a tie for most votes between flood and drought. Ottawa was just recovering from one of the severest floods in its history, so many of the other teams chose "flood" as the problem to tackle, but our team chose "drought", just because we wanted to be different.

The next step was to create an "empathy map" related to a person experiencing the disaster topic we chose. An empathy map is one of the Enterprise Design Thinking tools to empathize with the people who we're designing a solution for. It asks the team to identify what a person would say, hear, think and do when experiencing the situation of interest; in our case "Drought". This is not an easy task if you are living in Ottawa, Canada, where severe drought has not been on our minds at all.

Luckily, also because we are living in Canada, the diversity of our team was the seed of our solution. Our team consists of people originating from India, China, Northern Africa, Europe and Canada. Gaurav was our go-to person to answer the questions we had. As we dove deeper into who is most affected by drought, we focused on a female farmer, Rani, who grows her rice crop on just a small 1-acre plot of land in India. She also has to take care of 2 children and her father, and we also identified she only had a few years of elementary schooling.

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/001.jpeg" column=1 %}</center>

We asked ourselves:

- how would it be to experience living in that situation during a drought?

- what crop is she probably growing?

- how does that plot of land look like?

- what kind of work does she perform, and what kind of decisions does she need to make?

- where does she get information about upcoming weather relevant to her location?

All these questions made us realize that it's very hard for a small farmer in a developing country to know when to water their crop, since the weather forecast is often targeted at a very large area. More importantly, getting access to detailed forecasts seems to be very difficult.


Once we had a clear picture of our main target persona and the decisions she faced, we had to define the solution: the technology and the story, all in just two hours. We exchanged ideas, did some research, and we put the pieces together as a story in a presentation, and quickly decided on a name "Liquid Prep", just so we had a temporary name… we could always change it later.


We presented our idea in just under 5 minutes, while many other participating teams used 10 minutes or more to explain their great ideas. Ottawa had a very lively Call for Code session that day, and it was great to hear so many solutions for different disasters. Once the day was over, we continued with our normal work activities, not expecting too much from our efforts.

<h4>Lets continue</h4>

Then, within the week after the event, we received a message from the Ottawa Lab's Call for Code organizing committee that our team's idea was chosen to receive further guidance to submit. This message made us think, what if we were able to submit our idea for the greater good? What if we could work together to create a solution for people confronted with drought? We went to the first mentoring session organized by Firas Kazem and others, and they told us why they liked our idea, that it was really focused on solving a big problem, with the human at the center of the solution. Our randomly formed team was starting to get excited. We only had one month left to submit our Call for Code idea, with a prototype, a technical architecture and a 3-minute video to explain the solution. We decided to make the idea real.

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/002.jpg" %}</center>

To make this a success, we set up twice-a-week meetings with our team. The first step was to create a plan on what we should have finished by when. 

<h4>Research</h4>

We divided up the work for the research. The research had different topics, so each person took a topic to look into and explain that at the next meeting we had already planned. Our mentors provided us information about the IBM Watson Decision Platform for Agriculture ([link](http://biz.weather.com/Agri_Decision-Support-Platform-Launch_LP.html)) that was coincidently just announced.

We looked into Soil moisture sensors, rice cultivation, India government internet coverage, and water usage needs, satellite coverage, impact of drought on crops, and how to design a solution for illiterate people who only have low bandwidth phones. Additionally, we took a deep look into the newly released IBM Watson Decision Platform for Agriculture, as it provides access to a machine learning platform that leverages complex soil humidity models based on location, and crop health based off satellite imagery. After setting up a meeting and talking to Jagabondhu Hazra, a Chief Scientist at IBM India who was a technical lead on the IBM Watson Decision Platform for Agriculture project, we learned much about the product and decided we'd like to integrate this platform into our solution in the future.

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/003.jpg" %}</center>

For our design solution, I learned that most semiliterate people in developing countries have access to cheap cell phones. So, because they are semiliterate, I was looking for design guidelines that would fit the target audience. I found a research article (link) from Microsoft Research India and Adobe Systems India, describing case studies about text-free user interfaces for illiterate and semiliterate users. The main outcome of this article was that the target audience prefers to have visuals that are neither too abstract, nor too real/photographic, but more something in-between. Additionally, they also prefer to have voice-over text available for each page, that they can invoke repeatedly.

<h4>Story</h4>

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/004.jpg" %}</center>

Based on the research, I decided to create the storyboard for our application solution. I focused on providing clear instructions on how to use the moisture sensor stick, and provide the clear advice overview for the farmer once the information was sent. The team liked the experience flow, and it made the team members enthusiastic and motivated to continue with the work.

<h4>Architecture and work planning</h4>

Part of the project was of course to also create the overall system architecture, which we put together just once the storyboard was done. 

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/005.jpg" %}</center>

Our Design Studio in Ottawa has a lot of space to put ideas on the wall, so the accompanying picture shows the architecture we drew up together. Without the high-level architecture, the storyboard and the research we wouldn't have been able to work so well together. We identified all the elements of the solution and the tasks needed to create our solution and we divided up the work.

<h4>Building the solution</h4>

Our team didn't have an experienced front-end Android developer; but our intern, Walid, said he wanted to learn to code for Android, so he took on that task. Gaurav decided to focus on the Internet of Things and connecting to the cloud, which he had already some experience with. Yuanyuan and Cornelius worked on the back-end of the solution: because we need a database that stores the data coming to/from the device (the humidity details, the GPS location and ID) and a platform to process this data and make decisions. Since IBM Cloud is a paid subscription platform, we ran the prototype back-end server on one of the available VM's.

The basic algorithm logic we used for our prototype is:

- if the soil humidity is less than 50%, and it’s not going to rain tomorrow, then we suggest the farmer to water the crop, otherwise we recommend to not water the crop.

We did not have time to improve this algorithm by including data points from IBM Watson Decision Platform for Agriculture, the crop type and more accurate Weather information (e.g. by including forecasted humidity level and wind speed, the soil could dry out faster). However, we placed these considerations in the final roadmap description.

Already within the first week of June, we were asked to present our in-between work so we could receive feedback from the Call for Code mentors. 

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/006.jpg" %}</center>

In the meantime, Walid created the framework for the Android app, and after this event, I further improved the images and wrote the voice-over texts for the assistant on each page. Making use of our diverse backgrounds, we asked Gaurav to lend us his Indian-infused voice for the application avatar. This showed our roadmap intent to localize the voices of the avatar for many different regions.

<h4>Detailed architecture</h4>

Gaurav created a first diagram for the architecture based on our initial drawing, and his investigations in the IoT solution for the humidity sensor. The moisture detection setup uses a moisture/humidity sensor to measure the volumetric content of water. It sends the analog signal to a Microchip via Breadboard, which acts as an interface between the Sensor, Microchip and the Raspberry Pi. 

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/007.jpg" %}</center>

Finally, we send the moisture percentage value to the Android device via the RFID/NFC module. The device data is sent to the Liquid Prep Platform, which sends both GPS coordinates and Crop details to the Weather API and the IBM Watson Decision Platform for Agriculture respectively. Both of these systems send back the required information to the Liquid Prep Platform, where the information is transformed into an advice, which is then transmitted to the Android phone of the farmer who can read whether to water their crop or not.The image here on the left was used to make the story of the architecture a bit more palatable for the judges to understand.

<h4>Final week</h4>

As Walid continued improving the application front-end, we were approaching the last week before the submission. We had to start creating the video for the submission and explain our roadmap in an IBM GitHub repository. Just a week before, Ilse created a physical prototype for the humidity stick, which could be pushed into the soil.

So, the **story** starts with Rani, our semi-literate farmer in India who will bear the consequences of the climate change impacts on crop yields. Then we showed how our application and the humidity stick would provide her guidance to receive the crop watering advice. 

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/008.jpg" %}</center>
<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/009.png" %}</center>

The video was supposed to be made for a maximum of 3 minutes and achieving that was one of the biggest challenges, because we wanted to make sure we told the whole story, and also make it interesting for the audience. We liked the end result, so we were ready to submit. Additional to the video, we also had to write up the roadmap for our solution into an IBM internal GitHub repository. Cornelius created the first draft, after which we added imagery and modified the text to our insights.

On the day of the submission, June 28, 2019, we sat together to finalize the details and once we submitted, we felt proud we were able to pull it off in just 4 weeks, and that we made our submission real!

<h4>Winning streak</h4>

Over the summer of 2019, we slowly moved closer to being part of the top finalists. First we were part of the Top 15, then the Top 5, and at the end of September the team was invited to go to New York on October 10th, to be there at the reveal of the First Prize IBM Internal Call for Code 2019. And then, we won the internal competition.

<center>{% include aligner.html images="blogs/2020-03-02-winning-ibm-c4c/010.jpeg" %}</center>

Our story didn't end here, we went Open source ([here](https://github.com/Liquid-Prep)) at the end of February 2020, we started this website and will work on an IBM Corporate project with external stakeholders to make it very real. IBM also featured us on the IBM Call for Code 2020 announcement on the first blog post ([here](https://developer.ibm.com/callforcode/blogs/cfc-2019-internal-finalist-liquid-prep/)) as an example for the new theme of Climate Change.
