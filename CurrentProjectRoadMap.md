## *DISCLAIMER* These are not all issues with the app, but also ways it can be improved! 
    ##Front End
      > Bookmark is almost set up! All that needs to be added is the connection to the redis database. 
      There are already a few functions that are commented out which were originally intended to work with 
      the bookmarking functionality. 
      
      > On the bookmark note, an ng-view is necessary and quite simple. It's a great way
      to get into ionic. It can, however, be more complicated in that one can add a deleting/liking/disliking
      functionality so that the user can save a place to go to in the future and let Dive know when they've
      visited it what they thought!
      
      > There's currently a lag between when the algorithm gets called and it displays a blank card. This is due
      to the algorithm processing that user's likes and dislikes to make the right suggestion choices. 
      This could be a simple loading page in the card view with ionic animations.
      
      > The original intention of the app was to be tinder-related. However, the native $ionicGesture control, 
      such as dragLeft, swipeRight, etc...works similar to the issues that occured in watchout where the number of
      swipes continues to increase as you swipe. There are also modules built for this (search ionic tinder swipe cards),
      but the new update of angular that is bounded to ionic doesn't allow these to work.
      
      >Location field doesn't clear by itself. However, this is also where the location they searched is saved.
      It would be simple to change the location to the window.
      
    ##Back End
      >Further modularize the algorithm.
      
      >The most you can currently get through the yelp api is 1000 bar/restaurants.
      
      >Slow for foreign location retrieval.
