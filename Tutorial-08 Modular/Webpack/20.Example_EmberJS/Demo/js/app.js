/**************************
* Application
**************************/
// 建立應用程式。
// Application 擁有基底變數、事件
// http://emberjs.com/api/classes/Ember.Application.html
Songs = Ember.Application.create({
    mixmaster: 'Jacky',
    totalReviews: 0,
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
// 建立矩陣物件，並放入內容。
Songs.SongsController = Ember.ArrayController.create({
    content: [],
    init: function() {
        // create an instance of the Song model
        var song = null;
        song = Songs.Song.create({title: 'Son of the Morning', artist: 'Oh, Sleeper', genre: 'Screamo'});
        this.pushObject(song);
        song = Songs.Song.create({title: 'ふたたび千と千尋', artist: '平原綾香 & 久石譲', genre: 'Symphony'});
        this.pushObject(song);
    }
});

Songs.SongsController.pushObject(Songs.Song.create({title: 'Up&Up', artist: 'Coldplay', genre: 'Screamo'}));
