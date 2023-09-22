document.addEventListener("DOMContentLoaded", function () {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Function to add a user message to the chat log
    function addUserMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("user-message");
        messageDiv.textContent = message;
        chatLog.appendChild(messageDiv);
    }

    // Function to add a bot response to the chat log
    function addBotResponse(response) {
        const responseDiv = document.createElement("div");
        responseDiv.classList.add("bot-response");
        responseDiv.textContent = response;
        chatLog.appendChild(responseDiv);
    }

    // Event listener for the send button
    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value;
        if (userMessage.trim() !== "") {
            addUserMessage(userMessage);

            // Simulate a bot response (replace with actual AI integration)
            setTimeout(function () {
                const botResponse = "I'm a chatbot from the Indian Government. How can I assist you?";
                addBotResponse(botResponse);
            }, 1000);

            // Clear the user input field
            userInput.value = "";
        }
    });

    // Simulate a welcome message from the bot (replace with actual AI integration)
    setTimeout(function () {
        const welcomeMessage = "Welcome! I'm a chatbot from the Indian Government. How can I assist you today?";
        addBotResponse(welcomeMessage);
    }, 1000);
});
