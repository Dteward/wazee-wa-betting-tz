window.onload = function () {
  const form = document.getElementById("formMkeka");
  const orodha = document.getElementById("orodhaMikeka");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const mechi = document.getElementById("mechi").value.trim();
    const odds = document.getElementById("odds").value.trim();
    const utabiri = document.getElementById("utabiri").value.trim();

    if (mechi === "" || odds === "" || utabiri === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${mechi}</strong><br>
      Odds: ${odds}<br>
      Utabiri: ${utabiri}<br>
      <button onclick="shareMkeka('${mechi}', '${odds}', '${utabiri}')">Shiriki WhatsApp</button>
    `;

    orodha.appendChild(li);
    form.reset();
  });
};

function shareMkeka(mechi, odds, utabiri) {
  const msg = `Mkeka Mpya:\nMechi: ${mechi}\nOdds: ${odds}\nUtabiri: ${utabiri}`;
  const link = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(link, '_blank');
}