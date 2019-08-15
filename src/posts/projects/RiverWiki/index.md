---
title: RiverWiki
author: "Fergus Farrell"
date: "2018-07-17"
path: /projects/riverwiki
blurb: Bringing river users closer to the things they love
tags: ["MaterialUI", "React", "Redux", "MongoDB", "Node", "Express"]
featuredImage: "./thumbnail.jpg"
---

##### The Story
I’m a whitewater kayaker. I’ve paddled across a significant array of New Zealand rivers for the past 12 years. In that time, the thing that’s impressed me the most is the small but tight whitewater community here.

One thing that has always bothered me about kayaking is the preparation - before a trip I need to research the river, identify correct river gauge, cross reference the gauge reading with a river guide, consider weather conditions, scroll through forums to identify any recent hazards, get in touch with a friend who has paddled it recently - wow, and that’s only some of it.

Wouldn’t it be better if there was a single platform that keep real time information on all of these factors? A platform which changes with the river through time. That you could update when something is no longer relevant or a new hazard presents itself. That makes planning easier and keeps our river users safer doing the things they love.

Introducing, <b>RiverWiki</b>.

<br/>

##### The Challenge
Integration. The biggest challenge we needed to overcome was integrating various sources of information into a single platform.
We identified three key pieces of information we needed to include in RiverWiki; <b>real time river flow</b>, <b>real time weather</b> and up to date <b>river guides</b>. Weather was the easy part - we could use existing APIs. River guides was also straightforward - we could design a build a CRUP application - similar to how a blog might operate. The biggest problem we had was sourcing river data. This was a large and generic enough problem that it requires its own solution. Please see <a href="http://localhost:8000/projects/riveraggregator">RiverAggregator</a> for more information.
<br />
Additionally to the data requirements, we wanted our solution to be accessible offline, easy to use and enjoyable.
<br />
It’s a lot of work but all feasible - let’s get building!

<br/>

##### The Process
To bring together these seperate pieces of information into a single solution that was accessable by everyone - from anywhere.

<br/>

##### The Result
We're still in progress!
