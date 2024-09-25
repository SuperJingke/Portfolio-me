jQuery(window).on('load', function() {
	"use strict";
    
    
    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");   
    
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 700 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);
        
    });
    
    
    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated-from-right", { 
        duration: 600,
        delay: 0,
        origin: "right",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
    
    
    // AJAX CONTACT FORM SUBMIT
    // $("#contact-form").submit(function(e) {

    //     e.preventDefault();
    //     var postdata = $(this).serialize();
        
    //     $.ajax({

    //         type: "POST",
    //         url: "./public/php/contact.php",
    //         data: postdata,
    //         dataType: "json",
    //         success: function(json) {

    //             $("#contact-form input, #contact-form textarea").removeClass("error");

    //             setTimeout(function(){

    //                 if (json.nameMessage !== "") {

    //                     $("#contact-form-name").addClass("error");

    //                 }

    //                 if (json.emailMessage !== "") {

    //                     $("#contact-form-email").addClass("error");

    //                 }

    //                 if (json.messageMessage !== "") {

    //                     $("#contact-form-message").addClass("error");

    //                 }

    //             }, 10);

    //             if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {

    //                 $("#contact-form.error input, #contact-form.error textarea").removeClass("error");
    //                 $('#contact-form').addClass("success");
    //                 $('#contact-form textarea, #contact-form input').attr("placeholder","");
    //                 $('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);

    //             }
    //             const successMessage = document.querySelector(".success-message");
    //             successMessage.style.display = "none";
    //             if (data.succesMessage) {
    //                 successMessage.innerText = data.succesMessage;
    //                 successMessage.style.display = "block"; // Show the success message
    //             }

    //         }

    //     });

    // });
    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contact-form");
    
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from submitting normally
    
            const formData = new FormData(contactForm); // Create a FormData object
    
            // Make an AJAX request using Fetch API
            fetch(contactForm.action, {
                method: "POST",
                body: formData
            })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                // Hide all messages first
                const successMessage = document.querySelector(".success-message");
                successMessage.style.display = "none";
                
                // Display validation error messages
                if (data.nameMessage === "x") {
                    alert("Please enter your name.");
                }
                if (data.emailMessage === "x") {
                    alert("Please enter a valid email address.");
                }
                if (data.messageMessage === "x") {
                    alert("Please enter your message.");
                }
    
                // Show the success message if submission was successful
                if (data.succesMessage) {
                    successMessage.innerText = data.succesMessage;
                    successMessage.style.display = "block"; // Show the success message
                }
            })
            .catch(error => {
                console.error("Error:", error); // Log any errors for debugging
                alert("There was an error submitting the form. Please try again later.");
            });
        });
    });
    

    
});