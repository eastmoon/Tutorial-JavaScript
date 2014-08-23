/**
 * Created by EastMoon on 2014/8/23.
 */
$(document).ready(Initial);
$(window).resize(Update);

function Initial()
{
    // Initial interaction
    if( $(".imgIcon").length > 0 && $("#pictureBox").length > 0 )
    {
        $(".imgIcon").click( function()
        {
            $("#pictureBoxLink").attr("href", $(this).attr("rel-url") );
            $("#pictureBoxImg").attr("src", $(this).attr("rel") );
        })
    }
    // Initial View
    Update();
}

function Update()
{
    alignCenterOfMaxWidthDIV();
    autoHeightOfFixedLinkDIV();
}

function alignCenterOfMaxWidthDIV()
{
    var updateWidthDIV = $("div[maxWidth]");
    for( var i = 0 ; i < updateWidthDIV.length ; i++ )
    {
        var divName = "#" + updateWidthDIV[i].id;
        var maxWidth = $(divName).attr("maxWidth");
        if( maxWidth != undefined )
        {
            $(divName).css({
                "width": function() {
                    if($(window).width() < maxWidth)
                        return $(window).width();
                    return maxWidth;
                },
                "margin-left": function() {
                    if($(window).width() < maxWidth)
                        return 0;
                    return ($(window).width() - maxWidth) / 2;
                },
                "margin-right": function() {
                    if($(window).width() < maxWidth)
                        return 0;
                    return ($(window).width() - maxWidth) / 2;
                }
            })
        }
    }
}

function autoHeightOfFixedLinkDIV()
{
    if( $("#fixedLink").length > 0 )
    {
        $("#fixedLinkSpace").css({
            "height": $("#fixedLink").height(),
            "clear": "both"
        })
    }
}