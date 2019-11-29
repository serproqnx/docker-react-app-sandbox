curl -H 'Client-ID: nzjmc45xqz4eup74nh8zyixqhr0vjl' `
-X GET 'https://api.twitch.tv/helix/streams?game_id=33214'

curl -H 'Client-ID: nzjmc45xqz4eup74nh8zyixqhr0vjl' `
-X GET 'https://api.twitch.tv/helix/games/top?first=100&cursor=eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MTAwfX0' `
| Out-File -FilePath '.\src\sandbox\twitchAPI\res_games_top.json'

curl -H 'Client-ID: nzjmc45xqz4eup74nh8zyixqhr0vjl' `
-X GET 'https://api.twitch.tv/helix/streams?game_id=21779' `
| Out-File -FilePath '.\src\sandbox\twitchAPI\res_streams_top.json'