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

## **Installation**
The content of this repo is the content of the `web` folder of Transmission's Web UI. Just remove the files of the standard theme (backup them maybe), then place all the repo files in there.
Common path to Transmission's web folder are:
- Linux: `~/.local/share/transmission/web/`
- macOS: `/Applications/Transmission.app/Contents/Resources/web/`
- FreeNas (in jail): `/root/usr/local/share/transmission/web`

Depending on the OS you are running, the path could be different.

## **This is an experiment**
Keep in mind that this repo is an experiment I'm doing in my free time when I feel bored, do not expect for it to be even far from perfect.


## **Current progress**
Here are some screenshots of the current progress:
![Main window](https://i.imgur.com/73vtzSa.png)
![Torrent info](https://i.imgur.com/6OhVlqZ.png)


## **TODO:**
- Restyle:
    - Convert Main layout to CSS Grid - :hammer: In Progress...
    - Torrents list - :heavy_check_mark: Done
    - Top menu (toolbar) - :heavy_check_mark: Done
    - Filters menu (statusbar - to be moved later) - :heavy_check_mark: Done
    - Remove Bottom menu (footer) and move icons to sidebar - :heavy_check_mark: Done
    - Bottom menu dialogs
    - Torrent info dialog
    - Add torrent dialog
    - Settings dialog
    - Preferences dialog
- Rewrite every Style in SCSS - :hammer: In Progress...
- Minify CSS output
- Understand how the JS part works
- Update jQuery
- Remove jQuery UI
- Try to handle content changes with Vue JS (if possible)
- PWA?
- Everything
