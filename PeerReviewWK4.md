## Nagekeken door Kenrick Fontijne - 0909758

### Interface
behaviour.ts is inderdaad een interface. Niks op aan te merken.

### Static utility method
De public static instance in game.ts is niet een static utility method. In je utils.ts staat een public method, deze kan een public static method zijn. Dit heb ik veranderd. In plaats van this.utils.checkColission(this.cat,this.rings[i]); kan je nu de checkColission functie zo aanroepen: Utils.checkColission(this.cat,this.rings[i]);

Dit betekent ook dat je in je game.ts geen this.utils = new Utils(); meer hoeft aan te maken. Je kan nu altijd vanuit iedere class de checkColission functie aanroepen met Utils.checkColission();

### Singleton
game.ts is inderdaad een singleton. Niks op aan te merken.

### Strategy
Er is wel een strategy pattern toegevoegd, maar niet goed gebruikt. Ik ga er van uit dat de idle behaviour van de cat betekent dat hij stilstaat. Ik kom alleen allemaal movement functies tegen in idle.ts, als je de cat laat bewegen dan is het handig om deze functies dus in moving.ts te zetten. Op deze manier maak je dan gebruik van verschillende behaviours. Ik heb alle movement van de cat naar moving.ts verplaatst. Nu is het de bedoeling dat als er geen toetsen worden ingedrukt, dat de behaviour van cat dan Idle is. In Idle kan je dan alle speeds van de cat op 0 zetten. Zodra je wel toetsen aan het indrukken bent dan moet de behaviour veranderen naar Moving. In moving kan je dan de juiste speed aanpassen.

### Encapsulation
Er is gebruik gemaakt van encapsulation.

### Inheritance
Er is gebruik gemaakt van inheritance.

### Composition
Er is gebruik gemaakt van composition.

### Voldoende