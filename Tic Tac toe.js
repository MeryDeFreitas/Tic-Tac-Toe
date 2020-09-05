document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#player')
    const playerX = []
    const playerO = []

    let currentPlayer = 'Jugador X'

    squares.forEach(square =>{
        square.addEventListener('click', clickOutcome)
    })

    function clickOutcome(e){
        // Para saber exact. a cual se le dio click usamos 'e' de evento, Creamos un array de los squares
        const squareArray = Array.from(squares)
        // Para saber a cual le dio click:
        const index= squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer

        // Aqui vamos a ir cambiando el jugador en los turnos con un condicional
        if(currentPlayer === 'Jugador X'){
            squares[index].classList.add('playerX')
            squares[index].removeEventListener('click', clickOutcome)
            currentPlayer = 'Jugador O'
        } else {
            squares[index].classList.add('playerO')
            squares[index].removeEventListener('click', clickOutcome)
            currentPlayer = "Jugador X"
        }
    }
    //Aqui activamos que siempre revise las combinaciones cada vez que se haga click
    squares.forEach(square => square.addEventListener('click', checkBoard))

    function checkBoard(){
        const WinningArrays = [
            [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [1,4,7], [0,3,6], [2,5,8]
        ]
        for(let i= 0; i < WinningArrays.length; i++){
            const square1 = squares[WinningArrays[i][0]]
            const square2 = squares[WinningArrays[i][1]]
            const square3 = squares[WinningArrays[i][2]]
            //Aqui reviso de cual jugador fue la combinación exitosa

            if (square1.classList.contains('playerX') && square2.classList.contains('playerX') && square3.classList.contains('playerX')){
                swal('Tic Tac Toe', 'Jugador X gana!','success')
                .then(() => {
                document.location.reload(); 
            })}
            else if (square1.classList.contains('playerO') && square2.classList.contains('playerO') && square3.classList.contains('playerO')){
                swal('Tic Tac Toe', 'Jugador O gana!', 'success')
                .then(() => {
                document.location.reload(); 
            })} 
        }
    }
})



