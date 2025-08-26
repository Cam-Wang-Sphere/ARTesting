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

    let randomDistance = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
    let positionString = randomDistance.toString() + " 0 0";
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