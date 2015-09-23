
function overlay() {
    modal = document.getElementById("overlay");
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
}
function zoomModal() {
    modal = document.getElementById("zoomModal");
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
}

function overlayer() {
    modal = document.getElementById("overlayer");
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
}

function overlayerClose(){
  modal = document.getElementById("overlayer");
    modal.style.visibility =  "hidden";
}

function table(){
  var title = document.getElementsByClassName("big")[0].getElementsByClassName("spanTitle")[0].textContent;
  var titleID = title.replace(/\s/g, '-');
  var edit = document.getElementById("editTitle");
  edit.value = title;
  var tally= document.getElementById("Tally");
  tally.value = document.getElementsByClassName("big")[0].getElementsByClassName("spanNumber")[0].textContent;
  var timeNumber = document.getElementById("timeNumber").value;
  var timeOption = document.getElementById("timeOption").value;
  var timeEach = document.getElementById("timeEach").value;
  var newBranch =   document.getElementById('branchFrom');
  newBranch.value = titleID;
}

function editTitle(){
  var edit = document.getElementById("editTitle").value;
  document.getElementsByClassName("big")[0].getElementsByClassName("spanTitle")[0].innerHTML=edit;
}


function addTally(){
  var tally= document.getElementById("Tally");
  tally.value ++;
  document.getElementsByClassName("big")[0].getElementsByClassName("spanNumber")[0].innerHTML=tally.value;
}

function minusTally(){
  var tally= document.getElementById("Tally");
  if(tally.value>1){
  tally.value--;
  document.getElementsByClassName("big")[0].getElementsByClassName("spanNumber")[0].innerHTML=tally.value;
  }
}

function editTime(){
  var timeEmployee = document.getElementById("employeeOption").value;
  var timeNumber = document.getElementById("timeNumber").value;
  var timeOption = document.getElementById("timeOption").value;
  var timeEach = document.getElementById("timeEach").value;
  document.getElementsByClassName("big")[0].getElementsByClassName("time-number")[0].innerHTML=timeNumber+" ";
  console.log('Here we go');
  document.getElementsByClassName("big")[0].getElementsByClassName("time-employee")[0].innerHTML=timeEmployee+" ";
  console.log('Worked!');
  document.getElementsByClassName("big")[0].getElementsByClassName("time-option")[0].innerHTML=timeOption+" for ";
  document.getElementsByClassName("big")[0].getElementsByClassName("time-each")[0].innerHTML=timeEach;

}

function selectMaterial() {
   var materialSelect = document.getElementById("materials");
      materialSelect.style.display = 'inline-block';
   var materialButton = document.getElementById("materialButton");
      materialButton.style.display = 'none';
}

function setColor(){
  var blockColor = document.getElementById('blockColor');
  var backColor = document.getElementById('backColor');
  var textColor = document.getElementById('textColor');
  var colorB = blockColor.value;
  var colorBG = backColor.value;
  var colorT = textColor.value;
  $('.block').css('background-color', colorB);
  $('body').css('background-color', colorBG);
  $('body').css('color', colorT);
  colors = document.getElementById("modalColor");
  colors.style.visibility = "hidden";
}

function colorSelect(){
  colors = document.getElementById("modalColor");
  colors.style.visibility = "visible";
}

var wagesToggle = function(){
  wages = document.getElementById("modalWages");
  wages.style.visibility = (wages.style.visibility == "visible") ? "hidden" : "visible";
}


