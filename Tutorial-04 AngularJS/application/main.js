/**
 * Created by EastMoon on 2014/8/23.
 */
$(document).ready(Initial);
$(window).resize(Update);

    function Initial()
    {
        // Bootstrap Reference : https://docs.angularjs.org/guide/bootstrap
        // Initial Angular boostrap with current document.
        angular.bootstrap(document);
        // Initial Angular with current document and module is myApp.
        // angular.bootstrap( document, ["myApp"] );
        // Initial interaction
        // Initial View
        Update();
    }

    function Update()
    {
    }