// Immediately Invoked Function Expression (IIFE)

(function hrtc() {                // Named IIFE
    console.log(`TaraDevi`);
})();

((distt) => {
    console.log(`Rohru Town falls under ${distt} District`)
})("Shimla")

// Pollution of Global Scope sometime causes problem, so to remove the 
// pollution or any other variable or declaration, we uses IIFE.