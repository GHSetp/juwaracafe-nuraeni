// Ganti nomor WA di sini (format: 628xxxxxxxxxx)
const WA_NUMBER = "62881025892982"; // TODO: Lyn ganti ke nomor WA sendiri

// Tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle nav di mobile
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});

// Fungsi umum buka WA
function openWa(type) {
  let text = "";

  switch (type) {
    case "coba":
      text = "Halo kak, saya tertarik coba Kopi Juwara Cafe. Boleh info varian dan harganya?";
      break;
    case "bisnis":
      text = "Halo kak, saya mau tanya tentang program kopi 1-1-1 dan peluang passive income.";
      break;
    case "coba4":
      text = "Halo kak, saya mau tanya harga Juwara Cafe 4 in 1 (1 box isi 20 sachet).";
      break;
    case "coba3":
      text = "Halo kak, saya mau tanya harga Juwara Cafe 3 in 1 (1 box isi 20 sachet).";
      break;
    default:
      text = "Halo kak, saya tertarik dengan Kopi Juwara Cafe.";
  }

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// Kirim form ke WA (section paling bawah)
function sendForm(e, formId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  const data = new FormData(form);
  let message = "";

  if (formId === "cobaForm") {
    message =
      `Halo kak, saya *${data.get("name")}* ingin pesan Kopi Juwara.\n` +
      `Varian: ${data.get("varian")}\n` +
      (data.get("note") ? `Catatan: ${data.get("note")}\n` : "");
  } else if (formId === "bisnisForm") {
    message =
      `Halo kak, saya *${data.get("name")}* tertarik info program kopi 1-1-1.\n` +
      (data.get("city") ? `Domisili: ${data.get("city")}\n` : "") +
      (data.get("question") ? `Pertanyaan: ${data.get("question")}\n` : "");
  }

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  form.reset();
  return false;
}
