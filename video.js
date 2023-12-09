
document.addEventListener("DOMContentLoaded", function () {
    // Use a regular variable instead of a private field
    const videoContainer = document.getElementById("videoContainer");

    // Replace these video IDs with your actual video IDs
    const videoIds = ["womd8BFIbDY", "PlpM2LJWu-s", "YJTKlAvbDo4"];

    // Loop through video IDs and create video iframes
    videoIds.forEach(videoId => {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = "560";
        iframe.height = "315";
        iframe.setAttribute("allowfullscreen", true);
        videoContainer.appendChild(iframe);
    });
});
