const { createApp } = Vue

createApp({
    data(){
        return{
            toDoList: [
                {
                    text: "pane",
                    done: false
                },
                {
                    text: "pasta",
                    done: false
                },
            ],
            addText: "",
        }
    },
    methods: {
        addItem(){
            //Ci assicura
            if (this.addText && this.addText.length > 1 ) {
                const newItem = {
                    text: this.addText,
                    done: false
                }
                this.toDoList.push(newItem);
            }
            this.addText = "";
        },
        removeItem(index){
            this.toDoList.splice(index, 1);
        },
        doneItem(index){
            this.toDoList[index].done ?
            this.toDoList[index].done = false :
            this.toDoList[index].done = true
        }
    },
    mounted(){}
}).mount("#app")