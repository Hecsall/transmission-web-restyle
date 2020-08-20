# **Transmission Web Restyle**

This is an _attempt_ to refresh the look of Transmission's Web UI.\
I'm trying to recreate an interface as similar as possible to [Flood UI](https://github.com/Flood-UI/flood), a beautiful interface for rTorrent.

Current progress in the screenshots below (click to see fullsize):

<img    src="https://i.imgur.com/73vtzSa.png" 
        width="400" 
        title="Main screen">
<img    src="https://i.imgur.com/6OhVlqZ.png" 
        width="400" 
        title="Torrent info">

> **Is this usable?**\
    Yes, until now I have not changed the functionality, I just changed the styling of the UI.\
    Some sub-menus are still ugly, but they work as intended.


## **The plan**
Transmission's Web UI was made a long time ago, so it contains a lot of JavaScript that handles various things.\
Rewriting it would be really time consuming so i will only take care of the CSS part without breaking anything, and i will touch as little JavaScript as possible.


## **Installation**
The content of this repo is the content of the `web` folder of Transmission's Web UI. Just remove the files of the standard theme (backup them maybe), then place all the repo files in there.
Common path to Transmission's web folder are:
- Linux: `~/.local/share/transmission/web/`
- macOS: `/Applications/Transmission.app/Contents/Resources/web/`
- FreeNas (in jail): `/root/usr/local/share/transmission/web`

Depending on the OS you are running, the path could be different.


## **TODO:**
- Restyle:
    - Convert Main layout to CSS Grid - :hammer: In Progress...
    - Torrents list - :heavy_check_mark: Done
    - Top menu (toolbar) - :heavy_check_mark: Done
    - Filters menu (statusbar - to be moved later) - :heavy_check_mark: Done
    - Remove Bottom menu (footer) and move icons to sidebar - :heavy_check_mark: Done
    - Bottom menu dialogs
    - Torrent info dialog - :hammer: In Progress...
    - Add torrent dialog
    - Settings dialog
    - Preferences dialog
- Rewrite every Style in SCSS - :hammer: In Progress...
- Remove jQuery UI (if possible)
- ~~Vue JS?~~
- ~~PWA?~~
- Maybe pack everything in a `web` folder and put it on `/releases`
- Everything
