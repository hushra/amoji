let emojis = document.body.innerHTML.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g);
if (emojis) {
    emojis.forEach((emoji) => {
        let imgTag = '<img draggable="false" style="image-rendering:-webkit-crisp-edges;max-width: 1.4em;max-height: 1.4em;" src="https://raw.githubusercontent.com/hushra/amoji/main/emojis/' + encodeURIComponent(emoji) + '.png" alt="' + emoji + '">';
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(emoji, "g"), imgTag);
    });
}
