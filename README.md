# Site placeholder

A template to make a placeholder for an upcoming site/project. It has no dependencies and can be deployed to static hosting.

![Example Screenshot](https://raw.githubusercontent.com/spacenectar/site-placeholder/f2eabc2fb56097ae9908f1aa4e253c29e536f953/screenshot.png)

## Getting started

This is an incredibly basic project. So getting started is as simple as opening `globals.json` and adding your own data and replacing the logo, bg and favion files.

Done.

## Customising

Once you have cloned a copy of the repo down, you are free to customise anything you like. All items are targetable via css classes.

**NOTE:**: The images are embedded in the page via js and will either be an `img` tag or an `svg` tag. They do not have classes of their own but can be targeted via their parent class which is `.logo`.

## Description of each variable in globals.json

| Variable | Description | Required | Default
| --- | --- | --- | --- |
| name | The name of your application | true | '' |
| description | The contents of the meta description tag | true | '' |
| logoPath | The path to your logo file | true | './logo.svg' |
| backgroundPath | The path to your background image | false | './bg.jpg' |
| titleColour | The colour you wish to use as the title text | false | '#bdbdbd' |
| footerCopy | The copy to use in the footer of the site | false | Copyright notice |
