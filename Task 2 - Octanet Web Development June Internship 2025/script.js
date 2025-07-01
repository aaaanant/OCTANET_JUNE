   // --- Selecting the necessary HTML elements ---
        // We get the form, the input field, and the list to work with them in our script.
        const theForm = document.getElementById('task-input-form');
        const theInput = document.getElementById('new-task-input');
        const theList = document.getElementById('task-list');

      
        theForm.addEventListener('submit', function(event) {
           
            event.preventDefault();

         
            const inputText = theInput.value.trim();

           
            if (inputText !== '') {
                createNewTask(inputText);
                theInput.value = '';
                theInput.focus();
            }
        });

        function createNewTask(text) {
            const newItem = document.createElement('li');
            newItem.classList.add('task-item');

            const checkButton = document.createElement('button');
            checkButton.classList.add('task-button', 'complete-btn');
            checkButton.innerHTML = '&#10003;'; 

            checkButton.onclick = function() {
                newItem.classList.toggle('completed');
            };

            const itemText = document.createElement('span');
            itemText.classList.add('task-text');
            itemText.textContent = text;

            const removeButton = document.createElement('button');
            removeButton.classList.add('task-button', 'delete-btn');
            removeButton.innerHTML = '&times;'; 

            removeButton.onclick = function() {
                newItem.remove();
            };

            newItem.appendChild(checkButton);
            newItem.appendChild(itemText);
            newItem.appendChild(removeButton);

            theList.appendChild(newItem);
        }