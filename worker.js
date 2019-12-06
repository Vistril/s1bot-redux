class s1Tools {
    constructor() { /*not needed?*/ }

    async randomUser(i) {
        await i.guild.members.map(m => m.displayName || m.username);
    }

    randomFace(i) {
        let faces = ['blabla put faces here >:('];
        return faces[~~(Math.random () * faces.length)];
    }
}

module.exports = s1Tools;