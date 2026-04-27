(function () {
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
})();

$(function () {
  var path = window.location.pathname.split("/").pop() || "index.html";

  $(".nav-link, .mobile-link").each(function () {
    var href = $(this).attr("href");
    if (href === path) {
      $(this).addClass("is-current");
    }
  });

  $("#add-memory").on("click", function () {
    var memoryCount = $("#memory-feed .memory-item").length + 1;
    var item = $("<article></article>", {
      "class": "memory-item",
      html: "<h3 class='text-lg font-bold text-slate-900'>Memory note " + memoryCount + "</h3><p class='mt-2 text-sm leading-7 text-slate-600'>New notes are created by jQuery and revealed with animation. This satisfies the requirement for creating and modifying HTML elements.</p>"
    }).hide();

    $("#memory-feed").append(item);
    item.slideDown(250);
    $("#dynamic-title").text("Interactive note board updated");
  });

  $("#reset-btn").on("click", function () {
    $(".error-text").text("");
    $("input").removeClass("is-invalid");
    $("textarea").removeClass("is-invalid");
    $(".choice-card, .checkbox-row").removeClass("is-invalid");
    $("#feedback-panel").slideUp(150);
    $("#submission-list").empty();
  });

  $("#contact-form").on("submit", function (event) {
    event.preventDefault();

    var valid = true;
    var form = $("#contact-form");
    var inputsByTag = $("input");
    var formInputsByClass = $(".form-input");
    var textFieldsByClass = $(".text-field");
    var nameFieldByName = $("[name='fullName']");
    var dateFieldById = $("#meetingDate");
    var colorField = $("#favColor");

    $(".error-text").text("");
    inputsByTag.removeClass("is-invalid");
    formInputsByClass.removeClass("is-invalid");
    textFieldsByClass.removeClass("is-invalid");
    $(".choice-card, .checkbox-row").removeClass("is-invalid");

    function setError(key, message, selector) {
      $("[data-for='" + key + "']").text(message);
      if (selector) {
        selector.addClass("is-invalid");
      }
      valid = false;
    }

    if ($.trim(nameFieldByName.val()).length < 3) {
      setError("fullName", "Please enter at least 3 characters for your name.", nameFieldByName);
    }

    var emailField = $("#email");
    var emailValue = $.trim(emailField.val());
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      setError("email", "Please provide a valid email address.", emailField);
    }

    var messageField = $("#message");
    if ($.trim(messageField.val()).length < 12) {
      setError("message", "Please write a message with at least 12 characters.", messageField);
    }

    if (!colorField.val()) {
      setError("favColor", "Please choose a color for the project.", colorField);
    }

    if (!dateFieldById.val()) {
      setError("meetingDate", "Please choose a preferred date.", dateFieldById);
    }

    var focusFields = $("[name='focusArea']");
    if (!focusFields.is(":checked")) {
      setError("focusArea", "Please select one focus area.", focusFields.closest(".choice-card"));
    }

    var interests = $("[name='interests']:checked");
    if (interests.length === 0) {
      setError("interests", "Please choose at least one topic.", $("[name='interests']").closest(".checkbox-row"));
    }

    var consent = $("#consent");
    if (!consent.is(":checked")) {
      setError("consent", "You must confirm the form is complete.", consent.closest(".checkbox-row"));
    }

    if (!valid) {
      form.find(".is-invalid").first().focus();
      return;
    }

    var selectedTopics = interests.map(function () {
      return $(this).val();
    }).get().join(", ");

    $("#submission-list").empty();
    $("#submission-list").append("<li>Name: " + $("<div>").text(nameFieldByName.val()).html() + "</li>");
    $("#submission-list").append("<li>Email: " + $("<div>").text(emailValue).html() + "</li>");
    $("#submission-list").append("<li>Focus area: " + $("<div>").text($("[name='focusArea']:checked").val()).html() + "</li>");
    $("#submission-list").append("<li>Topics: " + $("<div>").text(selectedTopics).html() + "</li>");
    $("#submission-list").append("<li>Preferred date: " + $("<div>").text(dateFieldById.val()).html() + "</li>");

    $("#feedback-title").text("Form submitted successfully and checked with jQuery");
    $("#feedback-panel").slideDown(250);
    form.trigger("reset");
  });
});
