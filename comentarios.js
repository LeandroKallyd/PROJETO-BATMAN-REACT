document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    
    const li = document.createElement('li');
    li.textContent = `${name}: ${comment}`;


    document.getElementById('comments').appendChild(li);

    
    document.getElementById('commentForm').reset();
});