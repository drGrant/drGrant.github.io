/*
* 
Lets have some fun............ :-)
*/

var IOIndex;
((IOIndex, pramas) => {
    pramas = pramas || {};

    IOIndex.app = {
        createElement: (element) => {
            var createdElement = $("<" + element + "></" + element + ">");
            return createdElement;
        },
        init: () => {
            $(document).ready(() => {
                var target = {
                    sandbox: $("#sandbox"),
                    mainStyles: $('.mainStyles'),
                    mainImage:$('.main-image')
                },
                choosePic = Math.round(Math.random()*1);
               if(choosePic==1) target.mainStyles.toggleClass('layout_2');
                target.mainImage.on("click", "", (e) => {
                    target.mainStyles.toggleClass('layout_2');
                })
            })

        }
    }
    var scope = IOIndex.app;
    IOIndex.app.init();
    return {
        "start": ""
    }
})(IOIndex || (IOIndex = {}));
