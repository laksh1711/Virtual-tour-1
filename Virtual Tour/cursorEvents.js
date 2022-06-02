AFRAME.registerComponent('cursorEvent', {
    schema : {
        selectorItemId : {default : '', type : 'string'}
        
    },  

    init: function (){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
        console.log('hello')
    },

    handlePlacesListState : function(){
        const id = this.el.getAttribute('id')
        const placesId = ['tajMahal','budapest', 'eiffelTower', 'newYork']

        if (placesId.includes(id)){
            const placesContainer = document.querySelector('#places-container')
            placesContainer.setAttribute('cursorEvent', {selectorItemId : id})

            this.el.setAtrribute('material', { color : 'green', opacity : 1})
        }

    },

    handleMouseEnterEvents : function(){
        this.el.addEventListener('mouseenter', ()=>{
            this.handlePlacesListState()
        })
    },

    handleMouseLeaveEvents : function(){
        this.el.addEventListener('mouseleave', ()=>{
            const {selectorItemId} = this.data

            if(selectorItemId ){
                const el = document.querySelector(`#${selectorItemId}`)
                const id = el.getAttribute('id')
            

                if(id == selectorItemId){
                    el.setAtrribute('material', {color : '#0077CC', opacity : 1})
                }
            }
        })
    }

})