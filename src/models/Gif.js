

export class Gif {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
  }
}



// {
//   "tag": {
//     "type": "String",
//       "maxlength": 120
//   },
//   "url": {
//     "type": "String",
//       "required": true
//   },
//   "opened": {
//     "type": "Boolean",
//       "default": false
//   },
//   "creatorId": {
//     "type": "ObjectId",
//       "required": true,
//         "ref": "Account"
//   }
// }