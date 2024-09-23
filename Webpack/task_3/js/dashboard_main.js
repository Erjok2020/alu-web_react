import $ from "jquery";
import _ from "lodash";
import "./modules/body/body.js";
import "./modules/footer/footer.js";
import "./modules/header/header.js";

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count"></p>');
$("body").append("<p>Copyright - Holberton School</p>");

let count = 0;

function updateCounter() {
  count++;
  $("#count").text(`Button clicked ${count} times`);
}

$("button").on("click", updateCounter);
