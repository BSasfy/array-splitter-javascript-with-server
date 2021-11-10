This is a solution to Twig Education Assessment. 

The task was: 
" Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.
Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder."

I've written the logic in array-splitter.js, and used index.html to be able to run the code in the browser. 

Given that it would have been blocked by CORS policies, I wrote a mini server in server/index.js
With this, given you have node.js installed, you can run `npm install` and `npm start` to start the server. 

You can access the application through port 8000 at http://localhost:8000/

I could have made my life easier by using React or Svelte as a framework with their server but I wanted the challenge and wanted to follow the assignment as closely as possible. 

Given the assignment said that UI is not required, I did not create any buttons and input fields. 
To use the function with different variables, head to index.html and change the variables passed to the function on line 14. 

You can see the result in the browser. 

The code is set up to throw an error if the second input is a negative number or catch is something goes wrong in general. Error handling can be finetuned when the code is being implemented to what the application will need. 