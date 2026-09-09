# Design sources

`blogs-hero.html` is the composition behind `src/assets/practice/heroes/blogs-hero.jpg`.
Render it at 2560x1440 with headless Chrome to regenerate the image:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --window-size=2560,1440 --force-device-scale-factor=1 --screenshot=blogs-hero.png "file://$PWD/blogs-hero.html"
```
