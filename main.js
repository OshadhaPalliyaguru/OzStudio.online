
function openWhatsApp(serviceName) {
  const phoneNumber = '94714695753'; // replace with your number
  const message = `Hi, ${serviceName}?`;
  const encodedMessage = encodeURIComponent(message);

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, '_blank');
}


function isValidEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!isValidEmail(email)) {
    Swal.fire({
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
      icon: 'warning',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK'
    });
    return;
  }

  var params = {
    name: name,
    email: email,
    user_message: message
  };

  emailjs.send("service_nkpzk3o", "template_fvgi4av", params)
    .then(function (res) {
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent.',
        icon: 'success',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
      clearForm(); // 🧼 Clear the form
    }, function (error) {
      Swal.fire({
        title: 'Oops...',
        text: 'Something went wrong!',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
    });
}




    /*==================== Privacy Policy====================*/

    function showPrivacyPolicy() {
    Swal.fire({
      title: '<img src="img/logo/oz studios main logo.png" style="width:100px;margin-bottom:5px;">',
      html: `
        <h3 style="margin-bottom:10px; ">Privacy Policy</h3>
        <p style="text-align:left; max-height:300px; overflow-y:auto;">
          We collect basic information such as name, email, and contact details when users interact with our services. 
          This data is used strictly to enhance user experience and is never sold or shared with third parties. 
          All data is securely stored and you may request deletion at any time. 
          For questions, 
        </p>
        <p>contact us at:</p> <h4>oz.dev.info@gmail.com</h4>
      `,
      confirmButtonText: 'OK',
      confirmButtonColor: '#d33',
      width: 600
    });
  }


      /*==================== Terms and COnditions ====================*/


  function showTerms() {
    Swal.fire({
      title: '<img src="img/logo/oz studios main logo.png" style="width:100px;margin-bottom:5px;">',
      html: `
        <h3 style="margin-bottom:10px;">Terms of Service</h3>
        <p style="text-align:left; max-height:300px; overflow-y:auto;">
          By using our services, you agree not to misuse or violate our platform. 
          All content, design, and development work is protected and cannot be copied or reused without permission. 
          We reserve the right to update terms at any time. 
          Continued use of our services means you accept the latest terms.
        </p>
      `,
      confirmButtonText: 'OK',
      confirmButtonColor: '#d33',
      width: 600
    });
  }