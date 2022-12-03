var cl = console.log;



books = [ 
     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
     ];
  
     var bookInfo = document.getElementById("bookInfo");

     var result = "";

     books.forEach(function(book){
        result +=  `<tr><td>${book.author}</td> 
        <td>${book.title}</td> 
        <td>${book.libraryID}</td></tr>`
     })

     bookInfo.innerHTML = result;


     PeriodicElement = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];

      var elementInfo = document.getElementById("elementInfo");

      var result = "";
 
      PeriodicElement.forEach(function(Element){
         result +=  `<tr><td>${Element.position}</td> 
         <td>${Element.name}</td> 
         <td>${Element.weight}</td>
         <td>${Element.symbol}</td></tr>`
      })
 
      elementInfo.innerHTML = result;