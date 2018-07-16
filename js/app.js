/*
* Lets have some fun !! :-)
*/

var IOIndex;
((IOIndex, pramas) => {
    pramas = pramas || {};
    let choosePic = Math.round(Math.random() * 1),
        createElement = (element) => {
            let createdElement = $("<" + element + "></" + element + ">");
            return createdElement;
        },
        init = () => {
            let target = {
                sandbox: $("#sandbox"),
                mainStyles: $('.mainStyles'),
                mainImage: $('.main-image')
                }
            if (choosePic == 1) target.mainStyles.toggleClass('layout_2');
            target.mainImage.on("click", "", (e) => {
                target.mainStyles.toggleClass('layout_2');
            });
        };
    IOIndex.app = {
        init: () => {
            $(document).ready(() => { init(); });
        }
    }
    let appScope = IOIndex.app;
    appScope.init();
})(IOIndex || (IOIndex = {}));
