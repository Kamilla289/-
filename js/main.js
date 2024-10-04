

/* Создаем префикс +7, даже если вводят 8 или 9 */
const prefixNumber = (str) => {
  /* если вводят семерку, добавляем ей скобку */
  if (str === "7") {
    return "7 (";
  }
  /* если вводят восьмерку, ставим вместо нее +7 ( */
  if (str === "8") {
    return "+7 (";
  }
  /* если пишут девятку, заменяем на +7 (9  */
  if (str === "9") {
    return "7 (9";
  }
  /* в других случаях просто 7 (  */
  return "7 (";
}; /* профикс в любом раскладе будет +7 () */

/* Ловим события ввода в любом поле */
document.addEventListener("input", (e) => {
  /* Проверяем, что это поле имеет класс phone-mask */
  if (e.target.classList.contains("phone-mask")) {
    /* поле с телефоном помещаем в переменную input */
    const input = e.target;
    /* вставляем плюс в начале номера */
    const value = input.value.replace(/\D+/g, "");
    /* длинна номера 11 символов */
    const numberLength = 11;

    /* Создаем переменную, куда будем записывать номер */
    let result;
    /* Если пользователь ввел 8... */
    if (input.value.includes("+8") || input.value[0] === "8") {
      /* Стираем восьмерку */
      result = "";
    } else {
      /* Оставляем плюсик в поле */
      result = "+";
    }

    /* Запускаем цикл, где переберем каждую цифру от 0 до 11 */
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          /* в самом начале ставим префикс +7 ( */
          result += prefixNumber(value[i]);
          continue;
        case 4:
          /* добавляем после "+7 (" круглую скобку ")" */
          result += ") ";
          break;
        case 7:
          /* дефис после 7 символа */
          result += "-";
          break;
        case 9:
          /* еще дефис  */
          result += "-";
          break;
        default:
          break;
      }
      /* на каждом шаге цикла добавляем новую цифру к номеру */
      result += value[i];
    }
    /* итог: номер в формате +7 (999) 123-45-67 */
    input.value = result;
  }
});






$('#svg_1').on('click', function(){
	$(this).toggleClass('filled');
});

$('#svg_2').on('click', function(){
	$(this).toggleClass('filled');
});

$('#svg_3').on('click', function(){
	$(this).toggleClass('filled');
});

$('#svg_4').on('click', function(){
	$(this).toggleClass('filled');
});


const button = document.querySelector('.button-catalog')
const menu = document.querySelector('.menu-burger')
const menuLinks = document.querySelectorAll('.menu-burger-link')

button.addEventListener('click', (e) => {
  button.classList.toggle('active')

  if (button.classList.contains('active')) {
    button.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-hidden', 'false')
    menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
  } else {
    button.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
    menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
  }
});



let currentModal;  // текущее модальное окно
let modalDialog;  // белое диалоговое окно
let alertModal = document.querySelector("#alert-modal"); // окно с благодарностью

const modalButtons = document.querySelectorAll("[data-toggle=modal]"); // переключатели модальных окон
modalButtons.forEach((button) => {
  button.addEventListener("click", (event) => { /* клик по переключателю */
    event.preventDefault();
    /* определяем текущее модульное окно */
    currentModal = document.querySelector(button.dataset.target); /* открываем текущее окно */
    currentModal.classList.toggle("is-open"); /* назначаем новое белое диалоговое окно */
    modalDialog = currentModal.querySelector(".modal-dialog"); /* отслеживаем клик по окну и пустым областям */
    currentModal.addEventListener("click", event => { /* если клик не в диалог, то закрой окно */
      if (!event.composedPath().includes(modalDialog)) { /* окрой окно */
        currentModal.classList.remove("is-open");
      }
    });
  });
});
/* ловим события нажатия по кнопке */
  document.addEventListener("keyup", (event) => {
    if (event.key == "Escape" && currentModal.classList.contains("is-open")) {
      currentModal.classList.toggle("is-open");
    }
  });




