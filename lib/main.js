
require("sdk/tabs").on("ready", logURL);
var tabs=require("sdk/tabs");
var array=["www.facebook.com","www.quora.com"];
function logURL(tab)
{
    var flag=false;
    for(var i=0; i<array.length; i++) {
        if((tab.url).indexOf(array[i])>-1) {
            flag=true;
        }
    }
    if(flag===true)
    	tab.url="www.google.com";
}
