class s1Tools {
    constructor() { /*not needed?*/ }

    randomUser(i) {
        return "***(" + i.guild.members.map(m => m.nickname || m.username) + ")***"
    }

    randomFace(i) {
        let faces = ['blabla put faces here >:('];
        return "**" + faces[~~(Math.random () * faces.length)] + "**"
    }
}

module.exports = s1Tools;