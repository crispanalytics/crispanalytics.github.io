"use strict";
! function() {
    var n = !1,
        e = document.getElementById("navbar-toggle"),
        t = document.getElementById("nav-menu"),
        a = "in";
    e.addEventListener("click", function() {
        n ? (t.className = t.className.split(" ").filter(function(n) {
            return n !== a
        }).join(" "), n = !1) : (t.className = [t.className, a].join(" "), n = !0)
    })
}(),
function() {
    $('.carousel').carousel({
        interval: 1000 * 5
    });
    var n = document.getElementById("navbar"),
        e = "faded-out";

    function t() {
        var t = window.scrollY;
        t < 20 && -1 === n.className.indexOf(e) ? n.className = [n.className, e].join(" ") : t >= 20 && n.className.indexOf(e) > -1 && (n.className = n.className.split(" ").filter(a).join(" "))
    }

    function a(n) {
        return n !== e
    }
    window.addEventListener ? window.addEventListener("scroll", t) : window.attachEvent && window.attachEvent("scroll", t), t();


    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
                    "value_area": 1282.7296486924183
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": false
    });
    var count_particles, stats, update;
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    var myform = $("form#myform");
    myform.submit(function(event){
        if(document.getElementById('message_html').value.length) {
            event.preventDefault();

            // Change to your service ID, or keep using the default service
            var service_id = "default_service";
            var template_id = "template_QY87AcYu";

            myform.find("button").text("Sending...");
            emailjs.sendForm(service_id,template_id,"myform")
                .then(function(){
                    swal({
                        title: "Thank you",
                        text: "We will contact you soon.",
                        icon: "success",
                    });
                    myform.find("button").text("Send");
                    $("#message_html").text("");
                }, function(err) {
                    swal({
                        title: "Oh ho!!!",
                        text: "Something went wrong. Please try again.",
                        icon: "error",
                    });
                    myform.find("button").text("Send");
                });
            return false;
        }
    });
}();
