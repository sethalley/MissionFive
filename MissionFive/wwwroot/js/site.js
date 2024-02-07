// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(document).ready(function () {
    $("#btnSubmit").click(function () {
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());
        let total = hours * rate;

        let outputDiv = $("#output");
        outputDiv.empty(); // Clear previous content

        let resultText = $("<p>").text("Total Price: $" + total.toFixed(2));
        outputDiv.append(resultText);
    });
});
