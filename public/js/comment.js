const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector("#add-comment").value.trim()

    if (comment) {
        const response = await fetch('/api/comment', {
            method: "POST",
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response)
      
      }
    }
document
    .querySelector('.comment-form')
    .addEventListener('submit', newFormHandler)