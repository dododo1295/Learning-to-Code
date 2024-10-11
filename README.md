# Learning-to-Code
all projects are based on curriculum from https://freecodecamp.org
## Github help
### if the button doesn't work in VSCode:
git push -u origin main
### if there's an error on upload use this and then the terminal command above and it'll work.
git pull --rebase 


#### my learnings
10.11 css is quite difficult I need to focus more on it, feel like my html foundation is actually quite solid about a week in, but I am far and away having a much harder time with CSS and beautifying some of my work. todays key take away is image scaling (something i'm having difficulty on my personal project):
if i want the image to maintain it's original aspect ration i can use something like:
```
.sample {
    max-width: ###px;
    height: auto;
}
```
Or if i'd rather maintain a specific aspect ratio like a square use code that looks like this:
```
.sample {
    width: 100%;
    max-width: ###px;
    height: ###px;
    object-fit: cover;
}
```
and **this** will change things for how I can create a photo gallery on my personal website project. also let's not forget the ```gap ``` property that can help seperate the images from each other. wow, this is sick.