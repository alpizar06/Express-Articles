var ArticleSchema = new mongose.Schema({
    titulo: {type: String, required: [true, "Can't be blank"], select: true},
    description: {type: String, required: [true, "Can't be blank"], select: true},
    cuerpo: {type: String, required: [true, "Can't be blank"], select: true},
    author: {type: String, required: [true, "Can't be blank"], select: true},
    comments: [{type:String, select: true}]
});

mongose.model('Article', ArticleSchema);