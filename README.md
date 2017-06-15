# Ring Collector

## https://kbakkes.github.io/Ring-Collector/

## UML 


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
Dit heb ik toegepast door de functions uit `utils.ts`.
### Singleton 
Singleton is toegepast in de game door in de game class een functie `getInstance()` te maken.
Deze kijkt of er een instance van game bestaat, als deze er niet is wordt het aangemaakt. 

### Strategy
Strategy is in de game verwerkt doordat Cat een behaviour heeft. Standaard heeft Cat een `Idle` Behaviour. 
Als `cat` gaat bewegen verandert Behaviour van Idle naar Moving. `Idle` en `Moving`
implementeren beide van de `Behaviour Interface`.

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

### Polymorfism
In `Cat.ts` wordt `Behaviour` aangeroepen. Doordat Behaviour wordt aangeroepen in plaats van Idle of Moving, kan `Behaviour` zowel `Idle` als `Moving` zijn. Hierdoor is er **Polymorfisme** toegepast in de Game. 


### Observer
Het Observer Pattern is toegepast in de game doordat `redRing` en `greenRing` allebei de `Observer` Interface implementeren.
Hierdoor wordt de `notify()` functie uitgevoerd door `Cat` omdat deze class de inferface `Subject` implementeert. 

### Namespace 
Namespace is toegepast in de Game doordat er een `namespace Rings` is. Bij het aanmaken van een nieuwe `redRing` of `greenRing` typ je dus bijvoorbeeld: `let redRing = new Ring.redRing()`.

### Enumerations

Enumerations zit in de game doordat er in de map Definitions `keys.ts` zit. Hierin staat gedefinieerd welke Unicode de toetsen hebben.

### Library
In de Game is er gebruik gemaakt van een Animatie Library van Greensock. Deze is te vinden in `greensock.d.ts`. Zodra de speler 0 levens heeft wordt er een Game Over div op het scherm getoont. Deze komt naar het midden van het scherm met behulp van deze library.
`TweenLite.to(endDiv, 2, { ease: SlowMo.ease.config(0.7, 0.7, false), y: 400});`
