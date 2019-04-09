
class LevelsCollection implements Aggregator {
    private items: Level[] = [];

    public getItems(): Level[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: Level): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new LevelsIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new LevelsIterator(this, true);
    }
}


