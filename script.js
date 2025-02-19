let noClickCount = 0;

// เปลี่ยนรูปภาพเมื่อ hover ปุ่ม
function changeImage(newSrc) {
  document.getElementById("mainImage").src = newSrc;
}

// รีเซ็ตรูปภาพกลับเป็นรูปหลัก
function resetImage() {
  document.getElementById("mainImage").src = "doyou.png";
}

// ฟังก์ชันเมื่อกดปุ่ม "ไม่"
function handleNoClick() {
  noClickCount++;

  // ถ้ากดครบ 10 ครั้ง ให้แสดงหน้า "noPage"
  if (noClickCount >= 10) {
    showPage("noPage");
  } else {
    shrinkNoButton(); // ลดขนาดปุ่ม
    moveNoButton();   // สุ่มตำแหน่งปุ่ม
  }
}

// ลดขนาดของปุ่ม "ไม่" ทีละนิด
function shrinkNoButton() {
  const noButton = document.getElementById("noButton");
  const currentPadding = parseFloat(getComputedStyle(noButton).padding);
  const currentFontSize = parseFloat(getComputedStyle(noButton).fontSize);

  noButton.style.padding = `${currentPadding * 0.9}px`;
  noButton.style.fontSize = `${currentFontSize * 0.9}px`;
}

// สุ่มตำแหน่งของปุ่ม "ไม่" ไปในพื้นที่ของ container
function moveNoButton() {
  const noButton = document.getElementById("noButton");
  const container = noButton.parentElement;
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  // คำนวณขอบเขตที่ปุ่มสามารถขยับได้
  const maxLeft = containerRect.width - buttonRect.width;
  const maxTop = containerRect.height - buttonRect.height;

  // สุ่มตำแหน่งใหม่
  const randomLeft = Math.random() * maxLeft;
  const randomTop = Math.random() * maxTop;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomLeft}px`;
  noButton.style.top = `${randomTop}px`;
}

// ฟังก์ชันแสดงหน้าใหม่ และซ่อนหน้าที่เหลือ
function showPage(pageId) {
  // ซ่อนทุกหน้า
  document.querySelectorAll(".container").forEach((page) => {
    page.classList.add("hidden");
  });

  // แสดงหน้าใหม่
  document.getElementById(pageId).classList.remove("hidden");
}
