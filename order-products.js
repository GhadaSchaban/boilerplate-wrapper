//Simple Example Wraper for /order/products route in vanilla js
//Project: Sourcya Laravel BoilerPlate


//assigning names of arrays
let chosenProducts = [];
let productsQty = [];
let productsAttributes = [];
let productsAttributesKeys = [];
let productsKeysValues = [];
let requestPayload = [];

//Array setters
//Assuming we have :
//product with code: 12345678
//product has two attributes of type user input:  from_time and to_time
//passing values of 14:00 and 16:00 to the from_time->time and to_time->time

chosenProducts[0] = 12345678; //product code

productsQty[0] = 1;

productsAttributes[12345678]= [];
productsAttributes[12345678][0] = [ "from_time" ];
productsAttributes[12345678][1] = [ "to_time" ];

productsAttributesKeys[12345678] = [];
productsAttributesKeys[12345678][0] = [ "time" ];
productsAttributesKeys[12345678][1] = [ "time" ];

productsKeysValues[12345678] = [];
productsKeysValues[12345678][0] = ["14:00"];
productsKeysValues[12345678][1] = ["16:00"];


//serializing the request key/value pairs

 for (index = 0 ; index <= chosenProducts.length-1 ; index++) 
	{
		requestPayload.push(["products[" + index + "]", chosenProducts[index]]);
                requestPayload.push(["quantity[" + index + "]", productsQty[index]]);

		for (index1 = 0 ; index1 <= productsAttributes[chosenProducts[index]].length-1 ; index1++)
			{
		                requestPayload.push(["attributes["+ chosenProducts[index]  +"][" + index1 + "]",productsAttributes[chosenProducts[index]][index1]]);
                		requestPayload.push(["keys["+ chosenProducts[index]  +"][" + index1 + "]",productsAttributesKeys[chosenProducts[index]][index1]]);
		                requestPayload.push(["values["+ chosenProducts[index]  +"][" + index1 + "]",productsKeysValues[chosenProducts[index]][index1]]);

			}
	}

console.log(requestPayload);
