"use strict";

const selectElement = document.querySelector(".input");

selectElement.addEventListener("input", (event) => {
  const arr = [
    { name: "Andriy" },
    { name: "Anatol" },
    { name: "Alberta" },
    { name: "Andrrrr" },
    { name: "Andri" },
    { name: "Andrpiono" },
    { name: "agnieszka andri" },
  ];

  if (event.target.value.length >= 3) {
    const test = arr.filter((str) =>
      str.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(test);
  }
});
