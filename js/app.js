/*
* Lets have some fun !! :-)
*/





var IOIndex;
((IOIndex, pramas) => {
    pramas = pramas || {};
    let choosePic = Math.round(Math.random() * 1), state = false,
        reactJsScreen = (target) => {
            class MenuItem extends React.Component {
                render() {
                    return this.init();
                }
                init() {

                    var names = ['David', 'Grant', 'U.I Engineer'];
                    var menu = this.renderMenu({ names });


                    return menu;
                }

                renderMenu(props) {
                    return <section className="logo">
                        <p className="title">{props.names[0]}
                            <span className="side-sub">{props.names[1]}</span>
                        </p>
                        <p className="sub-title">{props.names[2]}</p>
                    </section>

                }
            }
            const element = <MenuItem />;
            ReactDOM.render(
                element,
                document.getElementById(target)
            );
        },
        threeJSSceen = (target) => {
            let scene = new THREE.Scene(),
                renderer = new THREE.WebGLRenderer(),
                camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, (100000)),
                creator = {
                    elementsArray: new Array(),
                    colors: {
                        white: 0xffffff,
                        black: 0x000000,
                        offBlack: 0x4f4f4f,
                        blue: 0x0000ff,
                        green: 0x00ff00,
                        yellow: 0xffff00,
                        teal: 0x008080,
                        random: THREE.VertexColors
                    }
                },
                ocean,
                geometry,
                clock = new THREE.Clock();
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.rotation.set(0, .145, 0)
            camera.position.set(408, 229, 1500);
            scene.background = new THREE.Color(creator.colors.white);
            scene.add(new THREE.AmbientLight(creator.colors.white));
            scene.fog = new THREE.FogExp2(creator.colors.white, 0.00047);
            function checkWindowSize() {
                return window.innerWidth > 1024;
            }

            function makeOcean(w, h) {
                var worldWidth = 256, worldDepth = 256, worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;
                geometry = new THREE.PlaneGeometry(w, h, worldWidth - 1, worldDepth - 1);
                geometry.rotateX(-Math.PI / 3.14);
                var texture = new THREE.TextureLoader().load("images/water.jpg");
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(5, 5);
                var material = new THREE.MeshStandardMaterial({
                    color: creator.colors.blue,
                    roughness: 1,
                    metalness: 0,
                    map: texture,
                    metalMap: texture,
                    side: THREE.DoubleSide

                });
                var meshOc = new THREE.Mesh(geometry, material);
                meshOc.position.y = 120;
                creator.elementsArray.push({ name: 'ocean', geometry: meshOc, animated: false });
                meshOc.name = 'ocean';
                scene.add(meshOc);
                ocean = true;
            }
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                checkWindowSize();
            }
            function render() {

                if (ocean && checkWindowSize() && state) {
                    var delta = clock.getDelta(), time = clock.getElapsedTime() * 9.18;
                    for (var i = 0, l = geometry.vertices.length; i < l; i++) {
                        geometry.vertices[i].y = 18 * Math.sin(i / 90 + (time + i) / 9);
                        // geometry.vertices[i].z = 27 * Math.sin(i / 81 + (time + i) / 9);
                    }
                    geometry.verticesNeedUpdate = true;
                }
                renderer.render(scene, camera);
                requestAnimationFrame(render);

            }
            makeOcean(20000, 20000);
            // addBuld();
            requestAnimationFrame(render);
            checkWindowSize();
            window.addEventListener('resize', onWindowResize, false);
            target.append(renderer.domElement);
        },
        init = () => {
            let target = {
                sandBox: $('.sandBox'),
                mainStyles: $('.mainStyles'),
                mainImage: $('.main-image'),
                playBtn: '.js-playBtn',
                header: 'headerContainer'
            }
                
            target.mainStyles.addClass('loaded');
            if (choosePic == 1) target.mainStyles.toggleClass('layout_2');
            target.mainImage.on("click", "", (e) => {
                target.mainStyles.toggleClass('layout_2');
            });
            $(target.playBtn).on('click', 'input', (event) => {
               state = !state;
            })
            reactJsScreen(target.header);
           threeJSSceen(target.sandBox);
        };
    IOIndex.app = {
        init: () => {
            $(document).ready(() => { init(); });
        }
    }
    let appScope = IOIndex.app;
    appScope.init();
})(IOIndex || (IOIndex = {}));
