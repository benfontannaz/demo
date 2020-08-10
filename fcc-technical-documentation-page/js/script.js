// coded by @ChaituVR 

const projectName = 'technical-docs-page';
localStorage.setItem('example_project', 'Technical Docs Page');



// Prism languages highlightAll
// if(document.readyState !== "loading") {
//     setTimeout(_.highlightAll, 0);
// }
// else {
//     document.addEventListener('DOMContentLoaded', _.highlightAll);
// }


// Step 3 - Instilize the plugin by #id selector

  VANTA.BIRDS({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x5172d,
    color1: 0xff6c6c,
    colorMode: "variance",
    birdSize: 0.90,
    speedLimit: 4.00,
    separation: 33.00,
    alignment: 40.00,
    cohesion: 25.00,
    quantity: 4.00
  })
