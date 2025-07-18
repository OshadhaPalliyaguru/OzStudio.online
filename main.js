

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)





//Service Section Icons Chage Effect
 const iconLoops = {
    'graphic-icon': [
      'img/icons/photoshop.png', 'img/icons/illustrator.png', 'img/icons/indesign.png', 'img/icons/lightroom.png', 'img/icons/figma.png', 'img/icons/xd.png', 'icons/canva.png', 'icons/coreldraw.png','icons/premiere.png',  'icons/aftereffects.png'
    ],
    'webdev-icon': [
      'icons/html.png', 'icons/css.png', 'icons/js.png', 'icons/php.png', 'icons/angular.png', 'icons/react.png',  'icons/mysql.png'
    ],
    'typeset-icon': [
      'icons/indesign.png', 'icons/illustrator.png', 'icons/excel.png', 'icons/powerpoint.png', 'icons/word.png'
    ],
    'video-icon': [
      'icons/premiere.png', 'icons/capcut.png', 'icons/aftereffects.png'
    ],
    'photo-icon': [
      'icons/photoshop.png', 'icons/lightroom.png'
    ],

    'all-icon': [
      'icons/photoshop.png', 'icons/lightroom.png' , 'icons/photoshop.png', 'icons/illustrator.png', 'icons/indesign.png', 'icons/lightroom.png', 'icons/figma.png', 'icons/xd.png', 'icons/canva.png', 'icons/coreldraw.png','icons/premiere.png',  'icons/aftereffects.png','icons/html.png', 'icons/css.png', 'icons/js.png', 'icons/php.png', 'icons/angular.png', 'icons/react.png',  'icons/mysql.png' 
    ]
  };



  for (let key in iconLoops) {
  let index = 0;
  const element = document.getElementById(key);

  if (!element) {
    console.warn(`Element with ID '${key}' not found.`);
    continue; // Skip this key if no element is found
  }

  element.style.backgroundImage = `url(${iconLoops[key][index]})`;

  setInterval(() => {
    element.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % iconLoops[key].length;
      element.style.backgroundImage = `url(${iconLoops[key][index]})`;
      element.style.opacity = 1;
    }, 500);
  }, 1500);
}



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
      title: '<img src="logos/oz studios logo4.png" style="width:100px;margin-bottom:5px;">',
      html: `
        <h3 style="margin-bottom:10px;">Privacy Policy</h3>
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
      title: '<img src="logos/oz studios logo4.png" style="width:100px;margin-bottom:5px;">',
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