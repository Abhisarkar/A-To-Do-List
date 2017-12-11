

//1 : not working when changed the function name(fixed --> did not save the files)
//2 : write (textinput.value) Not just textinput

		 function newElement()
		 {//Function to add a list item 
			
			var ul = document.getElementById("myUL");//get the ul from html
			var li = document.createElement("li");//create a <li> 
			var textinput = document.getElementById("myInput1");//get the input
			var t = document.createTextNode(textinput.value);//assign to t
			li.appendChild(t);//append t to li
			
			if(textinput.value === '')//if text input is empty i.e nothing was written.
			{
				alert("Write Something DUDE!!");
				
			}
			
			else{
			
			ul.appendChild(li);//append the input to the list
			}
			
			textinput.value = "";//it removes the content from the input field once the item has been added.
			
			// adding a close button on new list item is being created.
			
				var span = document.createElement("SPAN");//the area of close button on list item
				var t = document.createTextNode("\u00D7");//it's the multiplication sign
				span.appendChild(t);//the multiplication sign is added to the span area.
				span.className = "closeclass";//span assigned to class "closeclass"
				li.appendChild(span);//span is added to the newly created list item .	
					
				//hiding the elements which are newly created.
				
				var close = document.getElementsByClassName("closeclass");//this function is explained below
				var i;
				for(i=0;i<close.length;i++)
				{
					close[i].onclick = function(){
						
						var ele = this.parentElement;
						ele.style.display = "none";
					}
					
					
				}
					
 }
 
		//changing the design of the list item once marked as done.
 
		var list = document.querySelector('ul');//selects the first element "ul" in the html file.
 
		list.addEventListener('click',function(event){//when clicked on the list item
	 
			if(event.target.nodeName === 'LI')//if the element is a list item
			{
				event.target.classList.toggle('checked');//then design the list item according to the class "checked"
				
			}
	 
	}
 );
 
 
				// Adding a close button
			
				var nodeList = document.getElementsByTagName("LI"); //The getElementsByTagName() method returns a collection of
																	//all elements in the document with the specified tag name.
				var i;
				for(i=0;i<nodeList.length;i++)//contains every list present in the html file.
				{
					var span = document.createElement("SPAN");//the area of close button on list item
					var t = document.createTextNode("\u00D7");//it's the multiplication sign
					span.appendChild(t);//the multiplication sign is added to the span area.
					span.className = "closeclass";//span assigned to class "closeclass"
					nodeList[i].appendChild(span);//span is added to the that list item .
					
					
				}
				
				// Hiding the element when pressed closed.
				
				var close = document.getElementsByClassName("closeclass");//it gets the elements from class "closeclass"
																		  //i.e the elements from span buttons
				var i;
				for(i=0;i<close.length;i++)//all the span elements i.e the multiplication signs
				{
					close[i].onclick = function(){//when clicked on the span elements
						
						var ele = this.parentElement;//get the parent of the span element i.e the list item
						ele.style.display = "none";//hides the list item
					}
					
					
				}
			
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
 
