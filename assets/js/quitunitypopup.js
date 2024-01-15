// Add an event listener to listen for messages
window.addEventListener("message", function(event) {
    // Check if the origin is trusted (optional, for added security)
    //if (event.origin !== "https://your-unity-webgl-domain.com") return;

    // Access the received message data
    var receivedData = event.data;

    // Handle the received data
    //console.log("Received message:", receivedData);

    // Perform actions based on the received data, e.g., close the lightbox
    if (receivedData === "quit") {
        var $popup = $(".poptrox-popup");
        //console.log($popup);
        // Check if the popup element exists before triggering the event
        if ($popup.length > 0) {
            $popup.trigger("poptrox_close");
        }
    }
});

/*
// Attach the handleKeyDown function to the document's keydown event
$(document).on('keydown', handleKeyDown);
*/