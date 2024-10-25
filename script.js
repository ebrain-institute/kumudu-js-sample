

async function fetchUserAndPosts(){

    try {
        // Fetch user data
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const user = await userResponse.json();

        // Update user info in the DOM
        document.getElementById("user-name").innerText =user.name; 
        document.getElementById("user-email").innerText =user.email; 
        document.getElementById("user-address").innerText = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
    
    
        // Fetch posts by user
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        const posts = await postResponse.json();

        console.log(posts)

        // Get POST element
        const postContainer = document.getElementById("posts");

        // Clear existing content (if any)
        postContainer.innerHTML = '';

        // Loop through posts and add them to DOM
        posts.forEach(post =>{
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = 
            `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
         postContainer.append(postElement);   
        });


    }
    catch(error){
        console.error("Error fetching data:", error)
    }

}

fetchUserAndPosts()
