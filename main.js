// $$$$$$$$$$$$$$$$$$$$$$$$$$$ get value from input and set in html  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function addData(){
    var name = document.getElementById("firstInp").value;
    name = name.toUpperCase();
    var age = document.getElementById("secondInp").value;
    var contact = document.getElementById("thirdInp").value;

    function data(name, age, contact){
      this.name = name;
      this.age = age;
      this.contact = contact;
    }
    var newData = new data(name, age, contact);
    var container = document.getElementById("res");
    var li_tag = document.createElement('li');
    li_tag.innerHTML += newData.name + " - " + newData.age + " - " + newData.contact;
    document.getElementById("res").appendChild(li_tag);
  }

  function remove(){
    var select = document.getElementById('res');
    select.removeChild(select.lastChild);
  }
