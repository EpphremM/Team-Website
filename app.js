const intersectionCards = document.querySelectorAll(".intersection-anim");

const observer = new IntersectionObserver(stuff => {
 stuff.forEach(st => {
    if (st.isIntersecting){
        st.target.classList.add("show");
    }
    else{
        st.target.classList.remove("show");
    }
 })
});


intersectionCards.forEach(element => observer.observe(element));