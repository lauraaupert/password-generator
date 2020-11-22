# password-generator

This project generates a password based on arrays selected by the user. It first prompts the user to select a length for their password, 
then requests the user to choose criteria from a list including special characters, upper case letters, lower case letters, and numbers. 
The user's choices create a new array, from which characters are randomly selected with a for loop as many times as the length selected. 
Then the choices are pushed to a new array which is then transformed into a string and then displayed into the password generator screen. 

Challenges: most of the arrays work, but for some reason the ones with 2 criteria seem to be capricious. I tried to fix them but I do not 
know why they do not work. The letters are usually not added to the new array although my code is the same as for the others. 
I also tried to add a conditional statement to cover the case of having the user choose none of the criteria. But it has not been successful -
every time I write this code block, it messes up another part of my code for again an unknown reason. 


