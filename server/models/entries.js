const entries = require('../data.json');

class Entry {
    constructor(data) {
        this.title = data.title;
        this.message = data.message;
        this.likes = data.likes;
        this.dislikes = data.dislikes;
        this.emoji = data.emoji;
        this.gifUrl = data.gifUrl
        this.reply = data.reply
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

    static create(Entry) {
        const newEntry = new Entry(entry);
        entries.push(newEntry);
        return newEntry;
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