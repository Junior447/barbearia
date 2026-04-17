
const btn = document.querySelectorAll('.btn-whatsapp')
const servicos = document.querySelector('.servicos')
const card = document.querySelectorAll('.card')
console.log(card)
console.log(servicos)

const agendar = (btns) => {
    btns.forEach(btns => {
        btns.addEventListener('click', () => {
        const mensagem = "Olá, quero agendar um horário";
        const telefone = "5511958480468";
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
    })
    })
  }
agendar(btn)



