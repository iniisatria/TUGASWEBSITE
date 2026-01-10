function showPage(id) {
  document.querySelectorAll(".page").forEach(p =>
    p.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
}

function openDetail(game, title, price, image, desc) {
  document.getElementById("modalImage").src = image;
  document.getElementById("modalTitle").innerText = title + " (" + game + ")";
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("modalDesc").innerHTML = desc;
  document.getElementById("modal").style.display = "block";
}

function closeDetail() {
  document.getElementById("modal").style.display = "none";
}
