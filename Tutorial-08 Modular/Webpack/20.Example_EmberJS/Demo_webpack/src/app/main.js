'use strict';

import Ember from 'ember';

/**************************
* Application
**************************/
// 建立應用程式。
// Application 擁有基底變數、事件
// http://emberjs.com/api/classes/Ember.Application.html
var Songs = Ember.Application.create({
    mixmaster: 'Jacky',
    totalReviews: 0,
    rootElement: '#app',
    ready: function() {
        console.log('Ember sings helloooooooooo!');
    }
});

/**************************
* Models
**************************/
// 宣告類別於應用程式內。
Songs.Song = Ember.Object.extend({title: null, artist: null, genre: null, listens: 0});

/**************************
* Views
**************************/
// 建立文字輸入框控制顯示元件。
Songs.ReviewTextArea = Ember.TextArea.extend({placeholder: 'Enter your review'});

/**************************
* Controllers
**************************/
