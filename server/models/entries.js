const entries = require('../data.json');
<<<<<<< HEAD

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
=======
const fs = require('fs')

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
>>>>>>> 9a447f1cb0574a21f61b6ba7cfe942e498e7ea02
        } catch (err) {
            throw new Error('That entry does not exist.');
        }
    }

    static create(entry) {
        const newEntry = new Entry(entry);
<<<<<<< HEAD
        entries.push(newEntry);
        return newEntry;
    }
    
=======
        entries.push(newEntry)
        return entries;
    }

    set addGif(url) {
        this.gifUrl = url;
    }

    static addReply(entry, replyData) {
        console.log(entry,replyData)
        entry.comment.push(replyData)
        return entries;
    }

    static changeNumberOf(entry, react) {
        entry[react]++
        return entries;

    }
>>>>>>> 9a447f1cb0574a21f61b6ba7cfe942e498e7ea02
}

module.exports = Entry;