var wageClicked = function () {
  var text = $(this).prev().val();
  var span = '<span class="thisValue">'
  var pencil = '</span><div class="editPencil"><span class="glyphicon glyphicon-pencil "></span></div>'
  if(text==''||text==0.00){
    alert('please enter a value')
  }else if (isNaN(text)) {
    $(this).parent().html(span+text+pencil);
  }else{
      $(this).parent().html('$'+span+text+pencil);
  }
  $('#wageTBody').find('.editPencil').on('click', cellEdit);
  $('#MaterialTBody').find('.editPencil').on('click', cellEdit);
}
var cellEdit = function () {
  var thisValue = $(this).parent().find('.thisValue').text();
  console.log(thisValue);
  var className = $(this).parent().attr('class');
  switch(className){
    case 'Wtd1':
      $(this).parent().html('Name: '+
      '<input class="inputMedium wageName" type="text" value="'
      +thisValue+'"/><button class="okay okWage">'+
      '<span class="glyphicon glyphicon-ok"> </span>'+
      '</button>');
      break;
    case 'Wtd2':
      $(this).parent().html('Per Hour: $'+
      '<input id="hours" class="inputMedium" type="number" step="0.01" value="'
      +thisValue+'" placeholder="0.00" /><button class="okay okWage">'
      +'<span class="glyphicon glyphicon-ok"></span></button>');
      break;
    case 'Wtd3':
      $(this).parent().html('Per Day: $'+
      '<input id="days" class="inputMedium" type="number" step="0.01" value="'
      +thisValue+'" placeholder="0.00" /><button class="okay okWage">'
      +'<span class="glyphicon glyphicon-ok"></span></button>');
      break;
    case 'Mtd1':
      $(this).parent().html('Name: '+
      '<input class="inputMedium MaterialName" type="text" value="'
      +thisValue+'"/><button class="okay okWage">'+
      '<span class="glyphicon glyphicon-ok"> </span>'+
      '</button>');
      break;
    case 'Mtd2':
      $(this).parent().html('Unit: '+
      '<input class="inputMedium MaterialUnit" type="text" value="'
      +thisValue+'"/>'+
      '<button class="okay okWage"><span class="glyphicon glyphicon-ok"></span>'+
      '</button>');
      break;
    case 'Mtd3':
      $(this).parent().html('Cost: $'+
      '<input class="inputMedium MaterialCost" type="number" step="0.01" value="'
      +thisValue+'" placeholder="0.00" />'+
      '<button class="okay okWage">'+'<span class="glyphicon glyphicon-ok"></span>'+
      '</button>');
      break;
  }
  $('#MaterialTBody').find('.okWage').on('click', wageClicked);
  $('#wageTBody').find('.okWage').on('click', wageClicked);
}


function addEmployee(){
  var $newRow = $('<tr><td class="Wtd1">Name: '+
  '<input class="inputMedium wageName" type="text"/>'+
  '<button class="okay okWage">'+
  '<span class="glyphicon glyphicon-ok"> </span>'+
  '</button></td><td class="Wtd2">Per Hour: $'+
  '<input class="inputMedium wageHours" type="number" step="0.01" value="0.00" placeholder="0.00" />'+
  '<button class="okay okWage"><span class="glyphicon glyphicon-ok"></span>'+
  '</button></td><td class="Wtd3">Per Day: $'+
  '<input class="inputMedium wageDays" type="number" step="0.01" value="0.00" placeholder="0.00" />'+
  '<button class="okay okWage"><span class="glyphicon glyphicon-ok"></span>'+
  '</button></td></tr>');
  $('#wageTBody').append($newRow);
  $newRow.find('.okWage').on('click', wageClicked);
}

function addMaterial(){
  var $newMRow = $('<tr><td class="Mtd1">Name: '+
  '<input class="inputMedium MaterialName" type="text"/>'+
  '<button class="okay okWage">'+
  '<span class="glyphicon glyphicon-ok"> </span>'+
  '</button></td><td class="Mtd2">Unit: '+
  '<input class="inputMedium MaterialUnit" type="text"/>'+
  '<button class="okay okWage"><span class="glyphicon glyphicon-ok"></span>'+
  '</button></td><td class="Mtd3">Cost: $'+
  '<input class="inputMedium MaterialCost" type="number" step="0.01" value="0.00" placeholder="0.00" />'+
  '<button class="okay okWage">'+'<span class="glyphicon glyphicon-ok"></span>'+
  '</button></td></tr>');
  $('#MaterialTBody').append($newMRow);
  $newMRow.find('.okWage').on('click', wageClicked);
}


var MaterialToggle = function(){
  material = document.getElementById("modalMaterial");
  material.style.visibility = (material.style.visibility == "visible") ? "hidden" : "visible";
}

function addList() {
  var listInput = document.getElementById('lists');
  var materialInput = document.getElementById('materials');
  var node = document.createElement("LI");
  var spanNode = document.createElement("SPAN");
  spanNode.className='materialText';
  var xNode = document.createElement("SPAN");
  xNode.className='glyphicon glyphicon-remove-sign removeIcon';
  var textnode = document.createTextNode(listInput.value+" ");
  var materialNode = document.createTextNode(materialInput.value);
  var button = document.getElementById("materialButton");
  if(listInput.value=="" && materialInput.value == ""){
    alert("Please enter a list item.");
    }else{
    spanNode.appendChild(materialNode);
    node.appendChild(textnode);
    node.appendChild(spanNode);
    node.appendChild(xNode);
    document.getElementById("ULedit").appendChild(node);
    listInput.value = "";
    materialInput.value = "";
    materialInput.style.display = 'none';
    button.style.display = 'inline-block';
    $(".big .list").html($("#ULedit").children().clone());
  }
}

