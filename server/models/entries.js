const entries = require('../data.json');

class Entry {
    constructor(data) {
        this.title = data.title;
        this.message = data.message;
        this.image = data.image
        this.likes = data.likes;
        this.dislikes = data.dislikes;
        this.loves = data.loves;
        this.comments = data.comments;
    }

    static get all() {
        const allEntries = entries.map((entry) => new Entry(entry));
        return allEntries;
    }

    static findByTitle(title) {
        try {
            const entryData = entries.filter((entry) => entry.title === title)[0];
            const entry = new Entry(entryData);
            return entry;
        } catch (err) {
            throw new Error('That entry does not exist.');
        }
    }

    static create(entry) {
        const newEntry = new Entry(entry);
        entries.push(newEntry);
        return newEntry;
    }
    
}

module.exports = Entry;