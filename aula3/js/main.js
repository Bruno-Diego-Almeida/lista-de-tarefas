const Main = {

    init: function() {
        /*alert('ok')*/

        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {    
        this.$checkButtons =  document.querySelectorAll('.check')//checkButton  é o nome da variável
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
    },

    bindEvents: function() {//evento de click
        const self = this //Raquezinho
        
        this.$checkButtons.forEach(function(button){//forEach = Para cada elemtento do meu array neste caso this.checkButtons vou aplicar essa function
            button.onclick = self.Events.checkButton_click//Aqui chama o Events
            
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)//quando digitar uma tecla vou chamar o evento inputTask_Keypress. O bind(this)  é pra ligar dentro da função do keypress//
            
    },

    Events:{//Aqui eu vou ter as funções,_click é o evento que eu vou colocar //
        checkButton_click: function(e) {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')
            
            if (isDone) {
                li.classList.remove('done')
            } else {
                li.classList.add('done')
            }

        },

        inputTask_keypress: function(e) {//Para descobrir qual a tecla que vai ser digitada, clica no input da um enter que no devtools aparece a keybordEvent a palavra "key"
            const key = e.key
            const value = e.target.value

            if (key=== 'Enter') {
                this.$list.innerHTML+=`
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `
                e.target.value = '' // Isso faz com que o valor que foi digitado seja limpo na list após ser pressionado o Enter
            }

        }
    }
}

Main.init()//Para chamar o código