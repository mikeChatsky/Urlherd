import {
  table,
  attribute,
  hashKey
} from '@aws/dynamodb-data-mapper-annotations';

import Id from '../Id';

@table('bookmarks')
class BookmarkModel {
  @hashKey({ defaultProvider: Id })
  id: string;

  @attribute({ memberType: { type: 'String' } })
  links: Array<string>;
}

export default BookmarkModel;
