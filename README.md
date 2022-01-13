# Eleganter Theme [![NPM](https://nodei.co/npm/jsonresume-theme-eleganter.png)](https://npmjs.org/package/jsonresume-theme-eleganter)

This is a fork from [jsonresume-theme-elgegant](https://github.com/mudassir0909/jsonresume-theme-elegant) and a Responsive theme for [JsonResume](https://jsonresume.org/) inspired by card layouts. 

Following adjustments are done: 
* Made environment variable for resume.json
* more concise project area 
* Doesn't show project duration, instead just shows the year of project start 
* Skill level progress bar shows more dramatic values
* Education elements show score


### Install
```
npm i jsonresume-theme-eleganter
```

### Markdown Supported
Supported in the following properties `resume.basics.summary`, `work[0].summary`, `work[0].highlights`, `projects[0].summary`, `projects[0].highlights`, `education[0].courses`, `volunteer[0].summary`, `volunteer[0].highlights`, `awards[0].summary`, `publications[0].summary`, `references[0].reference`, `skills[0].keywords`. If you have any other use case, please raise an issue

### Social Profiles
The profiles are shown in the order in which they are specified in the `basics.profiles` array. By default, only 5 profiles are shown & others are revealed on demand.

![Profile Section](https://raw.githubusercontent.com/mudassir0909/jsonresume-theme-elegant/master/screenshots/profile.png)

#### Supported Profiles
* angellist
* behance
* bitbucket
* blogger
* codepen
* dribbble
* dribble
* exercism
* facebook
* flickr
* foursquare
* github
* gitlab
* googleplus
* gratipay
* hackernews
* instagram
* lastfm
* linkedin
* medium
* meetup
* pinterest
* reddit
* skype
* soundcloud
* spotify
* stackexchange
* stackoverflow
* telegram
* tumblr
* twitter
* vimeo
* youtube

### Credits
* Thank you [contributors](https://github.com/mudassir0909/jsonresume-theme-elegant/graphs/contributors) for your pull requests
* Floating Menu: inspired by [Smart Fixed Navigation](http://codyhouse.co/demo/smart-fixed-navigation/index.html)

### Contributing
```
$ npm install -g grunt
$ npm install -g pug-cli
$ git clone https://github.com/besserwisser/jsonresume-theme-eleganter.git
$ cd jsonresume-theme-eleganter
$ npm install
$ grunt watch // watches for file changes in *.pug & *.less
$ grunt exec:run_server // Do this in a new terminal tab to run node server
```

Visit [http://localhost:8888](http://localhost:8888) to see the theme in action.

##### Testing JSON changes
You can test your changes by updating `resume.json` file inside `node_modules/resume-schema/` folder. You might want to rerun `grunt exec:run_server` whenever you make any changes to `resume.json`

##### Updating Styles
All the LESS files are organized under the folder `assets/less/`. Please go through the comments inside `theme.less` to find out which file to put your LESS changes. Grunt compiles `assets/less/theme.less` to `assets/css/theme.css` which is used eventually in the theme.

**_Please Do not make any changes inside `assets/css/theme.css`_**

##### Updating Javascript
All the javascript changes go into `index.js` which is responsible for rendering the theme.

##### Adding a new icon
Visit this [wiki page](https://github.com/mudassir0909/jsonresume-theme-elegant/wiki/Adding-a-new-icon)
