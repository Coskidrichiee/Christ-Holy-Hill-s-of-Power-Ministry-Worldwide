document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent.");
        contactForm.reset();
    });
});

// for hamburger
function toggleMenu() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
}

//scroll to top button
    document.addEventListener('DOMContentLoaded', function() {
        const goTopBtn = document.getElementById('goTopBtn');
      
        // Show button when scrolled down 100px from the top
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                goTopBtn.style.display = 'block';
            } else {
                goTopBtn.style.display = 'none';
            }
        };
      
        // Smooth scroll to top when button is clicked
        goTopBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
      });

    //   sermon session

    document.addEventListener("DOMContentLoaded", function () {
        loadComments();
    });
    
    function addComment() {
        let commentInput = document.getElementById("commentInput");
        let commentText = commentInput.value.trim();
    
        if (commentText === "") {
            alert("Please enter a comment before posting.");
            return;
        }
    
        let commentsSection = document.getElementById("comments-section");
    
        // Create a comment element
        let commentElement = document.createElement("p");
        commentElement.textContent = commentText;
    
        // Append to the comment section
        commentsSection.appendChild(commentElement);
    
        // Save comment to local storage
        saveComment(commentText);
    
        // Clear input field
        commentInput.value = "";
    }
    
    function saveComment(comment) {
        let comments = JSON.parse(localStorage.getItem("sermonComments")) || [];
        comments.push(comment);
        localStorage.setItem("sermonComments", JSON.stringify(comments));
    }
    
    function loadComments() {
        let comments = JSON.parse(localStorage.getItem("sermonComments")) || [];
        let commentsSection = document.getElementById("comments-section");
    
        comments.forEach(comment => {
            let commentElement = document.createElement("p");
            commentElement.textContent = comment;
            commentsSection.appendChild(commentElement);
        });
    }
    
