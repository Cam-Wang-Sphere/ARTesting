window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = 'Add';
    button.addEventListener('click', function () {
        spawnNewFighter();
    });
};

var count = 0

function spawnNewFighter()
{
    let baseName = 'Rot';
    let realIndex = (count % 4) + 1;
    let fullName = baseName + realIndex.toString();

    let randomXDistance = Math.floor(Math.random() * (35 - 5 + 1)) + 5;
    let randomYDistance = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    let positionString = randomXDistance.toString() + " " + randomYDistance.toString() + " 0";
    console.log(positionString);

    let Anchor = document.querySelector("a-entity[name='" + fullName + "']");

    let Model = document.createElement('a-entity');
    Model.setAttribute('gltf-model', './assets/tie/scene.gltf');
    Model.setAttribute('scale','0.6 0.6 0.6');
    Model.setAttribute('position',positionString);
    
    Model.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    Anchor.appendChild(Model);
    count++;
}