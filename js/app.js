/* eslint-disable no-unused-vars */
function Item (){
  console.log(Item);
}

var submitBtn= document.getElementById('buyDeviceForm');
submitBtn.addEventListener('submit', devicesList);

function devicesList (event){
  var buyList= document.getElementById('buyDeviceForm');
  event.preventDefault();
  var deviceName=event.target.name.value;
  var deviceCategory=event.target.ItemCategory.value;
  var deviceNumber=event.target.number.value;

  var newObj = new Item(deviceName,deviceCategory,deviceNumber)
  console.log(newObj);
  newObj.storeTolocalStorage();
  devicesList.reset();
  var newDeviceId=Item.all.length-1;
  localStorage.setItem('DeviceId',JSON.stringify(newDeviceId));
}




Item.prototype.render=function(){
var deviceRow =document.createElement('tr');

for (var i=0;i<Item.all.length; i++) {

    if ( i=== 0){
        var colData = document.createElement('th');
        deviceRow.appendChild(colData);
        colData.textContent= this.deviceName;
    }

    else {
        colData=document.createElement('td');
        deviceRow.appendChild(colData);
    }

var container= document.getElementById ('resultSection');
var table = document.createElement('table');
table.setAttribute('border','1');
container.appendChild(table);


function renderTableHeader (){
    var rowHeader = document.createElement ('tr');

    for (var i=0; i<Item.all.length+2; i++){
       if (i===0){
        rowHeader.appendChild(colData);
    }

    else if ( i === Item.all.length+1) {
    colData=document.createElement('th');
    rowHeader.appendChild(colData);
    colData.textContent='Devices';
    }
    else {
        colData= document.createElement ('th');
        rowHeader.appendChild(colData);
        colData.textContent= name;
    }
}
}
