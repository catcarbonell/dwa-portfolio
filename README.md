# Deployment of Web Applications - Portfolio
Deployment of Web Applications 1601-01 // Professor Chris Chapman // Portfolio

**Last stable version**: 1.0.2 established *1/16/2015*

## Server Setup Requirements:
1. Ubuntu 12.04.5 LTS
2. Git 1.7.9.5
3. Apache 2.4.16

## Deployment to Staging after changes are approved
1. SSH with approved username to staging server: [http://staging.catcarbonell.net](staging.catcarbonell.net)
  * ex. ssh username@staging.catcarbonell.net
2. Go to the following directory:
  * cd /var/www/dwa-portfolio 
3. Run:
  * sudo git pull
4. Test changes and notify team of new deployment
  
## Deployment to Production for Authorized Personnel ONLY
1. Notify team of impending deployment
2. SSH with approved username to production server: [http://www.catcarbonell.net](www.catcarbonell.net)
  * ex. ssh username@www.catcarbonell.net
3. Go to the following directory:
  * cd /var/www/dwa-portfolio
4. Run:
  * sudo git pull
5. Test changes and notify team of new deployment

## Branched Development and Versioning
1. Master -- Pre-Staging -- a preview of what is to be published! Do not touch this branch without authorization. 

2. gh-pages -- Production -- Do **NOT** TOUCH/PUSH ANYTHING TO THIS BRANCH WITHOUT AUTHORIZATION. 


3. Please feel free to pull from **Master** or **gh-pages**, create, and push to your own branch! 
  * Please use your Slack name when creating your own branch. 
  * When you're ready to submit to Staging, message me on Slack (__@cat__) and the team will review your contribution on your branch.

4. When ready to upload to your branch for review, please utilize the current stable/production version numbers and add any features
  * *Currently _v. 1.0.2_ as of 1/16/2015*
  * ex. of syntax: v1.0.1 - Added  floatingKitten.png and th-floatingKitten.png to img/portfolio
  
  
## Working Naming Conventions
1. When adding a CSS class, please use the dashed convention, 
  * ex. class = "gal-web" (class for web/mobile gallery)
2. For JS/jQuery, camelCase is preferred
3. For images, camelCase is preferred. If uploading to thumbnail folder (th), please add prefix "th-" to filename.
  * ex. th-floatingKitten.png