const forms = document.querySelectorAll(".form"); //Собираем все формы
forms.forEach((form) => {
  const validation = new JustValidate(form, {
      errorFieldCssClass: "is-invalid",
  });
  validation
  .addField('#check', [
    {
      rule: "required",
      errorMessage: "Галочка должна стоять",
    },
  ])
    .addField("[name=userphone]", [
      {
        rule: "required",
        errorMessage: "Укажите телефон",
      },
    ])
   
    .onSuccess((event) => {
      const thisForm = event.target; // наша форма 
      const formData = new FormData(thisForm); // данные из нашей формы
      const ajaxSend = (formData) => {
        fetch(thisForm.getAttribute("action"), {
          method: thisForm.getAttribute("method"),
          body: formData, 
        }).then((response) => {
          if (response.ok) {
            thisForm.reset();
            currentModal.classList.remove("is-open");
            alertModal.classList.add("is-open");
            currentModal = alertModal;
            modalDialog = currentModal.querySelector(".modal-dialog"); /* отслеживаем клик по окну и пустым областям */
            currentModal.addEventListener("click", event => { /* если клик не в диалог, то закрой окно */
                if (!event.composedPath().includes(modalDialog)) { /* окрой окно */
                  currentModal.classList.remove("is-open");
                }
              });
          } else {
            alert(response.statusText);
          }
        });
      };
      ajaxSend(formData);
    });
});


const forms2 = document.querySelectorAll(".form2"); //Собираем все формы
forms2.forEach((form) => {
  const validation = new JustValidate(form, {
      errorFieldCssClass: "is-invalid",
  });
  validation
  .addField('#check2', [
    {
      rule: "required",
      errorMessage: "Галочка должна стоять",
    },
  ])
    .addField("[name=userphone]", [
      {
        rule: "required",
        errorMessage: "Укажите телефон",
      },
    ])
    .onSuccess((event) => {
      const thisForm = event.target; // наша форма 
      const formData = new FormData(thisForm); // данные из нашей формы
      const ajaxSend = (formData) => {
        fetch(thisForm.getAttribute("action"), {
          method: thisForm.getAttribute("method"),
          body: formData, 
        }).then((response) => {
          if (response.ok) {
            thisForm.reset();
            alertModal.classList.add("is-open");
            currentModal = alertModal;
            modalDialog = currentModal.querySelector(".modal-dialog"); /* отслеживаем клик по окну и пустым областям */
            currentModal.addEventListener("click", event => { /* если клик не в диалог, то закрой окно */
                if (!event.composedPath().includes(modalDialog)) { /* окрой окно */
                  currentModal.classList.remove("is-open");
                }
              });
          } else {
            alert(response.statusText);
          }
        });
      };
      ajaxSend(formData);
    });
});



const forms3 = document.querySelectorAll(".form3"); //Собираем все формы
forms3.forEach((form) => {
  const validation = new JustValidate(form, {
      errorFieldCssClass: "is-invalid",
  });
  validation
    .addField("[name=useremail]", [
      {
        rule: 'required',
        errorMessage: "Укажите email",
      },
      {
        rule: 'email',
        errorMessage: "Неверный email",
      },
    ])
    .onSuccess((event) => {
      const thisForm = event.target; // наша форма 
      const formData = new FormData(thisForm); // данные из нашей формы
      const ajaxSend = (formData) => {
        fetch(thisForm.getAttribute("action"), {
          method: thisForm.getAttribute("method"),
          body: formData, 
        }).then((response) => {
          if (response.ok) {
            thisForm.reset();
            alertModal.classList.add("is-open");
            currentModal = alertModal;
            modalDialog = currentModal.querySelector(".modal-dialog"); /* отслеживаем клик по окну и пустым областям */
            currentModal.addEventListener("click", event => { /* если клик не в диалог, то закрой окно */
                if (!event.composedPath().includes(modalDialog)) { /* окрой окно */
                  currentModal.classList.remove("is-open");
                }
              });
          } else {
            alert(response.statusText);
          }
        });
      };
      ajaxSend(formData);
    });
});

