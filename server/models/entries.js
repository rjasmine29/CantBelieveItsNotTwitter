const entries = require('../data.json');

class Entry {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.message = data.message;
        this.image = data.image;
        this.likes = 0;
        this.dislikes = 0;
        this.love = 0;
        this.comment = [];
    }

    static get all() {
        const allEntries = JSON.stringify(entries)
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
        entries.push(newEntry)
        return entries;
    }

    set addGif(url) {
        this.gifUrl = url;
    }

    set addReply(replyData) {
        this.reply = replyData
    }

    set changeNumberOf(button) {
        this[`${button}`] ++
    }
}

module.exports = Entry;