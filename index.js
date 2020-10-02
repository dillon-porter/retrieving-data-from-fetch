// Use Fetch with this URL, https://jsonplaceholder.typicode.com/posts/1, 
//to get a single blog post and render the blog title and body to the page.

async function getPosts() {
    const postsPromise = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const blog = await postsPromise.json();
    
    console.log(blog)
    
    const html = `
    <h3>${blog.title}</h3>
    <p>${blog.body}</p>
    `;
    
    document.body.innerHTML = html    
}

getPosts();