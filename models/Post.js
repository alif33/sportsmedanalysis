import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
            trim: true
        }
    },
    
    { timestamps: true }
);


const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        league: {
            type: String,
            enum : ['NFL', 'NBA', 'MLB'],
            required: true,
        },
        playersName: {
            type: Array,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        tags: {
            type: Array,
            required: true
        },
        comments: [commentSchema]
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);