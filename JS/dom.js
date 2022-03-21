$(document).ready(function() {
    $('select').awselect()
});

$(document).ready(function() {
    $('#myblue_dropdown').awselect({
        background: "#0f37a9", //the dark blue background
        active_background: "rgb(149, 211, 255)", // the light blue background
        placeholder_color: "#97bce0", // the light blue placeholder color
        placeholder_active_color: "#0f37a9", // the dark blue placeholder color
        option_color: "#405463", // the option colors
        vertical_padding: "15px", //top and bottom padding
        horizontal_padding: "20px", // left and right padding,
        immersive: false // immersive option, demonstrated at the next example
    });
});