(() => {
  let currentLocation = 1;
  const moveButton = document.getElementById("move");
  moveButton.onclick = () => {
    const currentParent = document.getElementById(`location-${currentLocation}`);
    const content = currentParent.getElementsByClassName("content").item(0);
    currentParent.removeChild(content);

    const nextLocation = (currentLocation % 2) + 1;

    const newParent = document.getElementById(`location-${nextLocation}`);
    newParent.appendChild(content);

    currentLocation = nextLocation;
  };
})();
