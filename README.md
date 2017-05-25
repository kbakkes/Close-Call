# Ring Collector

## https://kbakkes.github.io/Ring-Collector/

## UML 
### UML Notes
#### Werkende onderdelen zijn: 
- Game class
- gameObject class
- Utils class
- Cat class
- Behaviour Interface
- Idle class

![UML](docs/images/ringCollector.png?raw=true "UML")


## Gameplay

- Je kunt Dex-Starr de kat bewegen door de game.
- Het bewegen doe je met behulp van de WASD toetsen. 
- Op het scherm verschijnen ringen met verschillende kleuren. 
- Als je een rode ring oppakt wordt je score hoger
- Als je een groene ring oppakt gaat er een van de 3 lifes weg
- Als je 0 lifes hebt eindigd het spel. 

### Installatie

1. Download het project van GitHub
2. Open het zip-bestand en ga naar _Ring Collector->Docs->Index.html_
3. Begin met het spelen van Ring Collector



## Programmer Principes


### Interface
Dit is toegepast bij de Behaviour Interface. Deze interface bevat functies zoals
`move()`, `onKeyDown()` en `onKeyUp();`. 

### Static Utility Method
In `game.ts` zit een public static instance van game. Vervolgens wordt bij het laden
van de game `let g = new Game();` aangeroepen.

### Singleton 
Singleton is toegepast in de game door in de game class een functie `getInstance()` te maken.
Deze kijkt of er een instance van game bestaat, als deze er niet is wordt het aangemaakt. 

### Strategy
Strategy is in de game verwerkt doordat Cat een behaviour heeft. Standaard heeft Cat een `Idle` Behaviour. 
Een ring kan twee verschillende Behaviours hebben, namelijk `Float` en `Destroyed`. Idle, Float en Destroyed
implementeren alle 3 van de `Behaviour Interface`.

### Encapsulation 
Encapsulation is in het project verwerkt doordat properties en functies `public`, `protected` of `private` zijn.

### Inheritance
Inheritance is in de game toegepast doordat de classes `Cat`, `greenRing`, en `redRing` allemaal gameObjects zijn. 
Dit komt doordat alle 3 de classes `gameObject` extenden. Voorbeeld: `Class Cat extends GameObject(){}`


### Composition
Composition is in de game verwerkt doordat de Game een cat en rings bevat. 
Dit is gedaan door in `Game.ts` instances van Cat en Ring aan te maken. 
Ook is er gebruik gemaakt van composition in `Cat.ts` als er een nieuwe Behaviour wordt aangemaakt.
Dit word namelijk gedaan door `this.behaviour = new Idle(this);` aan te roepen. 


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