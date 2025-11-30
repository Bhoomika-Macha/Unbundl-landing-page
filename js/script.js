const IMAGES = {
    heroDoctor: "https://images.pexels.com/photos/8460345/pexels-photo-8460345.jpeg?auto=compress&cs=tinysrgb&w=800",

    clinicImage: "https://images.pexels.com/photos/3845765/pexels-photo-3845765.jpeg?auto=compress&cs=tinysrgb&w=1200",

    rct1: "https://images.pexels.com/photos/3812751/pexels-photo-3812751.jpeg?auto=compress&cs=tinysrgb&w=800",
    rct2: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800",
    rct3: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",

    doctorRohan: "https://images.pexels.com/photos/8460345/pexels-photo-8460345.jpeg?auto=compress&cs=tinysrgb&w=800",
    doctorAisha: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800",

    reviewNeeta: "https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg?auto=compress&cs=tinysrgb&w=800",
    reviewPriya: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
};


// Assign Images
document.getElementById("heroDoctor").src = IMAGES.heroDoctor;
document.getElementById("clinicImage").src = IMAGES.clinicImage;

document.getElementById("rct1").src = IMAGES.rct1;
document.getElementById("rct2").src = IMAGES.rct2;
document.getElementById("rct3").src = IMAGES.rct3;

document.getElementById("doctorRohan").src = IMAGES.doctorRohan;
document.getElementById("doctorAisha").src = IMAGES.doctorAisha;

document.getElementById("reviewNeeta").src = IMAGES.reviewNeeta;
document.getElementById("reviewPriya").src = IMAGES.reviewPriya;


// CAPTCHA
function generateCaptcha() {
    let value = Math.floor(1000 + Math.random() * 9000);
    document.querySelectorAll(".captcha-value").forEach(el => el.textContent = value);
}
generateCaptcha();

document.querySelectorAll(".captcha-value").forEach(el => {
    el.addEventListener("click", generateCaptcha);
});

// FORM VALIDATION
document.querySelectorAll(".consult-form").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();

        let inputs = form.querySelectorAll("input[type='text']");
        let checkbox = form.querySelector("input[type='checkbox']");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                valid = false;
            } else {
                input.style.border = "2px solid #FFCC9A";
            }
        });

        if (!checkbox.checked) {
            alert("Please accept Terms & Privacy Policy.");
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
            form.reset();
            generateCaptcha();
        }
    });
});
