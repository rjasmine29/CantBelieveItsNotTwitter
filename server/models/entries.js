const entries = require('../data.json');

class Entry {
    constructor(data) {
        this.id = entries.length + 1;
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

    static findById(title) {
        try {
            const entryData = entries.filter((entry) => entry.id === title)[0];
            return entryData;
        } catch (err) {
            throw new Error('That entry does not exist.');
        }
    }

    static findByTitle(title) {
        try {
            const entryData = entries.filter((entry) => entry.title === title)[0];
            return entryData;
        } catch (err) {
            throw new Error('That entry does not exist.');
        }
    }

    static create(entry) {
        const newEntry = new Entry(entry);
        entries.push(newEntry)
        return entries;
    }

    // set addGif(url) {
    //     this.gifUrl = url;
    // }

    static addReply(entry, replyData) {
        entry.comment.push(replyData)
        return entries;
    }

    static changeNumberOf(entry, react) {
        entry[react]++
        return entries;

    }
}

module.exports = Entry;