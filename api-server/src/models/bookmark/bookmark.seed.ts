import BookmarkModel from './bookmark.model';
import { DataMapper } from '@aws/dynamodb-data-mapper';

const bookmarks = [
  Object.assign(new BookmarkModel(), {
    links: [
      'https://www.google.com/search?q=rick+and+morty',
      'https://www.facebook.com/RickandMorty'
    ]
  })
];

export async function seed(mapper: DataMapper): Promise<void> {
  await mapper.ensureTableExists(BookmarkModel, {
    readCapacityUnits: 10,
    writeCapacityUnits: 10
  });

  for await (const persisted of mapper.batchPut(bookmarks)) {
    console.log(`created : ${persisted.id}`);
  }

  // await mapper.batchPut(bookmarks);
}