function toggleList(){
      list = document.getElementById("listEditor");
      list.style.visibility = (list.style.visibility == "visible") ? "hidden" : "visible";
}

$(document).on('click', '.removeIcon', function () {
     $(this).parent().remove();
     $(".big .list").html($("#ULedit").children().clone());
});

function trash() {
  if($('.big').hasClass('blockMain')){
    alert('You can not delete your main post.');
  }
  else if (confirm("Are you sure you want to delete this branch and all of it's children?") == true) {
    $('.big').parent().remove();
    overlayerClose();
    lines();
  }
}

function branches(){
  var brand=mydiv.getAttribute("data-brand") //returns "toyota"
	var BranchTitle = document.newBranches.title.value;
  var BranchID = BranchTitle.replace(/\s/g, '-');
	var BranchFrom = document.newBranches.branchFrom.value;
  var selector = document.newBranches.branchFrom;
  var selectorB =  document.getElementById('branchFrom');
  var option = document.createElement("OPTION");
  option.setAttribute("value", BranchID);
  var optionB = document.createElement("OPTION");
  optionB.setAttribute("value", BranchID);
  var optionText = document.createTextNode(BranchTitle);
  var optionTextB = document.createTextNode(BranchTitle);
	var from = document.getElementById('wrap'+BranchFrom);
  var fromTier = from.getAttribute("data-tier");
  var str = fromTier;
  console.log(str.length);
  if(str.length>10){
    var setTier = fromTier;
  }else{
    var setTier = fromTier+'i';
  }

  var newblock ='<div class="wrapflt" id="wrapflt'+BranchID+
  '"><div class="block '+setTier+'" id="block'+BranchID+'"><h2><span class="spanNumber badge">'+
  '</span><span class="spanTitle">'+BranchTitle+'</span></h2><h3 class="time">'+
  '<span class="time-employee"></span><span class="time-number"></span>'+
  '<span class="time-option"></span><span class="time-each"></span></h3>'+
  '<ul class="list"></ul></div><div id="wrap'+BranchID+'" class="wrap" data-tier="'+setTier+'"></div></div>';

  if(BranchTitle == ""){
     alert("please enter a branch title.")
    }else{
   $(from).append(newblock);
   selector.appendChild(option);
   selectorB.appendChild(optionB);
   option.appendChild(optionText);
   optionB.appendChild(optionTextB);

  document.newBranches.title.value="";
 	lines();
  overlay();
  overlayerClose();
  setColor();
  }
}

function brancher(){
  var Branch = document.getElementById('newBranch');
	var BranchTitle = Branch.value;
  var BranchID = Branch.value.replace(/\s/g, '-')
  var selector = document.newBranches.branchFrom;
  var selectorB =  document.getElementById('branchFrom');
	var BranchFrom =  selectorB.value;
  var option = document.createElement("OPTION");
  option.setAttribute("value", BranchID);
  var optionB = document.createElement("OPTION");
  optionB.setAttribute("value", BranchID);
  var optionText = document.createTextNode(BranchTitle);
  var optionTextB = document.createTextNode(BranchTitle);
	var from=document.getElementById('wrap'+BranchFrom);
  var fromTier = from.getAttribute("data-tier");
  var str = fromTier;
  console.log(str.length);
  if(str.length>10){
    var setTier = fromTier;
  }else{
    var setTier = fromTier+'i';
  }
    var newblock ='<div class="wrapflt" id="wrapflt'+BranchID+
    '"><div class="block '+setTier+'" id="block'+BranchID+'"><h2><span class="spanNumber badge">'+
    '</span><span class="spanTitle">'+BranchTitle+'</span></h2><h3 class="time">'+
    '<span class="time-employee"></span><span class="time-number"></span>'+
    '<span class="time-option"></span><span class="time-each"></span></h3>'+
    '<ul class="list"></ul></div><div id="wrap'+BranchID+'" class="wrap" data-tier="'+setTier+'"></div></div>';

  if(BranchTitle == ""){
    alert("please enter a branch title.")
  }else{
 $(from).append(newblock);
  selector.appendChild(option);
  selectorB.appendChild(optionB);
  option.appendChild(optionText);
  optionB.appendChild(optionTextB);
  Branch.value="";
  setColor();
  }
}

