let heading = document.querySelectorAll(".heading");

let innerContent = document.querySelector(".inner-content");

let period = document.querySelectorAll(".person-info .work-info p")




function fetchData(period) {
  fetch('./data.json')
  .then((response) => response.json())
  .then((data) => 
  
  
  innerContent.innerHTML = 
                         `
                           ${data.items.map(item=> `
                           <div class=${item.title.toLowerCase().includes(" ") ? item.title.split(" ").join("-").toLowerCase(): item.title.toLowerCase()}>
                                <div class="img"><img src="./images/icon-${item.title.toLowerCase().includes(" ") ? item.title.split(" ").join("-").toLowerCase(): item.title.toLowerCase()}.svg" alt=""></div>
                                
                                <div class="${item.title.toLowerCase().includes(" ") ? item.title.split(" ").join("-").toLowerCase(): item.title.toLowerCase()}-content">
                                  <div class="${item.title.toLowerCase().includes(" ") ? item.title.split(" ").join("-").toLowerCase(): item.title.toLowerCase()}-head">
                                    <p class="heading">${item.title}</p>
                                    <img src="./images/icon-ellipsis.svg" alt="" srcset="">
                                  </div>
                                  
                                  <div class = "timeframes">
                                   <p class = "current">${item.timeframes[period].current}hrs</p>  
                                   <p class = "previous">Last Week - ${item.timeframes[period].previous}hrs</p>
                                  </div>
                                </div>
                            </div>
                           `).join('')}
                         `
);
}


fetchData("weekly");



let periodValue = ""

period.forEach(btn => {
  btn.addEventListener("click", ()=>{
    removeActive()
    btn.classList.toggle("active")
    
    periodValue = btn.innerHTML
    
    fetchData(periodValue.toLowerCase())
  })
})
  
  
function removeActive(){
  period.forEach(btn => {
      btn.classList.remove("active")
    })
  
  }
