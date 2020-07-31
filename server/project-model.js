'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String },
    projDate: { type: String, required: true },
    sortOrder: { type: Number },
    isEnabled: { type: Boolean },
    description: String,
    mainImage: {
        url: String,
        caption: String
    },
    addImages: [
        {
            url: String,
            caption: String
        }
    ],
    createdDate: { type: Date, required: true },
    updatedDate: { type: Date, required: true }
});

module.exports = mongoose.model('Project', projectSchema);