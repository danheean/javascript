const quotes = [
  {
    quote:
      "잘한다는 기준이 너무 애매해서 모두를 만족시킬 수는 없으니까 네가 네것을 찾고, 너만의 것을 좋아해주는 사람들을 만나면 돼.",
    author: "아이유",
  },
  {
    quote:
      "잘한다는 기준이 너무 애매해서 모두를 만족시킬 수는 없으니까 네가 네것을 찾고, 너만의 것을 좋아해주는 사람들을 만나면 돼.",
    author: "아이유",
  },
  {
    quote:
      "잘한다는 기준이 너무 애매해서 모두를 만족시킬 수는 없으니까 네가 네것을 찾고, 너만의 것을 좋아해주는 사람들을 만나면 돼.",
    author: "아이유",
  },
  {
    quote:
      "잘한다는 기준이 너무 애매해서 모두를 만족시킬 수는 없으니까 네가 네것을 찾고, 너만의 것을 좋아해주는 사람들을 만나면 돼.",
    author: "아이유",
  },
  {
    quote:
      "잘한다는 기준이 너무 애매해서 모두를 만족시킬 수는 없으니까 네가 네것을 찾고, 너만의 것을 좋아해주는 사람들을 만나면 돼.",
    author: "아이유",
  },
  {
    quote:
      "잘한다는 기준이 너무 애매해서 모두를 만족시킬 수는 없으니까 네가 네것을 찾고, 너만의 것을 좋아해주는 사람들을 만나면 돼.",
    author: "아이유",
  },
  {
    quote: "나 또한 불안하고 당신 또한 그러하니 같이 찾고 공부해봅시다.",
    author: "슈가(BTS)",
  },
  {
    quote:
      "최선을 다했지만 어쩔 수 없는 일은 털어버릴 줄도 알아야 한다. 세상에 미련만큼 미련한 일도 없다.",
    author: "GD(지드래곤)",
  },
  {
    quote:
      "하려면 제대로 하고 안 할 거면 다른 사람 피해주지 말고 일찌감치 때려치워라",
    author: "최민식",
  },
  {
    quote: "친구는 굳이 비밀로 해달라고 하지 않아도 당연히 비밀 지켜주는 사람",
    author: "사유리",
  },
  {
    quote:
      "초심을 잃지 마라. 너는 잃을 것이 없다. 안경 하나만 있으면 세상을 볼 수 있지 않느냐. 본다는 것은 세상을 얻는 것이다.",
    author: "이경규",
  },
  {
    quote: "사람이 만든 책보다 책이 만든 사람이 더 많다.",
    author: "감제동",
  },
  {
    quote:
      "겉모습이 촌스러운 것은 용서가 되는데, 마인드가 촌스러운 것은 용서가 안돼요.",
    author: "김혜수",
  },
  {
    quote: "지금 자면 꿈꿀 수 있지만, 지금 안자면 꿈을 이룰 수 있다.",
    author: "정지훈(비)",
  },
  {
    quote:
      "내가 하고 싶어하는 말보다 상대방이 듣고 싶어하는 말을 해라. 하기 쉬운 말보다 알아듣기 쉽게 얘기해라",
    author: "유재석",
  },
  {
    quote: "지금 공부 안하면 더울 때 더운데서 일하고 추출 때 추운데서 일한다.",
    author: "박명수",
  },
];
const quotes_en = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];

function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function paintQuote() {
  const newQuote = getQuote();

  quote.innerText = newQuote.quote;
  author.innerText = "- " + newQuote.author + " -";
}

paintQuote();

greeting.addEventListener("click", paintQuote);
