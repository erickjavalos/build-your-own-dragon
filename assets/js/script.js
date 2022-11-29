var layer = $('#layers')
var layerLocation = $('#layerLocation')
var layers = document.querySelectorAll('#Background, #Body, #Chest, #Eyes, #Head,#Horns,#Smoke,#Teeth,#Tongue');
var resEle = document.querySelector(".result");
var context = resEle.getContext("2d");

// also the layering order
var stateVariables = 
{
    "Background": "none",
    "Body": "none",
    "Chest": "none",
    "Tongue": "none",
    "Teeth": "none",
    "Horns": "none",
    "Head": "none",
    "Eyes": "none",
    "Smoke": "none",    
}

varLayersDict = dictionary;


layers.forEach(currLayer => {
    currLayer.addEventListener('click',function handleClick(event) {
        // console.log(this.id)
        layerLocation.empty()

        varLayersDict[this.id].forEach(currLayer => {
            // add layers dynamically
            var newButton = $('<button>')
            newButton.attr("id", this.id + '-' + currLayer)
            newButton.attr("type","button")
            newButton.attr('class','btn btn-secondary my-1')
            newButton.text(currLayer)
            // button was clicked
            newButton.on('click', function(e){
                // set state variable accordingly
                var id = this.id
                var parent = id.split("-")[0]
                // assign the layer to the statevariable
                stateVariables[parent] = this.id.split('-')[1]

                // console.log(stateVariables)
                var imgArray = []
                for (key in stateVariables)
                {
                    if (stateVariables[key] !== "none")
                    {
                        var imgEle = new Image();
                        imgEle.src = "./assets/images/dragon/" + key + "/" + stateVariables[key]
                        imgArray.push(imgEle)

                    }
                }

                var numLoaded = 0;
                for (var i = 0; i < imgArray.length; i++)
                {
                    // increase counter to ensure images are loaded, we need all images in arr to load
                    imgArray[i].onload = () => 
                    {
                        numLoaded++;
                        if (numLoaded === imgArray.length)
                        {
                            resEle.width = imgArray[0].width;
                            resEle.height = imgArray[0].height;
                            for (i = 0; i < imgArray.length; i++)
                            {
                                context.drawImage(imgArray[i],0,0)
                            }
                        }
                    }
                }
            })
            layerLocation.append(newButton)
        })
      });
});