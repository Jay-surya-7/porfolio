document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Data Analyst", "Python Developer", "Data Visualization Enthusiast"];
  let i = 0, j = 0;
  const typing = document.getElementById("typing");

  function type() {
    if (j < roles[i].length) {
      typing.textContent += roles[i][j++];
      setTimeout(type, 45);
    } else {
      setTimeout(erase, 800);
    }
  }

  function erase() {
    if (j > 0) {
      typing.textContent = roles[i].substring(0, --j);
      setTimeout(erase, 25);
    } else {
      i = (i + 1) % roles.length;
      setTimeout(type, 300);
    }
  }

  type();
});

function showTab(id, el) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  document.getElementById(id).classList.add("active");
}
