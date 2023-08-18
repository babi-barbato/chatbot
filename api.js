var primeira = 0;
var nome = "";


const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}


const handleChat = () => {
    userMessage = chatInput.value.trim(); // Obtenha a mensagem inserida pelo usuário e remova o espaço em branco extra
    if(!userMessage) return;
    
    // Limpe a área de texto de entrada e defina sua altura como padrão
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Anexar a mensagem do usuário ao chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    // Exibir a mensagem de resposta do bot
    setTimeout(() => {
        if(primeira == 0){//se for a 1° vez vou pegar o nome da pessoa
            primeira = 1;
            nome = userMessage;
            var incomingChatLi = createChatLi(`Seja bem vindo(a) ${nome}, primeiro quero saber qual público você pertence, digite:\n [1] Já sou cliente \n [2] Ainda não sou cliente`, "incoming");
        }else{

            if(userMessage == 1){
                var incomingChatLi = createChatLi("Digite o número da opção que mais lhe ajuda.\n[1] Quero contratar novos serviços\n[2] Estou com problemas na AirWay\n[3] Estou com problemas na BusWay", "incoming");

            }else{

            }
        }
        // alert(userMessage)
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);

}

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));