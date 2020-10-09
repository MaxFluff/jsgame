let width = 640;
let height = 480;
let fps = 60;
let step = 1 / fps;
let skySpeed = 0.0005;
let hillsSpeed = 0.001;
let woodsSpeed = 0.0015;
let skyOffset = 0;
let hillsOffset = 0;
let woodsOffset = 0;
let canvas = null;
let ctx = null;
let segments = [];
let cars = [];
let background = null;
let sprites = null;
let resolution = width / height; // scaling factor to provide resolution independence (computed)
let roadWidth = 2000; // actually half the roads width, easier math if the road spans from -roadWidth to +roadWidth
let segmentLength = 200; // length of a single segment
let rumbleLength = 3; // number of segments per red/white rumble strip
let trackLength = null; // z length of entire track (computed)
let lanes = 3; // number of lanes
let fieldOfView = 100; // angle (degrees) for field of view
let cameraHeight = 1200; // z height of camera
let cameraDepth = 1 / Math.tan(((fieldOfView / 2) * Math.PI) / 180); // z distance camera is from screen (computed)
let drawDistance = 300; // number of segments to draw
let playerX = 0; // player x offset from center of road (-1 to 1 to stay independent of roadWidth)
let playerZ = cameraHeight * cameraDepth; // player relative z distance from camera (computed)
let centrifugal = 0.3; // centrifugal force multiplier when going around curves
let fogDensity = 4; // exponential fog density
let position = 0; // current camera Z position (add playerZ to get player's absolute Z position)
let speed = 0; // current speed
let maxSpeed = segmentLength / step; // top speed (ensure we can't move more than 1 segment in a single frame to make collision detection easier)
let maxSpeedKMH = 235;
let normalizedSpeed = 0.0;
let accel = maxSpeed / 5; // acceleration rate - tuned until it 'felt' right
let breaking = -maxSpeed; // deceleration rate when braking
let decel = -maxSpeed / 5; // 'natural' deceleration rate when neither accelerating, nor braking
let offRoadDecel = -maxSpeed / 2; // off road deceleration is somewhere in between
let offRoadLimit = maxSpeed / 4; // limit when off road deceleration no longer applies (e.g. you can always go at least this speed even when off road)
let totalCars = 200; // total number of cars on the road
let keyLeft,
 keyRight,
 keyFaster,
 keySlower = false;
let tire = 0;
let brake = 0;
let hang = 0;
let hangDelay = 50;
let hangTimer = 0;
let bikeSpriteSelector = 6;

window.addEventListener(
    'load',
    () => {
      initialize();
    },
    false
   );
   const initialize = async () => {
   };
   const run = () => {
   };
   const update = (dt) => {
   };
   const render = () => {
   };