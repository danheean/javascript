const backgrounds = [
  {
    path: "vd-photography-vk_Z_ya4u14-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/vk_Z_ya4u14?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@vdphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">VD Photography</a>',
  },
  {
    path: "nicolas-houdayer-Rtnp1u9OLFE-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/Rtnp1u9OLFE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@ascalaphe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nicolas Houdayer</a>',
  },
  {
    path: "pramod-tiwari-G1WUM1cU13A-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/G1WUM1cU13A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@pramodtiwari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pramod Tiwari</a>',
  },
  {
    path: "pramod-tiwari-uvld3ZQxK1g-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/uvld3ZQxK1g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@pramodtiwari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pramod Tiwari</a>',
  },
  {
    path: "samuel-jeronimo-hGzm5w7l2s4-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/hGzm5w7l2s4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@samueljeronimo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samuel Jerónimo</a>',
  },
  {
    path: "maciek-sulkowski-1Su3t-fqNxY-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/1Su3t-fqNxY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@imac666?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maciek Sulkowski</a>',
  },
  {
    path: "arturo-esparza-Jvm-3D52-Fc-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/Jvm-3D52-Fc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/es/@arturoeg_foto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Arturo Esparza</a>',
  },
  {
    path: "wolfgang-hasselmann-8eAbmzdKH3U-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/8eAbmzdKH3U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@wolfgang_hasselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wolfgang Hasselmann</a>',
  },
  {
    path: "austin-curtis-rYfk_Bo5_Q0-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/rYfk_Bo5_Q0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@afcurtis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Austin Curtis</a>',
  },
  {
    path: "richard-stachmann-gKgeB3_TDY4-unsplash.jpg",
    creator:
      '<a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/gKgeB3_TDY4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@stachmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Richard Stachmann</a>',
  },
];

// const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");

// const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;

function getBackground() {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

const bgImage = document.createElement("img");
bgImage.src = `images/${getBackground().path}`;

function changeBackground() {
  bgImage.src = `images/${getBackground().path}`;
}

document.body.prepend(bgImage);

const clockContainer = document.querySelector("#clock");
clockContainer.addEventListener("click", changeBackground);

// console.log(bgImage);
// document.body.append(bgImage);