var lines = function(){
	var blocks=document.getElementsByClassName('block');
	var canvas = document.getElementById("canvas");
  var w = window.innerWidth;
  var h =  $('#full').height()+50;
	canvas.width = w;
	canvas.height = h;
	for (i=1;i<blocks.length;i++){
		var blockDiv = blocks[i]
		var offset = blockDiv.getBoundingClientRect();
		var xa = offset.left+((offset.right-offset.left)/2)+window.pageXOffset;
		var ya = offset.top+((offset.bottom-offset.top)/2)+window.pageYOffset;
		var blockFrom = blockDiv.parentNode.parentNode.previousSibling;
		var offsets = blockFrom.getBoundingClientRect();
		var xb = offsets.left+((offsets.right-offsets.left)/2)+window.pageXOffset;
		var yb = offsets.top+((offsets.bottom-offsets.top)/2)+window.pageYOffset;
		var ctx = canvas.getContext("2d");
		ctx.lineWidth = 2;
		ctx.moveTo(xa,ya);
		ctx.lineTo(xb,yb);
    ctx.strokeStyle = '#4D4D4D';
		ctx.stroke();
  }
}
function zoom(){
  $('.wrapfltMain').toggleClass('zoom');
  lines();
  zoomScroll();
}
function zoomScroll(){
  var divPosition = $('#wrapfltThis').offset();
  $('html, body').animate({scrollTop: divPosition.top*3.32}, "slow");
  // var offset = $("#wrapfltThis").offset();
  // event.stopPropagation();
  // window.scrollTo(offset.left/2, offset.top);
  // zoomModal();
}
jQuery(function ($) {


  $('.toggleButton').click(function(){
    if ( $(this).hasClass('clicked') ) {
      $('.showThis').removeClass('showThis');
      $('.clicked').removeClass('clicked');
  }  else {
    $('.showThis').removeClass('showThis');
    $(this).next().toggleClass('showThis');
    $('.clicked').removeClass('clicked');
    $(this).addClass('clicked');
  }
  })




  $('.okay').click(function(){
      $('.showThis').removeClass('showThis');
  })

  $(".wrapflt").on('click',".block",  function(){
    $(this).toggleClass("big");
    $(this).wrap("<div class='transparent'></div>");
    overlayer();
    table();
  });

  $('.gotIt').click(function(){
    $('.big').unwrap();
     $('.big').removeClass('big');
     $('.showThis').removeClass('showThis');
     $('.clicked').removeClass('clicked');
     overlayer();
     lines();
  })
  // var blocks = [
  //   {
  //     "id": 1000,
  //     "title": "House Painting",
  //     "tally": 1,
  //     "parent_id": false,
  //     "time": {
  //       "amount": 1,
  //       "interval": "minutes",
  //       "type": "each",
  //       "employee_id": 1
  //     }
  //   },
  //   {
  //     "id": 1001,
  //     "title": "I am a child of house painting",
  //     "parent_id": 1000
  //   }
  // ];
  //
  // var findBlockById = function (id) {
  //   for(var i = 0; i < blocks.length; i++) {
  //     if (blocks[i].id === id) {
  //       return blocks[i];
  //     }
  //   }
  //
  //   return false;
  // }
  //


  /*
  jQuery(function ($) {

    var blocksCache = [];


    var tellServer = function (data) {
      $.ajax({
        url: '/api',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json'
      }).then(function (res) {
        console.log('sent data to server');
      })
    }


    var renderBlocks = function (blocks) {
      var blocksHtml = '';

      $.each(blocks, function (index, block) {
        blocksHtml += '<div class="ajax-block" id="block-' + block.id + '">' + block.title + '</div>';
      })

      $('#ajax-example').html(blocksHtml)
        .find('.ajax-block').on('click', function () {
          tellServer({ message: 'I clicked an element', id: $(this).attr('id') });
        })
    }


    $('#blocks-filter').on('input keyup', function (event) {
      var val = event.target.value.toLowerCase();

      var filtered = $.grep(blocksCache, function (block) {
        return (!!~block.title.toLowerCase().indexOf(val));
      })

      console.log(filtered);

      renderBlocks(filtered)
    })



    $.ajax({
      url: '/api',
      type: 'GET'
    }).then(function (res) {
      blocksCache = res.data;
      renderBlocks(blocksCache);
    })
  })

  */




});
