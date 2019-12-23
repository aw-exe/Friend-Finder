const friends = require ("..data/friends.js");

modeul.exports = functions(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", fucntion(req, res) {
        let totalDifference = 0;
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        let userData = req.body;
        let userName = userData.name;
        let userScore = userScores = userData.scores;

        let b = userScores.map(function(item) {
            return parseInt(item, 10);
        });

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        console.log("name" + userName);
        console.log("user score" + userScore);

        let sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of user score" + sum);
        console.log("Best match friend diff" + bestMatch.friendDifference);

        for(let i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total friend score" + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);

            if(totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + "Total Difference");
        }

        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.json(bestMatch);
    });

};