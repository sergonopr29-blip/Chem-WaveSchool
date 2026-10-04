// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Application form
const form = document.getElementById('applicationForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation is handled by HTML required attributes
    // Here we just show success message (no backend)

    form.hidden = true;
    if (formSuccess) {
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Optional: you can later connect this form to Formspree, Google Forms,
    // Telegram bot or any backend by collecting the data here:
    //
    // const data = {
    //   studentName: form.studentName.value,
    //   grade: form.grade.value,
    //   parentName: form.parentName.value,
    //   phone: form.phone.value,
    //   email: form.email.value,
    //   goal: form.goal.value,
    //   message: form.message.value
    // };
    // console.log(data);
  });
}
