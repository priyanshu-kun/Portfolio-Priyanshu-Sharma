window.addEventListener("load", () => {

    // get the canvas variables and store in custom vars
    let canvas = document.querySelector("#sky");
    let ctx = canvas.getContext("2d");

    //set canvas dimensions to window height and width
    let Wid = window.innerWidth;
    let Heig = window.innerHeight;

    // set canvas to all window space
    canvas.width = Wid;
    canvas.height = Heig;

    // generate the snow flakes and apply attributes

    let maximumFlakes = 200// maximum number of snow flakes
    let flakes = [];

    // loop through the empty flakes and apply attributes mean: width - height - density - opacity


    // this loop runs maximum times of flakes in that case we have 100 flakes
    for (let i = 0; i < maximumFlakes; i++) {


        // Here we adding new flake in "flakes" array
        flakes.push({

            // this propery randomely generates a position in X axis of canvas screen aka left to right
            X__axis: Math.random() * Wid,

            // this propery randomely generates a position in Y axis of canvas screen aka top to bottom
            Y__axis: Math.random() * Heig,

            // this porperty gives us radius for each snow flakes between (min 2px and max 7px). 
            radius: Math.random() * 5 + 2,

            // this property gives us density for each flake mean it determin the droping speed of snow flake - if flake density is small so it will fall down slowely else if it's density large so it will fall down quickely 
            density: Math.random() * 1
        })
    }


    // draw flakes onto canvas
    const drawFlakes = () => {

        // lets clear the screen with (clearRect function) it will earsed every privous flakes on screen - It start to clear screen top left corner because I set  0,0 parameter and clear to whole Width and Height
        ctx.clearRect(0, 0, Wid, Heig);

        // fill style set color of snow flakes
        ctx.fillStyle = "#ff9100";

        // next function tell to javascript to look I'm begin to start draw a shape or path of canvas.
        ctx.beginPath();


        // loop through all flakes
        for (let i = 0; i < maximumFlakes; i++) {

            // get ith flake into the array
            let getFlake = flakes[i];

            // move to pen in given position to give that function  X and Y cordinates
            ctx.moveTo(getFlake.X__axis, getFlake.Y__axis);

            // Now we draw an arch starting from (X axis and Y axis) and specify to radius of flake (getFlake.radius) how much bigger the flake and last thing ("0" start to zero and create a circle 360deg using <Math.PI*2> ) finally last parameter is ("true" mean draw circle in clockwise) - Now basically what we do here we draw a full circle.
            ctx.arc(getFlake.X__axis, getFlake.Y__axis, getFlake.radius, 0, Math.PI * 2, true);

            // now fill the circle with my orange color
            ctx.fill();

            // Here we add animation in flakes
            // moveflakes();
        }
    }

    // animate the flakes
    let angle = 0;
    const moveflakes = () => {

        // this angle variable controls the left to right movement of the flake
        angle += 0.1;

        // loop through all flakes
        for (let i = 0; i < maximumFlakes; i++) {

            // get ith flake into the array
            let getFlake = flakes[i];

            //  update X and Y cordinates

            // Here we add the Y cordinate Math.pow() that basically mean squre the density - this line of code help to snow flake go downward
            getFlake.Y__axis += Math.pow(getFlake.density, 2) + 1;

            //  Setting X cordinate of the flake mean each time when we call the function each time the flake move we increment the angle variable - this gives us wavey effect it looks like snow flake fly in wind (and one thing in the last of function I will add a number that number determin how much we givs us weavy effect)

            getFlake.X__axis += Math.sin(angle) * 2;

            // if the snow flake reaches the bottom, send a new one to the top - If we don't do that all snow flake comes down of 1 time. we add new one to the top


            // if snow flake comes down then we add a new object much like that we add new object on top of our code. It randomely generate a flake top of the screen and randomely in X axis
            if (getFlake.Y__axis > Heig) {
                flakes[i] = { X__axis: Math.random() * Wid, Y__axis: 0, radius: getFlake.radius, density: getFlake.density };
            }

        }


    }

    // call drawflake function in every 25 ms 
    // setInterval(drawFlakes, 100);
    drawFlakes()
}) 