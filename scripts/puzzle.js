window.onload=init;
function init(){
	randomCards("16");
	var tds=document.getElementsByTagName("td");
	for (var i = 0; i < tds.length; i++) {
		var td=tds[i];
		td.onclick=cellClick;
	}
	// alert(tds.length);
}


function cellClick(){
	// alert(this.id);
	var colNum=this.id.substr(-1,1);
	var rowNum=this.parentNode.id.substr(-1,1);
	var emptyImg=document.getElementById("empty");
	var emptyColNum=emptyImg.parentNode.id.substr(-1,1);
	var emptyRowNum=emptyImg.parentNode.parentNode.id.substr(-1,1);

	var nextRow=parseInt(rowNum)+1;
	var lastRow=parseInt(rowNum)-1;
	var nextCol=parseInt(colNum)+1;
	var lastCol=parseInt(colNum)-1;
	cellImg=this.getElementsByTagName("img")[0];

	if(nextRow==emptyRowNum||lastRow==emptyRowNum){
		if(colNum==emptyColNum)
			exchange(cellImg,emptyImg);	
	}
	if(rowNum==emptyRowNum){
		if(nextCol==emptyColNum||lastCol==emptyColNum)
			exchange(cellImg,emptyImg);
	}

}


function exchange(cellImg,emptyImg){
	// alert(cellImg.alt);
	var tempSrc=emptyImg.src;
	emptyImg.src=cellImg.src;
	cellImg.src=tempSrc;
	var tempId=emptyImg.id;
	emptyImg.id=cellImg.id;
	cellImg.id=tempId;
	var tempAlt=emptyImg.alt;
	emptyImg.alt=cellImg.alt;
	cellImg.alt=tempAlt;

	isWin();
}

function isWin(){
	var imgs=document.getElementsByTagName("img");
	var imgsAlt="";
	for (var i = 0; i < imgs.length; i++) {
		imgsAlt+=imgs[i].alt;
	}
	var testWin=imgsAlt.replace("16","");//string method
	// alert(testWin);
	if(testWin=="123456789101112131415")
		confirm("is win");
}

function randomCards(num){
	var cardsArray=new Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16");
	// cardsArray.sort(function(a,b){return b-a;});
	// alert(cardsArray);

	for (var i = 1; i < 5; i++) {
		for (var j = 1; j< 5; j++) {
			var randomNum=Math.floor(Math.random()*num);
			var cellId="cell"+i+j;
			var img=document.getElementById(cellId).getElementsByTagName("img")[0];
			var cardNum=cardsArray[randomNum];
			img.src="img/"+cardNum+".png";
			img.alt=cardNum;
			if(cardNum=="16")
				img.id="empty";
			cardsArray.splice(randomNum,1);//array method
			num--;
		}
		
	}
	
	

}
