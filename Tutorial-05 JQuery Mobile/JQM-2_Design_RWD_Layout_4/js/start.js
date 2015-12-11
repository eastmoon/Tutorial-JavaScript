/**
 * Created by EastMoon on 2014/8/4.
 */
// Unity tools
function includeScript(url, callback, mimetype)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = mimetype;
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

// include application main JavaScript
function loadApplicationMainJS()
{
    includeScript("js/main.js", null, "text/javascript");
}

loadApplicationMainJS();
