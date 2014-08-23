/**
 * Created by EastMoon on 2014/8/4.
 */
$(document).ready(Initial);

function Initial()
{
    // variable reference : http://www.w3schools.com/js/js_variables.asp
    // variable reference : http://emn178.pixnet.net/blog/post/94806770-javascript%E6%95%99%E5%AD%B8---%E8%AE%8A%E6%95%B8%28variables%29
    var x;
    var y = 5;
    var z = "5";

    var outputStr = "";

    outputStr += "Variable : <br />";
    outputStr += "X : " + x + "<br />";
    outputStr += "Y : " + (y + 2) + "<br />";
    outputStr += "Z : " + (z + 2) + "<br />";

    // Statement reference : http://www.w3schools.com/js/js_statements.asp
    outputStr += "<br />Statement : <br />";
    outputStr += "For : ";
    for( var i = 0 ; i < 5 ; i++ )
        outputStr += i + " ";
    outputStr += "<br />";

    outputStr += "<br />For ... in : <br /> ";
    var ary = [1,2,3,4,5];
    for( var i in ary )
        outputStr += "[" + i + "] : " + ary[i] + "<br />";

    outputStr += "<br />For ... in :<br /> ";
    var obj = new Object();
    obj.var1 = 1;
    obj.var2 = "xx";
    obj.var3 = [1,2,3];
    for( var i in obj )
        outputStr += "[" + i + "] : " + obj[i] + "<br />";

    outputStr += "<br />While :<br /> ";
    var i = 0;
    while( i == 1 )
    {
        ++i;
        outputStr += ( i ) + "<br />";
    }

    outputStr += "<br />do ... While :<br /> ";
    var i = 0;
    do
    {
        ++i;
        outputStr += ( i ) + "<br />";
    }
    while( i == 1 )

    // function reference : http://www.w3schools.com/js/js_functions.asp
    outputStr += "<br />Funcation : <br />";
    outputStr += "addVariable : " + addVariable(1, 2) + "<br />";
    outputStr += "addVariable : " + addVariable(4, 5) + "<br />";

    var fun = addVariable;
    outputStr += "function point to addVariable : " + fun(10, 5) + "<br />";

    $(document.body).html(outputStr);
}

function addVariable( _x, _y )
{
    return _x + _y;
}