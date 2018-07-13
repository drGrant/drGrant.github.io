/*
* 
Lets have some fun............ :-)
*/

var IOIndex;
((IOIndex, pramas) => {
    pramas = pramas || {};
    let createElement = (element) => {
        var createdElement = $("<" + element + "></" + element + ">");
        return createdElement;
    },
    init = ()=>{
        var target = {
            sandbox: $("#sandbox"),
            mainStyles: $('.mainStyles'),
            mainImage:$('.main-image')
        },
        choosePic = Math.round(Math.random()*1);
       if(choosePic==1) target.mainStyles.toggleClass('layout_2');
        target.mainImage.on("click", "", (e) => {
            target.mainStyles.toggleClass('layout_2');
        });

    } 
    IOIndex.app = {
        init: () => {
            $(document).ready(() => { init(); })
        }
    }
    var appScope = IOIndex.app;
    appScope.init();
    
})(IOIndex || (IOIndex = {}));
