function NotifyHTML(message) {
    // Handle the message here, for example, check if it's "quit" and respond accordingly
    if (message === "quit") {
        // Your HTML response to Unity's quit event
        //console.log("Unity requested quit");
        parent.postMessage("quit", "*");
    }
}