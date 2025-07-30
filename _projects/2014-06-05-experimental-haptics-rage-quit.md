---
title: 'Rage Quit'
date: 2014-06-05T23:55:17+00:00
layout: page
description: "(June 2014) CS227: Experimental Haptics"
img: 
importance: 2
category: school
toc:
  sidebar: left
giscus_comments: true
---

# Background

I really enjoyed the [Introduction to Haptics](/projects/2013-11-14-my-hapkit-journey-assembly/) course last year, so this quarter I decided to take CS227: Experimental Haptics. It was led by the grad student who invented the [Novint Falcon](http://www.novint.com/index.php/novintfalcon "novint falcon") -- low-end, 3-DOF haptic device. This was also the device we used for all our homework assignments and projects.

{% include figure.liquid loading="eager" path="assets/img/experimental_haptics/novintfalcon.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
  The Novint Falcon
</div>

The class took us through the theory as well as the practice of programming haptic devices &#8211; from workspaces to fast collision detection to modelling haptic feedback. My partner and I decided to base our final project on the theme Rage Quit, after a particularly frustrating debugging session on one of the homework assignments.

More specifically, our project was to virtually simulate smashing things out of frustration. We delved into fracturing models (both graphic and haptic) and event-based haptic feedback. There was a lot of tweaking and creativity involved &#8211; having a ton of fractured objects to detect against made it difficult to keep the update rate at a decent 1000Hz. But we managed it in the end! The abstract is below if you&#8217;re interested.

Through this project, I learned that I enjoy learning and creating mathematical models (in this case for the haptic feedback, but generally as well). I also learned that programming math is extremely prone to difficult debug sessions, so make sure your model is spotless before you try to translate it to code.

All in all, this was a really fun (albeit frustrating and time consuming) class. I learned a lot, and enjoyed playing with the Falcon immensely.

# Abstract

Read the <a class="nav-link" href="assets/pdf/ragequit_final.pdf" target="_blank" rel="noopener noreferrer">
    <span class="sr-only">abstract</span>
</a>, authored by me and classmate Ben-han Sung.

