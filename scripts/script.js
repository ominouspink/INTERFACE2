// let username = getCookie("username");

// if (username === null) {
//     username = prompt("Please enter your name :)", "not Herobrine?");
    
//     if (username) { // Check if a value is entered
//         document.cookie = `username=${username}; expires=Thu, 18 Dec 2025 12:00:00 UTC`;
//     }
// } else {
//     alert("Hi " + username);
// }

// 
// function getCookie(name) {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i].trim();
//         if (cookie.startsWith(name + '=')) {
//             return decodeURIComponent(cookie.substring(name.length + 1));
//         }
//     }
//     return null; 
// }


//hieronder importeren we de javascript code die onze speler data bevat
import{ playerStats, playerInventory} from './spelerData.js';
import{ attack} from './acties.js';
    console.log(playerStats["name"]);

//mijn cookies doen het niet goed in javascript :( ik ga een docent een keer om hulp vragen denk ik xd

//de gebruiker word standaard avonturier genoemd
