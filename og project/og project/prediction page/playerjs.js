// Function to handle adding players for a team
function setupTeam(teamNumberInput, teamSetButton, teamForm, teamList) {
    let playerCount = 0;
    let maxPlayers = 0;

    // Set the number of players
    teamSetButton.addEventListener("click", function () {
        maxPlayers = parseInt(teamNumberInput.value);
        if (maxPlayers > 0) {
            teamForm.style.display = "block"; // Show the form
            teamNumberInput.disabled = true; // Disable the number input
            teamSetButton.disabled = true; // Disable the set button
        } else {
            alert("Please enter a valid number of players.");
        }
    });

    // Add players to the team
    teamForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const playerNameInput = teamForm.querySelector("input[type='text']");
        const playerName = playerNameInput.value.trim();

        if (playerName) {
            if (playerCount < maxPlayers) {
                // Create a new list item
                const listItem = document.createElement("li");
                listItem.textContent = playerName;

                // Add the player to the team list
                teamList.appendChild(listItem);

                // Clear the input field
                playerNameInput.value = "";

                // Increment the player count
                playerCount++;

                // Check if all players are added
                if (playerCount === maxPlayers) {
                    alert("All players have been added to the team.");
                    teamForm.style.display = "none"; // Hide the form
                }
            } else {
                alert("Maximum number of players reached.");
            }
        } else {
            alert("Please enter a valid player name.");
        }
    });
}

// Set up Team A
const teamANumberInput = document.getElementById("teamANumber");
const teamASetButton = document.getElementById("teamASetNumber");
const teamAForm = document.getElementById("teamAForm");
const teamAList = document.getElementById("teamAList");
setupTeam(teamANumberInput, teamASetButton, teamAForm, teamAList);

// Set up Team B
const teamBNumberInput = document.getElementById("teamBNumber");
const teamBSetButton = document.getElementById("teamBSetNumber");
const teamBForm = document.getElementById("teamBForm");
const teamBList = document.getElementById("teamBList");
setupTeam(teamBNumberInput, teamBSetButton, teamBForm, teamBList);