---
title: SongBook
author: "Fergus Farrell"
date: "2019-02-09"
path: /projects/songbook
blurb: Music and lyrics, anytime, anywhere
tags: ["MaterialUI", "React", "Redux", "MongoDB", "Node", "Express"]
featuredImage: "./thumbnail.jpg"
---

##### The Story
My family are singers. Being a singing family is a little strange in New Zealand but my parents emigrated from Ireland where it is entirely normal. Whenever we have a get-together, my dad will pull out the guitar, one of my uncles will grab his Bodhrán (an Irish handheld drum) and my other uncle has his fiddle - I myself sometimes play the harmonica. An evening of drinking, singing and merriment is well underway. It’s great fun.

The problem is that not everyone knows all the songs, and - while he hates to admit it - my dad is forgetting a lot of chords and lyrics. The perils of age I suppose.
Various cousins and aunties have tried to solve this problem by printing out whopping great song books into binders. The binders are inevitably inconsistent, incorrect and often get lost or destroyed.

I think that I can do better...

<br/>

##### The Process
User centric design (UCD) was my ultimate mandate for this project. I knew the users well (my family) and had open channels of communication to confine needs and requirements - this is a User Experience professionals dream.

We needed a phone app that family members could use to view song lyrics and chords so I started with a bare-bones CRUD web app that ticked all my MVP boxes and ran the app past my dad (the primary user). I had tried to get fancy by integrating the chords with specific lyrics but he didn’t like it - he wanted a simple copy and paste method with chords. I was excited! This was my first real life user feedback and even though it made the UI look a little strange, it solved a real use case! Textbook UCD.

Prior to Easter 2018 I asked my extended family to download the app. At Easter we partied and sang using Songbook. This was my first real full scale deployment test - did it work? Kind of.
We were on a small farmstead with a patchy 3G connection so it was slow. It was a moderate success but not what I wanted.

To overcome slow or missing networks I needed some offline caching. I had a PWA - I’m already caching static assists, I’ll cache http responses. This worked perfectly :)

<br/>

##### The Result
My dad and my extended family now use SongBook every get-together and it works well for us all. I'm always get feedback and encourage them to be critical and to tell me what will give them a better experience. I’ve continued to work on and refine SongBook.
It’s a fun little app that’s solved a real problem we’ve had for years - I’m very proud of it.
