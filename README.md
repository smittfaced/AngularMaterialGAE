#Cropolis V2 - Connecting farmers and their local communities for a tastier, more sustainable world.

This full stack uses following technologies:
* Google App Engine
* Python Flask
* AngularJS
* Angular Material
* Gulp, Bower, npm

######You can see live demo here: [app.cropolis.co][]

##What's implemented?
* User Authentication
* Business and User profile pages - users can view/edit their profiles
* Admin Interface - admin can edit app config, edit/delete/block users, and have elevated access to users profiles and business for assistance in management.
* Feedback from Users and guests
* Tracking with Google Analytics
* Much more!

##What do I need?
First make sure you've got following things installed on your machine:
* [Google App Engine SDK for Python][]
* [Node.js][]
* [pip][]
* [virtualenv][]

##Installation
Using github:
```
git clone https://github.com/smittfaced/cropolis-v2.git
cd cropolis-v2
npm install
gulp run - this might result in errors!
in cropolis-v2/main find and extract lib.zip
In the appengine-sdk launcher, add the project using the ‘Add Existing Project’ feature and launch the app
The app should be available on localhost:8080, and the database will be explorable on localhost:8000
```
And that's it! You should now see the app running on port 8080.
You can now sign in via Google, or you can click "Generate Database" and then sign in as "admin" with password "123456"


##When Preparing to Deploy to AppEngine Servers 
‘’
cd cropolis-v2
gulp build
appcfg.py update main
```

And that's it! Happy Developing!



[google app engine sdk for python]: https://developers.google.com/appengine/downloads
[node.js]: http://nodejs.org/
[pip]: http://www.pip-installer.org/
[virtualenv]: http://www.virtualenv.org/
[app.cropolis.co]: https://app.cropolis.co
# Cropolis-V2
