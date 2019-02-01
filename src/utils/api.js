var axios =require('axios')


module.exports ={
    fetchAlbums: function(userId) {
        var encodedURI = window.encodeURI("https://jsonplaceholder.typicode.com/posts?userId="+String(userId));
        return axios.get(encodedURI).then((res)=>{
            return res.data
        });
    },
    fetchUser: function(userId) {
        var encodedURI = window.encodeURI("https://jsonplaceholder.typicode.com/users?id="+String(userId));
        return axios.get(encodedURI).then((res)=>{
            return res.data
        });
    }
}