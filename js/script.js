function myFunction() {
    var x = document.getElementById("captionHide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  var gallery = [
    {
      image: 'images/filler.jpg',
      project: 'Main Website',
      caption: 'Sed ut perspiciatis unde omnis iste natus error.',
    },
    {
      image: 'images/filler.jpg',
      project: 'Hobby Page',
      caption: 'Sed ut perspiciatis unde omnis iste natus error.',
    },
    {
      image: 'images/filler.jpg',
      project: 'Movie Data',
      caption: 'Sed ut perspiciatis unde omnis iste natus error.',
    },
    {
      image: 'images/filler.jpg',
      project: 'Project Gallery',
      caption: 'Sed ut perspiciatis unde omnis iste natus error.',
    },
    {
      image: 'images/filler.jpg',
      project: 'Feature',
      caption: 'Sed ut perspiciatis unde omnis iste natus error.',
    }

  ];

  let html = '';

  for (let i = 0; i < gallery.length; i++) {
    let card = gallery[i];
    html +=
      `<div class="flex-item">             
        <figure>
            <img src="${card.image}" alt="filler" class="flex-image">
            <figcaption>
                <div><p>${card.project}</p></div>
                <div><p class="plus-symbol" onclick="myFunction()">&plus;</p></div>
            </figcaption>
        </figure>
        <div id="captionHide">
          ${card.caption}
        </div>
      </div>`;
}

document.querySelector('.flex-container').insertAdjacentHTML('beforeend', html); 