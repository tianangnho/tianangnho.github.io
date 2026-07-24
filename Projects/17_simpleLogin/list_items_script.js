import { state } from "./status_script.js";
import { save } from "./save_post_script.js";
let version= "";

let checklistData = [];

fetch("Data.json")
    .then(response => response.json())
    .then(info => {
        checklistData = info.data;

        let html = "";

        checklistData.forEach(topic => {
            html += `<h3>${topic.topic}</h3>`;
            html += "<ul>";

            topic.checklist.forEach(item => {
                html += `
                    <li>
                        <input
                            type="checkbox"
                            data-id="${item.id}"
                            ${item.status === "true" ? "checked" : ""}
                        >
                        ${item.name}
                    </li>
                `;
            });

            html += "</ul>";
        });

        document.getElementById("checklist").innerHTML = html;

        document
            .querySelectorAll("#checklist input[type='checkbox']")
            .forEach(checkbox => {

                checkbox.addEventListener("change", async function () {
                    state.currentVersion = Date.now();
                    const itemId = this.dataset.id;
                    const newStatus = this.checked;

                    checklistData.forEach(topic => {

                        const item =
                            topic.checklist.find(x => x.id === itemId);

                        if (item) {
                            item.status = String(newStatus);
                        }
                    });

                    await save(checklistData);
                });

            });

    })
    .catch(console.error);