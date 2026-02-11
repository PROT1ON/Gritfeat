function openNav(){
    document.getElementById("sidepanel").style.width = "250px";
}
function closeNav(){
    document.getElementById("sidepanel").style.width = "0px";
}

  const explore = document.getElementById("explore");
  const modal = document.getElementById("modal");
  const container = document.getElementById("cardsContainer");

 const items = [
  {
    title: "Casual Chic Outfits",
    desc: "Effortless everyday casual outfits for day-to-night style",
    img: "d-1.jpg"
  },
  {
    title: "Chic Fashion Outfits",
    desc: "Curated stylish looks ranging from casual to workwear",
    img: "d-2.jpg"
  },
  {
    title: "Stylish Casual Outfit Ideas",
    desc: "Hundreds of trendy casual outfit inspirations",
    img: "d-3.jpg"
  },
  {
    title: "Fashion & Outfit Inspirations",
    desc: "Classy, stylish, and modern outfit ideas",
    img: "d-4.jpg"
  },
  {
    title: "Dresses & Fashion Ideas",
    desc: "Dress looks — from casual to chic styles",
    img: "d-5.jpg"
  },
  {
    title: "Huge Outfit Collection",
    desc: "Massive Pinterest board full of fashion outfits & looks",
    img: "d-6.jpg"
  },
  {
    title: "Fashion Dress Board",
    desc: "900+ dress inspiration & outfit ideas",
    img: "d-7.jpg"
  },
  {
    title: "Dress & Outfit Inspirations",
    desc: "Dress and outfit combos for all occasions",
    img: "d-9.jpg"
  }
];


    container.innerHTML = items.map(item=>
        `<div class="card">
        <img src="${item.img}" alt="${item.title}">
        <div class="card-content">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
        </div>`
    ).join("")
 explore.addEventListener("mouseenter", () => {
    modal.style.display = "block";
  });

   explore.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!modal.matches(":hover")) {
        modal.style.display = "none";
      }
    }, 100);
  });

  modal.addEventListener("mouseleave", () => {
    modal.style.display = "none";
  });


  const themeIcon = document.getElementById("themeIcon");

  themeIcon.addEventListener("click", ()=>{
    if(document.body.classList.contains("dark-theme"))
    {
      document.body.classList.remove("dark-theme");
      themeIcon.innerHTML = '<i class="fas fa-sun"></i>'
    }else{
      document.body.classList.add('dark-theme');
      themeIcon.innerHTML = '<i class="fas fa-moon"></i>'
    }

  })