window.addEventListener('load', function(event) {
    Swal.fire({
        title: 'Estás invitado/a  <i class="fa-solid fa-heart fa-beat corazon fs-4 " ></i>',
        text: 'Casamiento de Caro & Facu ',
        focusConfirmButton: false,
        confirmButtonAriaLabel: 'Ver invitación',
        confirmButtonText:'Ver invitación',
        confirmButtonColor: '#c4a246',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
});

//temporizador
const getRemainTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainseconds = (`0` + Math.floor(remainTime % 60)).slice(-2),
    remainMinutos = (`0` + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = (`0` + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainseconds,
    remainMinutos,
    remainHours,
    remainDays,
  };
};
const countdown = (deadline, elem, finalMessage) => {
  let el = document.getElementById(elem);
  const timeUpdate = setInterval(() => {
    let t = getRemainTime(deadline);

    // el.innerHTML = `<p class="cuando__contenido__texto" id="temporizador">${t.remainDays}</p>`
    el.innerHTML = `
        <div class="temporizadorDatos">
        <p>${t.remainDays}</p>
        <p style="font-family: 'Quicksand', sans-serif;" class="fw-bold">Días</p>
      </div>
      <div class="temporizadorDatos">
        <p>${t.remainHours}</p>
        <p style="font-family: 'Quicksand', sans-serif;" class="fw-bold">Hs</p>
      </div>
      <div class="temporizadorDatos">
        <p>${t.remainMinutos}</p>
        <p style="font-family: 'Quicksand', sans-serif;" class="fw-bold">Min</p>
      </div>
      <div class="temporizadorDatosSeg">
        <p>${t.remainseconds}</p>
        <p style="font-family: 'Quicksand', sans-serif;" class="fw-bold">Seg</p>
      </div>`;

    console.log(t.remainDays);
    if (t.remainTime <= 1) {
      clearInterval(timeUpdate);
      el.innerHTML = finalMessage;
    }
    if (t.remainDays <= -2) {
      el.innerHTML = `<a data-aos="flip-left" style="color:wheat;" class="tag fw-bold" href="https://www.instagram.com/explore/tags/boda/bodaCaroyFacu"><i
            class="fa-solid fa-hashtag"></i>bodaluylucho</a>`;
    }
  }, 1000);
};
countdown(`May 19 2023 00:00:00 GMT-0300`, `temporizador`, `Es Hoy`);

// // Set the date we're counting down to
// let countDownDate = new Date("May 19, 2023 00:00:00").getTime();

// // Update the count down every 1 second
// let x = setInterval(function() {

//   // Get today's date and time
//   let now = new Date().getTime();

//   // Find the distance between now and the count down date
//   let distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="temporizador"
//   document.getElementById("temporizador").innerHTML = `
//   <p class="cuenta-regresiva__temporizador__dias" id="dias">${days}</p>
//   <p class="cuenta-regresiva__temporizador__separador">:</p>
//   <p class="cuenta-regresiva__temporizador__horas" id="horas">${hours}</p>
//   <p class="cuenta-regresiva__temporizador__separador">:</p>
//   <p class="cuenta-regresiva__temporizador__minutos" id="minutos">${minutes}</p>
//   <p class="cuenta-regresiva__temporizador__separador">:</p>
//   <p class="cuenta-regresiva__temporizador__segundos" id="segundos">${seconds}</p>`
// //   days + "d " + hours + "h "
// //   + minutes + "m " + seconds + "s "

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("temporizador").innerHTML = "Es Hoy";
//   }
// }, 1000);

// maquina de escibir

let writing = (str) => {
  let arrFromStr = str.split(``);
  let i = 0;
  var titulo = document.getElementById("NosCasamosNombres");

  let printStr = setInterval(function () {
    titulo.innerHTML += arrFromStr[i];
    i++;
    if (i === arrFromStr.length) {
      clearInterval(printStr);
      let writing2 = (str2) => {
        let arrFromStr2 = str2.split(``);
        let i = 0;
        var titulo2 = document.getElementById("NosCasamos");
        let printStr = setInterval(function () {
          titulo2.innerHTML += arrFromStr2[i];
          i++;
          if (i === arrFromStr2.length) {
            clearInterval(printStr);
          }
        }, 150);
      };
      writing2("¡Nos casamos!");
    }
  }, 200);
};

writing("Carolina & Facundo");

// mensaje Whatsap

let btnwts1 = document.getElementById("whatsap1");

btnwts1.addEventListener(`click`, enviarMsjNovia);

let btnwts2 = document.getElementById("whatsap2");

btnwts2.addEventListener("click", enviarMsjNovio);

function enviarMsjNovia() {
  let inputName = document.getElementById("nombreMsj").value;
  let inputAsistencia = document.getElementById("asistencia").value;
  let inputPedidos = document.getElementById("pedidosEspeciales").value;
  let url =
    "https://api.whatsapp.com/send/?phone=541130608727&text=*Nombre y apellido:* " +
    inputName +
    ", Confirmo que *" +
    inputAsistencia +
    "* al casamiento.💍" +
    "%0A *Pedidos Especiales:* " +
    inputPedidos +
    "." +
    " %0A Felicidades a los novios 👰🏻‍♀💗🤵🏻‍♂🎉 ";
  window.open(url);
}

function enviarMsjNovio() {
  let inputName = document.getElementById("nombreMsj").value;
  let inputAsistencia = document.getElementById("asistencia").value;
  let inputPedidos = document.getElementById("pedidosEspeciales").value;
  let url =
    "https://api.whatsapp.com/send/?phone=541165544693&text=*Nombre y apellido:* " +
    inputName +
    ", Confirmo que *" +
    inputAsistencia +
    "* al casamiento.💍" +
    "%0A *Pedidos Especiales:* " +
    inputPedidos +
    "." +
    " %0A Felicidades a los novios 👰🏻‍♀💗🤵🏻‍♂🎉 ";
  window.open(url);
}
