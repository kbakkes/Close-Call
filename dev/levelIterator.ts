class LevelsIterator implements Iterator<string> {
    private collection: LevelsCollection;

   //startpositie
    private position: number = 0;

    private reverse: boolean = false;

    constructor(collection: LevelsCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public rewind() {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    }

    // return huidige positie
    public current(): any {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    // volende positie is huidige positie + 1 / andersom als reversed is
    public next(): any {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}