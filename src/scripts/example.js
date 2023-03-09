class Example {
    constructor(ele) {
        this.ele = ele
        this.ele.innerHTML = "<h1>It's CAPY ALIVEEEE!!!</h1>"

        //remember to bind this to handleClick
        //if we define it like this, it will always be bound
        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener("click", this.handleClick)
    }

    handleClick() {
        this.ele.children[0].innerText = "Ouch!"
    }
}

export default Example;