function addTask() {
            var input = document.getElementById("taskInput");
            var task = input.value.trim();
            if (task !== "") {
                var list = document.getElementById("taskList");
                var listItem = document.createElement("li");
                listItem.textContent = task;
                
                var deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.onclick = function() {
                    list.removeChild(listItem);
                };

                listItem.appendChild(deleteButton);
                list.appendChild(listItem);
                input.value = "";
            }
        }