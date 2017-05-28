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


### Beoordeling:		
 		
 ### Strategy:		
 De idle werd gebruikt als move functie, Het behaviour moet natuurlijk moving zijn als de speler de kat wilt bewegen.		
 		
 ### Singleton:		
 Je had wel een gameinstance gemaakt, maar die niet meegegeven aan de window.addeventlistener.		
 		
 ### Encapsulation:		
 Goed gebruik gemaakt van public,protected en private.		
 		
 ### Inheritance:		
 Je hebt een gameobject gemaakt en zo wordt je code verkort en gebruik het dus minder geheugen.		
 		
 ### Composition:		
 Je geeft de kat mee in het de behaviour interface, hierdoor kunnen de behaviour instances gebruik maken van de kat.		
 		
 ### Interface:		
 De interface gebruik je voor de behaviours, dus dat heb je goed toegepast. Ook gebruiken alle behaviours de functies in de interface en is de interface leeg.		
 	
 ### Static Utility Method:		
 Static gebruik je voor de game, zo kan je gemakkelijk de game aanroepen in andere ts bestanden en zo in de toekomst ook je endgame() functie aanroepen in bijvoorbeeld moving.ts		
 	
 ### Aanpassingen:		
 - Behaviour class, onkeydown en up verwijderd en de moving class zorgt nu voor de movement.		
 - Basic levens toegevoegd, als de kat een collision heeft met een ring gaat er een leven vanaf. (in de console zelf nog toepassen in de game zelf levens tonen).		
 - In game.ts game instance aangemaakt.		
 		
 Om de game wat leuker te maken, kan je de ringen laten bewegen in verschillende snelheden en ook laten weerkaatsen op de zijkant van de window.		
 		
 ### Beoordeling:		
 Bij singleton, de game instance vergeten en met behaviour had je het niet logisch opgebouwd, als je behaviour idle was ging je kat bewegen.		
 Voldoende		
 
