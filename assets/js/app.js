// the app method accepts a fn to invoke on init unobtrusively
var run = function(application) {
    if (navigator.userAgent.indexOf('Browzr') > -1) {
        // blackberry
        setTimeout(application, 250)
    } else {
        // attach to deviceready event, which is fired when phonegap is all good to go.
        //x$(document).on('deviceready', application, false);
    }
}

// throw our settings into a lawnchair
, settings = new Lawnchair({table: 'settings',adaptor:'dom'})
, users = new Lawnchair({table: 'users',adaptor:'dom'})

// shows id passed
, display = function(id) {
    //x$(["#welcome", "#users"]).each(function(e, i) {
    //    var display = '#' + x$(e)[0].id === id ? 'block' : 'none';
    //    x$(e).css({ 'display':display })
    //});
}

// reg a click to [id]_button, displays id (if it exists) and executes callback (if it exists)
, when = function(id, callback) {
    //x$(id + '_button').on('touchstart', function () {
    //    if (x$(id).length > 0)
    //        display(id);
    //    if (callback)
    //        callback.call(this);
//		return false;
//    });
};

    var data = {
        key:'1',firstname:'Clive',lastname:'Walkden',coffeemade:'2',
        key:'2',firstname:'Joe',lastname:'Griffiths',coffeemade:'1',
        key:'3',firstname:'Christian',lastname:'Goodrich',coffeemade:'1',
        key:'4',firstname:'Luke',lastname:'Edwards',coffeemade:'2',
        key:'5',firstname:'Mark',lastname:'Plunkett',coffeemade:'2'
    };

    users.save(data);

    console.log(users);

    users.get('1',function(result){
        console.log(result);
    });

//
//
//  --- our app behavior logic ---
//
run(function () {
    // immediately invoked on first run
    var init = (function () {
        if (navigator.network.connection.type == Connection.NONE) {
            alert("No internet connection - we won't be able to show you any maps");
        } else {
            alert("Connected");
        }
    })();






    // a little inline controller
    when('#welcome');
    when('#users');
});
