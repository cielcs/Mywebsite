import Particles from 'react-tsparticles';
// import '../App.css';
function ParticleBackground() {
    return (
        <div style={{ position: 'relative',pointerEvents: 'none' }}>
        <Particles
        className="particles-canvas"
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 4655.9802712700375
              }
            },
            color: {
              value: "#00ffff"
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.7,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5.00851810096455,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 256.5451584617312,
              color: "#ffffff",
              opacity: 0.1523236878366529,
              width: 2.084429412501566
            },
            move: {
              enable: true,
              speed: 1.0,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 481.02217211574595,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "grab"
              },
            //   onclick: {
            //     enable: true,
            //     mode: "push"
            //   },
              resize: true
            },
            // modes: {
            //   grab: {
            //     distance: 400,
            //     line_linked: {
            //       opacity: 1
            //     }
            //   },
            //   bubble: {
            //     distance: 400,
            //     size: 40,
            //     duration: 2,
            //     opacity: 8,
            //   },
            //   repulse: {
            //     distance: 200,
            //     duration: 0.4
            //   },
            //   push: {
            //     particles_nb: 4
            //   },
            //   remove: {
            //     particles_nb: 2
            //   }
            // }
          },
          retina_detect: true
        }}
        style={{
          filter: 'blur(3px)' // ぼかし効果を設定
        }}
      />
      </div>
    );
  }
  
  export default ParticleBackground;
