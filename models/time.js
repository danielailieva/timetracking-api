import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const TimeSchema = new Schema({
    description: {
        type: String,
        required: true
    }
});
export default mongoose.model('time', TimeSchema);