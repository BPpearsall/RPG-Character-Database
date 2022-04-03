const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#character-name').value.trim();
    const damage = document.querySelector('#character-damage').value.trim();
    const health = document.querySelector('#character-health').value.trim();
    const background = document.querySelector('#character-background').value.trim();
    const race = document.querySelector('#character-race').value.trim();
    const class_id = document.querySelector('#character-class').value.trim();
  
    if (name && damage && health && background && race && class_id) {
        const response = await fetch('/api/character', {
            method: "POST",
            body: JSON.stringify({name, damage, health, background, race, class_id}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/profile')
            console.log(name)
        }
    }
  };
  console.log("damage")
  
  document
    .querySelector('.create-form')
    .addEventListener('submit', newFormHandler);