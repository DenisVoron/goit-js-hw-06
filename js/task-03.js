const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//console.log(images);
const imageContainerGalleries = document.querySelector('.gallery');
//console.log(imageContainerGalleries);


const makeImageGalleries = (element) => {
  //const { url, alt } = image;
  return element.forEach((image) => {
    const listEl = document.createElement('li');
    const imageEl = document.createElement('img');
    imageEl.src = image.url;
    imageEl.alt = image.alt;
    listEl.appendChild(imageEl);
    console.log(listEl);
    //imageContainerGalleries.insertAdjacentHTML('beforeend', listEl);

    //listEl.insertAdjacentHTML('beforeend', element)
    return listEl;
  })

}

//imageContainerGalleries.insertAdjacentHTML('beforeend', makeImageGalleries);
//makeImageGalleries(images);
//console.log(makeImageGalleries(images));

//const makeTableImg = images.map(makeImageGalleries);
//console.log(makeTableImg);
//imageContainerGalleries.insertAdjacentHTML('beforeend', makeImageGalleries);
//console.log(imageContainerGalleries);
//console.log(makeImageGalleries(images));