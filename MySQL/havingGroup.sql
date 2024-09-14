SELECT mode, COUNT (amount) AS total
From payment 
Group BY mode
HAVING COUNT  (amoutn) >= 2 AND COUNT  (amount) < 4
ORDER BY total DESC



-- //having clause always will be after group by