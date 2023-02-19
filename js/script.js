// Gallery Section Card Data

  var gallery = [
    {
      image: 'images/website.png',
      project: 'Main Website',
      caption: 'Who I am, why I want to be a developer, and what I\'ve learned so far.',
    },
    {
      image: 'images/hobby.png',
      project: 'Hobby Page',
      caption: 'A guide to cycling the Coast to Coast.',
    },
    {
      image: 'images/website.png',
      project: 'Movie Data',
      caption: 'Sed ut perspiciatis unde omnis iste natus error.',
    },
    {
      image: 'images/gallery.png',
      project: 'Project Gallery',
      caption: 'A flex-box layout gallery of the completed application projects.',
    },
    {
      image: 'images/game.png',
      project: 'Feature',
      caption: 'A farm harvest game.',
    }

  ];

// 1. CREATES THE REPEATED CARDS

  let html = '';

  for (let i = 0; i < gallery.length; i++) {
    let card = gallery[i];
    html +=
      `<div class="flex-item">             
        <figure>
            <img src="${card.image}" alt="filler" class="flex-image">
            <figcaption>
                <div><p>${card.project}</p></div>
                <button class="plus-symbol">&plus;</button>
            </figcaption>
        </figure>
        
        <div class="captionHide" style="display:none">
          ${card.caption}
        </div>
      </div>`;  
}

document.querySelector('.flex-container').insertAdjacentHTML('beforeend', html); 

// 2. ADDS THE SHOW/HIDE CAPTION

for (let i = 0; i < gallery.length; i++) {

document.querySelectorAll(".plus-symbol")[i].addEventListener("click", function() {

  var x = document.querySelectorAll(".captionHide")[i]; // By using querySelectorAll and captionHide as a class, you can select which index number to affect.
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
});
}
