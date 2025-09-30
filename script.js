$(document).ready(function() {
  $("#contactForm").on("submit", function(e) {
    e.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name && email) {
      $("#formResponse").text("Thanks " + name + "! Your message has been sent.");
      $(this).trigger("reset");
    } else {
      $("#formResponse").text("Please fill in required fields.");
    }
  });
});
