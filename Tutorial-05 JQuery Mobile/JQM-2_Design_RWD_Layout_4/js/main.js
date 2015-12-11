/**
 * Created by EastMoon on 2014/8/23.
 */
$(document).ready(Initial);
$(window).resize(Update);
function Initial()
{
    // Bootstrap Reference : https://docs.angularjs.org/guide/bootstrap
    // Initial Angular boostrap with current document.
    //angular.bootstrap(document);
    // Initial Angular with current document and module is myApp.
    // angular.bootstrap( document, ["myApp"] );

    // Initial interaction
    console.log("Initial Application :");

    // Clone element content to target element, target is attribute value.
    console.log("Clone element.")
    $("div[clone-by]").html( function() {
        return $("#" + $(this).attr("clone-by")).html();
    });

    // Start outside panel function
    // reference : https://demos.jquerymobile.com/1.4.5/panel-external-internal/index.html
    $( "body > [data-role='panel']" ).panel();

    // Fixed external toolbars
    // reference : http://demos.jquerymobile.com/1.4.4/toolbar-external/
    $(function () {
        $("[data-role='header']").toolbar({ theme: "a" });
        $("[data-role='footer']").toolbar({ theme: "a" });
    });

    // Initial View
    console.log("Update view.");
    Update();
}

function Update()
{
}