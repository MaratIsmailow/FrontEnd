 

let players = [
  { name: 'Alex', height: 190, weight: 85, sport: 'rugby', goals: 19 },
  { name: 'Boris', height: 180, weight: 75, sport: 'football', goals: 20 },
  { name: 'Vladimir', height: 175, weight: 70, sport: 'hockey', goals: 2 },
  { name: 'George', height: 185, weight: 80, sport: 'rugby', goals: 4 },
  { name: 'Dmitry', height: 170, weight: 65, sport: 'hockey', goals: 19 },
  { name: 'Eugene', height: 195, weight: 90, sport: 'football', goals: 0 },
  { name: 'Zachary', height: 188, weight: 82, sport: 'rugby', goals: 7 },
  { name: 'Ivan', height: 182, weight: 77, sport: 'football', goals: 17 },
  { name: 'Kirill', height: 178, weight: 73, sport: 'hockey', goals: 8 },
  { name: 'Leonid', height: 192, weight: 87, sport: 'rugby', goals: 9 },
  { name: 'Michael', height: 176, weight: 71, sport: 'hockey', goals: 11 },
  { name: 'Nicholas', height: 198, weight: 93, sport: 'football', goals: 14 },
  { name: 'Oleg', height: 186, weight: 79, sport: 'rugby', goals: 12 },  
  { name: 'Paul', height: 174, weight: 69, sport: 'hockey', goals: 20 },   
  { name: 'Roman', height: 184, weight: 78, sport: 'football', goals: 12 }
   ];


   players.sort((a, b) => b.goals - a.goals);
   players.sort((a, b) => a.goals - b.goals);

   console.log(players);



     