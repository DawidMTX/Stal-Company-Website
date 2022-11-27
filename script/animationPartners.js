const li = document.querySelector(".partners__display");

let position = 0;



const changePosition = () => {
    
    
    if (position > -1350) {

        if( window.innerWidth > 1024){
            position -= 225;
        }else if (window.innerWidth < 1024){
            position -= 170;
        }
      
        
        li.style.transform = `translate3d(${position}px, 0px, 0px)`;
        li.style.transition = '1s transform';
     

    } else {
      clearInterval(app)
        position = 0;
        
        li.style.transform = `translate3d(${position}px, 0px, 0px)`;
        li.style.transition = '0s transform'
      
    }


}
const app = () => {setInterval(changePosition, 2000)}
 if (position == 0){ app()}
// app();
