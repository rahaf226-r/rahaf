const properties = [
  {
    id: 1,
    rent: "4000000 ل.س",
    details: "شقة صالة و غرفة و مطبخ مساحة 200 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: الماكي ، الطابق الثاني <br> الملكية: طابو ، مفروشة",
    images: ["img/png1.jpg", "img/png2.jpg", "img/png3.jpg"],
  },
  {
    id: 2,
    rent: "500000 ل.س",
    details: "شقة صالة و مطبخ مساحة 70 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: ركن الدين ، متوفر كراج ، الطابق الثالث <br> الملكية: طابو ، بلكون مساحة 12 متر ، غير مفروشة",
    images: ["img/png4.jpg", "img/png5.jpg", "img/png6.jpg"],
  },
  {
    id: 3,
    rent: "1000000 ل.س",
    details: "شقة صالة و غرفة مساحة 90 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: أبو رمانة ، متوفر كراج ، الطابق الأول <br> الملكية: طابو ، حمام ، مفروشة",
    images: ["img/png7.jpg", "img/png8.jpg", "img/png9.jpg"],
  },
  {
    id: 4,
    rent: "2000000 ل.س",
    details: "محل تجاري 100 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: المزة ، دوبلكس ، الطابق أرضي <br> الملكية: طابو ، قبو",
    images: ["img/png28.jpg", "img/png29.jpg", "img/png20.jpg"],
  },
  {
    id: 5,
    rent: "2000000 ل.س",
    details: "شقة صالة و مطبخ مساحة 250 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: المزة ، متوفر كراج ، الطابق الرابع <br> الملكية: طابو ، مصعد ، مفروشة",
    images: ["img/png10.jpg", "img/png11.jpg", "img/png12.jpg"],
  },
  {
    id: 6,
    rent: "3000000 ل.س",
    details: "شقة صالة و ثلاث غرف مساحة 250 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: ابو رمانة ، مع حديقة ، الطابق أرضي <br> الملكية: طابو ، حمام عدد 2 ، مفروشة",
    images: ["img/png13.jpg", "img/png14.jpg", "img/png15.jpg"],
  },
  {
    id: 7,
    rent: "2500000 ل.س",
    details: "شقة صالتين و غرفة مساحة 150 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: مشروع دمر ، الطابق الثاني <br> الملكية: طابو ، بلكون عدد 2 ، مفروشة",
    images: ["img/png16.jpg", "img/png17.jpg", "img/png18.jpg"],
  },
  {
    id: 8,
    rent: "2000000 ل.س",
    details: "شقة صالة و غرفة مساحة 100 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: المزة ، الطابق الرابع <br> الملكية: طابو ، مطبخ ، مفروشة",
    images: ["img/png19.jpg", "img/png20.jpg", "img/png21.jpg"],
  },
  {
    id: 9,
    rent: "3000000 ل.س",
    details: "شقة صالة و غرفة عدد3 مساحة 200 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: المالكي ، الطابق الثاني <br> الملكية: طابو ، مطبخ ، مفروشة",
    images: ["img/png22.jpg", "img/png23.jpg", "img/png24.jpg"],
  },
  {
    id: 10,
    rent: "1500000 ل.س",
    details: "شقة صالة و غرفة مساحة 100 م",
    city: "دمشق",
    additionalDetails:
      "المنطقة: المهاجرين ، حديقة ، الطابق أرضي <br> الملكية: طابو ، مطبخ ، مفروشة",
    images: ["img/png25.jpg", "img/png26.jpg", "img/png27.jpg"],
  },
];

function toggleDetails(button) {
  const detailsRow = button.closest("tr").nextElementSibling;
  detailsRow.style.display = detailsRow.style.display === "none" ? "" : "none";
}

function createTable() {
  const table = document.getElementById("propertiesTable");
  properties.forEach((property) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="radio" name="property" value="property ${property.id}"></td>
      <td><button onclick="toggleDetails(this)">Toggle Details</button></td>
      <td>${property.rent}</td>
      <td>${property.details}</td>
      <td>${property.city}</td>
  `;
    table.appendChild(row);

    const detailsRow = document.createElement("tr");
    detailsRow.classList.add("details");
    detailsRow.style.display = "none";
    detailsRow.innerHTML = `
      <td colspan="5">
          ${property.additionalDetails} <br>
          <div class="image-container">
              ${property.images
                .map((img) => `<img src="${img}" alt="وصف الصورة">`)
                .join("")}
          </div>
      </td>
  `;
    table.appendChild(detailsRow);
  });
}

document.addEventListener("DOMContentLoaded", createTable);
// الدالة لإظهار وإخفاء التفاصيل
function toggleDetails(element) {
  var details = element.parentNode.parentNode.nextElementSibling;
  if (details.style.display === "none") {
    details.style.display = "table-row";
  } else {
    details.style.display = "none";
  }
}
function checkSelectedProperty() {
  const selectedProperty = document.querySelector(
    'input[name="property"]:checked'
  );
  console.log(selectedProperty);
  if (selectedProperty) {
    show();
  } else {
    alert("please select a property from the table.");
  }
}
function show() {
  var formcontainaer = document.getElementById("myForm");
  if (formcontainaer.style.display === "block") {
    formcontainaer.style.display = "none";
  } else {
    formcontainaer.style.display = "block";
  }
}
function show2() {
  const selectedProperty = document.querySelector(
    'input[name="property"]:checked'
  );

  if (selectedProperty) {
    const propertyId = parseInt(selectedProperty.value.split(" ")[1]);
    const selectedDetails = properties.find(
      (property) => property.id === propertyId
    );

    const formContainer = document.getElementById("myForm");
    const detailsDiv = document.createElement("div");

    detailsDiv.innerHTML = `
      <h2>تفاصيل العقار المختار</h2>
      <p><strong>الإيجار الشهري: </strong>${selectedDetails.rent}</p>
      <p><strong>تفاصيل الإيجار: </strong>${selectedDetails.details}</p>
      <p><strong>المدينة: </strong>${selectedDetails.city}</p>
      <p><strong>التفاصيل الإضافية: </strong>${
        selectedDetails.additionalDetails
      }</p>
      <div class="image-container">
        ${selectedDetails.images
          .map((img) => `<img src="${img}" alt="صورة">`)
          .join("")}
      </div>
      <button class="close" onclick="closeForm()">close</button>
    `;

    // Clear previous details and append new details
    formContainer.innerHTML = "";
    formContainer.appendChild(detailsDiv);

    formContainer.style.display = "block";
  } else {
    alert("الرجاء اختيار عقار من الجدول.");
  }
}
function validateForm() {
  const fullName = document.getElementById("fullName").value;
  const nationalId = document.getElementById("nationalId").value;
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  if (fullName !== "")
    if (!/^[أ-ي\s]+$/.test(fullName)) {
      alert("الرجاء إدخال الأسم الكامل باللغة العربية");
      return;
    }
  if (nationalId !== "")
    if (!/^\d{11}$/.test(nationalId)) {
      alert("الرجاء أدخال رقم وطني صحيح مكون من 11 خانة");
      return;
    }
  if (phone !== "")
    if (!/^(\+963)?\d{9,}$/.test(phone)) {
      alert("الرجاء إدخال رقم الصحيح مع رمز الدولة");
      return;
    }
  show2();
  return;
}
function closeForm() {
  console.log("wwe");
  console.log(document.getElementById("myForm").style.display);
  document.getElementById("myForm").style.display = "none";
}
function close() {
  console.log("wwe");
  console.log(document.getElementById("myForm").style.display);
  document.getElementById("myForm").style.display = "none";
}
