var layer = $('#layers')
var layerLocation = $('#layerLocation')
var layers = document.querySelectorAll('#Background, #Body, #Chest, #Eyes, #Head,#Horns,#Smoke,#Teeth,#Tongue');

// const boxes = document.querySelectorAll('.box1, .box2, .box3');

// boxes.forEach(box => {
//   box.addEventListener('click', function handleClick(event) {
//     console.log('box clicked', event);
//     box.setAttribute('style', 'background-color: yellow;');
//   });
// });

varLayersDict = {
    "Background": ["Aegean.png", "Amber_Orange.png"],
    "Body": ["3d art body.png", "Aztec god blue red.png", "Aztec God Body black green .png"],
    "Chest": ["3d art chest.png", "Aztec God Chest blaze .png", "Aztec God Chest breeze .png"],
    "Eyes": ["3d art eye.png", "Alien eye black .png", "Alien eye blaze .png"],
    "Head": ["3d art head.png", "Aztec god head blaze .png", "Aztec god head blaze gold.png"],
    "Horns": ["3d art horns.png", "Bat wing horns blaze .png", "Bat wing horns blaze blue .png"],
    "Smoke": ["Untitled_Artwork 1.png", "Untitled_Artwork 2.png"],
    "Teeth": ["Black_Slime.png", "Chainsaw Teeth blaze .png"],
    "Tongue": ["3d art tongue .png","Acid tongue blaze green.png", "Acid tongue blood.png"],
}



layers.forEach(currLayer => {
    currLayer.addEventListener('click', function handleClick(event) {
        console.log(this.id)
        layerLocation.empty()

        // <button id ="Background" type="button" class="btn btn-secondary my-1">Background</button>
        varLayersDict[this.id].forEach(currLayer => {
            console.log(currLayer)
            layerLocation.append('<button id=' + currLayer + '" type="button" class="btn btn-secondary my-1">' + currLayer + "</button>")
        })
        // layerLocation.append("<button id=" +  )
      });
});

// $('#musics').on('click', '#want',function(e) {
//     $(this).closest('.from-group').val(($('#want').is(':checked')) ? "yes" : "no");
//     var ans=$(this).val();
//     console.log(($('#want').is(':checked')));
// });