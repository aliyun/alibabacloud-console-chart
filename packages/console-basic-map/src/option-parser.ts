
import Utils from '@antv/util';

const INVALID_FIELD_ERR_MSG = 'Invalid field: it must be a string!';
const INVALID_FIELDS_ERR_MSG = 'Invalid fields: it must be an array!';

interface Options {
  field?: string & string[];
  fields?: string & string[];
}

export function getField(options: any, defaultField?: string): string {
  const { field, fields } = options;
  if (Utils.isString(field)) {
    return field;
  }
  if (Utils.isArray(field)) {
    console.warn(INVALID_FIELD_ERR_MSG);
    return field[0];
  }
  console.warn(`${INVALID_FIELD_ERR_MSG} will try to get fields instead.`);
  if (Utils.isString(fields)) {
    return fields;
  }
  if (Utils.isArray(fields) && fields.length) {
    return fields[0];
  }
  if (defaultField) {
    return defaultField;
  }
  throw new TypeError(INVALID_FIELD_ERR_MSG);
}
export function getFields(options: Options, defaultFields?: string[]): string[] {
  const { field, fields } = options;
  if (Utils.isArray(fields)) {
    return fields;
  }
  if (Utils.isString(fields)) {
    console.warn(INVALID_FIELDS_ERR_MSG);
    return [fields];
  }
  console.warn(`${INVALID_FIELDS_ERR_MSG} will try to get field instead.`);
  if (Utils.isString(field)) {
    console.warn(INVALID_FIELDS_ERR_MSG);
    return [field];
  }
  if (Utils.isArray(field) && field.length) {
    console.warn(INVALID_FIELDS_ERR_MSG);
    return field;
  }
  if (defaultFields) {
    return defaultFields;
  }
  throw new TypeError(INVALID_FIELDS_ERR_MSG);
}
