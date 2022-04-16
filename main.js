function isValidWalk(walk) {
    let UniqueDirections = ['w','e','s','n']
    function countDirections(Directionarr,singleDirection){
    let count = 0;
    for(let i = 0 ; i < Directionarr.length ; i++ ){
      if ( singleDirection == Directionarr[i]){
            count = count + 1
          }
        }
        return count
        }
        let westCount = countDirections(walk,'w')
        let eastCount = countDirections(walk,'e')
        let southCount = countDirections(walk,'s')
        let northCount = countDirections(walk,'n')
    if(northCount == southCount && eastCount == westCount && 
        (northCount+southCount+eastCount+westCount == 10)){
          return true } else
          { return false }
        }

      /*  You live in the city of Cartesia where all roads are laid out in a perfect grid. 
        You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
        The city provides its citizens with a Walk Generating App on their phones --
         everytime you press the button it sends you an array of one-letter strings representing directions to walk
          (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
           so create a function that will return true if the walk the app gives you will take you exactly ten minutes
            (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters 
('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

