# Transmission Web Restyle

Let's face it, transmission web ui is terrible, I mean, look at this...

![Transmission web ui](https://blog.flo.cx/mycontent/2011/02/Screenshot-from-2014-04-15-170242-1038x576.png)
_It's 2020 and it still looks like this._

So what i'm _trying_ to do is to "restyle" it a little, just to make it easier to look without stabbing your eyes.

I'm taking inspiration from the [Flood UI](https://github.com/Flood-UI/flood) made for rTorrent (screenshots included in the repo).

## **The issue**
Transmission web ui runs with a lot of JavaScript (obviously). They handle every content change of the ui, and touching them without being carefoul could really break the functionality.
On top of that, it also uses JQuery UI, that I would like to replace with something else.

For now, i'll stick with CSS-only customizations, without touching any JavaScript. When i'm satisfied with the result (if i will ever be), i'll try to touch the JavaScript part to customize content and behaviours.


## **This is an experiment**
Keep in mind that this repo is an experiment I'm doing in my free time when I feel bored, do not expect for it to be even far from perfect or ready in no time.


## Current progress
Here is a screenshot of the current progress:
![Current progress](https://i.imgur.com/Cs4j9De.png)


## **TODO:**
- Rewrite every Style in SCSS - :hammer: In Progress...
- Restyle torrents list - :heavy_check_mark: Done
- Restyle top menu - :heavy_check_mark: Done
- Restyle filters menu
- Restyle bottom menu - :hammer: In Progress...
- Minify CSS output
- Understand how the JS part works
- Update jQuery
- Remove jQuery UI
- Try to handle content changes with Vue JS (if possible)
- PWA?
- Everything
