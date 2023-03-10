---
title: "&#8220;Stop Being a Douchebag&#8221;: Ego and the development crew"
date: "2017-07-06T10:57:52"
permalink: "articles/stop-being-a-douchebag-ego-and-the-development-crew/index.html"
tags: "article"
description: "<p>At the end of my third year of high school, the lockers were cleared out and any unclaimed stuff was up for grabs. I inherited a copy of Use Your Illusion II on vinyl &#8211; only one of the two LPs (I still have it today) and I bloody loved it. I was 13 years </p>
"
layout: 'layouts/post'
hero:
  size: "full-bleed half-screen"
  caption: "true"
  title: "&#8220;Stop Being a Douchebag&#8221;: Ego and the development crew"
  image:
    src: "/assets/images/scrummable_hero.jpg"
    alt: "&#8220;Stop Being a Douchebag&#8221;: Ego and the development crew"
---
<div class='intro'><p>At the end of my third year of high school, the lockers were cleared out and any unclaimed stuff was up for grabs. I inherited a copy of Use Your Illusion II on vinyl &#8211; only one of the two LPs (I still have it today) and I bloody loved it. I was 13 years old and the edgy bluesy riffs with rude lyrics full of swearing really appealed to me.</div>
<p>I loved listening to <em>Get in the Ring</em> where Axl Rose slams everyone he doesn&#8217;t like in five and half minutes of screaming cathartic vitriol. I thought Axl Rose was the new Johnny Rotten and teenage me thought he was the bollocks.</p>
<h2>Then&#8230; the hiatus.</h2>
<p>Axl had driven the other band members away with his perfectionism, his oil-tanker-sized ego, his self-aggrandising dick-swinging. Guns &#8216;n&#8217; Roses disappeared leaving only soiled memories and rumours of <em>Chinese Democracy</em> &#8211; an album that took 14 years to release and, at 13 million dollars, the most expensive rock album of all time! Much anticipated, when it eventually appeared it was, well&#8230; it was shit. The architectural folly of a man to whom no-one had ever said &#8220;no&#8221;.</p>
<h2>My <em>Get in the Ring</em></h2>
<p>I used to work with a developer as part of a small team (there were two or three devs, a project manager, a designer/uxer, and our manager). Previously, he&#8217;d been the sole developer and was clearly finding it hard to play well with others.</p>
<p>As lead developer, he was well within his rights to impose coding standards but he pushed his one-man-band ethos on every area &#8211; he knew <em>everything</em> about project management, business analysis, user experience; and woe-betide anyone who disagreed with him.</p>
<p><img src="/assets/images/scrummable_walk-off-stage.gif" style="aspect-ratio: 320/180" /></p>
<p>The main issue was that he didn&#8217;t communicate; simply acted petulant when he didn&#8217;t get his own way. He seemed to think that everyone else was useless and he could do their job better than they could.</p>
<p>This would have huge knock-on effects on everyone else; he&#8217;d build things on assumptions because he knew better than anyone who gathered requirements, he&#8217;d change design if he thought he could do it better, he didn&#8217;t need code-review because his code was golden, he didn&#8217;t even commit to repos because he was too used to no-one ever touching his code.</p>
<h2>There&#8217;s no <em>ego</em> in <em>development</em></h2>
<p>He was isolationist in his approach. It could take hours to do simple tasks in his codebase because it was only &#8220;documented&#8221; in his head &#8211; and, hell, if you couldn&#8217;t figure it out without explanation, weren&#8217;t you the idiot! His code is so obviously self-explanatory(!) He understands it, why can&#8217;t you?!</p>
<h2>Toys out of the pram</h2>
<p>The sad truth is that we all have Axl Rose moments. I&#8217;m guilty of it and I&#8217;m sure you are too.</p>
<p>There are occasionally those times where we&#8217;ve been a little big-headed about our process and, especially, code. I notice it mostly when demoing things I&#8217;ve built and I get critique.</p>
<blockquote>
<p>
  <em>&#8220;This took ages <strong>and</strong> it&#8217;s awesome, why aren&#8217;t you happy?!&#8221;</em></p>
<p>  <cite>Me, yesterday</cite>
</p>
</blockquote>
<h2>How to be less Axl</h2>
<p>Communication is key to everything. Some things I have taken away from my experiences include how I comment my code. I like to explain <em>why</em> a piece of code exists, rather than explain <em>what</em> it does. Well-written code should be self-explanatory in its functionality but the rationale behind using a specific method is usually abstracted away &#8211; either in a long-closed ticket or in a developer&#8217;s head. Explaining the rationale in the codebase saves anyone else working on that code, potentially, hours of digging.</p>
<p>For every problem, there are a million solutions &#8211; especially in code. Your solution is just one of them. Always be able to explain your solution to anyone that is interested. Other developers are not stupid for not understanding your code; it could just as easily be the other way round!</p>
<p>Another thing I&#8217;ve learned is that your colleagues are doing their jobs for a reason.</p>
<p>Here&#8217;s an all-too-common scenario at work for me; An account handler comes over to my desk and asks if I could <em><a href="https://ux.shopify.com/reasons-to-stop-saying-just-54118870b998">just</a> do this one tiny amend</em>.</p>
<p>It seems like the easiest thing in the world to just pick it up but then that little task turns out to be bigger than you (or the account handler) thought &#8211; maybe you need to upgrade a library that has a knock-on effect on something else that now needs fixing and, before you know it, you&#8217;ve been working on it for five hours, it&#8217;s still not fixed and your project manager is breathing down your neck because you&#8217;ve not picked up the work you were allocated. You drop the &#8220;tiny amend&#8221; but now the account handler is breathing down your neck because you&#8217;ve not done what <em>they</em> want you to do!</p>
<p><img src="/assets/images/scrummable_BossBreathingDownYourNeck.png" style="aspect-ratio: 364/249" /></p>
<p>Your project manager allocates work because they&#8217;re entrusted with making sure that jobs go to the most appropriate person to deal with them. Sure, you may have been the last person to touch the bit that needs amending, sure you may be the lead developer, but that doesn&#8217;t mean you&#8217;re the best person to deal with it right now. Heck, it might not even need dealing with right now &#8211; that&#8217;s not your call, the <em>&#8220;when&#8221;</em> is the PM&#8217;s call!</p>
<p>Part of the role of the product layer (PM&#8217;s, business analysts, tech leads, etc) is to shield developers from the crap from clients. If you&#8217;re the dev that is getting emails from clients and dealing with them yourself, you&#8217;re going to get mightily angry and resentful pretty quickly (trust me, I&#8217;ve seen it!).</p>
<h2>Teamwork Teamwork Teamwork</h2>
<p>As part of a development cell, you are a cog in a machine, not the be-all-and-end-all. If you want to do that, be a solo artist, don&#8217;t <a href="https://www.youtube.com/watch?v=qryAwfpHG8o">form a band</a>. Teams run more smoothly when everyone is pulling in the same direction and aligned to the same goals.</p>
<p>If you work in a team, don&#8217;t be Axl Rose.</p>
<blockquote>
<p>
  [He] will never have the insight to examine the part he plays in his own downfall.<br />
  ~ <a href="http://www.radiocremebrulee.com/uncategorized/axl-rose-a-victim-of-ego">Mike Brown, Radio Creme Brulee</a>
</p>
</blockquote>
