const inputs = document.querySelectorAll(".input");
const years = document.querySelectorAll(".description_container li");

inputs.forEach((el) =>
  el.addEventListener("click", (e) => {
    console.log("clicked");
    console.log(el)
  })
);

// $(function(){
// 	var inputs = $('.input');
// 	var paras = $('.description-flex-container').find('p');
// 	inputs.click(function(){
// 		var t = $(this),
// 				ind = t.index(),
// 				matchedPara = paras.eq(ind);
		
// 		t.add(matchedPara).addClass('active');
// 		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
// 	});
// });