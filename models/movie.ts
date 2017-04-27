import * as mongoose from 'mongoose';

export interface IMovie extends mongoose.Document {
  title: string;
  director: string;
}

let movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: false
  }
});

export default mongoose.model<IMovie>('Movie', movieSchema);
