 document.getElementById("contactForm").addEventListener("submit", function () {
    const successMsg = document.querySelector('.submit-success');
    successMsg.classList.remove("hidden");
    successMsg.classList.add("show");

    setTimeout(() => {
      successMsg.classList.remove("show");
      successMsg.classList.add("hidden");
    }, 4000);
  });