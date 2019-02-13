export class SerializationHelper {
  static toInstance<T>(obj: T, jsonObj: Object): T {
    for (const propName in jsonObj) {
      if (propName in obj) {
        obj[propName] = jsonObj[propName];
      }
    }
    return obj;
  }
}
