// /* Desenvolva a lógica da página aqui */

const modalPronto = document.querySelectorAll(".modal-wrapper")
const post1 = document.getElementById('modalPost_1')
const post2 = document.getElementById('modalPost_2')
const post3 = document.getElementById('modalPost_3')
const post4 = document.getElementById('modalPost_4')


const post1Show = document.getElementById("post_1") 
const post2Show = document.getElementById("post_2")
const post3Show = document.getElementById("post_3")
const post4Show = document.getElementById("post_4")


post2Show.addEventListener('click', function(event){
showModal2('modalPronto')

})
post1Show.addEventListener('click', function(event){
showModal1('modalPronto')

})
post3Show.addEventListener('click', function(event){
showModal3('modalPronto')

})
post4Show.addEventListener('click', function(event){
showModal4('modalPronto')

})
// post2Show.addEventListener('click', function(event){
//     showModal('modalPronto')
    
//     })

function showModal1(){
    
    post1.classList.add('showModal')
    post1.addEventListener('click', function(event){
        
        if(event.target.id === 'modalPost_1' || event.target.id === "modalClose_1" || event.target.id === 'modalPost_2'|| event.target.id === 'modalPost_3'){
            post1.classList.remove('showModal')
        }
    })
}
function showModal2(){
    
    post2.classList.add('showModal')
    post2.addEventListener('click', function(event){
        
        if(event.target.id === 'modalPost_1' || event.target.id === 'modalClose_2' || event.target.id === 'modalPost_2'|| event.target.id === 'modalPost_3'){
            post2.classList.remove('showModal')
        }
    })
}
function showModal3(){
    
    post3.classList.add('showModal')
    post3.addEventListener('click', function(event){
        
        if(event.target.id === 'modalPost_1' || event.target.id === 'modalClose_3' || event.target.id === 'modalPost_2'|| event.target.id === 'modalPost_3'){
            post3.classList.remove('showModal')
        }
    })
}
function showModal4(){
    
    post4.classList.add('showModal')
    post4.addEventListener('click', function(event){
        
        if(event.target.id === 'modalPost_4' || event.target.id === 'modalClose_4' || event.target.id === 'modalPost_2'|| event.target.id === 'modalPost_3'){
            post4.classList.remove('showModal')
        }
    })
}


const like1 = document.getElementById('like_1')
const like2 = document.getElementById('like_2')
const like3 = document.getElementById('like_3')
const like4 = document.getElementById('like_4')

like1.addEventListener('click', function(){
    
})





// function showModal (usuarios){

//     for(let i = 0; i < usuarios.length; i++){
    
   
//         let tagDivWrapper = document.createElement('div')
//         tagDivWrapper.classList.add('modal-wrapper');
//         tagDivWrapper.id = `modalPost_${usuarios[i].id}`

//         let modal = document.createElement('div')
//         modal.classList.add('modal')
    
//         let divProfile = document.createElement('div')
//         divProfile.classList.add('profile-userModal')

//         let profile = document.createElement('img')
//         profile.src = usuarios[i].img; 
//         profile.alt = "profileUser";
//         profile.classList.add('img-logo');
    
//         let divInfoUser = document.createElement('div')
//         divInfoUser.classList.add('info-user')
        
//         let tagStrong = document.createElement('strong')
//         tagStrong.innerText = usuarios[i].user;
//         tagStrong.classList.add('name-user')

//         let tagSpan = document.createElement('span')
//         tagSpan.innerText = usuarios[i].stack;
//         tagSpan.classList.add('user-job')

//         let tagDivAlinhar = document.createElement('div')
//         tagDivAlinhar.classList.add('align-text-modal')
//         let
//         for(let j = 0; j < posts.length; j++){
         
//             if(posts[j].id_post === user[i].id){

//             }
//         }

//         let tagH3 = document.createElement('h3')
//         tagH3.innerText = posts.title;
//         tagH3.classList.add('title-modal')
    
//         let tagP = document.createElement('p')
//         tagP.innerText = posts.text;
//         tagP.classList.add('text-modal')

//         let botaoFechar = document.createElement('button')
//         botaoFechar.classList.add('close-button')
//         botaoFechar.innerText = 'X'
    
//         tagDivWrapper.append(article)
//         article.append(divProfile, tagDivAlinhar, botaoFechar)
//         divProfile.append(profile, divInfoUser)
//         tagDivAlinhar.append(tagH3, tagP)

//         return tagDivWrapper
// }

// }

// const botaoPost = document.getElementsByClassName('button-open')
// let newArray = [];

// for(let i = 0; i < botaoPost.length; i++){
//     let botao = botaoPost[i];
//     botao.addEventListener('click', function(event){
//         let elemento = event.target;
//         let idElemento = elemento.id;
//         let id = parseInt(idElemento.substring(5));
//         let post = encontraPost(id);

//     })
// }


// function encontraPost(id){
//     for(let i = 0; i < users.length; i++){
//         let post = users[i];
//         if(post.id === id){
//             return post
//         }
//     }
//     return false
// }


// showModal(users)

































