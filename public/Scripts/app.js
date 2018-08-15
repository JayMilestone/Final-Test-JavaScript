(function(){
    let XHR;
    function Start() {
        console.log(`%c App Started...`,"color:blue; font-size: 30px; font-weight:bold;");
       // Your Code goes here

       XHR = new XMLHttpRequest();
        let contactListId = document.getElementById("contactList");
       XHR.addEventListener("readystatechange", function(){
        if(this.status === 200)
        {
            if(this.readyState === 4)
            {
                objects.firstName = JSON.parse(this.responseText);
                objects.lastName = JSON.parse(this.responseText);
                objects.contactNumber = JSON.parse(this.responseText);
                objects.emailAddress = JSON.parse(this.responseText);

                objects.firstName.Contacts.forEach(element => {
                    console.log(element.firstName);
                    objects.AddressBook.Add(element.firstName);
                });
                objects.lastName.Contacts.forEach(element => {
                    console.log(element.lastName);
                    objects.AddressBook.Add(element.lastName);
                });
                objects.contactNumber.Contacts.forEach(element => {
                    console.log(element.contactNumber);
                    objects.AddressBook.Add(element.contactNumber);
                });
                objects.emailAddress.Contacts.forEach(element => {
                    console.log(element.emailAddress);
                    objects.AddressBook.Add(element.emailAddress);
                });
            }
        }
       });
       XHR.open("GET", "./Scripts/data.json");
       XHR.send();
    }
    function arrToUl(root, arr) {
        var ul = document.createElement('ul');
        var li;
        
        root.appendChild(ul); // append the created ul to the root
      
        arr.forEach(element => {
            if (Array.isArray(element)) { // if it's an array
            arrToUl(li, element); // call arrToUl with the li as the root
            return;
        }
        
        li = document.createElement('li'); // create a new list item
        li.appendChild(document.createTextNode(item)); // append the text to the li
        ul.appendChild(li); // append the list item to the ul
      });
      }
      
      var div = document.getElementById('contactList');
      
      arrToUl(div, objects.AddressBook.Contacts);

    window.addEventListener("load", Start);
})();