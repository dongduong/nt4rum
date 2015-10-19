/*
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
These code is property of IceSoft company, VietNam
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  var systemNotify = document.querySelector('#systemNotify');
  var firebaseManager = document.getElementById("firebaseManager");
  var cookieManager = document.getElementById("cookieManager");

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
    //loginPage.addEventListener('login', app.userLoggedIn);
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function(event) {
    console.log("WebComponentsReady");
    var authData = userManager.getAuthData();
       if (authData) {
          if(MoreRouting.isCurrentUrl('login')){
              MoreRouting.navigateTo('home', null);
          }
          mainPage.configMainPage(authData);
       }
       else {
         MoreRouting.navigateTo('login', null);
       }
  });
  
  // app.userLoggedIn = function(event) {
	 //  MoreRouting.navigateTo('home', null);
  //   //app.$.mainPage.authPayload=event.target.authPayload;
  //   var authData = loginPage.refFirebase.getAuth();
  //   mainPage.configMainPage(authData);
  // };

  // Close drawer after menu item is selected if drawerPanel is narrow
  /*app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };*/

  app.showSystemNotify = function(message) {
    systemNotify.textContent = message;
    systemNotify.textContent = "";
  };

})(document);
