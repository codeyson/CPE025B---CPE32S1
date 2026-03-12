/* 
Complement the images object from the previous task with two new methods (without rewriting the whole object):

edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list, it changes its artist and date properties;
delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)
Additionally, add a show method to the Image constructor, which will display information about this one image. Do not rewrite the constructor. Use prototypes for this purpose. Then modify the show method of the images object so that it uses the newly created single image show method to display the information.

Test the script by calling the sequence:
*/

function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let getImage = function(title, artist, date) {
    return {
        title,
        artist,
        date
    }
}

let images = {
    list: [],

    contains: function(title) {
        let retVal = false;

        for (let image of this.list) {
            if (image.title === title) {
                retVal = true;
                break;
            }
        }

        return retVal;
    },

    add: function(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },

    show: function() {
        this.list.forEach(image => image.show());
    },

    clear: function() {
        this.list = [];
    }
};


Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
};



images.edit = function(title, artist, date) {
    for (let image of this.list) {
        if (image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
};

images.delete = function(title) {
    for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].title === title) {
            this.list.splice(i, 1);
            break;
        }
    }
};

images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Starry Night", "Vincent van Gogh", 1889);
images.add("The Scream", "Edvard Munch", 1893);

images.show();

images.edit("The Scream", "Munch", 1895);

images.delete("Mona Lisa");

images.show();