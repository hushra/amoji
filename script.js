class amoji {
  constructor(element) {
    let emojis = element.innerHTML.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g);
    if (emojis,size=1.4) {
        emojis.forEach((emoji) => {
            let imgTag = '<img draggable="false" style="image-rendering:-webkit-crisp-edges;max-width: '+size+'em;max-height: '+size+'em;" src="https://raw.githubusercontent.com/hushra/amoji/main/emojis/' + encodeURIComponent(emoji) + '.png" alt="' + emoji + '">';
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp(emoji, "g"), imgTag);
        });
    }
  }
}
