# Debugging Exercise

## Task 3: Debugging JavaScript Code

### Instructions:
Below is a buggy JavaScript snippet that needs debugging. Fix the errors and explain your solution.


![Image]()

## **How to Run This Project**
### **Step 1: Clone or Download the Repository**
```sh
git clone https://github.com/your-repository-name.git
cd Task_3

---

### **Use Live Server To  view the file and change the script tag to know the diffrence between wrong and correct file**

### Buggy Code:
```javascript
const button = document.getElementByID('submitBtn');
button.addEventlistener('click', function() {
 let name = document.querySelector('#name').value;
 let email = document.querySelector('#email').value;
 if (name === "" || email == "") {
 alert("Please fill out all fields");
 } else {
 console.log("Form submitted successfully!");
 }
});


### Correct Code:

```javascript
const button = document.getElementById('submitBtn');
button.addEventListener('click', function() {
 let name = document.querySelector('#name').value;
 let email = document.querySelector('#email').value;
 if (name === "" || email === "") {
   alert("Please fill out all fields");
 } else {
   console.log("Form submitted successfully!");
 }
});
```

## Summary

This debugging exercise involved identifying and fixing common JavaScript mistakes, such as:


#### **Case sensitivity errors in method names**
#### **Using === instead of == for strict comparison**
#### **Ensuring proper function syntax.**
#### **By making these fixes, we ensured that the form submission process functions correctly. Debugging is an essential skill for developers, and paying close attention to syntax and logical errors is crucial for writing reliable code.**


---

### **How to Use This File**
- Save this content as `README.md` in the **Task_3** folder.
- This will guide users on how to run and understand the project.

Let me know if you need any modifications! 😊
