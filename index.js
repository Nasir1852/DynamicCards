// dummy data create
// const posts = [
//     {
//         title: "post title1",
//         body: "post description 1"
//     },
//     {
//         title: "post title2",
//         body: "post description 2"
//     },
//     {
//         title: "post title3",
//         body: "post description 3"
//     },
//     {
//         title: "post title4",
//         body: "post description 4"
//     }
// ]
//{/* <div class = "post">
//<h4 class = "post-title">post title</h4>
//<p class = "post-body">post description1</p>
//</div> */}
//fetch data
// console.log(axios);
const fetchData = async(config)=>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("Data is not Fatched");
    }
    
}


//selection
const postsElement = document.querySelector(".posts");

const loadAllData = async()=>{
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class = "post-title">${post.title}</h4>
        <p class = "post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
    
}
loadAllData();