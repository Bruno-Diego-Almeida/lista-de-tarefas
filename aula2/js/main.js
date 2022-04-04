const Main = {

    init: function() {
        /*alert('ok')*/

        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {    
        this.$checkButtons =  document.querySelectorAll('.check')//checkButton  é o nome da variável
    },

    bindEvents: function() {//evento de click
        const self = this //Raquezinho
        
        this.$checkButtons.forEach(function(button){//forEach = Para cada elemtento do meu array neste caso this.checkButtons vou aplicar essa function
        
            button.onclick = self.Events.checkButton_click//Aqui chama o Events
            
        })
            
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

        }
    }
}

Main.init()//Para chamar o código