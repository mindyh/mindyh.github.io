---
title: 'My Hapkit Journey'
date: 2013-11-14T19:42:10+00:00
layout: page
description: "(Nov 2013) Course: Introduction to Haptics"
img: assets/img/hapkit/hapkit.jpg
importance: 3
category: school
toc:
  sidebar: left
giscus_comments: true
---

This quarter at school has been fairly theoretical, full of linear algebra and math theory. I don&#8217;t dislike it &#8211; just the opposite, I find machine learning quite fascinating &#8211; but I&#8217;ve been itching to get my hands on some hardware and play.

I received an email through the robotics club that Professor Allison Okamura of Stanford University was offering an online Introduction to Haptics class. I skimmed through it with disinterest &#8211; I can't say that taking on a no-credit, online class in the middle of a hellish quarter was high on my todo list. But this class was different from all the other MOOCS I&#8217;ve seen &#8211; there was a hardware lab component to it. Upon enrollment, students are mailed a free [Hapkit](http://hapkit.stanford.edu/)&#8211; or an &#8220;open-hardware haptic device designed to be very low-cost and easy to assemble.&#8221; Each week, the class has a lab where the students build and program their Hapkit. Fully expecting to not get in (as enrollment was limited to 100 people), I applied for the course.

Somehow, my three sentence pitch on my interest in robotics got me on the waiting list. I audited the class the first week, steadily growing more interested in both the topic and the class as a whole &#8211; there are such a diversity of people enrolled! Then, three days ago, I got the email saying that I was off the wait list. I picked up my Hapkit from Prof Okamura&#8217;s CHARM lab (Collaborative Haptics and Robotics in Medicine) that afternoon.

# Week 1: Assembly

I assembled the kit last night during a much needed break from psets and midterms. After some horrible experiences with superglue, I finally finished. Lookatit! (please excuse the phone camera quality)

<figure class="half">
<img class="alignnone size-medium wp-image-30" alt="2013-11-13 19.28.59" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-13-19.28.59.jpg" />

<img class="alignnone size-medium wp-image-35" alt="2013-11-13 19.29.43" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-13-19.29.43.jpg"/>

<img class="alignnone size-medium wp-image-31" alt="2013-11-13 21.44.49" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-13-21.44.49.jpg" />

<img class="alignnone size-medium wp-image-32" alt="2013-11-14 10.32.47" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-14-10.32.47.jpg" />

<img class="alignnone size-medium wp-image-33" alt="2013-11-14 10.32.39" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-14-10.32.39.jpg"/>

<img class="alignnone size-medium wp-image-34" alt="2013-11-14 10.33.00" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-14-10.33.00.jpg" />
</figure>

I still have dry superglue all over my fingers.

It only has one-degree of freedom, but hey, it&#8217;s free and it&#8217;s fun. And also I&#8217;ve never done haptics before so I figure I shouldn&#8217;t be _too_ eager to jump into n+1 dimensions of math. Can&#8217;t wait for next week&#8217;s lab, when we start programming this!

&#8212;&#8212;&#8211;

Much thanks to Professor Okamura and her team for putting this wonderful class together.


# Week 2: Calibration

This week, the lab consisted of calibrating the sensors and outputting a specified force. It as the first time we got to program the board. And as a software person, it was very exciting. Getting to learn Arduino was one of the main reasons I decided to take this course.

The Hapkit board is a version of Arduino, with its components rearranged and some sensors added. Also, producing their own board instead of buying off-the-shelf saved a lot of money for the course. 

The first program I ran on my board was Blink.ino, which simply made the LED blink on and off. Simple though it was, it was a good example on manipulating pins and also very cool to see hardware respond!

<img class="alignnone size-large wp-image-58" alt="2013-11-20 00.02.27" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-20-00.02.27-1024x577.jpg" />

The first calibration we had to do was figure out the rotation angle of the handle given the reading of the magnetic sensor, which was used to track the rotations of the motor axis.

<img class="alignnone size-large wp-image-60" alt="2013-11-21 23.19.26" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-21-23.19.26.jpg" />

After taking a bunch of sensor readings at known angles, we ran linear regression and found the best fit line to extrapolate the data with. The kind of calibration I&#8217;d always done in FIRST robotics was just offsetting sensor data, so I found this kinda cool.

<img class="alignnone size-large wp-image-56" alt="Calibration" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/Calibration.png" />

Once we had the angle, we chugged through some kinematics equations to get the distance the handle had traveled. Which is dull until it shows up on your screen directly reflecting a physical property of the machine in front of you. Then it&#8217;s exciting. 😀

The next step in the lab was to output a force. That is, specify a force and have the Hapkit to exert it. Most of the logic involving actually talking to the motor was already programmed in the starter code, and all we needed to do was mess around with some equations (which makes sense given that this course is targeted at students without much programming/engineering experience). I scanned through the starter code anyways and gleaned this much &#8211; the motor strength is determined by a PWM through the motor pin, and the duty cycle is the desired torque scaled by some magic function. Now that I write it out, it seems quite obvious.

I was quite surprised at the amount of force the motor exerted &#8211; the Hapkit nearly slid off my desk several times as I was pushing back against its handle!

The next and last sensor to calibrate was the Force Sensitive Resistor.

<img class="alignnone size-large wp-image-61" alt="2013-11-21 23.50.14" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/2013-11-21-23.50.14.jpg" />

Unfortunately the FSR was not very precise, and so the data read has an error margin of about 30%, not including the fact that you get different readings based on how much surface area your finger shares with the sensor. But given how cheap all the hardware was (the total kit amounts to $50 in cost!), I&#8217;m not surprised. It just adds another dimension to our hapkit to be tinkered with in future labs. >:)


# Week 3: Virtual Environments

The last two weeks of the course were all about virtual environments. This is also where I really geeked out. Basically my friends were subjected to me going &#8220;Lookit! Touchit! It feels like a button OMG.&#8221;

The labs started out coding fairly basic environments &#8211; just springs and dampers. But what I found cool about this was that we modeled them with equations from high school physics. The way that everything is interconnected in the end&#8230;proof that school is useful!

Once we had springs and dampers figured out, we went on to building more complex environments &#8211; walls (one-sided springs, essentially) and textures (damping fields interspersed with low-resistance bands). Below is the graph of force vs position of my damping field texture, courtesy of Matlab.

<img class="alignnone size-medium wp-image-88" alt="damping_texture" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/damping_texture.png" />

The last lab consisted of putting all these techniques together and creating environments based off of real life objects. I tried to recreate a button and a stapler.

The button environment consisted of a step function of a spring and a wall.  It actually worked really well. The data is graphed below.

<img class="alignnone size-medium wp-image-89" alt="button" src="http://s416.photobucket.com/albums/pp249/KCHuang/Blog/button.png" />

This is where I sat and pressed my virtual button over and over for a few minutes, just because I could.

The last object I tried to recreate was a stapler. This endeavor was a failure, unfortunately. The motor on the Hapkit was not strong enough to recreate the sensation (I was modelling a normal, 5 dollar stapler. Not one of the fancy one-finger push staplers).

I wanted to program more environments, but the time crunch of finals week meant I had to limit myself to accomplishing the bare minimum.

And so ended my Hapkit journey. My thoughts on the course: it was very easy, which is good because otherwise I could not have taken it on top of my existing workload. But despite (or maybe because of) it being easy, I actually learned a lot. It was definitely my favorite class of the quarter. An altogether very rewarding experience that peaked my interest in haptics, I will be on the lookout for more opportunities like it in the future.