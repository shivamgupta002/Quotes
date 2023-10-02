let url = "https://type.fit/api/quotes";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showData(data);
    console.log(data[0]);
  })
  .then(function (err) {
    console.log(err);
  });

let showData = async (data) => {
  let i = 1;

  document.getElementById("text").innerHTML = data[i].text;
  document.getElementById("author").innerHTML = data[i].author;

  document.getElementById("new-quote").addEventListener(
    "click",
    (quote = () => {
      document.getElementById("text").innerHTML = data[i].text;
      document.getElementById("author").innerHTML = data[i].author;
      i++;
    })
  );
};

document.getElementById("new-quote").addEventListener(
  "click",
  (Color = () => {
    let Color = "#";
    let letters = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
      Color += letters[Math.floor(Math.random() * 16)];
    }

    document.getElementById("container").style.backgroundColor = Color;
    document.getElementById("author").style.color = Color;
    document.getElementById("text").style.color = Color;
    document.getElementById("twitter").style.backgroundColor = Color;
    document.getElementById("tubular").style.backgroundColor = Color;
    document.getElementById("new-quote").style.backgroundColor = Color;
  })
);

document.getElementById("tubular").style.backgroundColor = blue;
