/*
This project implements multiplayer Tic Tac Toe
*/

const prompt = require('prompt-sync')({sigint: true});

const clear_ouput = () => {
    
    for (let i = 1; i < 201; i++) {
        console.log();
    }

}

const display_board = board => {

    clear_ouput();

    console.log('   |   |   ');
    console.log(' ' + board[7] + ' | ' + board[8] +' | ' + board[9] + ' ');
    console.log('   |   |   ');
    console.log('-----------');
    console.log('   |   |   ');
    console.log(' ' + board[4] + ' | ' + board[5] +' | ' + board[6] + ' ');
    console.log('   |   |   ');
    console.log('-----------');
    console.log('   |   |   ');
    console.log(' ' + board[1] + ' | ' + board[2] +' | ' + board[3] + ' ');
    console.log('   |   |   ');

}

const create_board = char => {
    let board = [];
    for (let i = 0; i < 11; i++) {
        board.push(char);
    }
    return board;
}

// let game_board = create_board('X');
// display_board(game_board);

const decide_markers = () => {

    let marker;

    while ( ['X', 'O'].includes(marker) ) {

        marker = prompt('Player 1, enter your marker (X - O): ');

        if ( !(['X', 'O'].includes(marker)) ) {
            console.log(`Sorry but ${marker} is not a valid marker.\nChoose from 'X' or 'O'.\n`);
        };
    }
    if (marker === 'X') {
        return ['X', 'O'];
    }

    return ['O', 'X'];
}

player_markers = decide_markers();