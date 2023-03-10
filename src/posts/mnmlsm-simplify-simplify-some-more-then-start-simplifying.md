---
title: "MNMLSM: Simplify, simplify some more, then start simplifying"
date: "2015-08-05T12:32:50"
permalink: "articles/mnmlsm-simplify-simplify-some-more-then-start-simplifying/index.html"
tags: "article"
description: "<p>Minimalism is an interesting thing &#8211; far from meaning as stark as possible, minimalism is the idea of removing anything unnecessary for base level functionality. Imagine a human face. Now remove all of the details you can until it still resembles a human face. If, for example, you took the eyes out and it looks </p>
"
layout: 'layouts/post'
hero:
  size: "full-bleed half-screen"
  caption: "true"
  title: "MNMLSM: Simplify, simplify some more, then start simplifying"
  image:
    src: "/assets/images/scrummable_minimal.jpg"
    alt: "MNMLSM: Simplify, simplify some more, then start simplifying"
---
<div class='intro'><p>Minimalism is an interesting thing &#8211; far from meaning as stark as possible, minimalism is the idea of removing anything unnecessary for base level functionality. Imagine a human face. Now remove all of the details you can until it still resembles a human face. If, for example, you took the eyes out and it looks wrong, stick them back in. Once you&#8217;ve finished you have minimalism. <a href="https://www.pinterest.com/explore/minimalist-architecture/" target="_blank" rel="noopener noreferrer">Buildings</a>, <a href="https://en.wikipedia.org/wiki/Minimalism" target="_blank" rel="noopener noreferrer">paintings</a>, <a href="http://www.vandelaydesign.com/beautiful-minimalist-websites/" target="_blank" rel="noopener noreferrer">web design</a> can all implement (and benefit from) minimalism. So can code.</div>
<p>When I started coding for a living I had no idea about loops. The last year of solidly building WordPress sites has taught me a lot. I still start my code the same way I used to code though. I write everything out longhand, then work out the commonalities and parse them as variables, arrays, and loops. Then I start cutting out the duplicated code. Once I have this, I can start working out what I can cut from where to make my code as small and as simple as possible.</p>
<h3>Who wants a DRY KISS*?</h3>
<p>Every single developer! The reuse of code improves performance, makes updating easier &#8211; especially if the project gets passed to someone else when you&#8217;re inevitably hit by that bus that everyone goes on about, and benefits??consistency across the design.</p>
<blockquote>
<p>&#8220;Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.&#8221;</p>
</blockquote>
<p>Everyone knows that deadlines get in the way of perfection and sometimes it&#8217;s necessary to chuck something in that works rather than delay everything to produce code that will make other developers moist. This is where Technical Debt comes in. Set aside some time after deployment to tidy up your code. Think of it like throwing all of the stuff from your floor into a wardrobe when your mum visits. Your flat will pass muster for the duration of her visit but, if you don&#8217;t go and sort that wardrobe out once she&#8217;s gone, you&#8217;ll be in for a world of pain later on!</p>
<p><div id="attachment_325" style="width: 610px" class="wp-caption aligncenter"><a href="http://www.scrummable.com/wp-content/uploads/2015/08/immaculate-bedroom.jpg"><img src="/assets/images/scrummable_immaculate-bedroom-600x400.jpg" style="aspect-ratio: 600/400" /></a><p id="caption-attachment-325" class="wp-caption-text">There are unimaginable horrors lurking behind those wardrobe doors!</p></div></p>
<p>It&#8217;s like CSS classes; you wouldn&#8217;t apply identical styles to two elements when you could assign the same class to them and only write one bit of CSS, so why do it with your PHP or JavaScript? I start by breaking a build down into independent functions. Then breaking those independent functions down into independent pieces of functionality. This allows me to reuse a function again and again. For example, on one site I built recently, we needed a <a href="http://www.netflix.com" target="_blank" rel="noopener noreferrer">Netflix</a>-style &#8216;bookshelf&#8217; that scrolled sideways. This had to start on click of a button or swipe on a touch-screen. It also had to work on several &#8216;shelves&#8217; independently of each other. By separating the function that made the shelf slide, I could call that one function on each shelf for each method of initiation. This made this one function simple to adjust, easy to replace if a better solution presented itself, and extensible for use on infinite shelves.</p>
<p><div id="attachment_338" style="width: 609px" class="wp-caption aligncenter"><a href="http://www.scrummable.com/wp-content/uploads/2015/08/reusable.png"><img src="/assets/images/scrummable_reusable.png" style="aspect-ratio: 599/398" /></a><p id="caption-attachment-338" class="wp-caption-text">Code, like Dr Evil, is better when&#8217;s it&#8217;s Mini Me</p></div></p>
<p><a href="https://en.wikipedia.org/wiki/Andy_Hunt_(author)" target="_blank" rel="noopener noreferrer">Andy Hunt</a> and <a href="https://en.wikipedia.org/wiki/Dave_Thomas_(author)" target="_blank" rel="noopener noreferrer">Dave Thomas</a> originally intended their principle for use in software engineering but it is sound practice for almost all aspects of development. Keeping your code clean, reusable, and &#8211; above all &#8211; simple, makes for better code and, by extension, better websites.</p>
<p>* <strong>D</strong>on&#8217;t <strong>R</strong>epeat <strong>Y</strong>ourself and <strong>K</strong>eep <strong>I</strong>t <strong>S</strong>imple <strong>S</strong>tupid</p>
