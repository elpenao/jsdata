'use strict';
app.factory('Post', function(DS, $state) {
    var Post = DS.defineResource({
        name: 'posts', 
        relations: {
            belongsTo: {
                users: {
                // tell js-data that the author field on a post stores the primary key of a user resource
                    localKey: 'author', 
                    // tell js-data to load the user object that has the primary key indicated by the localKey into a field called _author
                    localField: '_author'
                }
            }
        }, 
        methods: {
            go: function(){
                $state.go('post', {
                    postId: this._id, 
                    authorId: this.author
                })
            }
        }
    })

    return Post; 
}).run(function (Post) {})
