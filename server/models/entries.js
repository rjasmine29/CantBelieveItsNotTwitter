const entries = require('../data.json');
const fs = require('fs')

class Entry {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.message = data.message;
        this.image = data.image;
        this.likes = data.likes;
        this.dislikes = data.dislikes;
        this.love = data.love;
        this.comment = data.comment;
    }

    static get all() {
        const allEntries = file;
        //const allEntries = JSON.stringify(entries)
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
        const data = JSON.stringify(newEntry);
        console.log(data)
        fs.appendFile('../data.json', data, (err) =>{
            if(err){
                throw err;
            }
            console.log('Data saved')
        })
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