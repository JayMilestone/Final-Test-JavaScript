(function(){
    class AddressBook 
    {
        constructor() 
        {
            this.Contacts = ["hi", "bye", "next"];
        }
        // complete the addressbook class
        Add = function(contactObject)
        {
            Contacts.array.forEach(element => {
                Contacts.push(element);
            });
        }
    }

    objects.AddressBook = AddressBook;

})(objects || (objects = {}));