var jsonString = {                                           
  "orderID": 12345,                         
  "shopperName": "John Smith",              
  "shopperEmail": "johnsmith@example.com",  
  "contents": [                             
    {                                       
      "productID": 34,                      
      "productName": "SuperWidget",         
      "quantity": 1                         
    },                                      
    {                                       
      "productID": 56,                      
      "productName": "WonderWidget",        
      "quantity": 3                         
    }                                       
  ],                                        
  "orderCompleted": true                    
};                  

//var stringvacio = ''
//var cart = JSON.parse( jsonString );

console.log( jsonString.shopperEmail );
console.log( jsonString.contents[1].productName );
