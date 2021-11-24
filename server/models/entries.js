const entries = require('../data.json');

class Entry {
    constructor(data, date) {
        this.date = date;
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

    static create(entry,date) {
        const newEntry = new Entry(entry, date);
        entries.push(newEntry)
        return entries;
    }

    static addReply(entry, replyData) {
        entry.comments.push(replyData.code)
        return entries;
    }

    static changeNumberOf(entry, react) {
        entry[react]++
        return entries;
    }

    static deleteEntry(entry){
        const index = entries.indexOf(entry.id);
        if (index > -1){
            entries.splice(index,1);
        }
        return entries;
    }
}

module.exports = Entry;